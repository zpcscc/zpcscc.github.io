// * 这里导出定制化的widget组件。不包含value与onChange字段的独立组件。不与外界数据产生交互
import AlertWidget from './AlertWidget';
import type { AlertWidgetProps } from './AlertWidget';
import ButtonWidget from './ButtonWidget';
import type { ButtonWidgetProps } from './ButtonWidget';
import ColWidget from './ColWidget';
import type { ColWidgetProps } from './ColWidget';
import DividerWidget from './DividerWidget';
import type { DividerWidgetProps } from './DividerWidget';
import RowWidget from './RowWidget';
import type { RowWidgetProps } from './RowWidget';
import TextWidget from './TextWidget';
import type { TextWidgetProps } from './TextWidget';
import TitleWidget from './TitleWidget';
import type { TitleWidgetProps } from './TitleWidget';

// 逐个导出所有widget
export {
  AlertWidget,
  ButtonWidget,
  ColWidget,
  DividerWidget,
  RowWidget,
  TextWidget,
  TitleWidget,
};

export type {
  AlertWidgetProps,
  ButtonWidgetProps,
  ColWidgetProps,
  DividerWidgetProps,
  RowWidgetProps,
  TextWidgetProps,
  TitleWidgetProps,
};

// 获取通用定制化组件
export const getWidget = (widgetType: string) => {
  const widgetMap = {
    AlertWidget,
    ButtonWidget,
    ColWidget,
    DividerWidget,
    RowWidget,
    TextWidget,
    TitleWidget,
  };

  return Reflect.get(widgetMap, widgetType);
};
