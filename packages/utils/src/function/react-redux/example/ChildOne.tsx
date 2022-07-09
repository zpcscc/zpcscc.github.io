import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appStoreActions } from '../index';

const ChildOne = () => {
  const state = useSelector((store) => store);
  console.log('childOne: ', state);
  const dispatch = useDispatch();
  return (
    <div
      className="ChildOne"
      onClick={() => appStoreActions.updateGlobals({ app: 111 })}
    >
      ChildOne
    </div>
  );
};

export default ChildOne;
