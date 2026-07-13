import InputNumber from '@/components/InputNumber';
import ResultTextarea from '@/components/ResultTextarea';
import Space from '@/components/Space';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string | number | null>(null);

  const onChange = (value: string | number | null) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <InputNumber value={value} placeholder={'请输入数字'} onChange={onChange} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
