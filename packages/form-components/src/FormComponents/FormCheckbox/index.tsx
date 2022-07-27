import React from 'react';
import { Checkbox, List } from 'antd';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormCheckboxProps extends CheckboxGroupProps {
  size?: 'large' | 'middle' | 'small';
  optionsConfig: OptionsConfigType<'Checkbox'>;
  styled?: string;
}

/**
 * @name 多选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param size 组件大小
 * @param optionsConfig 组件选项配置
 * @link 其他参数详见 https://ant.design/components/checkbox-cn/
 */
export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
  const { optionsConfig, size, styled, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;

  return (
    <Wrapper styled={styled}>
      <List bordered itemLayout="vertical" size={listSize}>
        <Checkbox.Group {...rest}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={uniqueId()}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </List.Item>
          ))}
        </Checkbox.Group>
      </List>
    </Wrapper>
  );
};

export default FormCheckbox;
