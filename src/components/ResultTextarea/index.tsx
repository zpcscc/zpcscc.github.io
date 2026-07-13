import Space from '@/components/Space';
import Text from '@/components/Text';
import TextArea from '@/components/TextArea';
import toString from '@/utils/toString';
import { type FC } from 'react';

export type ResultTextareaProps = {
  value: any;
};

/**
 * @name 结果文本域，用于展示组件返回的值
 */
const ResultTextarea: FC<ResultTextareaProps> = (props) => {
  const { value, ...rest } = props;
  return (
    <Space orientation='vertical' {...rest}>
      <Text>onChange返回的结果</Text>
      <TextArea className='w-300px' value={toString(value)} />
    </Space>
  );
};

export default ResultTextarea;
