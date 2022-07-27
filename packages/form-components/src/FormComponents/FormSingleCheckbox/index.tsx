import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox';
import { SpaceWrapper } from './Styled';

export interface FormSingleCheckboxProps
  extends Omit<CheckboxProps, 'onChange'> {
  // 前缀文字
  prefixText?: string;
  // 后缀文字
  suffixText?: string;
  // 自定义样式 示例：styled：`{width:'100%'}`
  styled?: string;
  // 选项改变时
  onChange: (value: boolean) => void;
}

/**
 * @name 单个勾选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param prefixText 前缀文字
 * @param suffixText 后缀文字
 * @link https://ant.design/components/checkbox-cn/
 */
const FormSingleCheckbox: React.FC<FormSingleCheckboxProps> = (props) => {
  const { value, prefixText, suffixText, styled, onChange, ...rest } = props;

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange && onChange(e.target.checked);
  };

  return (
    <SpaceWrapper styled={styled}>
      {prefixText}
      <Checkbox checked={!!value} onChange={onCheckedChange} {...rest} />
      {suffixText}
    </SpaceWrapper>
  );
};

export default FormSingleCheckbox;
