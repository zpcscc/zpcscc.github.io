import { type ComponentItemType } from '@/generator/types';
import { Form } from 'antd';
import { isEmpty, isNil, omit } from 'lodash';
import { getComponent } from '../components';
import { type BaseRenderType } from './type';

export const editorStyled = 'pointer-events-none';

export type ComponentRenderProps = {
  componentItem?: ComponentItemType;
} & BaseRenderType;

// 渲染组件
const componentRender = (props: ComponentRenderProps) => {
  const { componentItem, componentMap = {}, defaultValue = {}, editorProps } = props;
  const { id = '', type, showLabel, label } = componentItem || {};
  const Component = getComponent(type, componentMap);

  return (
    <Form.Item
      key={id}
      name={id}
      initialValue={defaultValue?.[id]}
      {...omit(componentItem, ['styled', 'id', 'props', 'hidden', 'children', 'showLabel'])}
      label={isNil(showLabel) ? label : (showLabel ? label : undefined)}
      className={isEmpty(editorProps) ? '' : editorStyled}
    >
      <style>{'.ant-form-item-label > label::after { display: inline-block; }'}</style>
      <Component {...componentItem?.props} />
    </Form.Item>
  );
};

export default componentRender;
