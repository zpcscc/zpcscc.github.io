import ResultTextarea from '@/components/ResultTextarea';
import Space from '@/components/Space';
import TextArea from '@/components/TextArea';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string>('这是输入框');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <TextArea value={value} placeholder={'请输入内容'} onChange={onChange} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
