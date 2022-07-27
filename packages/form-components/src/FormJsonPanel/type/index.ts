import type { Rule } from 'antd/lib/form';
import type { TabsProps } from 'antd';
import type { FieldError } from 'rc-field-form/es/interface';
import type { OptionsConfigType } from '../../type';
import { componentsMap } from '../components';

// 可嵌套的条件表达式
export interface Expression {
  // 且、或、非逻辑运算方式
  operation?: 'AND' | 'OR' | 'NOT';
  // 使用这种逻辑所关联的条件表达式
  conditions?: Expression[];
  // 需要比较的内容是什么类型。string | number | boolean等
  type?: string;
  // 指定组件里用于比较的属性字段，是比较value，name，id，还是其他等
  field?: string;
  // 比较操作符，如何比较。等于、不等于、小于、小于等于、大于、大于等于、包含等
  operator?: 'EQ' | 'NE' | 'LT' | 'LE' | 'GT' | 'GE' | 'CONTAIN';
  // 用于做比较的值
  value?: string | number | boolean;
}

// 图片格式
export interface ImageType {
  // 图片标题
  label: string;
  // 图片名称，唯一标识
  name: string;
  // 图片url
  picture: string;
  // 图片描述
  description?: string;
  // id
  id?: string;
  // 自定义属性
  [key: string]: any;
}

export interface ComponentPropsType {
  // 选项组件的配置
  optionsConfig?: OptionsConfigType;
  // 自定义属性
  [key: string]: any;
}

// 每个组件的类型
export interface ComponentType {
  // 每个组件的唯一标识id
  id?: string;
  // 组件对应的name，单个表单中的区分组件的唯一标识，语义化,与接口对应属性字段相同
  name: string;
  // 组件的类型
  type: keyof typeof componentsMap | string;
  // 组件的参数集合，props里的内容会传到组件里
  props?: ComponentPropsType;
  // 组件自定义样式
  styled?: AnyObject;
  // 可嵌套的子组件
  children?: ComponentType[];
  // 自定义属性
  [key: string]: any;
}

export interface ComponentStructureType {
  // 每个组件的唯一标识id
  id?: string;
  // 组件对应的name，单个表单中的区分组件的唯一标识，语义化,与接口对应属性字段相同
  name: string;
  // 可嵌套的子组件
  children?: ComponentStructureType[];
}

export interface ComponentFrameType {
  // 对应组件的id
  id: string;
  // 子组件
  children?: ComponentFrameType[];
}

export interface PanelComponentsType {
  [key: string]: ComponentType;
}

// 配置面板json子节点接口
export interface PanelTabsType {
  // 唯一标识id
  id?: string;
  // 配置面板左侧导航名称
  tabsName?: string;
  // 下一级导航
  childTabs?: PanelTabsType[];
  // 当前导航页的组件
  componentList: ComponentType[];
}

// 配置面板Json数据结构
export interface PanelConfigType {
  // 唯一标识id
  id?: string;
  // 类型
  type?: string;
  // 导航节点
  tabs: PanelTabsType[];
}

export type PanelType = 'EditorPanel' | 'SettingPanel';

export type RulesMap = Record<string, Rule[]>;

export interface ComponentMapType {
  [type: string]: React.FC<any>;
}

export interface FieldErrorType {
  [key: string]: FieldError;
}

export interface PanelBaseProps {
  // tabs组件参数
  tabsProps?: TabsProps;
  panelData?: AnyObject;
  panelConfig?: PanelConfigType | string;
  componentMap?: ComponentMapType;
  monacoLanguage?: string;
  editorPanelStyled?: AnyObject;
  settingPanelStyled?: AnyObject;
  // 面板样式
  panelStyled?: AnyObject;
  // 面板名称
  panelTitle?: string;
  // 显示取消按钮
  showCancel?: boolean;
  // 显示确定按钮
  showSubmit?: boolean;
  onChange?: (returnValue: any) => void;
}

export interface StyledType {
  [key: string]: React.CSSProperties | StyledType;
}
