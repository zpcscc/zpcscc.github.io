import { type OptionsConfigType } from '../types';

export type SelectListType = OptionsConfigType<'Radio'>;

export type TreeDataType = {
  value: string;
  children: TreeDataType[];
};
