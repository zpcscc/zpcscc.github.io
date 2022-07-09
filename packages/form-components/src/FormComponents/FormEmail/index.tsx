import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormEmailProps extends Omit<InputProps, 'onChange'> {
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const FormEmail: React.FC<FormEmailProps> = (props) => {
  const { styled, onChange, ...rest } = props;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e?.target?.value);
  };

  return (
    <Wrapper styled={styled}>
      <Input onChange={onInputChange} {...rest} />
    </Wrapper>
  );
};

export default FormEmail;
