// eslint-disable-next-line
import React, { useState } from 'react';
import type { TabsProps } from 'antd';
import 'antd/dist/antd.css';
import FormMonacoEditor from '../../../FormComponents/FormMonacoEditor';
import type { PanelBaseProps, PanelConfigType } from '../../type';
import SettingPanel from '../SettingPanel';
import { Wrapper } from './Styled';
import { stringToData, dataToString } from '../../../utils';
import { styledToString } from '../../FormRender/utils';

export interface EditorPanelProps extends PanelBaseProps {
  tabsProps?: TabsProps;
  editorPanelStyled?: AnyObject;
  onEditorChange: (panelData: string) => void;
}

/**
 * @name 编辑面板
 * @param editorPanelStyled 自定义样式 示例：styled：`{width:'100%'}`
 * @param monacoLanguage monaco编辑器默认值
 * @param panelType 组件类型 "EditorPanel" | "SettingPanel"
 * @param panelProps 对应面板配置
 * @param panelData 面板组件默认数据
 * @param panelConfig 面板的配置json
 * @param componentMap 自定义组件映射列表
 * @param onEditorChange 面板组件值改变时的回调
 * @param tabsProps 自定义样式 示例：styled：`{width:'100%'}`
 * @link tabsProps参数详见 https://ant.design/components/tabs-cn/#Tabs
 */
const EditorPanel: React.FC<EditorPanelProps> = (props) => {
  const {
    editorPanelStyled = {},
    tabsProps,
    panelData,
    panelConfig,
    monacoLanguage = 'json',
    componentMap,
    onEditorChange
  } = props;
  const [editorValue, setEditorValue] = useState<PanelConfigType | string>(
    panelConfig || ''
  );
  let returnValues: AnyObject = panelData || {};

  // 每次组件改变时，格式化数据
  const onValuesChange = (changedValues: AnyObject) => {
    returnValues = { ...returnValues, ...changedValues };
  };

  const onMonacoChange = (value?: string) => {
    onEditorChange(value || '');
    setEditorValue(value || '');
  };

  return (
    <Wrapper styled={styledToString(editorPanelStyled)}>
      <FormMonacoEditor
        height='100%'
        defaultLanguage={monacoLanguage}
        value={dataToString(editorValue)}
        onChange={onMonacoChange}
      />
      <SettingPanel
        tabsProps={tabsProps}
        panelData={returnValues}
        panelConfig={stringToData(editorValue)}
        componentMap={componentMap}
        onSettingChange={onValuesChange}
      />
    </Wrapper>
  );
};

export default EditorPanel;
