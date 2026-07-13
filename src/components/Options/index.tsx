import { type InputProps } from '@/components/Input';
import { type OptionsConfigType } from '@/components/types';
import getUuId from '@/utils/getUuId';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { Button } from 'antd';
import { type CheckboxOptionType } from 'antd/lib/checkbox/Group';
import { useState, type FC } from 'react';
import OptionsContainer from './OptionsContainer';
import { type CurrOptionType, type CurrOptionsConfigType } from './type';
import formatOptionsConfig from './utils/formatOptionsConfig';

export type OptionsProps = {
  value?: OptionsConfigType;
  optionsConfig?: OptionsConfigType;
  inputOptions?: InputProps;
  onChange?: (optionsConfig: OptionsConfigType) => void;
};

/**
 * @name 选项配置
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param optionsConfig 选项配置
 */
const Options: FC<OptionsProps> = (props) => {
  const { value, inputOptions, onChange } = props;
  const [optionsConfig, setOptionsConfig] = useState<CurrOptionsConfigType>(
    formatOptionsConfig(value || props.optionsConfig),
  );

  const onOptionsConfigChange = (newOptionsConfig: CurrOptionsConfigType) => {
    const { options } = newOptionsConfig;
    // 设置选中的默认值
    let defaultValue: OptionsConfigType['defaultValue'] =
      optionsConfig?.type === 'Checkbox' ? [] : '';
    options?.forEach((option: CurrOptionType) => {
      if (option?.checked) {
        if (optionsConfig?.type === 'Checkbox') {
          (defaultValue as CheckboxOptionType<string>[]).push(
            option.value as CheckboxOptionType<string>,
          );
        } else {
          (defaultValue as string) = option.value;
        }
      }
    });
    setOptionsConfig({ ...newOptionsConfig, defaultValue });
    onChange?.({ ...newOptionsConfig, defaultValue } as OptionsConfigType);
  };

  // 添加选项
  const addOption = () => {
    const optionsLength = optionsConfig?.options?.length;
    const newOptions = optionsConfig?.options?.concat({
      id: getUuId(),
      label: `选项${optionsLength + 1}`,
      value: `选项${optionsLength + 1}`,
      checked: false,
    });
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions,
    });
  };

  return (
    <div>
      <OptionsContainer
        optionsConfig={optionsConfig}
        onOptionsConfigChange={onOptionsConfigChange}
        inputOptions={inputOptions}
      />
      <Button type='text' style={{ color: '#00bcd4' }} onClick={addOption}>
        <PlusOutlined /> 添加选项
      </Button>
    </div>
  );
};

export default Options;
