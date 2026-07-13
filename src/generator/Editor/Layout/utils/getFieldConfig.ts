import * as fieldMap from '@/generator/fieldConfig';
import { type FieldMapType } from '@/generator/types';

/**
 * @name 获取对应的属性type
 * @param id
 * @returns
 */
const getFieldConfig = (id: string) => {
  const fieldId = id.split('-')[0] as keyof typeof fieldMap;
  return (fieldMap as FieldMapType)[fieldId];
};

export default getFieldConfig;
