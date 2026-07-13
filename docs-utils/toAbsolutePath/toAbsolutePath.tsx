import toAbsolutePath from '@/utils/toAbsolutePath';
import { CopyOutlined } from '@ant-design/icons';
import { Button, Input, message, Space, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState, type ChangeEvent, type FC } from 'react';

const clipboard = new ClipboardJS('.copy-btn');

const ToAbsolutePath: FC = () => {
  const [input, setInput] = useState<string>('/utils/utils_docs/get-color');
  const [result, setResult] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    setResult(toAbsolutePath(input));
  };

  useEffect(() => {
    clipboard.on('success', () => message.success('复制成功'));
  }, []);

  return (
    <Space wrap>
      <Space.Compact>
        <Input value='相对路径' readOnly style={{ width: 'auto', textAlign: 'center' }} />
        <Input style={{ width: '240px' }} defaultValue={input} onChange={onChange} />
      </Space.Compact>
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Space>
        <Space.Compact>
          <Input value='绝对路径' readOnly style={{ width: 'auto', textAlign: 'center' }} />
          <Input style={{ width: '350px' }} value={result} />
        </Space.Compact>
        <Tooltip title='复制'>
          <Button icon={<CopyOutlined />} className='copy-btn' data-clipboard-text={result} />
        </Tooltip>
        <Button type='primary' href={result} target='_blank'>
          跳转
        </Button>
      </Space>
    </Space>
  );
};

export default ToAbsolutePath;
