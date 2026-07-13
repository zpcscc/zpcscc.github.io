import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { type FC, type ReactNode } from 'react';
import { type EditorPropsType } from '../..';

export type SortableContainerProps = {
  children: ReactNode;
  id?: string;
  editorProps?: EditorPropsType;
};

/**
 * @name 包裹在组件外的拖拽容器
 * @param props
 * @returns
 */
const SortableContainer: FC<SortableContainerProps> = (props) => {
  const { id = '', children, editorProps } = props;
  const { onSelect, onCopy, onDelete, currentId } = editorProps || {};
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id
  });
  const isFocus = currentId === id;

  return (
    <div
      key={id}
      id={id}
      className='drag-container min-w-200px border border-dashed border-[rgb(187,187,187)] p-[10px_8px_0] mb-2 bg-white relative'
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition ?? '',
        opacity: isDragging ? 0.5 : undefined,
        ...(isFocus && {
          outline: '2px solid rgb(64, 158, 255)',
          borderColor: 'rgb(255, 255, 255)'
        })
      }}
      onFocus={(e) => {
        const target = e.target as HTMLDivElement;
        onSelect?.(target.id);
      }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <style>{'.drag-container:hover { border: 1px solid #4096ff; }'}</style>
      {children}
      <div
        className='absolute z-20 -bottom-2px -right-2px h-24px rounded-tl-8px bg-[rgb(64,158,255)] flex justify-center items-center p-[0_4px]'
        style={{ display: isFocus ? 'flex' : 'none' }}
      >
        <style>{'.drag-container .pointer { color: rgb(255,255,255); padding: 0 4px; cursor: pointer; }'}</style>
        <div className='pointer' role='button' onClick={() => onDelete?.(id)}>
          <DeleteOutlined />
        </div>
        <div className='pointer' role='button' onClick={() => onCopy?.(id)}>
          <CopyOutlined />
        </div>
      </div>
    </div>
  );
};

export default SortableContainer;
