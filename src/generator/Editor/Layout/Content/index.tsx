import componentStructureState from '@/generator/Editor/atoms/componentStructureState';
import currentState from '@/generator/Editor/atoms/currentState';
import { Render } from '@/generator/Render';
import getUuId from '@/utils/getUuId';
import { useDroppable } from '@dnd-kit/core';
import { type FC } from 'react';
import { useRecoilState } from 'recoil';
import copyItem from '../utils/copyItem';
import deleteItem from '../utils/deleteItem';
import getFieldConfig from '../utils/getFieldConfig';
import ContentHeader from './ContentHeader';

// 中间画布内容区域
const Content: FC = () => {
  const [{ componentItems, structureItems }, setComponentStructure] =
    useRecoilState(componentStructureState);
  const [{ currentId }, setCurrent] = useRecoilState(currentState);
  const isInRoot = Boolean(structureItems.some((item) => item?.id === currentId));
  const { setNodeRef } = useDroppable({ id: 'root', disabled: isInRoot });
  return (
    <div className='px-2 pb-2 flex flex-col flex-grow flex-shrink-1 overflow-hidden border-l border-r border-gray-300'>
      <ContentHeader />
      <div className='flex-grow overflow-y-auto bg-gray-100 p-2 [&>div]:h-full [&::-webkit-scrollbar]:hidden'>
        <div ref={setNodeRef}>
          {componentItems?.length ? (
            <Render
              componentItems={componentItems}
              structureItems={structureItems}
              editorProps={{
                currentId,
                onSelect: (id) => setCurrent({ fieldConfig: getFieldConfig(id), currentId: id }),
                onDelete: (id) => {
                  setCurrent({ fieldConfig: undefined, currentId: undefined });
                  setComponentStructure((componentStructure) => deleteItem(componentStructure, id));
                },
                onCopy: (id) => {
                  const newId = getUuId(4, `${id.split('-')[0]}-`);
                  setCurrent({ fieldConfig: getFieldConfig(id), currentId: newId });
                  setComponentStructure((componentStructure) =>
                    copyItem(componentStructure, id, newId),
                  );
                },
              }}
            />
          ) : (
            <div className='text-gray-400 h-full flex justify-center items-center'>
              点击/拖拽左侧栏的组件进行添加
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
