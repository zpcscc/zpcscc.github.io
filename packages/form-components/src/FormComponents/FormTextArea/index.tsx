import React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormTextAreaProps extends Omit<TextAreaProps, 'onChange'> {
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */
const FormTextArea: React.FC<FormTextAreaProps> = (props) => {
  const { styled, onChange, ...rest } = props;

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e?.target?.value);
  };

  return (
    <Wrapper styled={styled}>
      <Input.TextArea onChange={onTextAreaChange} {...rest} />
    </Wrapper>
  );
};

export default FormTextArea;
