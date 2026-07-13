import ResultTextarea from '@/components/ResultTextarea';
import SimpleCodeEditor, { type SimpleCodeEditorProps } from '@/components/SimpleCodeEditor';
import Space from '@/components/Space';
import { useState, type FC } from 'react';

const App: FC<SimpleCodeEditorProps> = () => {
  const defaultValue = `
import SimpleCodeEditor from '@/components/SimpleCodeEditor';

const App = () => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value?: string) => {
    setValue(value);
  };

  return <SimpleCodeEditor value={value} language='javascript' onChange={onChange}/>;
};

export default App;
`;

  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Space className='flex justify-between items-center' align='end'>
      <SimpleCodeEditor value={value} language='javascript' onChange={onChange} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
