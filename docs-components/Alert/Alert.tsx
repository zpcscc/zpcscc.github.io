import Alert from '@/components/Alert';
import { type FC } from 'react';

const App: FC = () => {
  return (
    <>
      <Alert type='success' showIcon title='成功提示' />
      <Alert type='error' showIcon title={'警告提示'} />
    </>
  );
};

export default App;
