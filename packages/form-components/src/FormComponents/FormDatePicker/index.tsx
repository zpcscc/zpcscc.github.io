import React from 'react';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd/lib/date-picker';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import type { Moment } from 'moment';
import 'moment/locale/zh-cn';
import { Wrapper } from './Styled';
moment.locale('zh-cn');

export type FormDatePickerProps = Omit<DatePickerProps, 'picker'> & {
  styled?: string;
  picker?: 'date' | 'time' | 'week' | 'month' | 'quarter' | 'year' | undefined;
  onChange?: (dateString: string) => void;
};

/**
 * @name 日期选择框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/date-picker-cn/
 */
const FormDatePicker: React.FC<FormDatePickerProps> = (props) => {
  const { value, picker, styled, onChange, ...rest } = props;

  const onValueChange = (_momentValue: Moment | null, dateString: string) => {
    onChange && onChange(dateString);
  };

  return (
    <Wrapper styled={styled}>
      <DatePicker
        locale={locale}
        picker={picker}
        value={value ? moment(value, 'YYYY-MM-DD HH:mm') : undefined}
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        onChange={onValueChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormDatePicker;
