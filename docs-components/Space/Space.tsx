import Button from '@/components/Button';
import Space from '@/components/Space';
import { message } from 'antd';
import { type FC } from 'react';

const App: FC = () => {
  const onClick = () => {
    message.success('点击了按钮');
  };

  return (
    <Space>
      <Button onClick={onClick}>{'这是按钮1'}</Button>
      <Button onClick={onClick}>{'这是按钮2'}</Button>
    </Space>
  );
};

export default App;
