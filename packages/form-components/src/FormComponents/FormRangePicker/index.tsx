import React from 'react';
import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';
import { Wrapper } from './Styled';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

export type FormRangePickerProps = RangePickerProps & {
  styled?: string;
  onChange?: (formatString: [string, string]) => void;
};

/**
 * @name 日期范围选择框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param picker 选择器类型
 * @link 其他参数详见 https://ant.design/components/date-picker-cn/
 */
const FormRangePicker: React.FC<FormRangePickerProps> = (props) => {
  const { value, picker, styled, onChange, ...rest } = props;
  const { RangePicker } = DatePicker;

  const onValueChange = (_values: Any, formatString: [string, string]) => {
    onChange && onChange(formatString);
  };

  return (
    <Wrapper styled={styled}>
      <RangePicker
        locale={locale}
        picker={picker}
        value={
          value?.[0] && [
            moment(value?.[0], 'YYYY-MM-DD HH:mm'),
            moment(value?.[1], 'YYYY-MM-DD HH:mm'),
          ]
        }
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        onChange={onValueChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormRangePicker;
