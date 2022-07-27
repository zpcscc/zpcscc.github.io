import React, { useState, useEffect } from 'react';
import { Slider, InputNumber } from 'antd';
import type { SliderBaseProps } from 'antd/lib/slider';
import type { InputNumberProps } from 'antd/lib/input-number';
import { Wrapper } from './Styled';

export interface FormSliderProps extends Omit<SliderBaseProps, 'onChange'> {
  styled?: string;
  value: number;
  onChange?: (value: number | [number, number] | string) => void;
  showInputNumber?: boolean;
  inputNumberProps?: InputNumberProps;
  layout?: 'horizontal' | 'vertical';
}

/**
 * @name 滑动输入条
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param showInputNumber 显示数字输入框
 * @param inputNumberProps 数字显示框的props
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/slider-cn/
 */
const FormSlider: React.FC<FormSliderProps> = (props) => {
  const {
    styled,
    value,
    onChange,
    showInputNumber = false,
    inputNumberProps,
    layout = 'horizontal',
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<number>(value || 0);

  const onSliderChange = (newValue: number | [number, number] | string) => {
    if (typeof newValue === 'number') setInputValue(newValue);
    onChange && onChange(newValue);
  };

  useEffect(() => {
    // 传入的value变化时，也要及时更新inputValue
    setInputValue(value);
  }, [value]);

  return (
    <Wrapper styled={styled} showInputNumber={showInputNumber} layout={layout}>
      <Slider value={inputValue} onChange={onSliderChange} {...rest} />
      {showInputNumber && (
        <InputNumber
          value={inputValue}
          onChange={onSliderChange}
          {...inputNumberProps}
        />
      )}
    </Wrapper>
  );
};

export default FormSlider;
