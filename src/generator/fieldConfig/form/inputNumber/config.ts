import {
  labelSpaceConfig,
  placeholderConfig,
} from '@/generator/fieldConfig/commonConfig/baseConfig';
import { maxConfig, minConfig } from '@/generator/fieldConfig/commonConfig/validateConfig';
import { type ComponentItemType } from '@/generator/types';

// 整数输入框配置项
export const inputNumberConfig = (): ComponentItemType[] => {
  return [
    labelSpaceConfig(),
    placeholderConfig(),
    {
      id: 'Space',
      type: 'Space',
      children: [minConfig(), maxConfig()],
    },
  ];
};
