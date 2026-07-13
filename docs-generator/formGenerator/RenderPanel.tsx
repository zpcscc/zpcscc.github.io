import MonacoEditor from '@/components/MonacoEditor';
import Title from '@/components/Title';
import { type ComponentItemType } from '@/generator/types';
import toData from '@/utils/toData';
import toString from '@/utils/toString';
import { Render } from '@site/src/generator/Render';
import { Space } from 'antd';
import { useState, type ComponentProps, type FC } from 'react';
import { pageData } from './RenderPanelMock';

type SpaceProps = ComponentProps<typeof Space>;

export const RenderSpace: FC<SpaceProps> = (props) => {
  return (
    <>
      <style>{`
          .render-space > .ant-space-item:last-child {
            height: 500px;
            width: 450px;
            overflow: auto;
          }
        `}</style>
      <Space className='render-space' {...props} />
    </>
  );
};

// 渲染器
const RenderPanel: FC = () => {
  const [value, setValue] = useState<ComponentItemType[]>(pageData);

  const onChange = (value?: string) => {
    const newValueData = toData(value);
    // 是正确的数组，再更新数据
    if (Array.isArray(newValueData)) {
      setValue(newValueData);
    }
  };

  const onValuesChange = (changeValue?: AnyObject, values?: AnyObject) => {
    console.log('changeValue:', changeValue);
    console.log('values:', values);
  };

  return (
    <Space className='u-center-around' align='start'>
      <Space orientation='vertical'>
        <Title>代码编辑器</Title>
        <MonacoEditor
          defaultValue={toString(value, null, 2)}
          height={500}
          width={500}
          language='json'
          onChange={onChange}
        />
      </Space>
      <RenderSpace orientation='vertical'>
        <Title>实时预览渲染效果</Title>
        <Render componentItems={value} onChange={onValuesChange} />
      </RenderSpace>
    </Space>
  );
};

export default RenderPanel;
