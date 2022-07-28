import React from 'react';
import { useSelector } from 'react-redux';
import { appStoreActions } from '../index';

const ChildTwo = () => {
  const state = useSelector((store) => store);
  console.log('childTwo: ', state);
  return (
    <div
      className="ChildTwo"
      onClick={() => appStoreActions.updateGlobals({ app: 222 })}
    >
      ChildTwo
    </div>
  );
};

export default ChildTwo;
