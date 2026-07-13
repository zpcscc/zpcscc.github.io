import { type RadioGroupProps } from '@/components/RadioGroup';
import { radioOptionsConfig } from '@/generator/fieldConfig/commonConfig/baseConfig';
import { type FieldConfigType } from '@/generator/types';
import { radioConfig } from './config';

// 单选
const radio: FieldConfigType<RadioGroupProps> = {
  label: '单选',
  componentItem: {
    id: 'radio',
    type: 'RadioGroup',
    label: '单选',
    showLabel: true,
    props: {
      size: 'large',
      optionsConfig: radioOptionsConfig().props?.optionsConfig,
    },
  },
  configPanel: radioConfig,
};

export default radio;
