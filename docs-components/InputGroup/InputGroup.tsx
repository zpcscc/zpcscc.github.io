import InputGroup from '@/components/InputGroup';
import ResultTextarea from '@/components/ResultTextarea';
import Space from '@/components/Space';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const onChange = (value: string[]) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <InputGroup
        value={value}
        onChange={onChange}
        level={3}
        placeholders={['请输入...', '请输入...']}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
