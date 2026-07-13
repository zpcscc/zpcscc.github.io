import {
  labelSpaceConfig,
  placeholderConfig,
  showCountConfig,
} from '@/generator/fieldConfig/commonConfig/baseConfig';
import { type ComponentItemType } from '@/generator/types';

// 输入框配置项
export const inputConfig = (): ComponentItemType[] => {
  return [labelSpaceConfig(), placeholderConfig(), showCountConfig()];
};
