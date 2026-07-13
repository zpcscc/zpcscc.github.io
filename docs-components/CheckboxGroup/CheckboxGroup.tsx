import CheckboxGroup, { CheckboxGroupProps } from '@/components/CheckboxGroup';
import ResultTextarea from '@/components/ResultTextarea';
import Space from '@/components/Space';
import { type OptionsConfigType } from '@/components/types';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<CheckboxGroupProps['value']>([]);

  const onChange = (value: CheckboxGroupProps['value']) => {
    setValue(value);
  };

  const optionsConfig: OptionsConfigType<'Checkbox'> = {
    type: 'Checkbox',
    defaultValue: ['选项1'],
    options: [
      { label: '选项1', value: '选项1' },
      { label: '选项2', value: '选项2' },
      { label: '选项3', value: '选项3' },
    ],
  };

  return (
    <Space size={100} align='end'>
      <CheckboxGroup
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
