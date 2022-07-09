import type { PanelConfigType } from '../index';
import type { RuleObject } from 'antd/lib/form';

export const jsonPanelSetting: PanelConfigType = {
  id: 'Tabs',
  type: 'Tabs',
  tabs: [
    {
      id: 'baseSetting',
      tabsName: '基本设置',
      componentList: [
        {
          id: 'Row',
          name: 'Row',
          type: 'RowWidget',
          props: {
            wrap: false,
            styled: {
              '.ant-col': {
                color: '#666699',
                '&': {
                  '.ant-alert-message': {
                    'font-size': '12px',
                  },
                },
              },
            },
          },
          children: [
            {
              id: 'Col',
              name: 'Col1',
              type: 'ColWidget',
              props: {
                span: 8,
              },
              children: [
                {
                  id: 'warning',
                  name: 'warning1',
                  type: 'AlertWidget',
                  props: {
                    message: '这里是一条警告提示信息',
                    type: 'warning',
                    showIcon: true,
                  },
                },
              ],
            },
            {
              id: 'Col',
              name: 'Col2',
              type: 'ColWidget',
              props: {
                span: 8,
              },
              children: [
                {
                  id: 'warning',
                  name: 'warning2',
                  type: 'AlertWidget',
                  props: {
                    message: '这里是一条警告提示信息',
                    type: 'warning',
                    showIcon: true,
                  },
                },
                {
                  id: 'warning3',
                  name: 'warning3',
                  type: 'AlertWidget',
                  props: {
                    message: '这里是一条警告提示信息',
                    type: 'warning',
                    showIcon: true,
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'warning',
          label: '',
          name: 'warning5',
          type: 'AlertWidget',
          props: {
            message: '这里是一条警告提示信息',
            type: 'warning',
            showIcon: true,
          },
        },
        {
          id: 'RangePicker',
          label: '日期范围输入框',
          name: 'RangePicker',
          type: 'FormRangePicker',
        },
        {
          id: 'title',
          label: '活动标题',
          name: 'title',
          type: 'FormInput',
          rules: [
            { required: true, message: '不能为空' },
            {
              validator: (_rule: RuleObject, value: any) => {
                if (value === '标题') {
                  return Promise.reject(new Error('标题不能设置为标题'));
                } else {
                  return Promise.resolve(new Error());
                }
              },
            },
          ],
          props: {
            placeholder: '请输入活动标题',
          },
        },
        {
          id: 'rules',
          label: '活动规则说明',
          name: 'rules',
          type: 'FormRichText',
          props: {
            placeholder: '请输入活动规则',
          },
        },
      ],
    },
    {
      id: 'ruleSetting',
      tabsName: '规则设置',
      componentList: [
        {
          id: 'draw_rule',
          label: '抽奖规则',
          name: 'draw_rule',
          type: 'FormSelect',
          props: {
            placeholder: '请选择规则',
            optionsConfig: {
              type: 'Radio',
              defaultValue: 'total',
              options: [
                {
                  label: '总计',
                  value: 'total',
                  checked: false,
                  id: '0',
                },
                {
                  label: '每天',
                  value: 'everyday',
                  checked: false,
                  id: '1',
                },
              ],
            },
          },
        },
        {
          id: 'win_num_each_one',
          label: '每人最多抽中次数',
          name: 'win_num_each_one',
          type: 'FormSelect',
          props: {
            placeholder: '请选择每人最多抽中次数',
            optionsConfig: {
              type: 'Radio',
              defaultValue: 'null',
              options: [
                { label: '1', value: '1', checked: false, id: '0' },
                { label: '2', value: '2', checked: false, id: '1' },
                { label: '3', value: '3', checked: false, id: '2' },
                { label: '4', value: '4', checked: false, id: '3' },
                { label: '5', value: '5', checked: false, id: '4' },
                {
                  label: '不限',
                  value: 'null',
                  checked: false,
                  id: '5',
                },
              ],
            },
          },
        },
        {
          id: 'show_activity',
          label: '显示活动时间',
          name: 'show_activity',
          type: 'FormSwitch',
        },
      ],
    },
    {
      id: 'formSetting',
      tabsName: '表单设置',
      componentList: [
        {
          id: 'need_user_info',
          label: '收集用户信息',
          name: 'need_user_info',
          type: 'FormSwitch',
          children: [
            {
              id: 'name',
              label: '姓名',
              name: 'name',
              type: 'FormInput',
            },
            {
              id: 'sex',
              label: '性别',
              name: 'sex',
              type: 'FormRadio',
              props: {
                optionsConfig: {
                  type: 'Radio',
                  defaultValue: '0',
                  options: [
                    { label: '男', value: '0', checked: false, id: '0' },
                    { label: '女', value: '1', checked: false, id: '1' },
                  ],
                },
              },
            },
            {
              id: 'introduction',
              label: '个人简介',
              name: 'introduction',
              type: 'FormTextArea',
            },
          ],
        },
      ],
    },
    {
      id: 'tableSetting',
      tabsName: '表格设置',
      componentList: [
        {
          id: 'CommonTable',
          label: '奖项列表',
          name: 'Table',
          type: 'FormTable',
          props: {
            columns: [
              {
                title: '序号',
                dataIndex: 'key',
                width: '100px',
                align: 'center',
              },
              {
                title: '贺词内容',
                dataIndex: 'message',
                align: 'center',
              },
            ],
            componentList: [
              {
                id: 'message',
                label: '贺词内容',
                name: 'message',
                type: 'FormTextArea',
                rules: [{ required: true, message: '不能为空' }],
              },
            ],
          },
        },
      ],
    },
  ],
};
