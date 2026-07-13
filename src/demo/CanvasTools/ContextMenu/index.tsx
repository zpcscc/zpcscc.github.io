import { type FC } from 'react';
import MenuItem from './MenuItem';
import { defaultMenuData } from './defaultMenuData';
import type { MenuDataType } from './type';
import { calculationPosition } from './utils';

type ContextMenuProps = {
  open: boolean;
  // 菜单面板的定位
  position?: { left: number; top: number };
  menuData?: MenuDataType[];
};

// 菜单
const ContextMenu: FC<ContextMenuProps> = (props) => {
  const { open, menuData, position = { left: 0, top: 0 } } = props;
  const menuDataArr = menuData || defaultMenuData;
  // 计算面板渲染后的实际高度，用于计算定位。25为单个选项高度,
  const domHeight = menuDataArr.length * 25;
  const { left, top } = calculationPosition(position?.left || 0, position?.top || 0, domHeight);

  return (
    (open || null) && (
      <div
        className="min-w-[145px] z-[65535] absolute max-h-[400px] overflow-x-hidden overflow-y-auto bg-white border-1 border-solid border-[rgba(0,0,0,0.2)] shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
        style={{ left, top }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {menuDataArr?.map((data, index) => <MenuItem key={index} menuData={data} />)}
      </div>
    )
  );
};

export default ContextMenu;
