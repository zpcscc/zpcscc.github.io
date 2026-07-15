import type { FC } from 'react';
import { Select } from 'antd';
import { MODEL_OPTIONS } from '../../config';

type ModelSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

const ModelSelector: FC<ModelSelectorProps> = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    options={[...MODEL_OPTIONS]}
    size="small"
    style={{ width: '100%' }}
  />
);

export default ModelSelector;
