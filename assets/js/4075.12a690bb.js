"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[4075],{

/***/ 12288
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ portal_es)
});

// UNUSED EXPORTS: inlineMock

// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.12.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/util/es/index.js + 14 modules
var es = __webpack_require__(83704);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/index.js
var react_dom = __webpack_require__(98481);
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/Context.js

const OrderContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const Context = (OrderContext);
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/mock.js
let inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === 'boolean') {
    inline = nextInline;
  }
  return inline;
}
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/useDom.js



const EMPTY_LIST = [];

/**
 * Will add `div` to document. Nest call will keep order
 * @param render Render DOM in document
 */
function useDom(render, debug) {
  const [ele] = react.useState(() => {
    if (!(0,es/* canUseDom */.OC)()) {
      return null;
    }
    const defaultEle = document.createElement('div');
    if (false) // removed by dead control flow
{}
    return defaultEle;
  });

  // ========================== Order ==========================
  const appendedRef = react.useRef(false);
  const queueCreate = react.useContext(Context);
  const [queue, setQueue] = react.useState(EMPTY_LIST);
  const mergedQueueCreate = queueCreate || (appendedRef.current ? undefined : appendFn => {
    setQueue(origin => {
      const newQueue = [appendFn, ...origin];
      return newQueue;
    });
  });

  // =========================== DOM ===========================
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup() {
    ele.parentElement?.removeChild(ele);
    appendedRef.current = false;
  }
  ;(0,es/* useLayoutEffect */.Nf)(() => {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup();
    }
    return cleanup;
  }, [render]);
  (0,es/* useLayoutEffect */.Nf)(() => {
    if (queue.length) {
      queue.forEach(appendFn => appendFn());
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/util.js
/**
 * Test usage export. Do not use in your production
 */
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/useScrollLocker.js



const UNIQUE_ID = `rc-util-locker-${Date.now()}`;
let uuid = 0;
function useScrollLocker(lock) {
  const mergedLock = !!lock;
  const [id] = react.useState(() => {
    uuid += 1;
    return `${UNIQUE_ID}_${uuid}`;
  });
  (0,es/* useLayoutEffect */.Nf)(() => {
    if (mergedLock) {
      const scrollbarSize = (0,es/* getTargetScrollBarSize */.V)(document.body).width;
      const isOverflow = isBodyOverflowing();
      (0,es/* updateCSS */.BD)(`
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ''}
}`, id);
    } else {
      (0,es/* removeCSS */.m6)(id);
    }
    return () => {
      ;(0,es/* removeCSS */.m6)(id);
    };
  }, [mergedLock, id]);
}
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/useEscKeyDown.js


let stack = [];
const IME_LOCK_DURATION = 200;
let lastCompositionEndTime = 0;

// Export for testing
const _test = (/* unused pure expression or super */ null && ( false ? 0 : null));

// Global event handlers
const onGlobalKeyDown = event => {
  if (event.key === 'Escape' && !event.isComposing) {
    const now = Date.now();
    if (now - lastCompositionEndTime < IME_LOCK_DURATION) {
      return;
    }
    const len = stack.length;
    for (let i = len - 1; i >= 0; i -= 1) {
      stack[i].onEsc({
        top: i === len - 1,
        event
      });
    }
  }
};
const onGlobalCompositionEnd = () => {
  lastCompositionEndTime = Date.now();
};
function attachGlobalEventListeners() {
  window.addEventListener('keydown', onGlobalKeyDown);
  window.addEventListener('compositionend', onGlobalCompositionEnd);
}
function detachGlobalEventListeners() {
  if (stack.length === 0) {
    window.removeEventListener('keydown', onGlobalKeyDown);
    window.removeEventListener('compositionend', onGlobalCompositionEnd);
  }
}
function useEscKeyDown(open, onEsc) {
  const id = (0,es/* useId */.Bi)();
  const onEventEsc = (0,es/* useEvent */._q)(onEsc);
  const ensure = () => {
    if (!stack.find(item => item.id === id)) {
      stack.push({
        id,
        onEsc: onEventEsc
      });
    }
  };
  const clear = () => {
    stack = stack.filter(item => item.id !== id);
  };
  (0,react.useMemo)(() => {
    if (open) {
      ensure();
    } else if (!open) {
      clear();
    }
  }, [open]);
  (0,react.useEffect)(() => {
    if (open) {
      ensure();
      // Attach global event listeners
      attachGlobalEventListeners();
      return () => {
        clear();
        // Remove global event listeners if instances is empty
        detachGlobalEventListeners();
      };
    }
  }, [open]);
}
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/Portal.js








const getPortalContainer = getContainer => {
  if (getContainer === false) {
    return false;
  }
  if (!(0,es/* canUseDom */.OC)() || !getContainer) {
    return null;
  }
  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};
const Portal = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    open,
    autoLock,
    getContainer,
    debug,
    autoDestroy = true,
    children,
    onEsc
  } = props;
  const [shouldRender, setShouldRender] = react.useState(open);
  const mergedRender = shouldRender || open;

  // ========================= Warning =========================
  if (false) // removed by dead control flow
{}

  // ====================== Should Render ======================
  react.useEffect(() => {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);

  // ======================== Container ========================
  const [innerContainer, setInnerContainer] = react.useState(() => getPortalContainer(getContainer));
  react.useEffect(() => {
    const customizeContainer = getPortalContainer(getContainer);

    // Tell component that we check this in effect which is safe to be `null`
    setInnerContainer(() =>
    // React do the state update even the value is the same,
    // Use function call to force React to compare update
    customizeContainer ?? null);
  });
  const [defaultContainer, queueCreate] = useDom(mergedRender && !innerContainer, debug);
  const mergedContainer = innerContainer ?? defaultContainer;

  // ========================= Locker ==========================
  useScrollLocker(autoLock && open && (0,es/* canUseDom */.OC)() && (mergedContainer === defaultContainer || mergedContainer === document.body));

  // ========================= Esc Keydown ==========================
  useEscKeyDown(open, onEsc);

  // =========================== Ref ===========================
  let childRef = null;
  if (children && (0,es/* supportRef */.f3)(children) && ref) {
    childRef = (0,es/* getNodeRef */.A9)(children);
  }
  const mergedRef = (0,es/* useComposeRef */.xK)(childRef, ref);

  // ========================= Render ==========================
  // Do not render when nothing need render
  // When innerContainer is `undefined`, it may not ready since user use ref in the same render
  if (!mergedRender || !(0,es/* canUseDom */.OC)() || innerContainer === undefined) {
    return null;
  }

  // Render inline
  const renderInline = mergedContainer === false || inlineMock();
  let reffedChildren = children;
  if (ref) {
    reffedChildren = /*#__PURE__*/react.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : /*#__PURE__*/(0,react_dom.createPortal)(reffedChildren, mergedContainer));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_Portal = (Portal);
;// ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/index.js



/* harmony default export */ const portal_es = (es_Portal);

/***/ },

/***/ 47237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xR: () => (/* reexport */ es_UniqueProvider),
  Ay: () => (/* binding */ trigger_es)
});

// UNUSED EXPORTS: generateTrigger

// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/portal/es/index.js + 7 modules
var es = __webpack_require__(12288);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+resize-observer@1.1.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/resize-observer/es/index.js + 4 modules
var resize_observer_es = __webpack_require__(76240);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.12.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/util/es/index.js + 14 modules
var util_es = __webpack_require__(83704);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/index.js + 11 modules
var motion_es = __webpack_require__(86270);
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/Popup/Arrow.js


function Arrow(props) {
  const {
    prefixCls,
    align,
    arrow,
    arrowPos
  } = props;
  const {
    className,
    content,
    style
  } = arrow || {};
  const {
    x = 0,
    y = 0
  } = arrowPos;
  const arrowRef = react.useRef(null);

  // Skip if no align
  if (!align || !align.points) {
    return null;
  }
  const alignStyle = {
    position: 'absolute'
  };

  // Skip if no need to align
  if (align.autoArrow !== false) {
    const popupPoints = align.points[0];
    const targetPoints = align.points[1];
    const popupTB = popupPoints[0];
    const popupLR = popupPoints[1];
    const targetTB = targetPoints[0];
    const targetLR = targetPoints[1];

    // Top & Bottom
    if (popupTB === targetTB || !['t', 'b'].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === 't') {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }

    // Left & Right
    if (popupLR === targetLR || !['l', 'r'].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === 'l') {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: arrowRef,
    className: (0,clsx/* clsx */.$)(`${prefixCls}-arrow`, className),
    style: {
      ...alignStyle,
      ...style
    }
  }, content);
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/Popup/Mask.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
;


function Mask(props) {
  const {
    prefixCls,
    open,
    zIndex,
    mask,
    motion,
    mobile
  } = props;
  if (!mask) {
    return null;
  }
  return /*#__PURE__*/react.createElement(motion_es/* default */.Ay, _extends({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), ({
    className
  }) => /*#__PURE__*/react.createElement("div", {
    style: {
      zIndex
    },
    className: (0,clsx/* clsx */.$)(`${prefixCls}-mask`, mobile && `${prefixCls}-mobile-mask`, className)
  }));
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/Popup/PopupContent.js

const PopupContent = /*#__PURE__*/react.memo(({
  children
}) => children, (_, next) => next.cache);
if (false) // removed by dead control flow
{}
/* harmony default export */ const Popup_PopupContent = (PopupContent);
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/hooks/useOffsetStyle.js
function useOffsetStyle(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY) {
  // >>>>> Offset
  const AUTO = 'auto';
  const offsetStyle = isMobile ? {} : {
    left: '-1000vw',
    top: '-1000vh',
    right: AUTO,
    bottom: AUTO
  };

  // Set align style
  if (!isMobile && (ready || !open)) {
    const {
      points
    } = align;
    const dynamicInset = align.dynamicInset || align._experimental?.dynamicInset;
    const alignRight = dynamicInset && points[0][1] === 'r';
    const alignBottom = dynamicInset && points[0][0] === 'b';
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }
  return offsetStyle;
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/Popup/index.js
function Popup_extends() { Popup_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Popup_extends.apply(this, arguments); }
;









const Popup = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    onEsc,
    popup,
    className,
    prefixCls,
    style,
    target,
    onVisibleChanged,
    // Open
    open,
    keepDom,
    fresh,
    // Click
    onClick,
    // Mask
    mask,
    // Arrow
    arrow,
    arrowPos,
    align,
    // Motion
    motion,
    maskMotion,
    // Mobile
    mobile,
    // Portal
    forceRender,
    getPopupContainer,
    autoDestroy,
    portal: Portal,
    children,
    zIndex,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerDownCapture,
    ready,
    offsetX,
    offsetY,
    offsetR,
    offsetB,
    onAlign,
    onPrepare,
    // Resize
    onResize,
    stretch,
    targetWidth,
    targetHeight
  } = props;
  const popupContent = typeof popup === 'function' ? popup() : popup;

  // We can not remove holder only when motion finished.
  const isNodeVisible = open || keepDom;

  // ========================= Mobile =========================
  const isMobile = !!mobile;

  // ========================== Mask ==========================
  const [mergedMask, mergedMaskMotion, mergedPopupMotion] = react.useMemo(() => {
    if (mobile) {
      return [mobile.mask, mobile.maskMotion, mobile.motion];
    }
    return [mask, maskMotion, motion];
  }, [mobile, mask, maskMotion, motion]);

  // ======================= Container ========================
  const getPopupContainerNeedParams = getPopupContainer?.length > 0;
  const [show, setShow] = react.useState(!getPopupContainer || !getPopupContainerNeedParams);

  // Delay to show since `getPopupContainer` need target element
  (0,util_es/* useLayoutEffect */.Nf)(() => {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);

  // ========================= Resize =========================
  const onInternalResize = (0,util_es/* useEvent */._q)((size, ele) => {
    onResize?.(size, ele);
    onAlign();
  });

  // ========================= Styles =========================
  const offsetStyle = useOffsetStyle(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY);

  // ========================= Render =========================
  if (!show) {
    return null;
  }

  // >>>>> Misc
  const miscStyle = {};
  if (stretch) {
    if (stretch.includes('height') && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes('minHeight') && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes('width') && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes('minWidth') && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = 'none';
  }
  return /*#__PURE__*/react.createElement(Portal, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && (() => getPopupContainer(target)),
    autoDestroy: autoDestroy,
    onEsc: onEsc
  }, /*#__PURE__*/react.createElement(Mask, {
    prefixCls: prefixCls,
    open: open,
    zIndex: zIndex,
    mask: mergedMask,
    motion: mergedMaskMotion,
    mobile: isMobile
  }), /*#__PURE__*/react.createElement(resize_observer_es/* default */.Ay, {
    onResize: onInternalResize,
    disabled: !open
  }, resizeObserverRef => {
    return /*#__PURE__*/react.createElement(motion_es/* default */.Ay, Popup_extends({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender: forceRender,
      leavedClassName: `${prefixCls}-hidden`
    }, mergedPopupMotion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: nextVisible => {
        motion?.onVisibleChanged?.(nextVisible);
        onVisibleChanged(nextVisible);
      }
    }), ({
      className: motionClassName,
      style: motionStyle
    }, motionRef) => {
      const cls = (0,clsx/* clsx */.$)(prefixCls, motionClassName, className, {
        [`${prefixCls}-mobile`]: isMobile
      });
      return /*#__PURE__*/react.createElement("div", {
        ref: (0,util_es/* composeRef */.K4)(resizeObserverRef, ref, motionRef),
        className: cls,
        style: {
          '--arrow-x': `${arrowPos.x || 0}px`,
          '--arrow-y': `${arrowPos.y || 0}px`,
          ...offsetStyle,
          ...miscStyle,
          ...motionStyle,
          boxSizing: 'border-box',
          zIndex,
          ...style
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onClick: onClick,
        onPointerDownCapture: onPointerDownCapture
      }, arrow && /*#__PURE__*/react.createElement(Arrow, {
        prefixCls: prefixCls,
        arrow: arrow,
        arrowPos: arrowPos,
        align: align
      }), /*#__PURE__*/react.createElement(Popup_PopupContent, {
        cache: !open && !fresh
      }, popupContent));
    });
  }), children);
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_Popup = (Popup);
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/context.js


// ===================== Nest =====================

const TriggerContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const es_context = (TriggerContext);

// ==================== Unique ====================

const UniqueContext = /*#__PURE__*/react.createContext(null);
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/hooks/useAction.js

function toArray(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(action, showAction, hideAction) {
  return react.useMemo(() => {
    const mergedShowAction = toArray(showAction ?? action);
    const mergedHideAction = toArray(hideAction ?? action);
    const showActionSet = new Set(mergedShowAction);
    const hideActionSet = new Set(mergedHideAction);
    if (showActionSet.has('hover') && !showActionSet.has('click')) {
      showActionSet.add('touch');
    }
    if (hideActionSet.has('hover') && !hideActionSet.has('click')) {
      hideActionSet.add('touch');
    }
    return [showActionSet, hideActionSet];
  }, [action, showAction, hideAction]);
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/util.js
function isPointsEq(a1 = [], a2 = [], isAlignPoint) {
  const getVal = (a, index) => a[index] || '';
  if (isAlignPoint) {
    return getVal(a1, 0) === getVal(a2, 0);
  }
  return getVal(a1, 0) === getVal(a2, 0) && getVal(a1, 1) === getVal(a2, 1);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  const {
    points
  } = align;
  const placements = Object.keys(builtinPlacements);
  for (let i = 0; i < placements.length; i += 1) {
    const placement = placements[i];
    if (isPointsEq(builtinPlacements[placement]?.points, points, isAlignPoint)) {
      return `${prefixCls}-placement-${placement}`;
    }
  }
  return '';
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}

/**
 * Get all the scrollable parent elements of the element
 * @param ele       The element to be detected
 * @param areaOnly  Only return the parent which will cut visible area
 */
function collectScroller(ele) {
  const scrollerList = [];
  let current = ele?.parentElement;
  const scrollStyle = ['hidden', 'scroll', 'clip', 'auto'];
  while (current) {
    const {
      overflowX,
      overflowY,
      overflow
    } = getWin(current).getComputedStyle(current);
    if ([overflowX, overflowY, overflow].some(o => scrollStyle.includes(o))) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num, defaultValue = 1) {
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
/**
 *
 *
 *  **************************************
 *  *              Border                *
 *  *     **************************     *
 *  *     *                  *     *     *
 *  *  B  *                  *  S  *  B  *
 *  *  o  *                  *  c  *  o  *
 *  *  r  *      Content     *  r  *  r  *
 *  *  d  *                  *  o  *  d  *
 *  *  e  *                  *  l  *  e  *
 *  *  r  ********************  l  *  r  *
 *  *     *        Scroll          *     *
 *  *     **************************     *
 *  *              Border                *
 *  **************************************
 *
 */
/**
 * Get visible area of element
 */
function getVisibleArea(initArea, scrollerList) {
  const visibleArea = {
    ...initArea
  };
  (scrollerList || []).forEach(ele => {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }

    // Skip if static position which will not affect visible area
    const {
      overflow,
      overflowClipMargin,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth
    } = getWin(ele).getComputedStyle(ele);
    const eleRect = ele.getBoundingClientRect();
    const {
      offsetHeight: eleOutHeight,
      clientHeight: eleInnerHeight,
      offsetWidth: eleOutWidth,
      clientWidth: eleInnerWidth
    } = ele;
    const borderTopNum = getPxValue(borderTopWidth);
    const borderBottomNum = getPxValue(borderBottomWidth);
    const borderLeftNum = getPxValue(borderLeftWidth);
    const borderRightNum = getPxValue(borderRightWidth);
    const scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
    const scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);

    // Original visible area
    const eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    const eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;

    // Cut border size
    const scaledBorderTopWidth = borderTopNum * scaleY;
    const scaledBorderBottomWidth = borderBottomNum * scaleY;
    const scaledBorderLeftWidth = borderLeftNum * scaleX;
    const scaledBorderRightWidth = borderRightNum * scaleX;

    // Clip margin
    let clipMarginWidth = 0;
    let clipMarginHeight = 0;
    if (overflow === 'clip') {
      const clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }

    // Region
    const eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    const eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    const eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    const eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/hooks/useAlign.js



function getUnitOffset(size, offset = 0) {
  const offsetStr = `${offset}`;
  const cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  const [offsetX, offsetY] = offset || [];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints(points = '') {
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  const topBottom = points[0];
  const leftRight = points[1];
  let x;
  let y;

  // Top & Bottom
  if (topBottom === 't') {
    y = rect.y;
  } else if (topBottom === 'b') {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }

  // Left & Right
  if (leftRight === 'l') {
    x = rect.x;
  } else if (leftRight === 'r') {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x,
    y
  };
}
function reversePoints(points, index) {
  const reverseMap = {
    t: 'b',
    b: 't',
    l: 'r',
    r: 'l'
  };
  const clone = [...points];
  clone[index] = reverseMap[points[index]] || 'c';
  return clone;
}
function flatPoints(points) {
  return points.join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign, mobile) {
  const [offsetInfo, setOffsetInfo] = react.useState({
    ready: false,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: builtinPlacements[placement] || {}
  });
  const alignCountRef = react.useRef(0);
  const scrollerList = react.useMemo(() => {
    if (!popupEle || mobile) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);

  // ========================= Flip ==========================
  // We will memo flip info.
  // If size change to make flip, it will memo the flip info and use it in next align.
  const prevFlipRef = react.useRef({});
  const resetFlipCache = () => {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }

  // ========================= Align =========================
  const onAlign = (0,util_es/* useEvent */._q)(() => {
    if (popupEle && target && open && !mobile) {
      const popupElement = popupEle;
      const doc = popupElement.ownerDocument;
      const win = getWin(popupElement);
      const {
        position: popupPosition
      } = win.getComputedStyle(popupElement);
      const originLeft = popupElement.style.left;
      const originTop = popupElement.style.top;
      const originRight = popupElement.style.right;
      const originBottom = popupElement.style.bottom;
      const originOverflow = popupElement.style.overflow;
      const originOverflowX = popupElement.style.overflowX;
      const originOverflowY = popupElement.style.overflowY;

      // Placement
      const placementInfo = {
        ...builtinPlacements[placement],
        ...popupAlign
      };

      // placeholder element
      const placeholderElement = doc.createElement('div');
      popupElement.parentElement?.appendChild(placeholderElement);
      placeholderElement.style.left = `${popupElement.offsetLeft}px`;
      placeholderElement.style.top = `${popupElement.offsetTop}px`;
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = `${popupElement.offsetHeight}px`;
      placeholderElement.style.width = `${popupElement.offsetWidth}px`;

      // Reset first
      popupElement.style.left = '0';
      popupElement.style.top = '0';
      popupElement.style.right = 'auto';
      popupElement.style.bottom = 'auto';
      popupElement.style.overflow = 'hidden';

      // Calculate align style, we should consider `transform` case
      let targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        const rect = target.getBoundingClientRect();
        rect.x = rect.x ?? rect.left;
        rect.y = rect.y ?? rect.top;
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      const popupRect = popupElement.getBoundingClientRect();
      const {
        height,
        width
      } = win.getComputedStyle(popupElement);
      popupRect.x = popupRect.x ?? popupRect.left;
      popupRect.y = popupRect.y ?? popupRect.top;
      const {
        clientWidth,
        clientHeight,
        scrollWidth,
        scrollHeight,
        scrollTop,
        scrollLeft
      } = doc.documentElement;
      const popupHeight = popupRect.height;
      const popupWidth = popupRect.width;
      const targetHeight = targetRect.height;
      const targetWidth = targetRect.width;

      // Get bounding of visible area
      const visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      const scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      let {
        htmlRegion
      } = placementInfo;
      const VISIBLE = 'visible';
      const VISIBLE_FIRST = 'visibleFirst';
      if (htmlRegion !== 'scroll' && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      const isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      const scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      const visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      const visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;

      // When set to `visibleFirst`,
      // the check `adjust` logic will use `visibleRegion` for check first.
      const adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;

      // Record right & bottom align data
      popupElement.style.left = 'auto';
      popupElement.style.top = 'auto';
      popupElement.style.right = '0';
      popupElement.style.bottom = '0';
      const popupMirrorRect = popupElement.getBoundingClientRect();

      // Reset back
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      popupElement.style.overflow = originOverflow;
      popupElement.style.overflowX = originOverflowX;
      popupElement.style.overflowY = originOverflowY;
      popupElement.parentElement?.removeChild(placeholderElement);

      // Calculate scale
      const scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
      const scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);

      // No need to align since it's not visible in view
      if (scaleX === 0 || scaleY === 0 || (0,util_es/* isDOM */.fk)(target) && !(0,util_es/* isVisible */.zN)(target)) {
        return;
      }

      // Offset
      const {
        offset,
        targetOffset
      } = placementInfo;
      let [popupOffsetX, popupOffsetY] = getNumberOffset(popupRect, offset);
      const [targetOffsetX, targetOffsetY] = getNumberOffset(targetRect, targetOffset);
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;

      // Points
      const [popupPoint, targetPoint] = placementInfo.points || [];
      const targetPoints = splitPoints(targetPoint);
      const popupPoints = splitPoints(popupPoint);
      const targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      const popupAlignPoint = getAlignPoint(popupRect, popupPoints);

      // Real align info may not same as origin one
      const nextAlignInfo = {
        ...placementInfo
      };
      let nextPoints = [popupPoints, targetPoints];

      // Next Offset
      let nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      let nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;

      // ============== Intersection ===============
      // Get area by position. Used for check if flip area is better
      function getIntersectionVisibleArea(offsetX, offsetY, area = visibleArea) {
        const l = popupRect.x + offsetX;
        const t = popupRect.y + offsetY;
        const r = l + popupWidth;
        const b = t + popupHeight;
        const visibleL = Math.max(l, area.left);
        const visibleT = Math.max(t, area.top);
        const visibleR = Math.min(r, area.right);
        const visibleB = Math.min(b, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }
      const originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);

      // As `visibleFirst`, we prepare this for check
      const originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);

      // ========================== Overflow ===========================
      const targetAlignPointTL = getAlignPoint(targetRect, ['t', 'l']);
      const popupAlignPointTL = getAlignPoint(popupRect, ['t', 'l']);
      const targetAlignPointBR = getAlignPoint(targetRect, ['b', 'r']);
      const popupAlignPointBR = getAlignPoint(popupRect, ['b', 'r']);
      const overflow = placementInfo.overflow || {};
      const {
        adjustX,
        adjustY,
        shiftX,
        shiftY
      } = overflow;
      const supportAdjust = val => {
        if (typeof val === 'boolean') {
          return val;
        }
        return val >= 0;
      };

      // Prepare position
      let nextPopupY;
      let nextPopupBottom;
      let nextPopupX;
      let nextPopupRight;
      function syncNextPopupPosition() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      }
      syncNextPopupPosition();

      // >>>>>>>>>> Top & Bottom
      const needAdjustY = supportAdjust(adjustY);
      const sameTB = popupPoints[0] === targetPoints[0];

      // Bottom to Top
      if (needAdjustY && popupPoints[0] === 't' && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        let tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        const newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextPoints = [reversePoints(nextPoints[0], 0), reversePoints(nextPoints[1], 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }

      // Top to Bottom
      if (needAdjustY && popupPoints[0] === 'b' && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        let tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        const newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.tb = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextPoints = [reversePoints(nextPoints[0], 0), reversePoints(nextPoints[1], 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }

      // >>>>>>>>>> Left & Right
      const needAdjustX = supportAdjust(adjustX);

      // >>>>> Flip
      const sameLR = popupPoints[1] === targetPoints[1];

      // Right to Left
      if (needAdjustX && popupPoints[1] === 'l' && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        let tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        const newVisibleArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextPoints = [reversePoints(nextPoints[0], 1), reversePoints(nextPoints[1], 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }

      // Left to Right
      if (needAdjustX && popupPoints[1] === 'r' && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        let tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        const newVisibleArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        const newVisibleRecommendArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.lr = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextPoints = [reversePoints(nextPoints[0], 1), reversePoints(nextPoints[1], 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }
      nextAlignInfo.points = [flatPoints(nextPoints[0]), flatPoints(nextPoints[1])];

      // ============================ Shift ============================
      syncNextPopupPosition();
      const numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === 'number') {
        // Left
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }

        // Right
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      const numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === 'number') {
        // Top
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;

          // When target if far away from visible area
          // Stop shift
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }

        // Bottom
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }

      // ============================ Arrow ============================
      // Arrow center align
      const popupLeft = popupRect.x + nextOffsetX;
      const popupRight = popupLeft + popupWidth;
      const popupTop = popupRect.y + nextOffsetY;
      const popupBottom = popupTop + popupHeight;
      const targetLeft = targetRect.x;
      const targetRight = targetLeft + targetWidth;
      const targetTop = targetRect.y;
      const targetBottom = targetTop + targetHeight;

      /** Max left of the popup and target element */
      const maxLeft = Math.max(popupLeft, targetLeft);
      /** Min right of the popup and target element */
      const minRight = Math.min(popupRight, targetRight);

      /** The center X of popup & target cross area */
      const xCenter = (maxLeft + minRight) / 2;
      /** Arrow X of popup offset */
      const nextArrowX = xCenter - popupLeft;
      const maxTop = Math.max(popupTop, targetTop);
      const minBottom = Math.min(popupBottom, targetBottom);
      const yCenter = (maxTop + minBottom) / 2;
      const nextArrowY = yCenter - popupTop;
      onPopupAlign?.(popupEle, nextAlignInfo);

      // Additional calculate right & bottom position
      let offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      let offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      if (scaleX === 1) {
        nextOffsetX = Math.floor(nextOffsetX);
        offsetX4Right = Math.floor(offsetX4Right);
      }
      if (scaleY === 1) {
        nextOffsetY = Math.floor(nextOffsetY);
        offsetY4Bottom = Math.floor(offsetY4Bottom);
      }
      const nextOffsetInfo = {
        ready: true,
        offsetX: nextOffsetX / scaleX,
        offsetY: nextOffsetY / scaleY,
        offsetR: offsetX4Right / scaleX,
        offsetB: offsetY4Bottom / scaleY,
        arrowX: nextArrowX / scaleX,
        arrowY: nextArrowY / scaleY,
        scaleX,
        scaleY,
        align: nextAlignInfo
      };
      setOffsetInfo(nextOffsetInfo);
    }
  });
  const triggerAlign = () => {
    alignCountRef.current += 1;
    const id = alignCountRef.current;

    // Merge all align requirement into one frame
    Promise.resolve().then(() => {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };

  // Reset ready status when placement & open changed
  const resetReady = () => {
    setOffsetInfo(ori => ({
      ...ori,
      ready: false
    }));
  };
  (0,util_es/* useLayoutEffect */.Nf)(resetReady, [placement]);
  (0,util_es/* useLayoutEffect */.Nf)(() => {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/hooks/useDelay.js

function useDelay() {
  const delayRef = react.useRef(null);
  const clearDelay = () => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
      delayRef.current = null;
    }
  };
  const delayInvoke = (callback, delay) => {
    clearDelay();
    if (delay === 0) {
      callback();
    } else {
      delayRef.current = setTimeout(() => {
        callback();
      }, delay * 1000);
    }
  };

  // Clean up on unmount
  react.useEffect(() => {
    return () => {
      clearDelay();
    };
  }, []);
  return delayInvoke;
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/hooks/useWatch.js


function useWatch(open, target, popup, onAlign, onScroll) {
  (0,util_es/* useLayoutEffect */.Nf)(() => {
    if (open && target && popup) {
      const targetElement = target;
      const popupElement = popup;
      const targetScrollList = collectScroller(targetElement);
      const popupScrollList = collectScroller(popupElement);
      const win = getWin(popupElement);
      const mergedList = new Set([win, ...targetScrollList, ...popupScrollList]);
      function notifyScroll() {
        onAlign();
        onScroll();
      }
      mergedList.forEach(scroller => {
        scroller.addEventListener('scroll', notifyScroll, {
          passive: true
        });
      });
      win.addEventListener('resize', notifyScroll, {
        passive: true
      });

      // First time always do align
      onAlign();
      return () => {
        mergedList.forEach(scroller => {
          scroller.removeEventListener('scroll', notifyScroll);
          win.removeEventListener('resize', notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/hooks/useWinClick.js




/**
 * Close if click on the window.
 * Return the function that click on the Popup element.
 */
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  const openRef = react.useRef(open);
  openRef.current = open;
  const popupPointerDownRef = react.useRef(false);

  // Click to hide is special action since click popup element should not hide
  react.useEffect(() => {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      const onPointerDown = () => {
        popupPointerDownRef.current = false;
      };
      const onTriggerClose = e => {
        if (openRef.current && !inPopupOrChild(e.composedPath?.()?.[0] || e.target) && !popupPointerDownRef.current) {
          triggerOpen(false);
        }
      };
      const win = getWin(popupEle);
      win.addEventListener('pointerdown', onPointerDown, true);
      win.addEventListener('mousedown', onTriggerClose, true);
      win.addEventListener('contextmenu', onTriggerClose, true);

      // shadow root
      const targetShadowRoot = (0,util_es/* getShadowRoot */.jG)(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener('mousedown', onTriggerClose, true);
        targetShadowRoot.addEventListener('contextmenu', onTriggerClose, true);
      }

      // Warning if target and popup not in same root
      if (false) // removed by dead control flow
{}
      return () => {
        win.removeEventListener('pointerdown', onPointerDown, true);
        win.removeEventListener('mousedown', onTriggerClose, true);
        win.removeEventListener('contextmenu', onTriggerClose, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener('mousedown', onTriggerClose, true);
          targetShadowRoot.removeEventListener('contextmenu', onTriggerClose, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
  function onPopupPointerDown() {
    popupPointerDownRef.current = true;
  }
  return onPopupPointerDown;
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/UniqueProvider/useTargetState.js


/**
 * Control the state of popup bind target:
 * 1. When set `target`. Do show the popup.
 * 2. When `target` is removed. Do hide the popup.
 * 3. When `target` change to another one:
 *  a. We wait motion finish of previous popup.
 *  b. Then we set new target and show the popup.
 * 4. During appear/enter animation, cache new options and apply after animation completes.
 */
function useTargetState() {
  const [options, setOptions] = react.useState(null);
  const [open, setOpen] = react.useState(false);
  const [isAnimating, setIsAnimating] = react.useState(false);
  const pendingOptionsRef = react.useRef(null);
  const trigger = (0,util_es/* useEvent */._q)(nextOptions => {
    if (nextOptions === false) {
      // Clear pending options when hiding
      pendingOptionsRef.current = null;
      setOpen(false);
    } else {
      if (isAnimating && open) {
        // If animating (appear or enter), cache new options
        pendingOptionsRef.current = nextOptions;
      } else {
        setOpen(true);
        // Set new options
        setOptions(nextOptions);
        pendingOptionsRef.current = null;

        // Only mark as animating when transitioning from closed to open
        if (!open) {
          setIsAnimating(true);
        }
      }
    }
  });
  const onVisibleChanged = (0,util_es/* useEvent */._q)(visible => {
    if (visible) {
      // Animation enter completed, check if there are pending options
      setIsAnimating(false);
      if (pendingOptionsRef.current) {
        // Apply pending options
        setOptions(pendingOptionsRef.current);
        pendingOptionsRef.current = null;
      }
    } else {
      // Animation leave completed
      setIsAnimating(false);
      pendingOptionsRef.current = null;
    }
  });
  return [trigger, open, options, onVisibleChanged];
}
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/UniqueProvider/UniqueContainer.js
function UniqueContainer_extends() { UniqueContainer_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UniqueContainer_extends.apply(this, arguments); }
;



const UniqueContainer = props => {
  const {
    prefixCls,
    isMobile,
    ready,
    open,
    align,
    offsetR,
    offsetB,
    offsetX,
    offsetY,
    arrowPos,
    popupSize,
    motion,
    uniqueContainerClassName,
    uniqueContainerStyle
  } = props;
  const containerCls = `${prefixCls}-unique-container`;
  const [motionVisible, setMotionVisible] = react.useState(false);

  // ========================= Styles =========================
  const offsetStyle = useOffsetStyle(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY);

  // Cache for offsetStyle when ready is true
  const cachedOffsetStyleRef = react.useRef(offsetStyle);

  // Update cached offset style when ready is true
  if (ready) {
    cachedOffsetStyleRef.current = offsetStyle;
  }

  // Apply popup size if available
  const sizeStyle = {};
  if (popupSize) {
    sizeStyle.width = popupSize.width;
    sizeStyle.height = popupSize.height;
  }

  // ========================= Render =========================
  return /*#__PURE__*/react.createElement(motion_es/* default */.Ay, UniqueContainer_extends({
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    removeOnLeave: false,
    leavedClassName: `${containerCls}-hidden`
  }, motion, {
    visible: open,
    onVisibleChanged: nextVisible => {
      setMotionVisible(nextVisible);
    }
  }), ({
    className: motionClassName,
    style: motionStyle
  }) => {
    const cls = (0,clsx/* clsx */.$)(containerCls, motionClassName, uniqueContainerClassName, {
      [`${containerCls}-visible`]: motionVisible
    });
    return /*#__PURE__*/react.createElement("div", {
      className: cls,
      style: {
        '--arrow-x': `${arrowPos?.x || 0}px`,
        '--arrow-y': `${arrowPos?.y || 0}px`,
        ...cachedOffsetStyleRef.current,
        ...sizeStyle,
        ...motionStyle,
        ...uniqueContainerStyle
      }
    });
  });
};
/* harmony default export */ const UniqueProvider_UniqueContainer = (UniqueContainer);
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/UniqueProvider/index.js











const UniqueProvider = ({
  children,
  postTriggerProps
}) => {
  const [trigger, open, options, onTargetVisibleChanged] = useTargetState();

  // ========================== Options ===========================
  const mergedOptions = react.useMemo(() => {
    if (!options || !postTriggerProps) {
      return options;
    }
    return postTriggerProps(options);
  }, [options, postTriggerProps]);

  // =========================== Popup ============================
  const [popupEle, setPopupEle] = react.useState(null);
  const [popupSize, setPopupSize] = react.useState(null);

  // Used for forwardRef popup. Not use internal
  const externalPopupRef = react.useRef(null);
  const setPopupRef = (0,util_es/* useEvent */._q)(node => {
    externalPopupRef.current = node;
    if ((0,util_es/* isDOM */.fk)(node) && popupEle !== node) {
      setPopupEle(node);
    }
  });

  // ========================== Register ==========================
  // Store the isOpen function from the latest show call
  const isOpenRef = react.useRef(null);
  const delayInvoke = useDelay();
  const show = (0,util_es/* useEvent */._q)((showOptions, isOpen) => {
    // Store the isOpen function for later use in hide
    isOpenRef.current = isOpen;
    delayInvoke(() => {
      trigger(showOptions);
    }, showOptions.delay);
  });
  const hide = delay => {
    delayInvoke(() => {
      // Check if we should still hide by calling the isOpen function
      // If isOpen returns true, it means another trigger wants to keep it open
      if (isOpenRef.current?.()) {
        return; // Don't hide if something else wants it open
      }
      trigger(false);
      // Don't clear target, currentNode, options immediately, wait until animation completes
    }, delay);
  };

  // Callback after animation completes
  const onVisibleChanged = (0,util_es/* useEvent */._q)(visible => {
    // Call useTargetState callback to handle animation state
    onTargetVisibleChanged(visible);
  });

  // =========================== Align ============================
  const [ready, offsetX, offsetY, offsetR, offsetB, arrowX, arrowY,

    // scaleX - not used in UniqueProvider
  ,,
  // scaleY - not used in UniqueProvider
  alignInfo, onAlign] = useAlign(open, popupEle, mergedOptions?.target, mergedOptions?.popupPlacement, mergedOptions?.builtinPlacements || {}, mergedOptions?.popupAlign, undefined,
  // onPopupAlign
  false // isMobile
  );
  const alignedClassName = react.useMemo(() => {
    if (!mergedOptions) {
      return '';
    }
    const baseClassName = getAlignPopupClassName(mergedOptions.builtinPlacements || {}, mergedOptions.prefixCls || '', alignInfo, false // alignPoint is false for UniqueProvider
    );
    return (0,clsx/* clsx */.$)(baseClassName, mergedOptions.getPopupClassNameFromAlign?.(alignInfo));
  }, [alignInfo, mergedOptions?.getPopupClassNameFromAlign, mergedOptions?.builtinPlacements, mergedOptions?.prefixCls]);
  const contextValue = react.useMemo(() => ({
    show,
    hide
  }), []);

  // =========================== Align ============================
  react.useEffect(() => {
    onAlign();
  }, [mergedOptions?.target]);

  // =========================== Motion ===========================
  const onPrepare = (0,util_es/* useEvent */._q)(() => {
    onAlign();
    return Promise.resolve();
  });

  // ======================== Trigger Context =====================
  const subPopupElements = react.useRef({});
  const parentContext = react.useContext(es_context);
  const triggerContextValue = react.useMemo(() => ({
    registerSubPopup: (id, subPopupEle) => {
      subPopupElements.current[id] = subPopupEle;
      parentContext?.registerSubPopup(id, subPopupEle);
    }
  }), [parentContext]);

  // =========================== Render ===========================
  const prefixCls = mergedOptions?.prefixCls;
  return /*#__PURE__*/react.createElement(UniqueContext.Provider, {
    value: contextValue
  }, children, mergedOptions && /*#__PURE__*/react.createElement(es_context.Provider, {
    value: triggerContextValue
  }, /*#__PURE__*/react.createElement(es_Popup, {
    ref: setPopupRef,
    portal: es/* default */.A,
    onEsc: mergedOptions.onEsc,
    prefixCls: prefixCls,
    popup: mergedOptions.popup,
    className: (0,clsx/* clsx */.$)(mergedOptions.popupClassName, alignedClassName, `${prefixCls}-unique-controlled`),
    style: mergedOptions.popupStyle,
    target: mergedOptions.target,
    open: open,
    keepDom: true,
    fresh: true,
    autoDestroy: false,
    onVisibleChanged: onVisibleChanged,
    ready: ready,
    offsetX: offsetX,
    offsetY: offsetY,
    offsetR: offsetR,
    offsetB: offsetB,
    onAlign: onAlign,
    onPrepare: onPrepare,
    onResize: size => setPopupSize({
      width: size.offsetWidth,
      height: size.offsetHeight
    }),
    arrowPos: {
      x: arrowX,
      y: arrowY
    },
    align: alignInfo,
    zIndex: mergedOptions.zIndex,
    mask: mergedOptions.mask,
    arrow: mergedOptions.arrow,
    motion: mergedOptions.popupMotion,
    maskMotion: mergedOptions.maskMotion,
    getPopupContainer: mergedOptions.getPopupContainer
  }, /*#__PURE__*/react.createElement(UniqueProvider_UniqueContainer, {
    prefixCls: prefixCls,
    isMobile: false,
    ready: ready,
    open: open,
    align: alignInfo,
    offsetR: offsetR,
    offsetB: offsetB,
    offsetX: offsetX,
    offsetY: offsetY,
    arrowPos: {
      x: arrowX,
      y: arrowY
    },
    popupSize: popupSize,
    motion: mergedOptions.popupMotion,
    uniqueContainerClassName: (0,clsx/* clsx */.$)(mergedOptions.uniqueContainerClassName, alignedClassName),
    uniqueContainerStyle: mergedOptions.uniqueContainerStyle
  }))));
};
/* harmony default export */ const es_UniqueProvider = (UniqueProvider);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/index.js
var react_dom = __webpack_require__(98481);
;// ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/index.js


















// Removed Props List
// Seems this can be auto
// getDocument?: (element?: HTMLElement) => Document;

// New version will not wrap popup with `rc-trigger-popup-content` when multiple children

function generateTrigger(PortalComponent = es/* default */.A) {
  const Trigger = /*#__PURE__*/react.forwardRef((props, ref) => {
    const {
      prefixCls = 'rc-trigger-popup',
      children,
      // Action
      action = 'hover',
      showAction,
      hideAction,
      disabled = false,
      // Open
      popupVisible,
      defaultPopupVisible,
      onOpenChange,
      afterOpenChange,
      onPopupVisibleChange,
      afterPopupVisibleChange,
      // Delay
      mouseEnterDelay,
      mouseLeaveDelay = 0.1,
      focusDelay,
      blurDelay,
      // Mask
      mask,
      maskClosable = true,
      // Portal
      getPopupContainer,
      forceRender,
      autoDestroy,
      // Popup
      popup,
      popupClassName,
      uniqueContainerClassName,
      uniqueContainerStyle,
      popupStyle,
      popupPlacement,
      builtinPlacements = {},
      popupAlign,
      zIndex,
      stretch,
      getPopupClassNameFromAlign,
      fresh,
      unique,
      alignPoint,
      onPopupClick,
      onPopupAlign,
      // Arrow
      arrow,
      // Motion
      popupMotion,
      maskMotion,
      // Private
      mobile,
      ...restProps
    } = props;
    const mergedAutoDestroy = autoDestroy || false;
    const openUncontrolled = popupVisible === undefined;

    // =========================== Mobile ===========================
    const isMobile = !!mobile;

    // ========================== Context ===========================
    const subPopupElements = react.useRef({});
    const parentContext = react.useContext(es_context);
    const context = react.useMemo(() => {
      return {
        registerSubPopup: (id, subPopupEle) => {
          subPopupElements.current[id] = subPopupEle;
          parentContext?.registerSubPopup(id, subPopupEle);
        }
      };
    }, [parentContext]);

    // ======================== UniqueContext =========================
    const uniqueContext = react.useContext(UniqueContext);

    // =========================== Popup ============================
    const id = (0,util_es/* useId */.Bi)();
    const [popupEle, setPopupEle] = react.useState(null);

    // Used for forwardRef popup. Not use internal
    const externalPopupRef = react.useRef(null);
    const setPopupRef = (0,util_es/* useEvent */._q)(node => {
      externalPopupRef.current = node;
      if ((0,util_es/* isDOM */.fk)(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext?.registerSubPopup(id, node);
    });

    // =========================== Target ===========================
    // Use state to control here since `useRef` update not trigger render
    const [targetEle, setTargetEle] = react.useState(null);

    // Used for forwardRef target. Not use internal
    const externalForwardRef = react.useRef(null);
    const setTargetRef = (0,util_es/* useEvent */._q)(node => {
      const domNode = (0,util_es/* getDOM */.rb)(node);
      if ((0,util_es/* isDOM */.fk)(domNode) && targetEle !== domNode) {
        setTargetEle(domNode);
        externalForwardRef.current = domNode;
      }
    });
    const cloneProps = {};
    const inPopupOrChild = (0,util_es/* useEvent */._q)(ele => {
      const childDOM = targetEle;
      return childDOM?.contains(ele) || (0,util_es/* getShadowRoot */.jG)(childDOM)?.host === ele || ele === childDOM || popupEle?.contains(ele) || (0,util_es/* getShadowRoot */.jG)(popupEle)?.host === ele || ele === popupEle || Object.values(subPopupElements.current).some(subPopupEle => subPopupEle?.contains(ele) || ele === subPopupEle);
    });

    // =========================== Arrow ============================
    const innerArrow = arrow ? {
      // true and Object likely
      ...(arrow !== true ? arrow : {})
    } : null;

    // ============================ Open ============================
    const [internalOpen, setInternalOpen] = (0,util_es/* useControlledState */.PW)(defaultPopupVisible || false, popupVisible);
    const rawOpen = internalOpen || false;
    const mergedOpen = rawOpen && !disabled;

    // ========================== Children ==========================
    const child = react.useMemo(() => {
      const nextChild = typeof children === 'function' ? children({
        open: mergedOpen
      }) : children;
      return react.Children.only(nextChild);
    }, [children, mergedOpen]);
    const originChildProps = child?.props || {};

    // Support ref
    const isOpen = (0,util_es/* useEvent */._q)(() => mergedOpen);

    // Extract common options for UniqueProvider
    const getUniqueOptions = (0,util_es/* useEvent */._q)((delay = 0) => ({
      popup,
      target: targetEle,
      delay,
      prefixCls,
      popupClassName,
      uniqueContainerClassName,
      uniqueContainerStyle,
      popupStyle,
      popupPlacement,
      builtinPlacements,
      popupAlign,
      zIndex,
      mask,
      maskClosable,
      popupMotion,
      maskMotion,
      arrow: innerArrow,
      getPopupContainer,
      getPopupClassNameFromAlign,
      id,
      onEsc
    }));

    // Handle controlled state changes for UniqueProvider
    // Only sync to UniqueProvider when it's controlled mode
    // If there is a parentContext, don't call uniqueContext methods
    (0,util_es/* useLayoutEffect */.Nf)(() => {
      if (uniqueContext && unique && targetEle && !openUncontrolled && !parentContext) {
        if (mergedOpen) {
          uniqueContext.show(getUniqueOptions(mouseEnterDelay), isOpen);
        } else {
          uniqueContext.hide(mouseLeaveDelay);
        }
      }
    }, [mergedOpen, targetEle]);
    const openRef = react.useRef(mergedOpen);
    openRef.current = mergedOpen;
    const internalTriggerOpen = (0,util_es/* useEvent */._q)(nextOpen => {
      (0,react_dom.flushSync)(() => {
        if (rawOpen !== nextOpen) {
          setInternalOpen(nextOpen);
          onOpenChange?.(nextOpen);
          onPopupVisibleChange?.(nextOpen);
        }
      });
    });

    // Trigger for delay
    const delayInvoke = useDelay();
    const triggerOpen = (nextOpen, delay = 0) => {
      // If it's controlled mode, always use internal trigger logic
      // UniqueProvider will be synced through useLayoutEffect
      if (popupVisible !== undefined) {
        delayInvoke(() => {
          internalTriggerOpen(nextOpen);
        }, delay);
        return;
      }

      // If UniqueContext exists and not controlled, pass delay to Provider instead of handling it internally
      // If there is a parentContext, don't call uniqueContext methods
      if (uniqueContext && unique && openUncontrolled && !parentContext) {
        if (nextOpen) {
          uniqueContext.show(getUniqueOptions(delay), isOpen);
        } else {
          uniqueContext.hide(delay);
        }
        return;
      }
      delayInvoke(() => {
        internalTriggerOpen(nextOpen);
      }, delay);
    };
    function onEsc({
      top
    }) {
      if (top) {
        triggerOpen(false);
      }
    }

    // ========================== Motion ============================
    const [inMotion, setInMotion] = react.useState(false);
    (0,util_es/* useLayoutEffect */.Nf)(firstMount => {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    const [motionPrepareResolve, setMotionPrepareResolve] = react.useState(null);

    // =========================== Align ============================
    const [mousePos, setMousePos] = react.useState(null);
    const setMousePosByEvent = event => {
      setMousePos([event.clientX, event.clientY]);
    };
    const [ready, offsetX, offsetY, offsetR, offsetB, arrowX, arrowY, scaleX, scaleY, alignInfo, onAlign] = useAlign(mergedOpen, popupEle, alignPoint && mousePos !== null ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign, isMobile);
    const [showActions, hideActions] = useAction(action, showAction, hideAction);
    const clickToShow = showActions.has('click');
    const clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
    const triggerAlign = (0,util_es/* useEvent */._q)(() => {
      if (!inMotion) {
        onAlign();
      }
    });
    const onScroll = () => {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    (0,util_es/* useLayoutEffect */.Nf)(() => {
      triggerAlign();
    }, [mousePos, popupPlacement]);

    // When no builtinPlacements and popupAlign changed
    (0,util_es/* useLayoutEffect */.Nf)(() => {
      if (mergedOpen && !builtinPlacements?.[popupPlacement]) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    const alignedClassName = react.useMemo(() => {
      const baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return (0,clsx/* clsx */.$)(baseClassName, getPopupClassNameFromAlign?.(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);

    // ============================ Refs ============================
    react.useImperativeHandle(ref, () => ({
      nativeElement: externalForwardRef.current,
      popupElement: externalPopupRef.current,
      forceAlign: triggerAlign
    }));

    // ========================== Stretch ===========================
    const [targetWidth, setTargetWidth] = react.useState(0);
    const [targetHeight, setTargetHeight] = react.useState(0);
    const syncTargetSize = () => {
      if (stretch && targetEle) {
        const rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    const onTargetResize = () => {
      syncTargetSize();
      triggerAlign();
    };

    // ========================== Motion ============================
    const onVisibleChanged = visible => {
      setInMotion(false);
      onAlign();
      afterOpenChange?.(visible);
      afterPopupVisibleChange?.(visible);
    };

    // We will trigger align when motion is in prepare
    const onPrepare = () => new Promise(resolve => {
      syncTargetSize();
      setMotionPrepareResolve(() => resolve);
    });
    (0,util_es/* useLayoutEffect */.Nf)(() => {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);

    // =========================== Action ===========================
    /**
     * Util wrapper for trigger action
     * @param eventName  Listen event name
     * @param nextOpen  Next open state after trigger
     * @param delay Delay to trigger open change
     * @param callback Callback if current event need additional action
     * @param ignoreCheck  Ignore current event if check return true
     */
    function wrapperAction(eventName, nextOpen, delay, callback, ignoreCheck) {
      cloneProps[eventName] = (event, ...args) => {
        if (!ignoreCheck || !ignoreCheck()) {
          callback?.(event);
          triggerOpen(nextOpen, delay);
        }

        // Pass to origin
        originChildProps[eventName]?.(event, ...args);
      };
    }

    // ======================= Action: Touch ========================
    const touchToShow = showActions.has('touch');
    const touchToHide = hideActions.has('touch');

    /** Used for prevent `hover` event conflict with mobile env */
    const touchedRef = react.useRef(false);
    if (touchToShow || touchToHide) {
      cloneProps.onTouchStart = (...args) => {
        touchedRef.current = true;
        if (openRef.current && touchToHide) {
          triggerOpen(false);
        } else if (!openRef.current && touchToShow) {
          triggerOpen(true);
        }

        // Pass to origin
        originChildProps.onTouchStart?.(...args);
      };
    }

    // ======================= Action: Click ========================
    if (clickToShow || clickToHide) {
      cloneProps.onClick = (event, ...args) => {
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }

        // Pass to origin
        originChildProps.onClick?.(event, ...args);
        touchedRef.current = false;
      };
    }

    // Click to hide is special action since click popup element should not hide
    const onPopupPointerDown = useWinClick(mergedOpen, clickToHide || touchToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);

    // ======================= Action: Hover ========================
    const hoverToShow = showActions.has('hover');
    const hoverToHide = hideActions.has('hover');
    let onPopupMouseEnter;
    let onPopupMouseLeave;
    const ignoreMouseTrigger = () => {
      return touchedRef.current;
    };
    if (hoverToShow) {
      const onMouseEnterCallback = event => {
        setMousePosByEvent(event);
      };

      // Compatible with old browser which not support pointer event
      wrapperAction('onMouseEnter', true, mouseEnterDelay, onMouseEnterCallback, ignoreMouseTrigger);
      wrapperAction('onPointerEnter', true, mouseEnterDelay, onMouseEnterCallback, ignoreMouseTrigger);
      onPopupMouseEnter = event => {
        // Only trigger re-open when popup is visible
        if ((mergedOpen || inMotion) && popupEle?.contains(event.target)) {
          triggerOpen(true, mouseEnterDelay);
        }
      };

      // Align Point
      if (alignPoint) {
        cloneProps.onMouseMove = event => {
          originChildProps.onMouseMove?.(event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction('onMouseLeave', false, mouseLeaveDelay, undefined, ignoreMouseTrigger);
      wrapperAction('onPointerLeave', false, mouseLeaveDelay, undefined, ignoreMouseTrigger);
      onPopupMouseLeave = () => {
        triggerOpen(false, mouseLeaveDelay);
      };
    }

    // ======================= Action: Focus ========================
    if (showActions.has('focus')) {
      wrapperAction('onFocus', true, focusDelay);
    }
    if (hideActions.has('focus')) {
      wrapperAction('onBlur', false, blurDelay);
    }

    // ==================== Action: ContextMenu =====================
    if (showActions.has('contextMenu')) {
      cloneProps.onContextMenu = (event, ...args) => {
        if (openRef.current && hideActions.has('contextMenu')) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();

        // Pass to origin
        originChildProps.onContextMenu?.(event, ...args);
      };
    }

    // ============================ Perf ============================
    const rendedRef = react.useRef(false);
    rendedRef.current ||= forceRender || mergedOpen || inMotion;

    // =========================== Render ===========================
    const mergedChildrenProps = {
      ...originChildProps,
      ...cloneProps
    };

    // Pass props into cloneProps for nest usage
    const passedProps = {};
    const passedEventList = ['onContextMenu', 'onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
    passedEventList.forEach(eventName => {
      if (restProps[eventName]) {
        passedProps[eventName] = (...args) => {
          mergedChildrenProps[eventName]?.(...args);
          restProps[eventName](...args);
        };
      }
    });
    const arrowPos = {
      x: arrowX,
      y: arrowY
    };

    // =================== Resize Observer ===================
    // Use hook to observe target element resize
    // Pass targetEle directly instead of a function so the hook will re-observe when target changes
    (0,resize_observer_es/* useResizeObserver */.wY)(mergedOpen, targetEle, onTargetResize);

    // Compose refs
    const mergedRef = (0,util_es/* useComposeRef */.xK)(setTargetRef, (0,util_es/* getNodeRef */.A9)(child));

    // Child Node
    const triggerNode = /*#__PURE__*/react.cloneElement(child, {
      ...mergedChildrenProps,
      ...passedProps,
      ref: mergedRef
    });

    // Render
    return /*#__PURE__*/react.createElement(react.Fragment, null, triggerNode, rendedRef.current && (!uniqueContext || !unique) && /*#__PURE__*/react.createElement(es_context.Provider, {
      value: context
    }, /*#__PURE__*/react.createElement(es_Popup, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls: prefixCls,
      popup: popup,
      className: (0,clsx/* clsx */.$)(popupClassName, !isMobile && alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave
      // https://github.com/ant-design/ant-design/issues/43924
      ,
      onPointerEnter: onPopupMouseEnter,
      zIndex: zIndex
      // Open
      ,
      open: mergedOpen,
      keepDom: inMotion,
      fresh: fresh
      // Click
      ,
      onClick: onPopupClick,
      onPointerDownCapture: onPopupPointerDown
      // Mask
      ,
      mask: mask
      // Motion
      ,
      motion: popupMotion,
      maskMotion: maskMotion,
      onVisibleChanged: onVisibleChanged,
      onPrepare: onPrepare
      // Portal
      ,
      forceRender: forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer: getPopupContainer,
      onEsc: onEsc
      // Arrow
      ,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos: arrowPos
      // Align
      ,
      ready: ready,
      offsetX: offsetX,
      offsetY: offsetY,
      offsetR: offsetR,
      offsetB: offsetB,
      onAlign: triggerAlign
      // Stretch
      ,
      stretch: stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
      // Mobile
      ,
      mobile: mobile
    })));
  });
  if (false) // removed by dead control flow
{}
  return Trigger;
}
/* harmony default export */ const trigger_es = (generateTrigger(es/* default */.A));

/***/ },

/***/ 98085
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports noop, resetWarned, useDevWarning */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);
/* harmony import */ var _rc_component_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83704);


function noop() {}
const {
  resetWarned: rcResetWarned
} = _rc_component_util__WEBPACK_IMPORTED_MODULE_1__/* .warning */ .$e;
let deprecatedWarnList = null;
function resetWarned() {
  deprecatedWarnList = null;
  rcResetWarned();
}
let _warning = (/* unused pure expression or super */ null && (noop));
if (false) // removed by dead control flow
{}
const warning = (/* unused pure expression or super */ null && (_warning));
const WarningContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
/**
 * This is a hook only used in development.
 * We should always wrap this in `if (process.env.NODE_ENV !== 'production')` condition.
 */
const useDevWarning =  false ? 0 : () => {
  const noopWarning = () => {};
  noopWarning.deprecated = noop;
  return noopWarning;
};
const devUseWarning = useDevWarning;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (warning)));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "_n", 0, /* binding */ WarningContext,
/* harmony export */   "rJ", 0, /* binding */ devUseWarning
/* harmony export */ ]);


/***/ },

/***/ 78311
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ tooltip_UniqueProvider)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/index.js + 15 modules
var es = __webpack_require__(47237);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/is.js
var is = __webpack_require__(97789);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/index.js + 11 modules
var motion_es = __webpack_require__(86270);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(3650);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4095);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js
"use client";






const MotionContent = ({
  children
}) => {
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const rootPrefixCls = getPrefixCls();
  // This will never reach since we will not render this when no children
  /* istanbul ignore next */
  if (! /*#__PURE__*/react.isValidElement(children)) {
    return children;
  }
  return /*#__PURE__*/react.createElement(motion_es/* default */.Ay, {
    visible: true,
    motionName: `${rootPrefixCls}-fade`,
    motionAppear: true,
    motionEnter: true,
    motionLeave: false,
    removeOnLeave: false
  }, ({
    style: motionStyle,
    className: motionClassName
  }) => {
    return (0,reactNode/* cloneElement */.Ob)(children, oriProps => ({
      className: (0,clsx/* clsx */.$)(oriProps.className, motionClassName),
      style: {
        ...oriProps.style,
        ...motionStyle
      }
    }));
  });
};
/* harmony default export */ const UniqueProvider_MotionContent = (MotionContent);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/UniqueProvider/index.js
"use client";





const cachedPlacements = [null, null];
function uniqueBuiltinPlacements(ori) {
  if (cachedPlacements[0] !== ori) {
    const target = {};
    Object.keys(ori).forEach(placement => {
      target[placement] = {
        ...ori[placement],
        dynamicInset: false
      };
    });
    cachedPlacements[0] = ori;
    cachedPlacements[1] = target;
  }
  return cachedPlacements[1];
}
const UniqueProvider = ({
  children
}) => {
  const renderPopup = options => {
    const {
      id,
      builtinPlacements,
      popup
    } = options;
    const popupEle = (0,is/* isFunction */.Tn)(popup) ? popup() : popup;
    const parsedPlacements = uniqueBuiltinPlacements(builtinPlacements);
    return {
      ...options,
      getPopupContainer: null,
      arrow: false,
      popup: /*#__PURE__*/react.createElement(UniqueProvider_MotionContent, {
        key: id
      }, popupEle),
      builtinPlacements: parsedPlacements
    };
  };
  return /*#__PURE__*/react.createElement(es/* UniqueProvider */.xR, {
    postTriggerProps: renderPopup
  }, children);
};
/* harmony default export */ const tooltip_UniqueProvider = (UniqueProvider);

/***/ }

}]);