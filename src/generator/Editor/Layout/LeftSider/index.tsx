import leftSortableItemsState from '@/generator/Editor/atoms/leftSortableItemsState';
import * as containerConfigMap from '@/generator/fieldConfig/container';
import * as displayConfigMap from '@/generator/fieldConfig/display';
import * as formConfigMap from '@/generator/fieldConfig/form';
import { SortableContext } from '@dnd-kit/sortable';
import { Space, Typography } from 'antd';
import { type FC } from 'react';
import { useRecoilValue } from 'recoil';
import ButtonItem from './ButtonItem';

const fieldConfig = {
  表单组件: formConfigMap,
  '容器布局组件(开发中，未完成)': containerConfigMap,
  展示组件: displayConfigMap,
};

// 左侧组件列表
const LeftSider: FC = () => {
  const leftSortableItems = useRecoilValue(leftSortableItemsState);

  return (
    <div className='w-64 flex-shrink-0 pt-2 px-2 overflow-y-auto h-full [&_h5]:ml-2.5 [&_.ant-space]:w-[208px] [&_.ant-space]:flex [&_.ant-space]:justify-start [&_.ant-space]:mx-auto'>
      <SortableContext items={leftSortableItems}>
        {Object.entries(fieldConfig).map(([categoryName, configList]) => {
          return (
            <Typography key={categoryName}>
              <Typography.Title level={5}>{categoryName}:</Typography.Title>
              <Space size={[8, 16]} wrap>
                {Object.entries(configList).map(([fieldName, config]) => (
                  <ButtonItem key={fieldName} fieldConfig={config} />
                ))}
              </Space>
            </Typography>
          );
        })}
      </SortableContext>
    </div>
  );
};

export default LeftSider;
