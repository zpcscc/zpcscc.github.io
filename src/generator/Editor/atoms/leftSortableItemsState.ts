import getUuId from '@/utils/getUuId';
import { atom } from 'recoil';
import * as fieldMap from '../../fieldConfig';

/**
 * @name 左侧组件列表排序数据
 */
const leftSortableItemsState = atom<string[]>({
  key: 'leftSortableItems',
  default: Object.keys(fieldMap).map((item) => getUuId(4, `${item}-`)),
});

export default leftSortableItemsState;
