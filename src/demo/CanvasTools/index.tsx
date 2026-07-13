import { useLatest } from 'ahooks';
import { Modal } from 'antd';
import { ActiveSelection, Canvas, Group, PencilBrush, type FabricObject, type Path, type TPointerEventInfo } from 'fabric';
import { Fragment, useEffect, useRef, useState, type FC } from 'react';
import ContextMenu from './ContextMenu';
import type { MenuDataType } from './ContextMenu/type';
import Panel from './Panel';
import type { PanelOptType } from './type';
import drawArrow from './utils/drawArrow';

const CanvasTools: FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const canvas = useRef<Canvas | null>(null);
  const target = useRef<FabricObject | null>(null);
  const clipboard = useRef<FabricObject | null>(null);
  const defaultOpt = {
    width: 3,
    color: '#66ccff',
    backgroundColor: '#66ccff',
    showArrow: false,
    showBackground: false,
    isDrawingMode: true,
  };
  const [opt, setOpt] = useState<PanelOptType>(defaultOpt);
  const [modalOpt, setModalOpt] = useState<PanelOptType>({});
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [menuData, setMenuData] = useState<MenuDataType[]>([]);
  const optRef = useLatest(opt);

  const blankMenuData: MenuDataType[] = [
    {
      label: '粘贴',
      onClick: () => {
        setOpen(false);
        if (!clipboard.current) {
          alert('还没复制过任何内容');
          return;
        }
        clipboard.current.clone([]).then((clonedObj) => {
          if (!clipboard.current) return;
          clonedObj.set({ left: clonedObj.left + 10, top: clonedObj.top + 10, evented: true });
          if (clonedObj instanceof ActiveSelection) {
            clonedObj.canvas = canvas.current ?? undefined;
            clonedObj.forEachObject((obj: FabricObject) => {
              canvas.current?.add(obj);
            });
            clonedObj.setCoords();
          } else {
            canvas.current?.add(clonedObj);
          }
          clipboard.current.top = (clipboard.current.top ?? 0) + 10;
          clipboard.current.left = (clipboard.current.left ?? 0) + 10;
          canvas.current?.renderAll();
        });
      },
    },
  ];

  const overlayMenuData: MenuDataType[] = [
    {
      label: '复制',
      onClick: () => {
        setOpen(false);
        if (target.current) {
          target.current.clone([]).then((cloned) => {
            clipboard.current = cloned;
          });
        }
      },
    },
    ...blankMenuData,
    {
      label: '删除',
      onClick: () => {
        setOpen(false);
        if (target.current) canvas.current?.remove?.(target.current);
        target.current = null;
      },
    },
    {
      label: '设置',
      onClick: () => {
        setOpen(false);
        const group = target.current instanceof Group ? target.current : null;
        const fillValue = group?.item(0)?.fill ?? target.current?.fill;
        const fillStr = typeof fillValue === 'string' ? fillValue : undefined;
        setModalOpt({
          color: (group?.item(0)?.stroke as string) || (target.current?.stroke as string) || optRef.current.color,
          width:
            group?.item(0)?.strokeWidth ||
            target.current?.strokeWidth ||
            optRef.current.width,
          backgroundColor:
            fillStr && fillStr !== 'rgb(0,0,0)' ? fillStr : optRef.current.backgroundColor,
          showBackground: Boolean(fillStr && fillStr !== 'rgb(0,0,0)'),
          showArrow: Boolean(
            group?.item(1) && group?.item(1).get('opacity') === 1,
          ),
        });
        setIsModalOpen(true);
      },
    },
  ];

  const initFreeDrawingBrush = (canvas: Canvas) => {
    canvas.freeDrawingBrush = new PencilBrush(canvas);
    canvas.freeDrawingBrush.color = defaultOpt.color;
    canvas.freeDrawingBrush.width = defaultOpt.width;
  };

  const updateCanvasContext = (canvas: Canvas) => {
    if (!canvas) return;
    initFreeDrawingBrush(canvas);
  };

  const getPagePosition = (e: MouseEvent | TouchEvent | PointerEvent) => {
    if ('pageX' in e) return { left: e.pageX, top: e.pageY };
    if ('touches' in e && e.touches.length > 0) return { left: e.touches[0].pageX, top: e.touches[0].pageY };
    return { left: 0, top: 0 };
  };

  const bindEvent = (canvas: Canvas) => {
    canvas.on('mouse:down', (opt: TPointerEventInfo & { button: number; alreadySelected: boolean }) => {
      const { button, e } = opt;
      if (button === 3) {
        if (opt.target) {
          target.current = opt.target;
          setMenuData(overlayMenuData);
        } else {
          setMenuData(blankMenuData);
        }
        setPosition(getPagePosition(e));
        setOpen(true);
      } else {
        target.current = null;
        setOpen(false);
      }
    });
    canvas.on('path:created', ({ path }: { path: Path }) => {
      if (optRef.current.showBackground) path.set('fill', optRef.current.backgroundColor);
      if (optRef.current.showArrow) {
        drawArrow(canvas, path, {
          stroke: optRef.current.color,
          strokeWidth: optRef.current.width,
        });
      }
    });
  };

  const onOptChange = (type: keyof PanelOptType, opt: PanelOptType) => {
    setOpt(opt);
    if (!canvas.current) return;
    switch (type) {
      case 'isDrawingMode': {
        canvas.current.isDrawingMode = opt.isDrawingMode ?? false;
        break;
      }
      case 'color':
      case 'width': {
        if (canvas.current.freeDrawingBrush) {
          canvas.current.freeDrawingBrush[type] = opt[type] as never;
        }
        break;
      }
    }
  };

  const setTargetOpt = () => {
    if (!target.current || !canvas.current) return;
    const group = target.current instanceof Group ? target.current : null;
    if (!modalOpt.showBackground) {
      group?.item(0)?.set('fill', undefined);
      target.current?.set('fill', undefined);
    }
    if (modalOpt.backgroundColor && modalOpt.showBackground) {
      group?.item(0)?.set('fill', modalOpt.backgroundColor);
      group?.item(1)?.set('fill', modalOpt.backgroundColor);
      group?.item(2)?.set('fill', modalOpt.backgroundColor);
      target.current?.set?.('fill', modalOpt.backgroundColor);
    }
    if (modalOpt.color) {
      group?.item(0)?.set('stroke', modalOpt.color);
      group?.item(1)?.set('stroke', modalOpt.color);
      group?.item(2)?.set('stroke', modalOpt.color);
      target.current?.set('stroke', modalOpt.color);
    }
    if (modalOpt.width) {
      group?.item(0)?.set('strokeWidth', modalOpt.width);
      group?.item(1)?.set('strokeWidth', modalOpt.width);
      group?.item(2)?.set('strokeWidth', modalOpt.width);
      target.current?.set('strokeWidth', modalOpt.width);
    }
    if (modalOpt.showArrow) {
      if (group?.item(1)) {
        group?.item(1).set('opacity', 1);
        group?.item(2).set('opacity', 1);
      } else {
        drawArrow(canvas.current, target.current as Path, {
          stroke: optRef.current.color,
          strokeWidth: optRef.current.width,
        });
      }
    } else if (group?.item(1)) {
      group?.item(1).set('opacity', 0);
      group?.item(2).set('opacity', 0);
    }
    setIsModalOpen(false);
    setModalOpt({});
    canvas.current.renderAll();
  };

  useEffect(() => {
    const containerDom: HTMLElement | null = document.querySelector('#container');
    if (containerDom && canvasEl.current) {
      const { offsetWidth, offsetHeight } = containerDom;
      canvas.current = new Canvas(canvasEl.current, {
        width: offsetWidth,
        height: offsetHeight,
        isDrawingMode: defaultOpt.isDrawingMode,
        fireRightClick: true,
        stopContextMenu: true,
      });
      updateCanvasContext(canvas.current);
      bindEvent(canvas.current);
    }
    return () => {
      canvas?.current?.dispose();
    };
  }, []);

  return (
    <Fragment>
      <Panel opt={opt} onOptChange={onOptChange} />
      <div id='container' className='w-full h-[56vh] border-1 border-solid border-#999 relative [&_#canvas-tools-container]:w-full [&_#canvas-tools-container]:h-full [&_#canvas-tools-container]:absolute'>
        <canvas id='canvas-tools-container' ref={canvasEl} />
      </div>
      <ContextMenu open={open} position={position} menuData={menuData} />
      <Modal
        title='配置当前对象'
        open={isModalOpen}
        width={600}
        okText='确定'
        cancelText='取消'
        onOk={setTargetOpt}
        onCancel={() => setIsModalOpen(false)}
      >
        <Panel type='local' opt={modalOpt} onOptChange={(_type, opt) => setModalOpt(opt)} />
      </Modal>
    </Fragment>
  );
};

export default CanvasTools;
