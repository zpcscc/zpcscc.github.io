import ResultTextarea from '@/components/ResultTextarea';
import Slider, { type SliderProps } from '@/components/Slider';
import Space from '@/components/Space';
import { useState, type FC } from 'react';

const App: FC<SliderProps> = () => {
  const [value, setValue] = useState<number>(0);

  const onChange = (value: number) => {
    setValue(value || 0);
  };

  return (
    <Space size={100} align='end'>
      <Slider
        value={value}
        onChange={onChange}
        showInputNumber
        inputNumberOptions={{ size: 'middle' }}
        layout='horizontal'
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
