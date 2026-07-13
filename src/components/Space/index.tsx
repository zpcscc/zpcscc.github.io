import { type SpaceProps as AntdSpaceProps, Space as AntdSpace } from 'antd';
import { type FC } from 'react';

export type SpaceProps = AntdSpaceProps;

/**
 * @name Space 间距
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */
const Space: FC<SpaceProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <AntdSpace className='w-full' {...rest}>
      {children}
    </AntdSpace>
  );
};

export default Space;
