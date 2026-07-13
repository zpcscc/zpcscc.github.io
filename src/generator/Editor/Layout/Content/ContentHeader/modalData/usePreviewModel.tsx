import componentStructureState from '@/generator/Editor/atoms/componentStructureState';
import { Render } from '@/generator/Render';
import { type ModalProps } from 'antd';
import { useRecoilValue } from 'recoil';
import { type ModelType } from '../type';

// 预览弹出框
const usePreviewModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const { componentItems, structureItems } = useRecoilValue(componentStructureState);

  return {
    title: '预览',
    cancelText: '取消',
    okText: '确定',
    onCancel: () => setModalType(null),
    onOk: () => setModalType(null),
    children: (
      <div className='h-[500px] w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden'>
        <Render componentItems={componentItems} structureItems={structureItems} />
      </div>
    ),
  };
};

export default usePreviewModel;
