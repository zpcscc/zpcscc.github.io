// 通用布局配置
import { type ComponentItemType } from '@/generator/types';

/**
 * @name 分隔线配置
 */
export const dividerConfig = (): ComponentItemType => ({
  id: 'divider',
  type: 'Divider',
  props: { styled: { '.ant-divider': { margin: '14px 0' } } },
});
