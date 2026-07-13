import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Cascade from '@/components/Cascade';
import Checkbox from '@/components/Checkbox';
import CheckboxGroup from '@/components/CheckboxGroup';
import Col from '@/components/Col';
import Collapse from '@/components/Collapse';
import CollapsePanel from '@/components/CollapsePanel';
import Divider from '@/components/Divider';
import Input from '@/components/Input';
import InputGroup from '@/components/InputGroup';
import InputNumber from '@/components/InputNumber';
import Modal from '@/components/Modal';
import MonacoEditor from '@/components/MonacoEditor';
import Options from '@/components/Options';
import PdfViewer from '@/components/PdfViewer';
import QuillEditor from '@/components/QuillEditor';
import RadioGroup from '@/components/RadioGroup';
import Row from '@/components/Row';
import Select from '@/components/Select';
import SimpleCodeEditor from '@/components/SimpleCodeEditor';
import Slider from '@/components/Slider';
import Space from '@/components/Space';
import Switch from '@/components/Switch';
import Text from '@/components/Text';
import TextArea from '@/components/TextArea';
import Title from '@/components/Title';
import VideoViewer from '@/components/VideoViewer';

import { type FC } from 'react';
import ErrorAlertWidget from './ErrorAlertWidget';

export type ComponentMapType = Record<string, FC<any>>;
export { default as ErrorAlertWidget, type ErrorAlertWidgetProps } from './ErrorAlertWidget';

// 组件库中的所有组件
export const componentsMap = {
  Alert,
  Button,
  Cascade,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CollapsePanel,
  Col,
  Divider,
  Input,
  InputNumber,
  InputGroup,
  Modal,
  MonacoEditor,
  Options,
  PdfViewer,
  QuillEditor,
  RadioGroup,
  Row,
  Select,
  SimpleCodeEditor,
  Slider,
  Space,
  Switch,
  Text,
  TextArea,
  Title,
  VideoViewer,
};

/**
 * @name 通过组件type获取对应的组件实例
 * @param componentType 组件类型
 * @param componentMap 外部传入的组件map
 * @returns
 */
export const getComponent = (componentType?: string, componentMap?: ComponentMapType): FC<any> => {
  if (!componentType) return ErrorAlertWidget;
  return Reflect.get({ ...componentsMap, ...componentMap }, componentType) || ErrorAlertWidget;
};
