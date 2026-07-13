import Editor, { type EditorProps } from '@monaco-editor/react';
import { type FC } from 'react';
import defineTheme from './defineTheme';

export { useMonaco } from '@monaco-editor/react';

export type MonacoEditorProps = EditorProps;

/**
 * @name 摩纳哥代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param theme 主题样式 light | vs-dark | OneDarkPro
 * @param options 微软原版monaco-editor配置参数
 * @link rest参数详见 https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html
 * @link 其他参数详见 https://github.com/suren-atoyan/monaco-react
 */
const MonacoEditor: FC<MonacoEditorProps> = (props) => {
  const { value = '', language = 'javascript', theme = 'OneDarkPro', onChange, ...rest } = props;

  return (
    <Editor
      beforeMount={() => defineTheme(theme)}
      language={language}
      defaultValue={value || ''}
      onChange={onChange}
      theme={theme}
      {...rest}
    />
  );
};

export default MonacoEditor;
