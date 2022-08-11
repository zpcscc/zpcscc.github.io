// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@site/src/store/react-redux';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

// react-redux展示demo
const ReduxExample: React.FC = () => {
  
  
  return (
    <Provider store={store}>
      <ChildOne />
      <ChildTwo />
    </Provider>
  );
};

export default ReduxExample;
