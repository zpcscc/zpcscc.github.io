import { type OptionType, type OptionsConfigType } from '@/components/types';
import { List, Radio, type ListProps } from 'antd';
import { type RadioProps as AntRadioProps } from 'antd/lib/radio';
import { type FC } from 'react';

export type RadioGroupProps = {
  optionsConfig?: OptionsConfigType<'Radio'>;
  listOptions?: ListProps<string>;
  onChange?: (value: string) => void;
} & Omit<AntRadioProps, 'onChange'>;

/**
 * @name 单选
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param size 组件大小
 * @param optionsConfig 选项配置
 * @link 其他参数详见 https://ant.design/components/radio-cn/
 */
const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { value, optionsConfig, listOptions = { size: 'default' }, onChange, ...rest } = props;

  return (
    <div className='bg-white'>
      <Radio.Group
        value={value || optionsConfig?.defaultValue}
        onChange={(e) => onChange?.(e?.target?.value as string)}
        {...rest}
      >
        <List bordered {...listOptions}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={option.value}>
              <Radio value={option.value}>{option.label}</Radio>
            </List.Item>
          ))}
        </List>
      </Radio.Group>
    </div>
  );
};

export default RadioGroup;
