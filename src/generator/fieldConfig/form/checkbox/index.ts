import { type CheckboxGroupProps } from '@/components/CheckboxGroup';
import { checkboxOptionsConfig } from '@/generator/fieldConfig/commonConfig/baseConfig';
import { type FieldConfigType } from '@/generator/types';
import { checkboxConfig } from './config';

// 多选框
const checkbox: FieldConfigType<CheckboxGroupProps> = {
  label: '多选',
  componentItem: {
    id: 'checkbox',
    type: 'CheckboxGroup',
    label: '多选',
    showLabel: true,
    props: {
      size: 'large',
      optionsConfig: checkboxOptionsConfig().props?.optionsConfig,
    },
  },
  configPanel: checkboxConfig,
};

export default checkbox;
