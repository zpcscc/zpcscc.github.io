// eslint-disable-next-line
import React from 'react';
import { Tabs } from 'antd';
import type { FormInstance, TabsProps } from 'antd';
import { FormRender } from '../../FormRender';
import type {
  PanelBaseProps,
  PanelTabsType,
  PanelConfigType
} from '../../type';
import { Wrapper } from './Styled';
import { styledToString } from '../../FormRender/utils';

export interface SettingPanelProps extends PanelBaseProps {
  tabsProps?: TabsProps;
  settingPanelStyled?: AnyObject;
  onSettingChange: (
    changedValues: AnyObject,
    values: AnyObject,
    form: FormInstance<any>
  ) => void;
}

/**
 * @name 配置面板
 * @param settingPanelStyled 自定义样式 示例：styled：`{width:'100%'}`
 * @param panelType 组件类型 "EditorPanel" | "SettingPanel"
 * @param panelProps 对应面板配置
 * @param panelData 面板组件默认数据
 * @param panelConfig 面板的配置json
 * @param componentMap 自定义组件映射列表
 * @param onSettingChange 面板组件值改变时的回调
 * @param tabsProps 自定义样式 示例：styled：`{width:'100%'}`
 * @link tabsProps参数详见 https://ant.design/components/tabs-cn/#Tabs
 */
const SettingPanel: React.FC<SettingPanelProps> = (props) => {
  const {
    settingPanelStyled = {},
    tabsProps,
    panelData,
    panelConfig,
    componentMap,
    onSettingChange
  } = props;
  const { TabPane } = Tabs;

  // 渲染每个Tabs的面板
  const TabPaneRender = (tabsList?: PanelTabsType[]) => {
    return tabsList?.map((tabs) => {
      return (
        <TabPane key={tabs.tabsName} tab={tabs.tabsName}>
          <FormRender
            initialValues={panelData}
            componentList={tabs.componentList}
            onValuesChange={onSettingChange}
            componentMap={componentMap}
          />
        </TabPane>
      );
    });
  };

  return (
    <Wrapper
      className='SettingPanel'
      styled={styledToString(settingPanelStyled)}
    >
      <Tabs tabPosition='left' {...tabsProps}>
        {TabPaneRender((panelConfig as PanelConfigType)?.tabs)}
      </Tabs>
    </Wrapper>
  );
};

export default SettingPanel;
