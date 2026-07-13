import * as fieldMap from '@/generator/fieldConfig';
import { type ComponentItemType } from '@/generator/types';

/**
 * @name 通过id，找到对应的componentItem
 * @param componentConfig
 * @returns
 */
const getComponentItem = (
  componentItems: ComponentItemType[],
  id: string,
): ComponentItemType | undefined => {
  // eslint-disable-next-line import-x/namespace
  return componentItems.find((item) => item.id === id) || fieldMap[id.split('-')[0]]?.componentItem;
};

export default getComponentItem;
