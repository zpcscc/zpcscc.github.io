import { type SpaceProps } from '@/components/Space';
import { type FieldConfigType } from '@/generator/types';
import { spaceConfig } from './config';

const space: FieldConfigType<SpaceProps> = {
  label: '间隔',
  componentItem: {
    id: 'space',
    type: 'Space',
    props: {
      direction: 'horizontal',
      align: 'start',
    },
  },
  configPanel: spaceConfig,
};

export default space;
