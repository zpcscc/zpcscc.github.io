import { Editor } from '@/generator/Editor';
import { type ComponentItemType } from '@/generator/types';
import { forwardRef, HTMLAttributes, type FC } from 'react';

export const EditorWrapper = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function EditorWrapper({ style, className, ...rest }, ref) {
    return (
      <>
        <style>{`.editor-wrapper { height: 70vh; border: 1px solid #f5f5f5; }`}</style>
        <div ref={ref} className={`editor-wrapper ${className || ''}`} style={style} {...rest} />
      </>
    );
  },
);

type EditorProps = {
  value: string;
};

// 编辑器
const EditorPanel: FC<EditorProps> = () => {
  const onChange = (pageData: ComponentItemType[]) => {
    console.log(pageData);
  };

  return (
    <EditorWrapper>
      <Editor onChange={onChange} />
    </EditorWrapper>
  );
};

export default EditorPanel;
