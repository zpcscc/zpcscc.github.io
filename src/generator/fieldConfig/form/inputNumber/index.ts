import { type InputNumberProps } from '../../../../components/InputNumber';
import { type FieldConfigType } from '../../../types';
import { inputNumberConfig } from './config';

// 数字输入框
const inputNumber: FieldConfigType<InputNumberProps> = {
  label: '数字输入框',
  componentItem: {
    id: 'inputNumber',
    type: 'InputNumber',
    label: '数字输入框',
    showLabel: true,
    props: {
      placeholder: '请输入数字',
      size: 'large'
    }
  },
  configPanel: inputNumberConfig
};

export default inputNumber;
