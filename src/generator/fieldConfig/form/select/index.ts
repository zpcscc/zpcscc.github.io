import { type SelectProps } from '@/components/Select';
import { radioOptionsConfig } from '@/generator/fieldConfig/commonConfig/baseConfig';
import { type FieldConfigType } from '@/generator/types';
import { selectConfig } from './config';

// 下拉框
const select: FieldConfigType<SelectProps> = {
  label: '下拉框',
  componentItem: {
    id: 'select',
    type: 'Select',
    label: '下拉框',
    showLabel: true,
    props: {
      size: 'large',
      placeholder: '请选择...',
      options: radioOptionsConfig().props?.optionsConfig?.options,
    },
  },
  configPanel: selectConfig,
};

export default select;
