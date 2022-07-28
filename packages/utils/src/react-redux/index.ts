import { createStore, Store, Reducer, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import * as subReducers from './state-bundle';
import { AppStateType, emptyAppState } from './type';
import { mapObjIndexed } from 'ramda';
// import { pipe } from 'rxjs';

// * ---------------------------------------------------------------- type calculation

export type SubReducer<T = any> = (s: AppStateType, a: T) => AppStateType;

type ReducerMap = typeof subReducers;

type PayloadMap = {
  [K in keyof ReducerMap]: ReducerMap[K] extends SubReducer<infer P>
    ? P
    : never;
};

type ActionMap = {
  [K in keyof PayloadMap]: { type: K; payload: PayloadMap[K] };
};

type SubDispatcher<T> = (payload: T) => void;

type DispatcherMap = {
  [K in keyof PayloadMap]: SubDispatcher<PayloadMap[K]>;
};

type ActionList = ActionMap[keyof ActionMap];

// * ---------------------------------------------------------------- create store
const centerReducer: Reducer<AppStateType | undefined, ActionList> = (
  state,
  action
) => {
  const { type, payload } = action;
  const subReducer = subReducers[type];
  // @ts-ignore
  return subReducer ? subReducer(state!, payload) : state;
};

export type { AppStateType };

export type AppStoreType = Store<AppStateType>;

const enhancer =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

export const appStore = createStore(
  centerReducer,
  emptyAppState,
  enhancer
) as AppStoreType;

export const appStoreActions: DispatcherMap = mapObjIndexed(
  (val, key) => (payload: any) => appStore.dispatch({ type: key, payload }),
  subReducers
);

// 监听store
// appStore.subscribe(() => {
//   const state = pipe(() => appStore.getState())(null);
//   console.log(state);
// });
