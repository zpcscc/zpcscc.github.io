import componentStructureState from '@/generator/Editor/atoms/componentStructureState';
import currentState from '@/generator/Editor/atoms/currentState';
import leftSortableItemsState from '@/generator/Editor/atoms/leftSortableItemsState';
import { type FieldConfigType } from '@/generator/types';
import getUuId from '@/utils/getUuId';
import { useSortable } from '@dnd-kit/sortable';
import { Button } from 'antd';
import { useMemo, type FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import getFieldConfig from '../utils/getFieldConfig';

type ItemProps = {
  fieldConfig: FieldConfigType;
};

// 左侧组件item
const ButtonItem: FC<ItemProps> = (props) => {
  const { fieldConfig } = props;
  const { label, componentItem } = fieldConfig;
  const [{ currentId }, setCurrent] = useRecoilState(currentState);
  const [{ componentItems }, setComponentStructure] = useRecoilState(componentStructureState);
  const leftSortableItems = useRecoilValue(leftSortableItemsState);
  const id = leftSortableItems.find((item) => item.split('-')[0] === componentItem.id) || 'input';
  const { listeners, setNodeRef, attributes, isDragging } = useSortable({
    id,
  });
  const isComponentItem = useMemo(
    () => (currentId ? Boolean(componentItems.some((item) => item.id === currentId)) : false),

    [currentId, componentItems],
  );

  const onClick = () => {
    const newId = getUuId(4, `${componentItem.id}-`);
    setCurrent({
      fieldConfig: getFieldConfig(id),
      currentId: newId,
    });
    setComponentStructure(({ componentItems, structureItems }) => ({
      componentItems: [...componentItems, { ...componentItem, id: newId }],
      structureItems: [...structureItems, { id: newId }],
    }));
  };

  return (
    <Button
      className='w-[100px]'
      style={{ opacity: isDragging ? 0.5 : undefined }}
      onClick={onClick}
      ref={isComponentItem ? undefined : setNodeRef}
      {...attributes}
      {...listeners}
    >
      {label}
    </Button>
  );
};

export default ButtonItem;
