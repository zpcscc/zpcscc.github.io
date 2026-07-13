import ResultTextarea from '@/components/ResultTextarea';
import { useState, type FC } from 'react';

import MonacoEditor, { type MonacoEditorProps } from '@/components/MonacoEditor';
import Space from '@/components/Space';

const App: FC<MonacoEditorProps> = () => {
  const defaultValue = `import MonacoEditor from '@/components/MonacoEditor';

const App = () => {
  return <MonacoEditor height={400} language='javascript'/>;
};

export default App;
`;

  const [value, setValue] = useState<string | undefined>(defaultValue);

  const onChange = (value?: string) => {
    setValue(value);
  };

  return (
    <Space className='flex justify-between items-center' align='end'>
      <MonacoEditor
        value={defaultValue}
        height={400}
        width={600}
        language='javascript'
        onChange={onChange}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
