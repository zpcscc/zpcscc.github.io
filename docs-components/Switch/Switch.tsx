import ResultTextarea from '@/components/ResultTextarea';
import Space from '@/components/Space';
import Switch from '@/components/Switch';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<boolean>(true);

  const onChange = (value: boolean) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Switch value={value} onChange={onChange} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
