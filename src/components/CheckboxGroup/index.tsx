import { type OptionType, type OptionsConfigType } from '@/components/types';
import { Checkbox, List, type ListProps } from 'antd';
import { type CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox';
import { type FC } from 'react';

export type CheckboxGroupProps = {
  optionsConfig?: OptionsConfigType<'Checkbox'>;
  listOptions?: ListProps<string>;
} & AntCheckboxGroupProps;

/**
 * @name 多选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param size 组件大小
 * @param optionsConfig 组件选项配置
 * @link 其他参数详见 https://ant.design/components/checkbox-cn/
 */
export const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { value, optionsConfig, listOptions = { size: 'default' }, ...rest } = props;

  return (
    <div className='bg-white'>
      <Checkbox.Group value={value || optionsConfig?.defaultValue} {...rest}>
        <List bordered {...listOptions}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={option.value}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </List.Item>
          ))}
        </List>
      </Checkbox.Group>
    </div>
  );
};

export default CheckboxGroup;
