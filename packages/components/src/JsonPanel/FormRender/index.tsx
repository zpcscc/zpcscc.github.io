// eslint-disable-next-line
import React, { useMemo, useState } from 'react';
import { Form } from 'antd';
import type { FormInstance, FormProps } from 'antd';
import type {
  ComponentMapType,
  ComponentType,
  ComponentStructureType,
  RulesMap
} from '../type';
import { separateToIntegrate } from './utils';
import { Wrapper } from './Styled';
import { loopRender } from './render';
import { defaultRulesMap } from './rulesMap';

interface FormRenderProps {
  initialValues?: AnyObject;
  // 表单结构,布局
  componentStructure?: ComponentStructureType[];
  // 表单组件列表
  componentList: ComponentType[];
  componentMap?: ComponentMapType;
  formProps?: FormProps;
  rulesMap?: RulesMap;
  onValuesChange: (
    changedValues: AnyObject,
    values: AnyObject,
    form: FormInstance<any>
  ) => void;
}

/**
 * @name 表单渲染
 * @param initialValues 初始值
 * @param componentStructure 表单的布局结构
 * @param componentList 组件配置列表
 * @param componentMap 自定义组件实例列表
 * @param onValuesChange 表单值改变时的回调
 * @param formProps 表单组件props
 * @param rulesMap 表单校验规则对应列表
 * @link formProps参数详见 https://ant.design/components/form-cn/#Form
 */
export const FormRender: React.FC<FormRenderProps> = (props) => {
  const {
    initialValues = {},
    componentStructure,
    componentList,
    componentMap = {},
    formProps,
    rulesMap = defaultRulesMap,
    onValuesChange
  } = props;
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<AnyObject>(initialValues);
  const newComponentList = separateToIntegrate(
    componentList,
    componentStructure
  );

  // 优化性能，数据未变化时，不重复渲染
  const formValueMemo = useMemo(() => formValues, [formValues]);

  const onFormValuesChange = (changedValues: AnyObject, values: AnyObject) => {
    // 获取当前改变字段的name值
    const [name] = Object.keys(changedValues);
    // 判断改变的字段，有没有包含children。
    const isHaveChildren = !!componentList.find((item) => item.name === name)
      ?.children;
    // 若有children，则表示此字段的值可能会用于判断渲染children
    if (isHaveChildren) setFormValues(values);
    onValuesChange(changedValues, values, form);
  };

  return (
    <Wrapper>
      <Form
        form={form}
        layout='vertical'
        onValuesChange={onFormValuesChange}
        {...formProps}
      >
        {loopRender({
          componentList: newComponentList,
          count: 0,
          componentMap,
          initialValues,
          formValues: formValueMemo,
          rulesMap
        })}
      </Form>
    </Wrapper>
  );
};
