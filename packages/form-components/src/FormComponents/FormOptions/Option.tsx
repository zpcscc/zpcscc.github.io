import React from 'react';
import { Input, Radio, Checkbox, Space, Tooltip } from 'antd';
import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { OptionWrapper } from './Styled';
import type { OptionType, OptionSelectType } from '../../type';

export interface OptionProps {
  type: OptionSelectType;
  option: OptionType;
  onOptionChange: (option: OptionType) => void;
  onCheckedChange: (id: OptionType['id']) => void;
  onRemoveOption: (id: OptionType['id']) => void;
}

// 单个选项
const Option: React.FC<OptionProps> = (props) => {
  const { type, option, onOptionChange, onCheckedChange, onRemoveOption } =
    props;
  const { id, checked, label } = option;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: option.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? '',
  };

  return (
    <OptionWrapper ref={setNodeRef} style={style} {...attributes}>
      <Input
        defaultValue={label}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onOptionChange({
            ...option,
            label: event.target.value,
            value: event.target.value,
          });
        }}
        prefix={
          <MenuOutlined
            {...listeners}
            style={{ cursor: 'pointer', marginRight: '10px' }}
          />
        }
        suffix={
          <Space>
            <Tooltip placement="top" title="默认选中项" mouseEnterDelay={2}>
              {type === 'Checkbox' ? (
                <Checkbox
                  checked={checked}
                  onClick={() => onCheckedChange(id)}
                />
              ) : (
                <Radio checked={checked} onClick={() => onCheckedChange(id)} />
              )}
            </Tooltip>
            <Tooltip placement="top" title="删除当前项" mouseEnterDelay={2}>
              <CloseCircleOutlined
                style={{ cursor: 'pointer', color: 'rgba(128,128,128.0.5)' }}
                onClick={() => onRemoveOption(id)}
              />
            </Tooltip>
          </Space>
        }
        bordered={false}
        // maxLength={50}
      />
    </OptionWrapper>
  );
};

export default Option;
