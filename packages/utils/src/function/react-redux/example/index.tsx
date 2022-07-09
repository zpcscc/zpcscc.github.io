import React from 'react';
import { Provider } from 'react-redux';
import { appStore } from '../index';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const ReduxExample = () => {
  return (
    <Provider store={appStore}>
      <ChildOne />
      <ChildTwo />
    </Provider>
  );
};

export default ReduxExample;
