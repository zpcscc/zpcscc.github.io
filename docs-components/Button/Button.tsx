import Button from '@/components/Button';
import { message } from 'antd';
import { type FC } from 'react';

const App: FC = () => {
  const onClick = () => {
    message.success('点击了按钮');
  };

  return <Button onClick={onClick}>{'这是红色按钮'}</Button>;
};

export default App;
