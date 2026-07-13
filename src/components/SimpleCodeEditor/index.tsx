import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';
import { type FC } from 'react';
import Editor from 'react-simple-code-editor';

export type SimpleCodeEditorProps = {
  value?: string;
  // 代码语言：https://prismjs.com/#supported-languages
  language?: string | 'javascript' | 'typescript' | 'css' | 'json';
  onChange?: (value: string) => void;
};

/**
 * @name 简易代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param language 需要语法高亮的语言
 * @link 其他参数详见 https://www.npmjs.com/package/react-simple-code-editor
 */
const SimpleCodeEditor: FC<SimpleCodeEditorProps> = (props) => {
  const {
    value = '',
    language = 'javascript',
    onChange = (value) => console.log(value),
    ...rest
  } = props;

  return (
    <div className='overflow-auto [&>div]:min-h-full'>
      <Editor
        value={value}
        onValueChange={onChange}
        highlight={(value) => highlight(value, languages[language], language)}
        padding={10}
        {...rest}
      />
    </div>
  );
};

export default SimpleCodeEditor;
