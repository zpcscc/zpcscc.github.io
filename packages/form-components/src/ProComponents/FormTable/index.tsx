import React, { Fragment, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import type { ButtonProps, FormInstance } from 'antd';
import type { TableProps, ColumnsType } from 'antd/lib/table';
import type { ModalProps } from 'antd/lib/modal';
import { isEmpty, uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import { FormRender } from '../../FormJsonPanel/FormRender';
import type { ComponentType, FieldErrorType } from '../../FormJsonPanel/type';
import { validatePanelValue } from '../../FormJsonPanel/utils';
import type { RecordType } from './type';
import { addRules } from './utils';
import ActionRender from './ActionRender';
import { Global, css } from '@emotion/react';
import { GlobalStyle } from './Styled';

export interface FormTableProps {
  // 表格每行的数据列表
  value?: RecordType[];
  // 按钮文案
  buttonText?: string;
  // 表格字段
  columns?: ColumnsType<RecordType>;
  // 弹出框表单组件列表
  componentList?: ComponentType[];
  // 弹出框表单组件，自定义组件
  componentMap?: AnyObject;
  // 是否开启只读(不允许编辑与删除)
  readonly?: boolean;
  // 内置按钮组件参数
  ButtonFCProps?: ButtonProps;
  // 内置表格组件参数
  TableFCProps?: TableProps<RecordType>;
  // 内置弹出框组件参数
  ModalFCProps?: ModalProps;
  // 自定义css样式
  styled?: string;
  // 数据变更
  onChange?: (dataSource: RecordType[]) => void;
}

// ** 表单组件较特殊，放入jsonPanel的组件中，避免循环依赖

/**
 * @name 数据表格
 * @param value 表格每行的数据列表
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param buttonText 按钮文案
 * @param columns 表格字段
 * @param componentList 弹出框表单组件列表
 * @param componentMap 弹出框表单组件，自定义组件
 * @param readonly 是否开启只读(不允许编辑与删除)
 * @param ButtonFCProps 内置按钮组件参数
 * @param TableFCProps 内置表格组件参数
 * @param ModalFCProps 内置弹出框组件参数
 * @link ButtonFCProps参数详见 https://ant.design/components/button-cn/
 * @link TableFCProps参数详见 https://ant.design/components/table-cn/
 * @link ModalFCProps参数详见 https://ant.design/components/modal-cn/
 */
const FormTable: React.FC<FormTableProps> = (props) => {
  const {
    value = [],
    buttonText = '添加',
    columns = [],
    componentList,
    componentMap,
    readonly = false,
    ButtonFCProps = {},
    TableFCProps = {},
    ModalFCProps = {},
    styled,
    onChange,
  } = props;
  // 控制是否显示表格编辑面板
  const [visibleModal, setVisibleModal] = useState(false);
  // 获取奖品列表
  const [dataSource, setDataSource] = useState<RecordType[]>(value);
  // 弹出框的默认值
  const [modalValues, setModalValues] = useState<AnyObject>({});
  // 弹出框的类型：新增或编辑
  const [tableModalType, setTableModalType] = useState<'add' | 'editor'>('add');
  // 保存表单修改后的数据
  let changesValues: RecordType = modalValues;
  // 校验报错信息
  let formFieldsError: FieldErrorType;

  // 更新表格数据
  const update = (dataList: RecordType[]) => {
    const dataSourceValue = [...dataList];
    // 处理表单返回的奖品列表数据，使之符合表格的数据格式
    dataSourceValue.forEach((item: RecordType, index: number) => {
      // 重新给数据添加key用于表格组件渲染，序号
      dataSourceValue[index].key = index + 1;
      // 为没有id的组件添加唯一id，用于删除时找到对应的内容
      if (!item.id) dataSourceValue[index].id = uniqueId() + index;
    });
    setDataSource(dataSourceValue);
    onChange && onChange(dataSourceValue);
    return dataSourceValue;
  };

  // 弹框表单数据改变时，保存到state中
  const onValuesChange = (
    _changedValues: RecordType,
    values: RecordType,
    form: FormInstance<any>
  ) => {
    // 需稍微延迟一下，才能获取到最新的验证情况。
    setTimeout(() => {
      const newFormFieldsError = {} as FieldErrorType;
      // eslint-disable-next-line no-unused-expressions
      form.getFieldsError()?.forEach((item) => {
        if (item?.name?.[0]) newFormFieldsError[item.name[0]] = item;
      });
      formFieldsError = { ...formFieldsError, ...newFormFieldsError };
    });
    changesValues = { ...changesValues, ...values };
  };

  //  打开编辑当前奖项面板
  const onAdd = (addValue: RecordType) => {
    // 添加数据
    update([...dataSource, addValue]);
  };

  // 删除当前项
  const onDelete = (deleteValue: RecordType) => {
    // 过滤获取没有被删除的奖品
    const newDeleteSource = dataSource.filter(
      (item) => item.id !== deleteValue.id
    );
    // 更新表格数据
    update([...newDeleteSource]);
  };

  //  打开编辑当前奖项面板
  const onEditor = (editorValue: RecordType) => {
    // 编辑奖品
    const newDataSource = dataSource.map((item: RecordType) =>
      item.id === modalValues.id ? editorValue : item
    );
    update([...newDataSource]);
  };

  // 处理弹框返回值
  const onModalSubmit = () => {
    // 关闭弹出框之前，检查数据是否通过校验
    if (
      !validatePanelValue(formFieldsError, {
        tabs: [
          {
            componentList: componentList || [],
          },
        ],
      })
    ) {
      return;
    }
    // 关闭弹出框
    setVisibleModal(false);
    // 若数据为空，则不做处理
    if (isEmpty(changesValues)) return;
    // 添加数据
    if (tableModalType === 'add') onAdd(changesValues);
    // 编辑数据
    if (tableModalType === 'editor') onEditor(changesValues);
  };

  // 打开弹出框
  const onOpenModal = (type: 'add' | 'editor', value?: RecordType) => {
    // 设置弹出框类型
    setTableModalType(type);
    // 打开弹框时，清空上个修改的值；
    changesValues = {};
    // 打开添加弹出框时，设置弹出框需显示的数据
    if (type === 'add') setModalValues({});
    if (type === 'editor') setModalValues(value || {});
    // 打开弹出框
    setVisibleModal(true);
  };

  // 获取columns，并添加编辑，删除操作属性
  const getColumns = () => {
    const actionRender: ColumnsType<RecordType> = ActionRender(
      columns,
      readonly,
      onOpenModal,
      onDelete
    );
    return [...columns, ...actionRender];
  };

  return (
    <Fragment>
      <Global
        styles={css`
          ${GlobalStyle}
        `}
      />
      <Wrapper styled={styled}>
        <Button
          className="AddButton"
          type="primary"
          onClick={() => onOpenModal('add')}
          {...ButtonFCProps}
        >
          {buttonText}
        </Button>
        <Table
          columns={readonly ? columns : getColumns() || []}
          dataSource={dataSource}
          locale={{ emptyText: '暂无数据' }}
          {...TableFCProps}
        />
        <Modal
          className="TableModal"
          title="表格配置"
          okText="确定"
          cancelText="取消"
          zIndex={1040}
          visible={visibleModal}
          onOk={onModalSubmit}
          onCancel={() => setVisibleModal(false)}
          destroyOnClose
          {...ModalFCProps}
        >
          <FormRender
            initialValues={modalValues}
            componentList={addRules(componentList) || ([] as ComponentType[])}
            componentMap={componentMap || {}}
            onValuesChange={onValuesChange}
          />
        </Modal>
      </Wrapper>
    </Fragment>
  );
};

export default FormTable;
