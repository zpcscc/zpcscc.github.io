import React, { Fragment } from 'react';
import { isBoolean } from 'lodash';
import type { ComponentMapType, ComponentType, RulesMap } from '../type';
import { getComponent } from '../components';
import { formatProps, styledToString } from './utils';
import { FormItemWrapper } from './Styled';

// 渲染组件列表参数
export interface RenderPropsType {
  componentList?: ComponentType[];
  count: number;
  componentMap?: ComponentMapType;
  initialValues?: AnyObject;
  formValues?: AnyObject;
  rulesMap?: RulesMap;
}

// 渲染单个组件参数
export interface RenderItemPropsType extends RenderPropsType {
  component: ComponentType;
}

// 渲染行
export const rowRender = (props: RenderItemPropsType) => {
  const { component, count, componentMap, initialValues, formValues } = props;
  if (!component?.children) return;
  const RowWidget = getComponent('RowWidget');
  return (
    <RowWidget
      key={component.name}
      {...component.props}
      styled={styledToString(component?.props?.styled)}
    >
      {loopRender({
        componentList: component.children,
        count,
        componentMap,
        initialValues,
        formValues,
      })}
    </RowWidget>
  );
};

// 渲染列
export const colRender = (props: RenderItemPropsType) => {
  const { component, count, componentMap, initialValues, formValues } = props;
  if (!component?.children) return;
  const ColWidget = getComponent('ColWidget');
  return (
    <ColWidget
      key={component.name}
      {...component.props}
      styled={styledToString(component?.props?.styled)}
    >
      {loopRender({
        componentList: component.children,
        count,
        componentMap,
        initialValues,
        formValues,
      })}
    </ColWidget>
  );
};

// 渲染组件
export const componentRender = (props: RenderItemPropsType) => {
  const {
    component,
    count,
    componentMap,
    initialValues,
    formValues,
    rulesMap,
  } = props;

  const JsonPanelComponent =
    Reflect.get(componentMap || {}, component.type) ||
    getComponent(component.type);

  return (
    <Fragment key={component.id + component.name}>
      <FormItemWrapper
        key={component.id + component.name}
        className={count ? 'FormItemRender' : ''}
        rules={rulesMap ? rulesMap[component.type] : undefined}
        initialValue={initialValues?.[component.name]}
        style={{ position: 'relative', marginLeft: `${count * 50}px` }}
        {...component}
        styled={styledToString(component?.styled || {})}
      >
        <JsonPanelComponent
          slug={initialValues?.slug || initialValues?.id}
          componentprops={component}
          {...formatProps(initialValues || {})}
          {...component.props}
        />
      </FormItemWrapper>
      {component.children &&
        isBoolean(formValues?.[component.name]) &&
        formValues?.[component.name] &&
        loopRender({
          componentList: component.children,
          count: count + 1,
          componentMap,
          initialValues,
          formValues,
          rulesMap,
        })}
    </Fragment>
  );
};

// 循环渲染页面
export const loopRender = (props: RenderPropsType): React.ReactNode => {
  const { componentList } = props;
  return componentList?.map((component: ComponentType) => {
    if (component?.hidden) return;
    if (component?.type === 'RowWidget')
      return rowRender({ component, ...props });
    if (component?.type === 'ColWidget')
      return colRender({ component, ...props });
    return componentRender({ component, ...props });
  });
};
