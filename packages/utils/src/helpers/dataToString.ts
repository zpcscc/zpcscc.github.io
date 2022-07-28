import { toString } from 'lodash';

// 将数据转为string
export const dataToString = (data: any): string => {
  let str = '';
  try {
    str = toString(data);
    if (str === '[object Object]') str = JSON.stringify(data);
  } catch {
    return data;
  }
  return str || data;
};
