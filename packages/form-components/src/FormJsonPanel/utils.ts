import { message } from 'antd';
import { isEmpty, isString } from 'lodash';
import { integrateToSeparate } from './FormRender/utils';
import type {
  FieldErrorType,
  PanelConfigType,
  ComponentType,
  PanelTabsType,
} from './type';

// 字符串类型的类json数据转成真正的json数据
export const stringToJson = (str: any) => {
  if (!isString(str)) return str;
  try {
    if (typeof JSON.parse(str) === 'object') {
      return JSON.parse(str);
    }
  } catch (e) {
    // console.log(e);
  }
  return str;
};

// json数据转成字符串
export const jsonToString = (json: any) => {
  if (isString(json)) return json;
  try {
    if (typeof JSON.stringify(json) === 'string') {
      // 设置缩进为2个空格
      return JSON.stringify(json, null, 2);
    }
  } catch (e) {
    // console.log(e);
  }
  return json;
};

// 整理字段验证结果，并返回验证提示
export const validatePanelValue = (
  FieldErrorObj: FieldErrorType,
  panelConfig?: PanelConfigType
) => {
  if (!FieldErrorObj) return true;
  const errorField: FieldErrorType = {};
  let components: ComponentType[] = [];

  // 处理config，提取components列表；
  const loopTabs = (tabs?: PanelTabsType[]) => {
    tabs?.forEach((tab) => {
      if (tab.childTabs) {
        loopTabs(tab.childTabs);
      } else {
        components = [
          ...components,
          ...integrateToSeparate(tab.componentList).componentList,
        ];
      }
    });
  };

  // 遍历所有校验结果，检查是否有校验未通过的内容
  Object.entries(FieldErrorObj).forEach(([key, value]) => {
    if (value?.errors?.[0]) errorField[key] = value;
  });

  // 判断是否有校验未通过字段
  if (isEmpty(errorField)) {
    // 没有，则校验通过
    return true;
  } else {
    loopTabs(stringToJson(panelConfig)?.tabs);
    // 有，则遍历报错数据，并提示报错信息
    Object.entries(errorField).forEach(([key, value]) => {
      const currComponent: ComponentType =
        components.find((component) => component.name === key) ||
        ({} as ComponentType);
      message.error(`${currComponent.label || key}:${value?.errors?.[0]}`);
    });
    return false;
  }
};
