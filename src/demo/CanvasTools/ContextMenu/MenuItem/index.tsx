import { Space } from 'antd';
import { type FC, type MouseEvent } from 'react';
import type { MenuDataType } from '../type';

type MenuItemProps = {
  menuData: MenuDataType;
};

// 单个菜单项
const MenuItem: FC<MenuItemProps> = ({ menuData }) => {
  const { label = '', icon = '', onClick } = menuData;

  const onHandleClick = (e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
  };

  return (
    <button
      type='button'
      className='w-full h-24px flex justify-start items-center p-[2px_5px] color-[#333333] font-normal text-size-12px whitespace-nowrap cursor-pointer hover:color-[#ffffff] hover:bg-[#0081c2] hover:bg-gradient-to-b hover:from-[#0088cc] hover:to-[#0077b3] border-none bg-transparent'
      onClick={onHandleClick}
    >
      <Space className='pointer-events-none' align='center' size={5}>
        {icon}
        <span className='menu-action'>{label}</span>
      </Space>
    </button>
  );
};

export default MenuItem;
