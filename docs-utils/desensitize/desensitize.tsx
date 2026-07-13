import { DesensitizeList, type DesensitizeType } from '../../src/utils/desensitize';
import desensitize from '../../src/utils/desensitize';
import { Input, Select, Space } from 'antd';
import { useState, type ChangeEvent, type FC } from 'react';

const Desensitize: FC = () => {
  const [input, setInput] = useState<string>('');
  const [type, setType] = useState<DesensitizeType>();
  const [result, setResult] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e?.target?.value);
    setResult(desensitize(e?.target?.value, type));
  };

  const onTypeChange = (typeValue: DesensitizeType) => {
    setType(typeValue);
    setResult(desensitize(input, typeValue));
  };

  return (
    <Space wrap>
      <Input
        style={{ width: '300px' }}
        value={input}
        placeholder='请输入需要脱敏的数据'
        onChange={onChange}
      />
      <Space.Compact>
        <Select defaultValue={type} onChange={onTypeChange} style={{ width: '120px' }}>
          {DesensitizeList.map((item) => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
        <Input
          style={{ width: '300px' }}
          value={String(result)}
        />
      </Space.Compact>
    </Space>
  );
};

export default Desensitize;
