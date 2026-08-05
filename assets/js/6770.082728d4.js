"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[6770],{

/***/ 13237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ es_Popup),
  A: () => (/* binding */ tooltip_es)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
;// ./node_modules/.pnpm/@rc-component+tooltip@1.4.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/tooltip/es/Popup.js


const Popup = props => {
  const {
    children,
    prefixCls,
    id,
    classNames,
    styles,
    className,
    style
  } = props;
  return /*#__PURE__*/react.createElement("div", {
    id: id,
    className: (0,clsx/* clsx */.$)(`${prefixCls}-container`, classNames?.container, className),
    style: {
      ...styles?.container,
      ...style
    },
    role: "tooltip"
  }, typeof children === 'function' ? children() : children);
};
/* harmony default export */ const es_Popup = (Popup);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+trigger@3.10.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/trigger/es/index.js + 15 modules
var es = __webpack_require__(47237);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.12.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/util/es/hooks/useId.js
var useId = __webpack_require__(69089);
;// ./node_modules/.pnpm/@rc-component+tooltip@1.4.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/tooltip/es/placements.js
const autoAdjustOverflowTopBottom = {
  shiftX: 64,
  adjustY: 1
};
const autoAdjustOverflowLeftRight = {
  adjustX: 1,
  shiftY: true
};
const targetOffset = [0, 0];
const placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  }
};
/* harmony default export */ const es_placements = ((/* unused pure expression or super */ null && (placements)));
;// ./node_modules/.pnpm/@rc-component+tooltip@1.4.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/tooltip/es/Tooltip.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
;






const Tooltip = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    trigger = ['hover'],
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0.1,
    prefixCls = 'rc-tooltip',
    children,
    onVisibleChange,
    afterVisibleChange,
    motion,
    placement = 'right',
    align = {},
    destroyOnHidden = false,
    defaultVisible,
    getTooltipContainer,
    arrowContent,
    overlay,
    id,
    showArrow = true,
    classNames,
    styles,
    ...restProps
  } = props;
  const mergedId = (0,useId/* default */.Ay)(id);
  const triggerRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => triggerRef.current);
  const extraProps = {
    ...restProps
  };
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  // ========================= Arrow ==========================
  // Process arrow configuration
  const mergedArrow = react.useMemo(() => {
    if (!showArrow) {
      return false;
    }

    // Convert true to object for unified processing
    const arrowConfig = showArrow === true ? {} : showArrow;

    // Apply semantic styles with unified logic
    return {
      ...arrowConfig,
      className: (0,clsx/* clsx */.$)(arrowConfig.className, classNames?.arrow),
      style: {
        ...arrowConfig.style,
        ...styles?.arrow
      },
      content: arrowConfig.content ?? arrowContent
    };
  }, [showArrow, classNames?.arrow, styles?.arrow, arrowContent]);

  // ======================== Children ========================
  const getChildren = ({
    open
  }) => {
    const child = react.Children.only(children);
    const ariaProps = {
      'aria-describedby': overlay && open ? mergedId : undefined
    };
    return /*#__PURE__*/react.cloneElement(child, ariaProps);
  };

  // ========================= Render =========================
  return /*#__PURE__*/react.createElement(es/* default */.Ay, _extends({
    popupClassName: classNames?.root,
    prefixCls: prefixCls,
    popup: /*#__PURE__*/react.createElement(es_Popup, {
      key: "content",
      prefixCls: prefixCls,
      id: mergedId,
      classNames: classNames,
      styles: styles
    }, overlay),
    action: trigger,
    builtinPlacements: placements,
    popupPlacement: placement,
    ref: triggerRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onOpenChange: onVisibleChange,
    afterOpenChange: afterVisibleChange,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    autoDestroy: destroyOnHidden,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: styles?.root,
    mouseEnterDelay: mouseEnterDelay,
    arrow: mergedArrow,
    uniqueContainerClassName: classNames?.uniqueContainer,
    uniqueContainerStyle: styles?.uniqueContainer
  }, extraProps), getChildren);
});
/* harmony default export */ const es_Tooltip = (Tooltip);
;// ./node_modules/.pnpm/@rc-component+tooltip@1.4.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/tooltip/es/index.js



/* harmony default export */ const tooltip_es = (es_Tooltip);

/***/ },

/***/ 20155
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports containerBaseZIndexOffset, consumerBaseZIndexOffset */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);
/* harmony import */ var _theme_useToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59081);
/* harmony import */ var _zindexContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5456);




// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
/**
 * Static function will default be the `CONTAINER_MAX_OFFSET`.
 * But it still may have children component like Select, Dropdown.
 * So the warning zIndex should exceed the `CONTAINER_MAX_OFFSET`.
 */
const CONTAINER_MAX_OFFSET_WITH_CHILDREN = (/* unused pure expression or super */ null && (CONTAINER_MAX_OFFSET + CONTAINER_OFFSET));
const containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET,
  FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
const isContainerType = type => {
  return type in containerBaseZIndexOffset;
};
const useZIndex = (componentType, customZIndex) => {
  const [, token] = (0,_theme_useToken__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)();
  const parentZIndex = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_zindexContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
  const isContainer = isContainerType(componentType);
  let result;
  if (customZIndex !== undefined) {
    result = [customZIndex, customZIndex];
  } else {
    let zIndex = parentZIndex ?? 0;
    if (isContainer) {
      zIndex +=
      // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token.zIndexPopupBase) +
      // Container offset
      containerBaseZIndexOffset[componentType];
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    result = [parentZIndex === undefined ? customZIndex : zIndex, zIndex];
  }
  if (false) // removed by dead control flow
{}
  return result;
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "YK", 0, /* binding */ useZIndex
/* harmony export */ ]);


/***/ },

/***/ 5456
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);

const ZIndexContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZIndexContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 14032
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports fadeIn, fadeOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35605);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75900);


const fadeIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antFadeIn', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
const fadeOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antFadeOut', {
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});
/**
 * Initialize fade motion styles
 *
 * Generates CSS styles for fade in/out transition animations when elements are shown/hidden.
 * Supports enter, appear, and leave animation states.
 *
 * @param token - Object containing design tokens and CSS class prefix
 * @param sameLevel - Controls CSS selector nesting behavior:
 *   - `false` (default): Generates descendant selectors like `.ant-fade-enter`, `.ant-fade-appear`
 *   - `true`: Generates same-level selectors with `&` prefix like `&.ant-fade-enter`, `&.ant-fade-appear`
 *   Use `true` when the motion classes are applied to the same element as the parent selector,
 *   Use `false` when the motion classes are applied to child elements
 * @returns CSS interpolation object containing fade motion styles
 *
 * @example
 * ```ts
 * // For child elements (default behavior)
 * const fadeStyles = initFadeMotion(token);
 * // Generates: .parent .ant-fade-enter { ... }
 *
 * // For same element
 * const sameLevelFadeStyles = initFadeMotion(token, true);
 * // Generates: .parent.ant-fade-enter { ... }
 * ```
 */
const initFadeMotion = (token, sameLevel = false) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .b)(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: 'linear'
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: 'linear'
    }
  }];
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "p9", 0, /* binding */ initFadeMotion
/* harmony export */ ]);


/***/ },

/***/ 75900
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

const initMotionCommon = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false) => {
  const sameLevelPrefix = sameLevel ? '&' : '';
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
      ...initMotionCommon(duration),
      animationPlayState: 'paused'
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      ...initMotionCommon(duration),
      animationPlayState: 'paused'
    },
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: 'running'
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    }
  };
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "b", 0, /* binding */ initMotion
/* harmony export */ ]);


/***/ },

/***/ 65581
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports zoomIn, zoomOut, zoomBigIn, zoomBigOut, zoomUpIn, zoomUpOut, zoomLeftIn, zoomLeftOut, zoomRightIn, zoomRightOut, zoomDownIn, zoomDownOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35605);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75900);


const zoomIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomIn', {
  '0%': {
    transform: 'scale(0.2)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.2)',
    opacity: 0
  }
});
const zoomBigIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomBigIn', {
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomBigOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomBigOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.8)',
    opacity: 0
  }
});
const zoomUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomUpIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  }
});
const zoomUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomUpOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  }
});
const zoomLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomLeftIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  }
});
const zoomLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomLeftOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  }
});
const zoomRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomRightIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  }
});
const zoomRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomRightOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  }
});
const zoomDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomDownIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  }
});
const zoomDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .Mo('antZoomDownOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  'zoom-big': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-big-fast': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-left': {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  'zoom-right': {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  'zoom-up': {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  'zoom-down': {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .b)(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: 'scale(0)',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      '&-prepare': {
        transform: 'none'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "aB", 0, /* binding */ initZoomMotion
/* harmony export */ ]);


/***/ },

/***/ 921
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getArrowOffsetToken)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35605);
/* harmony import */ var _theme_util_genStyleUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63334);
/* harmony import */ var _roundedArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65119);



const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical
  };
}
const getArrowStyle = (token, colorBg, options) => {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal,
    antCls
  } = token;
  const [varName] = (0,_theme_util_genStyleUtils__WEBPACK_IMPORTED_MODULE_1__/* .genCssVar */ .PN)(antCls, 'tooltip');
  const {
    arrowDistance = 0,
    arrowShadow = true
  } = options || {};
  return {
    [componentCls]: {
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [{
        position: 'absolute',
        zIndex: 1,
        // lift it up so the menu wouldn't cask shadow on it
        display: 'block',
        ...(0,_roundedArrow__WEBPACK_IMPORTED_MODULE_2__/* .genRoundedArrow */ .j)(token, colorBg, arrowShadow ? boxShadowPopoverArrow : false),
        '&:before': {
          background: colorBg
        }
      }],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(',')]: {
        bottom: arrowDistance,
        transform: 'translateY(100%) rotate(180deg)'
      },
      [`&-placement-top > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
      },
      '&-placement-topLeft': {
        [varName('arrow-offset-x')]: arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      '&-placement-topRight': {
        [varName('arrow-offset-x')]: `calc(100% - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .zA)(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(',')]: {
        top: arrowDistance,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      '&-placement-bottomLeft': {
        [varName('arrow-offset-x')]: arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      '&-placement-bottomRight': {
        [varName('arrow-offset-x')]: `calc(100% - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .zA)(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      // >>>>> Left
      [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(',')]: {
        right: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(100%) rotate(90deg)'
      },
      [`&-placement-left > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
      },
      [`&-placement-leftTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-leftBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      },
      // >>>>> Right
      [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(',')]: {
        left: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-right > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-rightTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-rightBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getArrowStyle);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 65119
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ getArrowToken)
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35605);

function getArrowToken(token) {
  const {
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter
  } = token;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = borderRadiusOuter * 1 / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon
  };
}
const genRoundedArrow = (token, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc
  } = token;
  const afterStyle = {
    content: '""',
    position: 'absolute',
    width: arrowShadowWidth,
    height: arrowShadowWidth,
    bottom: 0,
    insetInline: 0,
    margin: 'auto',
    borderRadius: {
      _skip_check_: true,
      value: `0 0 ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .zA)(borderRadiusXS)} 0`
    },
    transform: 'translateY(50%) rotate(-135deg)',
    zIndex: 0,
    background: 'transparent'
  };
  if (boxShadow) {
    afterStyle.boxShadow = boxShadow;
  }
  return {
    pointerEvents: 'none',
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: 'hidden',
    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath]
      },
      content: '""'
    },
    '&::after': afterStyle
  };
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "j", 0, /* binding */ genRoundedArrow
/* harmony export */ ]);


/***/ },

/***/ 62723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);

const useMergedArrow = (providedArrow, providedContextArrow) => {
  const toConfig = arrow => typeof arrow === 'boolean' ? {
    show: arrow
  } : arrow || {};
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const arrowConfig = toConfig(providedArrow);
    const contextArrowConfig = toConfig(providedContextArrow);
    return {
      ...contextArrowConfig,
      ...arrowConfig,
      show: arrowConfig.show ?? contextArrowConfig.show ?? true
    };
  }, [providedArrow, providedContextArrow]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMergedArrow);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 36770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ tooltip)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+tooltip@1.4.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/tooltip/es/index.js + 3 modules
var es = __webpack_require__(13237);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.12.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/util/es/index.js + 14 modules
var util_es = __webpack_require__(83704);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = __webpack_require__(2617);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(20155);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js + 1 modules
var useMergeSemantic = __webpack_require__(53414);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/is.js
var is = __webpack_require__(97789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/motion.js
var _util_motion = __webpack_require__(58435);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/placementArrow.js
var placementArrow = __webpack_require__(921);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/placements.js


function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = (0,is/* isPlainObject */.Qd)(autoAdjustOverflow) ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case 'top':
    case 'bottom':
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case 'left':
    case 'right':
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = {
    ...baseOverflow,
    ...overflow
  };
  // Support auto shift
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
const PlacementAlignMap = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  leftTop: {
    points: ['tr', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  rightTop: {
    points: ['tl', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  rightBottom: {
    points: ['bl', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  },
  leftBottom: {
    points: ['br', 'bl']
  }
};
const ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ['bl', 'tc']
  },
  leftTop: {
    points: ['tr', 'cl']
  },
  topRight: {
    points: ['br', 'tc']
  },
  rightTop: {
    points: ['tl', 'cr']
  },
  bottomRight: {
    points: ['tr', 'bc']
  },
  rightBottom: {
    points: ['bl', 'cr']
  },
  bottomLeft: {
    points: ['tl', 'bc']
  },
  leftBottom: {
    points: ['br', 'cl']
  }
};
const DisableAutoArrowList = new Set(['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  // Dynamic offset
  const arrowOffset = (0,placementArrow/* getArrowOffsetToken */.K)({
    contentRadius: borderRadius,
    limitVerticalRadius: true
  });
  Object.keys(PlacementAlignMap).forEach(key => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = {
      ...template,
      offset: [0, 0],
      dynamicInset: true
    };
    placementMap[key] = placementInfo;
    // Disable autoArrow since design is fixed position
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    // Static offset
    switch (key) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    if (arrowPointAtCenter) {
      switch (key) {
        case 'topLeft':
        case 'bottomLeft':
          placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case 'topRight':
        case 'bottomRight':
          placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case 'leftTop':
        case 'rightTop':
          placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
          break;
        case 'leftBottom':
        case 'rightBottom':
          placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
          break;
      }
    }
    // Overflow
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    // VisibleFirst
    if (visibleFirst) {
      placementInfo.htmlRegion = 'visibleFirst';
    }
  });
  return placementMap;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(3650);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__(98085);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/zindexContext.js
var zindexContext = __webpack_require__(5456);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4095);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(75326);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/table/TableMeasureRowContext.js

const TableMeasureRowContext = /*#__PURE__*/react.createContext(false);
/* harmony default export */ const table_TableMeasureRowContext = (TableMeasureRowContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(59081);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/hook/useMergedArrow.js
var useMergedArrow = __webpack_require__(62723);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var cssinjs_es = __webpack_require__(35605);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/index.js
var style = __webpack_require__(27689);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/motion/fade.js
var fade = __webpack_require__(14032);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(65581);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/roundedArrow.js
var roundedArrow = __webpack_require__(65119);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/interface/presetColors.js
var presetColors = __webpack_require__(79862);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/util/genPresetColor.js

function genPresetColor(token, genCss) {
  return presetColors/* PresetColors */.s.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return {
      ...prev,
      ...genCss(colorKey, {
        lightColor,
        lightBorderColor,
        darkColor,
        textColor
      })
    };
  }, {});
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/cssinjs-utils/es/index.js + 14 modules
var cssinjs_utils_es = __webpack_require__(47226);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(63334);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/style/index.js







const FALL_BACK_ORIGIN = '50%';
const genTooltipStyle = token => {
  const {
    calc,
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    dropShadowPopover,
    paddingSM,
    paddingXS,
    arrowOffsetHorizontal,
    sizePopupArrow,
    antCls
  } = token;
  const [varName, varRef] = (0,genStyleUtils/* genCssVar */.PN)(antCls, 'tooltip');
  // arrowOffsetHorizontal + arrowWidth + borderRadius
  const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
  // borderRadius * 2 + arrowWidth
  const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
  const sharedBodyStyle = {
    minWidth: centerAlignMinWidth,
    minHeight: controlHeight,
    padding: `${(0,cssinjs_es/* unit */.zA)(token.calc(paddingSM).div(2).equal())} ${(0,cssinjs_es/* unit */.zA)(paddingXS)}`,
    color: varRef('overlay-color', tooltipColor),
    textAlign: 'start',
    textDecoration: 'none',
    wordWrap: 'break-word',
    backgroundColor: tooltipBg,
    borderRadius: tooltipBorderRadius,
    boxSizing: 'border-box'
  };
  const sharedTransformOrigin = {
    // When use `autoArrow`, origin will follow the arrow position
    [varName('valid-offset-x')]: varRef('arrow-offset-x', 'var(--arrow-x)'),
    transformOrigin: [varRef('valid-offset-x', FALL_BACK_ORIGIN), `var(--arrow-y, ${FALL_BACK_ORIGIN})`].join(' ')
  };
  return [{
    [componentCls]: {
      ...(0,style/* resetComponent */.dF)(token),
      position: 'absolute',
      zIndex: zIndexPopup,
      display: 'block',
      width: 'max-content',
      maxWidth: tooltipMaxWidth,
      visibility: 'visible',
      filter: dropShadowPopover,
      ...sharedTransformOrigin,
      '&-hidden': {
        display: 'none'
      },
      [varName('arrow-background-color')]: tooltipBg,
      // Wrapper for the tooltip content
      [`${componentCls}-container`]: [sharedBodyStyle, (0,fade/* initFadeMotion */.p9)(token, true)],
      [`&:has(~ ${componentCls}-unique-container)`]: {
        [`${componentCls}-container`]: {
          border: 'none',
          background: 'transparent'
        }
      },
      // Align placement should have another min width
      [[`&-placement-topLeft`, `&-placement-topRight`, `&-placement-bottomLeft`, `&-placement-bottomRight`].join(',')]: {
        minWidth: edgeAlignMinWidth
      },
      // Limit left and right placement radius
      [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(',')]: {
        [`${componentCls}-inner`]: {
          borderRadius: token.min(tooltipBorderRadius, (/* inlined export .MAX_VERTICAL_CONTENT_RADIUS */8))
        }
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      },
      // generator for preset color
      ...genPresetColor(token, (colorKey, {
        darkColor
      }) => ({
        [`&${componentCls}-${colorKey}`]: {
          [`${componentCls}-container`]: {
            backgroundColor: darkColor
          },
          [`${componentCls}-arrow`]: {
            [varName('arrow-background-color')]: darkColor
          }
        }
      })),
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    }
  },
  // Arrow Style
  (0,placementArrow/* default */.A)(token, varRef('arrow-background-color'), {
    arrowShadow: false
  }),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow
    }
  },
  // Unique Body
  {
    [`${componentCls}-unique-container`]: {
      ...sharedBodyStyle,
      ...sharedTransformOrigin,
      position: 'absolute',
      zIndex: calc(zIndexPopup).sub(1).equal(),
      filter: dropShadowPopover,
      '&-hidden': {
        display: 'none'
      },
      '&-visible': {
        transition: `all ${token.motionDurationSlow}`
      }
    }
  }];
};
// ============================== Export ==============================
const prepareComponentToken = token => ({
  zIndexPopup: token.zIndexPopupBase + 70,
  maxWidth: 250,
  ...(0,placementArrow/* getArrowOffsetToken */.K)({
    contentRadius: token.borderRadius,
    limitVerticalRadius: true
  }),
  ...(0,roundedArrow/* getArrowToken */.n)((0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
  }))
});
/* harmony default export */ const tooltip_style = ((prefixCls, rootCls, injectStyle = true) => {
  const useStyle = (0,genStyleUtils/* genStyleHooks */.OF)('Tooltip', token => {
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgSpotlight,
      maxWidth
    } = token;
    const TooltipToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
      // default variables
      tooltipMaxWidth: maxWidth,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgSpotlight
    });
    return [genTooltipStyle(TooltipToken), (0,zoom/* initZoomMotion */.aB)(token, 'zoom-big-fast')];
  }, prepareComponentToken, {
    resetStyle: false,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle
  });
  return useStyle(prefixCls, rootCls);
});
__webpack_require__.dn(tooltip_style);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(58747);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/colors.js


const inverseColors = presetColors/* PresetColors */.s.map(color => `${color}-inverse`);
const PresetStatusColors = (/* unused pure expression or super */ null && (['success', 'processing', 'error', 'default', 'warning']));
/**
 * determine if the color keyword belongs to the `Ant Design` {@link PresetColors}.
 * @param color color to be judged
 * @param includeInverse whether to include reversed colors
 */
function isPresetColor(color, includeInverse = true) {
  if (includeInverse) {
    return [].concat((0,toConsumableArray/* default */.A)(inverseColors), (0,toConsumableArray/* default */.A)(presetColors/* PresetColors */.s)).includes(color);
  }
  return presetColors/* PresetColors */.s.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColors.includes(color);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/color-picker/util.js
var util = __webpack_require__(67010);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/util.js




const parseColor = (rootPrefixCls, prefixCls, color) => {
  const isInternalColor = isPresetColor(color);
  const [varName] = (0,genStyleUtils/* genCssVar */.PN)(rootPrefixCls, 'tooltip');
  const className = (0,clsx/* clsx */.$)({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  const rgb = (0,util/* generateColor */.Z6)(color).toRgb();
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  const textColor = luminance < 0.5 ? '#FFF' : '#000';
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    overlayStyle[varName('overlay-color')] = textColor;
    arrowStyle[varName('arrow-background-color')] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
};
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/PurePanel.js
"use client";









/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = 'top',
    title,
    color,
    overlayInnerStyle,
    classNames,
    styles
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const rootCls = (0,useCSSVarCls/* default */.A)(prefixCls);
  const [hashId, cssVarCls] = tooltip_style(prefixCls, rootCls);
  // Color
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const innerStyles = react.useMemo(() => {
    const mergedStyle = {
      ...overlayInnerStyle,
      ...colorInfo.overlayStyle
    };
    return {
      container: mergedStyle
    };
  }, [overlayInnerStyle, colorInfo.overlayStyle]);
  const mergedProps = {
    ...props,
    placement
  };
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([classNames], [innerStyles, styles], {
    props: mergedProps
  });
  const rootClassName = (0,clsx/* clsx */.$)(rootCls, hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return /*#__PURE__*/react.createElement("div", {
    className: rootClassName,
    style: arrowContentStyle
  }, /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /*#__PURE__*/react.createElement(es/* Popup */.z, {
    ...props,
    className: hashId,
    prefixCls: prefixCls,
    classNames: mergedClassNames,
    styles: mergedStyles
  }, title));
};
/* harmony default export */ const tooltip_PurePanel = (PurePanel);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/UniqueProvider/index.js + 1 modules
var UniqueProvider = __webpack_require__(78311);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/index.js
"use client";























const InternalTooltip = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    color,
    children,
    afterOpenChange,
    arrow: tooltipArrow,
    destroyTooltipOnHide,
    destroyOnHidden,
    title,
    overlay,
    trigger,
    builtinPlacements,
    autoAdjustOverflow = true,
    motion,
    getPopupContainer,
    placement = 'top',
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    rootClassName,
    styles,
    classNames,
    onOpenChange,
    // Legacy
    overlayInnerStyle,
    overlayStyle,
    overlayClassName,
    ...restProps
  } = props;
  const [, token] = (0,useToken/* default */.Ay)();
  const injectFromPopover = props['data-popover-inject'];
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    ...semanticConfig
  } = (0,context/* useComponentConfig */.TP)('tooltip');
  // When injected from Popover/Popconfirm, skip tooltip-specific semantic config
  // to prevent ConfigProvider tooltip config from leaking into those components
  const {
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    arrow: contextArrow,
    trigger: contextTrigger
  } = injectFromPopover ? {} : semanticConfig;
  const mergedArrow = (0,useMergedArrow/* default */.A)(tooltipArrow, contextArrow);
  const mergedShowArrow = mergedArrow.show;
  const mergedTrigger = trigger || contextTrigger || 'hover';
  const mergedGetPopupContainer = getPopupContainer || getContextPopupContainer;
  const mergedDestroyOnHidden = destroyOnHidden ?? !!destroyTooltipOnHide;
  const inTableMeasureRow = react.useContext(table_TableMeasureRowContext);
  // ============================== Ref ===============================
  const warning = (0,_util_warning/* devUseWarning */.rJ)('Tooltip');
  const tooltipRef = react.useRef(null);
  const forceAlign = () => {
    tooltipRef.current?.forceAlign();
  };
  react.useImperativeHandle(ref, () => ({
    forceAlign,
    nativeElement: tooltipRef.current?.nativeElement,
    popupElement: tooltipRef.current?.popupElement
  }));
  // ============================== Warn ==============================
  if (false) // removed by dead control flow
{}
  // ============================== Open ==============================
  const [open, setOpen] = (0,util_es/* useControlledState */.PW)(props.defaultOpen ?? false, props.open);
  const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
  const onInternalOpenChange = vis => {
    setOpen(noTitle ? false : vis);
    if (!noTitle && onOpenChange) {
      onOpenChange(vis);
    }
  };
  const tooltipPlacements = react.useMemo(() => {
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: mergedArrow?.pointAtCenter ?? false,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [mergedArrow, builtinPlacements, token, mergedShowArrow, autoAdjustOverflow]);
  const memoOverlay = react.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || '';
  }, [overlay, title]);
  const memoOverlayWrapper = /*#__PURE__*/react.createElement(ContextIsolator/* default */.A, {
    space: true,
    form: true
  }, (0,is/* isFunction */.Tn)(memoOverlay) ? memoOverlay() : memoOverlay);
  // =========== Merged Props for Semantic ===========
  const mergedProps = {
    ...props,
    trigger: mergedTrigger,
    builtinPlacements: tooltipPlacements,
    getPopupContainer: mergedGetPopupContainer,
    destroyOnHidden: mergedDestroyOnHidden
  };
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  let tempOpen = open;
  // Hide tooltip when there is no title or in table measure row
  if (!('open' in props) && noTitle || inTableMeasureRow) {
    tempOpen = false;
  }
  // ============================= Render =============================
  const child = /*#__PURE__*/react.isValidElement(children) && !(0,reactNode/* isFragment */.zv)(children) ? children : /*#__PURE__*/react.createElement("span", null, children);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === 'string' ? (0,clsx/* clsx */.$)(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  // Style
  const rootCls = (0,useCSSVarCls/* default */.A)(prefixCls);
  const [hashId, cssVarCls] = tooltip_style(prefixCls, rootCls, !injectFromPopover);
  // Color
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const themeCls = (0,clsx/* clsx */.$)(rootCls, hashId, cssVarCls);
  const rootClassNames = (0,clsx/* clsx */.$)(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, colorInfo.className, rootClassName, themeCls, contextClassName, mergedClassNames.root);
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,useZIndex/* useZIndex */.YK)('Tooltip', restProps.zIndex);
  const containerStyle = {
    ...mergedStyles.container,
    ...overlayInnerStyle,
    ...colorInfo.overlayStyle
  };
  const content = /*#__PURE__*/react.createElement(es/* default */.A, {
    unique: true,
    ...restProps,
    zIndex: zIndex,
    showArrow: mergedShowArrow,
    placement: placement,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    prefixCls: prefixCls,
    classNames: {
      root: rootClassNames,
      container: mergedClassNames.container,
      arrow: mergedClassNames.arrow,
      uniqueContainer: (0,clsx/* clsx */.$)(themeCls, mergedClassNames.container)
    },
    styles: {
      root: {
        ...arrowContentStyle,
        ...mergedStyles.root,
        ...contextStyle,
        ...overlayStyle
      },
      container: containerStyle,
      uniqueContainer: containerStyle,
      arrow: mergedStyles.arrow
    },
    ref: tooltipRef,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onInternalOpenChange,
    afterVisibleChange: afterOpenChange,
    arrowContent: /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: (0,_util_motion/* getTransitionName */.b)(rootPrefixCls, 'zoom-big-fast', typeof motion?.motionName === 'string' ? motion?.motionName : undefined),
      motionDeadline: 1000
    },
    trigger: mergedTrigger,
    builtinPlacements: tooltipPlacements,
    getTooltipContainer: mergedGetPopupContainer,
    destroyOnHidden: mergedDestroyOnHidden
  }, tempOpen ? (0,reactNode/* cloneElement */.Ob)(child, {
    className: childCls
  }) : child);
  return /*#__PURE__*/react.createElement(zindexContext/* default */.A.Provider, {
    value: contextZIndex
  }, content);
});
const Tooltip = InternalTooltip;
if (false) // removed by dead control flow
{}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = tooltip_PurePanel;
Tooltip.UniqueProvider = UniqueProvider/* default */.A;
/* harmony default export */ const tooltip = (Tooltip);

/***/ }

}]);