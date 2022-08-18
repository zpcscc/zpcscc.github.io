import type { Rule, RuleObject } from 'antd/lib/form';
import type { ComponentType } from '../../JsonPanel/type';

/**
 * @name 为组件添加rules
 * @param componentList
 */
export const addRules = (componentList?: ComponentType[]) => {
  // 不能为空格校验规则
  const noSpaceRule: Rule = {
    validator: (_rule: RuleObject, value: string) => {
      if (value.length > 0 && !value.trim()) {
        return Promise.reject(new Error('不能为空格'));
      }
      return Promise.resolve(new Error());
    }
  };

  return (
    componentList?.map((item) => {
      // 若rules里开启了必填，不能为空。则添加上不能为空格的规则
      const isRequired = !!item.rules?.find(
        (rule: RuleObject) => rule.required
      );
      return isRequired
        ? { ...item, rules: [...(item.rules || []), noSpaceRule] }
        : item;
    }) || []
  );
};
