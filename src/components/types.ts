// 选项配置类型
export type OptionType = {
  id?: string;
  label: string;
  value: any;
  checked?: boolean;
};

// 选项可以选择的类型：单选、多选
export type OptionSelectType = 'Radio' | 'Checkbox' | 'allType';

// 选项默认值的类型
export type OptionDefaultValueType = {
  Radio: string;
  Checkbox: Any[];
  trueFalse: boolean;
  allType: string | Any[] | boolean;
};

// 选项组件配置项
export type OptionsConfigType<T extends OptionSelectType = 'allType'> = {
  type?: OptionSelectType;
  defaultValue?: OptionDefaultValueType[T];
  options: OptionType[];
};
