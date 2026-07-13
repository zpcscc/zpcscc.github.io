import componentStructureState from '@/generator/Editor/atoms/componentStructureState';
import currentState from '@/generator/Editor/atoms/currentState';
import { Render } from '@/generator/Render';
import { type ComponentItemType } from '@/generator/types';
import { Form } from 'antd';
import { omit } from 'lodash';
import { useEffect, type FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import updateItem from '../utils/updateItem';

export type LeftSiderProps = {
  // 值改变时
  onChange?: (pageData: ComponentItemType[]) => void;
};

// 右侧组件配置面板,用于渲染配置项
const RightSider: FC<LeftSiderProps> = () => {
  const { fieldConfig, currentId } = useRecoilValue(currentState);
  const [{ componentItems, structureItems }, setComponentStructure] =
    useRecoilState(componentStructureState);
  const componentItem = componentItems.find((item) => item.id === currentId);
  const { configPanel } = fieldConfig || {};
  const defaultValue = {
    ...omit(componentItem, ['id', 'type', 'props', 'children']),
    ...componentItem?.props,
  };
  const [form] = Form.useForm();

  const onValuesChange = (changeValue?: AnyObject) => {
    if (currentId && changeValue) {
      setComponentStructure((componentStructure) =>
        updateItem(componentStructure, currentId, changeValue),
      );
    }
  };

  useEffect(() => {
    // 组件切换时，更新表单面板对应的值
    if (defaultValue) form?.setFieldsValue(defaultValue);

  }, [currentId, structureItems]);

  return (
    <div className='flex-shrink-0 w-64 pt-6 flex flex-col h-full mx-auto [&_.ant-form]:w-56 [&_.ant-form]:mx-auto'>
      <Render
        defaultValue={defaultValue}
        componentItems={configPanel?.()}
        onChange={onValuesChange}
        formOptions={{ form }}
      />
    </div>
  );
};

export default RightSider;
