import Input from '@/components/Input';
import { type InputProps as AntInputProps } from 'antd/lib/input';
import { useState, type FC } from 'react';

export type InputGroupProps = {
  value?: string[];
  placeholders?: string[];
  level?: number;
  onChange?: (value: string[]) => void;
} & Omit<AntInputProps, 'onChange' | 'placeholder'>;

const InputGroup: FC<InputGroupProps> = (props) => {
  const { value = [], placeholders = [], level = 2, onChange, ...rest } = props;
  const [valueArr, setValueArr] = useState<string[]>(Array.isArray(value) ? value : []);

  const onInputChange = (value: string, index: number) => {
    const newValueArr = [...valueArr];
    newValueArr[index] = value;
    setValueArr(newValueArr);
    onChange?.(newValueArr);
  };

  return (
    <div className='flex flex-col gap-2'>
      {Array(level)
        .fill('')
        .map((_item, index) => (
          <Input
            key={index}
            defaultValue={valueArr[index] || ''}
            placeholder={placeholders[index] || '请输入...'}
            onChange={(value) => onInputChange(value, index)}
            {...rest}
          />
        ))}
    </div>
  );
};

export default InputGroup;
