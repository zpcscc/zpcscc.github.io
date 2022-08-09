import type { Rule } from 'antd/lib/form';
import type { RulesMap } from '../type';

const emailRules = [{ type: 'email' }] as Rule[];
const phoneRules = [
  {
    pattern: /(^\+?\d{11,13}$)|(^\+?\d{11,13}$)/,
    message: '手机号格式错误！',
  },
];

export const defaultRulesMap: RulesMap = {
  FormEmail: emailRules,
  FormPhone: phoneRules,
};
