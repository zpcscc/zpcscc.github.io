import ResultTextarea from '@/components/ResultTextarea';
import Select from '@/components/Select';
import Space from '@/components/Space';
import type { OptionType } from '@/components/types';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (value: string) => {
    setValue(value);
  };

  const options: OptionType[] = [
    { label: '选项1', value: '选项1' },
    { label: '选项2', value: '选项2' },
    { label: '选项3', value: '选项3' },
  ];

  return (
    <Space size={100} align='end'>
      <Select
        value={value}
        placeholder={'请选择'}
        options={options}
        onChange={onChange}
        size={'large'}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
