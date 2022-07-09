import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd/lib/select';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormSelectProps extends SelectProps<string> {
  optionsConfig: OptionsConfigType<'Radio'>;
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param optionsConfig 选项配置
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { value, optionsConfig, styled, onChange, ...rest } = props;

  const onSelectChange = (changeValue: string) => {
    onChange && onChange(String(changeValue));
  };

  return (
    <Wrapper styled={styled}>
      <Select value={value || undefined} onChange={onSelectChange} {...rest}>
        {optionsConfig?.options?.map((option: OptionType) => (
          <Select.Option key={uniqueId()} value={option.value as string}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default FormSelect;
