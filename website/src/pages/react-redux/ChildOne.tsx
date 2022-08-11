// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react';
import { useSelector } from 'react-redux';
import type { StateType } from '@site/src/store/react-redux/type';
import { storeActions } from '@site/src/store/react-redux';
import { ButtonWidget } from '@site/src/components';

const ChildOne: React.FC = () => {
  const state = useSelector((state: StateType) => state);
  console.log(state);
  const onClick = () => {
    storeActions.updateGlobals({ app: 111 });
  };
  return <ButtonWidget buttonText='ChildOne' onClick={onClick} />;
};

export default ChildOne;
