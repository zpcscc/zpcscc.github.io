import React from 'react';
import { Radio, List } from 'antd';
import type { RadioProps, RadioChangeEvent } from 'antd/lib/radio';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormRadioProps extends Omit<RadioProps, 'onChange'> {
  optionsConfig: OptionsConfigType<'Radio'>;
  size?: 'large' | 'middle' | 'small';
  styled?: string;
  onChange?: (value: string) => void;
}

/**
 * @name 单选
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param size 组件大小
 * @param optionsConfig 选项配置
 * @link 其他参数详见 https://ant.design/components/radio-cn/
 */
const FormRadio: React.FC<FormRadioProps> = (props) => {
  const { optionsConfig, size, styled, onChange, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;

  const onRadioChange = (e: RadioChangeEvent) => {
    onChange && onChange(e?.target?.value);
  };

  return (
    <Wrapper styled={styled}>
      <List bordered itemLayout="vertical" size={listSize}>
        <Radio.Group onChange={onRadioChange} {...rest}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={uniqueId()}>
              <Radio value={option.value}>{option.label}</Radio>
            </List.Item>
          ))}
        </Radio.Group>
      </List>
    </Wrapper>
  );
};

export default FormRadio;
