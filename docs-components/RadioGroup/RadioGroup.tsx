import Space from '@/components/Space';
import RadioGroup, { type RadioGroupProps } from '@site/src/components/RadioGroup';
import ResultTextarea from '@site/src/components/ResultTextarea';
import type { OptionsConfigType } from '@site/src/components/types';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<RadioGroupProps['value']>('');

  const onChange = (value: RadioGroupProps['value']) => {
    setValue(value);
  };

  const optionsConfig: OptionsConfigType<'Radio'> = {
    type: 'Radio',
    defaultValue: '选项1',
    options: [
      { label: '选项1', value: '选项1' },
      { label: '选项2', value: '选项2' },
      { label: '选项3', value: '选项3' },
    ],
  };

  return (
    <Space size={100} align='end'>
      <RadioGroup
        value={value}
        onChange={onChange}
        // 组件选项配置
        optionsConfig={optionsConfig}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
