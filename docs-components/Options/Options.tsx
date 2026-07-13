import Options from '@/components/Options';
import SimpleCodeEditor from '@/components/SimpleCodeEditor';
import Space from '@/components/Space';
import Text from '@/components/Text';
import { type OptionsConfigType } from '@/components/types';
import toString from '@/utils/toString';
import { useState, type FC } from 'react';

const App: FC = () => {
  const optionsConfig: OptionsConfigType = {
    type: 'Checkbox',
    defaultValue: ['选项1'],
    options: [
      { label: '选项1', value: '选项1' },
      { label: '选项2', value: '选项2' },
      { label: '选项3', value: '选项3' },
    ],
  };
  const [value, setValue] = useState<OptionsConfigType>(optionsConfig);

  const onChange = (value: OptionsConfigType) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Options
        value={value}
        onChange={onChange}
        optionsConfig={optionsConfig}
        inputOptions={{ size: 'middle' }}
      />
      <Space orientation='vertical'>
        <Text>onChange返回的结果</Text>
        <SimpleCodeEditor value={toString(value, null, 2)} language={'json'} />
      </Space>
    </Space>
  );
};

export default App;
