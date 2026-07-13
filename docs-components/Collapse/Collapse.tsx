import Collapse from '@/components/Collapse';
import CollapsePanel from '@/components/CollapsePanel';
import ResultTextarea from '@/components/ResultTextarea';
import Space from '@/components/Space';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string | string[]>([]);

  const onChange = (value: string | string[]) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Collapse onChange={onChange}>
        <CollapsePanel key={'1'} header='面板1'>
          {'内容1'}
        </CollapsePanel>
        <CollapsePanel key={'2'} header='面板2'>
          {'内容2'}
        </CollapsePanel>
        <CollapsePanel key={'3'} header='面板3'>
          {'内容3'}
        </CollapsePanel>
      </Collapse>
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
