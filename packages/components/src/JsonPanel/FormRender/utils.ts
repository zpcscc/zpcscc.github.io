import { isObject } from 'lodash';
import type {
  StyledType,
  ComponentType,
  ComponentStructureType
} from '../type';

// 循环遍历styled对象，转为string
const loopStyled = (styledObj: StyledType): string => {
  let returnValue = '';
  Object.entries(styledObj).forEach(([key, value]) => {
    let styledValue = '';
    if (isObject(styledObj[key])) {
      styledValue = loopStyled(styledObj[key] as StyledType);
      returnValue += `${key}${styledValue}`;
    } else {
      styledValue = `${value};`;
      returnValue += `${key}:${styledValue}`;
    }
  });
  return `{${returnValue}}`;
};

/**
 * @name 将对象styled转为css-in-js可以运行的字符串
 * @param styled  样式对象 key为css选择器，value为css
 * @returns
 */
export const styledToString = (styled: StyledType | string): string => {
  if (!styled || typeof styled === 'string') return styled;
  return `&${loopStyled(styled)}`;
};

// 格式化参数， 只有指定的字段可以当做props传入组件
export const formatProps = (props: AnyObject) => {
  const newProps: AnyObject = {};
  // 需要传入组件的字段。这里的所有字段，都会被视为组件的props
  const includeField = ['picture'];
  Object.entries(props).forEach(([key, value]) => {
    if (includeField.includes(key)) {
      newProps[key] = value;
    }
  });
  return newProps;
};

// 转换配置的数据结构
// 集成->分离
export const integrateToSeparate = (componentConfig: ComponentType[]) => {
  const componentList: ComponentType[] = [];

  // 递归循环遍历json
  const loopComponents = (
    components: ComponentType[]
  ): ComponentStructureType[] => {
    return components.map((component) => {
      if (component.children) {
        componentList.push({ ...component, children: undefined });
        return {
          name: component.name,
          children: loopComponents(component.children)
        };
      }
      componentList.push({ ...component });
      return { name: component.name };
    });
  };

  return {
    componentStructure: loopComponents(componentConfig),
    componentList
  };
};

// 分离 -> 集成
export const separateToIntegrate = (
  componentList: ComponentType[],
  componentStructure?: ComponentStructureType[]
) => {
  // 若没有单独写布局，则直接返回组件列表
  if (!componentStructure) return componentList || [];

  // 递归循环遍历json
  const loopComponents = (
    components: ComponentStructureType[]
  ): ComponentType[] => {
    return components.map((component) =>
      component.children
        ? {
            ...componentList.find((item) => item.name === component.name),
            children: loopComponents(component.children)
          }
        : componentList.find((item) => item.name === component.name)
    ) as ComponentType[];
  };

  return loopComponents(componentStructure);
};

// 获取组件里的默认值
export const getDefaultValue = (componentsConfig: ComponentType[]) => {
  const { componentList } = integrateToSeparate(componentsConfig);
  const defaultValue: AnyObject = {};
  componentList?.forEach((component) => {
    if (component?.props?.optionsConfig) {
      defaultValue[component.name] =
        component.props?.optionsConfig?.defaultValue;
    }
  });
  return defaultValue;
};
