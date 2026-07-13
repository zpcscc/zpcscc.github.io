"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[2176],{

/***/ 64221
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_switch)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var LoadingOutlined = __webpack_require__(98013);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/hooks/useControlledState.js
var useControlledState = __webpack_require__(71826);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/KeyCode.js
var KeyCode = __webpack_require__(54911);
;// ./node_modules/.pnpm/@rc-component+switch@1.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/switch/es/index.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Switch = /*#__PURE__*/react.forwardRef(({
  prefixCls = 'rc-switch',
  className,
  checked,
  defaultChecked,
  disabled,
  loadingIcon,
  checkedChildren,
  unCheckedChildren,
  onClick,
  onChange,
  onKeyDown,
  styles,
  classNames: switchClassNames,
  ...restProps
}, ref) => {
  const [innerChecked, setInnerChecked] = (0,useControlledState/* default */.A)(defaultChecked ?? false, checked);
  function triggerChange(newChecked, event) {
    let mergedChecked = innerChecked;
    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange?.(mergedChecked, event);
    }
    return mergedChecked;
  }
  function onInternalKeyDown(e) {
    if (e.which === KeyCode/* default */.A.LEFT) {
      triggerChange(false, e);
    } else if (e.which === KeyCode/* default */.A.RIGHT) {
      triggerChange(true, e);
    }
    onKeyDown?.(e);
  }
  function onInternalClick(e) {
    const ret = triggerChange(!innerChecked, e);
    // [Legacy] trigger onClick with value
    onClick?.(ret, e);
  }
  const switchClassName = (0,clsx/* clsx */.$)(prefixCls, className, {
    [`${prefixCls}-checked`]: innerChecked,
    [`${prefixCls}-disabled`]: disabled
  });
  return /*#__PURE__*/react.createElement("button", _extends({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-inner`
  }, /*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-inner-checked`, switchClassNames?.content),
    style: styles?.content
  }, checkedChildren), /*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-inner-unchecked`, switchClassNames?.content),
    style: styles?.content
  }, unCheckedChildren)));
});
Switch.displayName = 'Switch';
/* harmony default export */ const es = (Switch);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/index.js + 12 modules
var util_es = __webpack_require__(23392);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js + 1 modules
var useMergeSemantic = __webpack_require__(24254);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(32473);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(16807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(16007);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(14301);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var cssinjs_es = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+fast-color@3.0.1/node_modules/@ant-design/fast-color/es/index.js + 2 modules
var fast_color_es = __webpack_require__(55550);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(75025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/motion/util.js
var util = __webpack_require__(37090);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(90126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 23 modules
var cssinjs_utils_es = __webpack_require__(14209);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/switch/style/index.js





const genSwitchSmallStyle = token => {
  const {
    componentCls,
    trackHeightSM,
    trackPadding,
    trackMinWidthSM,
    innerMinMarginSM,
    innerMaxMarginSM,
    handleSizeSM,
    calc
  } = token;
  const switchInnerCls = `${componentCls}-inner`;
  const trackPaddingCalc = (0,cssinjs_es/* unit */.zA)(calc(handleSizeSM).add(calc(trackPadding).mul(2)).equal());
  const innerMaxMarginCalc = (0,cssinjs_es/* unit */.zA)(calc(innerMaxMarginSM).mul(2).equal());
  return {
    [componentCls]: {
      [`&${componentCls}-small`]: {
        minWidth: trackMinWidthSM,
        height: trackHeightSM,
        lineHeight: (0,cssinjs_es/* unit */.zA)(trackHeightSM),
        [`${componentCls}-inner`]: {
          paddingInlineStart: innerMaxMarginSM,
          paddingInlineEnd: innerMinMarginSM,
          [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
            minHeight: trackHeightSM
          },
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
            marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
          },
          [`${switchInnerCls}-unchecked`]: {
            marginTop: calc(trackHeightSM).mul(-1).equal(),
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${componentCls}-handle`]: {
          width: handleSizeSM,
          height: handleSizeSM
        },
        [`${componentCls}-loading-icon`]: {
          top: calc(calc(handleSizeSM).sub(token.switchLoadingIconSize)).div(2).equal(),
          fontSize: token.switchLoadingIconSize
        },
        [`&${componentCls}-checked`]: {
          [`${componentCls}-inner`]: {
            paddingInlineStart: innerMinMarginSM,
            paddingInlineEnd: innerMaxMarginSM,
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
              marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
            }
          },
          [`${componentCls}-handle`]: {
            insetInlineStart: `calc(100% - ${(0,cssinjs_es/* unit */.zA)(calc(handleSizeSM).add(trackPadding).equal())})`
          }
        },
        [`&:not(${componentCls}-disabled):active`]: {
          [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: calc(token.marginXXS).div(2).equal(),
              marginInlineEnd: calc(token.marginXXS).mul(-1).div(2).equal()
            }
          },
          [`&${componentCls}-checked ${switchInnerCls}`]: {
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: calc(token.marginXXS).mul(-1).div(2).equal(),
              marginInlineEnd: calc(token.marginXXS).div(2).equal()
            }
          }
        }
      }
    }
  };
};
const genSwitchLoadingStyle = token => {
  const {
    componentCls,
    handleSize,
    calc
  } = token;
  return {
    [componentCls]: {
      [`${componentCls}-loading-icon${token.iconCls}`]: {
        position: 'relative',
        top: calc(calc(handleSize).sub(token.fontSize)).div(2).equal(),
        color: token.switchLoadingIconColor,
        verticalAlign: 'top'
      },
      [`&${componentCls}-checked ${componentCls}-loading-icon`]: {
        color: token.switchColor
      }
    }
  };
};
const genSwitchHandleStyle = token => {
  const {
    componentCls,
    trackPadding,
    handleBg,
    handleShadow,
    handleSize,
    calc
  } = token;
  const switchHandleCls = `${componentCls}-handle`;
  return {
    [componentCls]: {
      [switchHandleCls]: {
        position: 'absolute',
        top: trackPadding,
        insetInlineStart: trackPadding,
        width: handleSize,
        height: handleSize,
        transition: `all ${token.switchDuration} ease-in-out`,
        ...(0,util/* genNoMotionStyle */.V)(),
        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: handleBg,
          borderRadius: calc(handleSize).div(2).equal(),
          boxShadow: handleShadow,
          transition: `all ${token.switchDuration} ease-in-out`,
          content: '""',
          ...(0,util/* genNoMotionStyle */.V)()
        }
      },
      [`&${componentCls}-checked ${switchHandleCls}`]: {
        insetInlineStart: `calc(100% - ${(0,cssinjs_es/* unit */.zA)(calc(handleSize).add(trackPadding).equal())})`
      },
      [`&:not(${componentCls}-disabled):active`]: {
        [`${switchHandleCls}::before`]: {
          insetInlineEnd: token.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${componentCls}-checked ${switchHandleCls}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: token.switchHandleActiveInset
        }
      }
    }
  };
};
const genSwitchInnerStyle = token => {
  const {
    componentCls,
    trackHeight,
    trackPadding,
    innerMinMargin,
    innerMaxMargin,
    handleSize,
    switchDuration,
    calc
  } = token;
  const switchInnerCls = `${componentCls}-inner`;
  const trackPaddingCalc = (0,cssinjs_es/* unit */.zA)(calc(handleSize).add(calc(trackPadding).mul(2)).equal());
  const innerMaxMarginCalc = (0,cssinjs_es/* unit */.zA)(calc(innerMaxMargin).mul(2).equal());
  return {
    [componentCls]: {
      [switchInnerCls]: {
        display: 'block',
        overflow: 'hidden',
        borderRadius: 100,
        height: '100%',
        paddingInlineStart: innerMaxMargin,
        paddingInlineEnd: innerMinMargin,
        transition: [`padding-inline-start`, `padding-inline-end`].map(prop => `${prop} ${switchDuration} ease-in-out`).join(', '),
        ...(0,util/* genNoMotionStyle */.V)(),
        [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
          display: 'block',
          color: token.colorTextLightSolid,
          fontSize: token.fontSizeSM,
          pointerEvents: 'none',
          minHeight: trackHeight,
          transition: [`margin-inline-start`, `margin-inline-end`].map(prop => `${prop} ${switchDuration} ease-in-out`).join(', '),
          ...(0,util/* genNoMotionStyle */.V)()
        },
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
          marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
        },
        [`${switchInnerCls}-unchecked`]: {
          marginTop: calc(trackHeight).mul(-1).equal(),
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${componentCls}-checked ${switchInnerCls}`]: {
        paddingInlineStart: innerMinMargin,
        paddingInlineEnd: innerMaxMargin,
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${switchInnerCls}-unchecked`]: {
          marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
          marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
        }
      },
      [`&:not(${componentCls}-disabled):active`]: {
        [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
          [`${switchInnerCls}-unchecked`]: {
            marginInlineStart: calc(trackPadding).mul(2).equal(),
            marginInlineEnd: calc(trackPadding).mul(-1).mul(2).equal()
          }
        },
        [`&${componentCls}-checked ${switchInnerCls}`]: {
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: calc(trackPadding).mul(-1).mul(2).equal(),
            marginInlineEnd: calc(trackPadding).mul(2).equal()
          }
        }
      }
    }
  };
};
const genSwitchStyle = token => {
  const {
    componentCls,
    trackHeight,
    trackMinWidth
  } = token;
  return {
    [componentCls]: {
      ...(0,style/* resetComponent */.dF)(token),
      position: 'relative',
      display: 'inline-block',
      boxSizing: 'border-box',
      minWidth: trackMinWidth,
      height: trackHeight,
      lineHeight: (0,cssinjs_es/* unit */.zA)(trackHeight),
      verticalAlign: 'middle',
      background: token.colorTextQuaternary,
      border: '0',
      borderRadius: 100,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid}`,
      userSelect: 'none',
      ...(0,util/* genNoMotionStyle */.V)(),
      [`&:hover:not(${componentCls}-disabled)`]: {
        background: token.colorTextTertiary
      },
      ...(0,style/* genFocusStyle */.K8)(token),
      [`&${componentCls}-checked`]: {
        background: token.switchColor,
        [`&:hover:not(${componentCls}-disabled)`]: {
          background: token.colorPrimaryHover
        }
      },
      [`&${componentCls}-loading, &${componentCls}-disabled`]: {
        cursor: 'not-allowed',
        opacity: token.switchDisabledOpacity,
        '*': {
          boxShadow: 'none',
          cursor: 'not-allowed'
        }
      },
      // rtl style
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => {
  const {
    fontSize,
    lineHeight,
    controlHeight,
    colorWhite
  } = token;
  const height = fontSize * lineHeight;
  const heightSM = controlHeight / 2;
  const padding = 2; // Fixed value
  const handleSize = height - padding * 2;
  const handleSizeSM = heightSM - padding * 2;
  return {
    trackHeight: height,
    trackHeightSM: heightSM,
    trackMinWidth: handleSize * 2 + padding * 4,
    trackMinWidthSM: handleSizeSM * 2 + padding * 2,
    trackPadding: padding,
    // Fixed value
    handleBg: colorWhite,
    handleSize,
    handleSizeSM,
    handleShadow: `0 2px 4px 0 ${new fast_color_es/* FastColor */.Y('#00230b').setA(0.2).toRgbString()}`,
    innerMinMargin: handleSize / 2,
    innerMaxMargin: handleSize + padding + padding * 2,
    innerMinMarginSM: handleSizeSM / 2,
    innerMaxMarginSM: handleSizeSM + padding + padding * 2
  };
};
/* harmony default export */ const switch_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Switch', token => {
  const switchToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    switchDuration: token.motionDurationMid,
    switchColor: token.colorPrimary,
    switchDisabledOpacity: token.opacityLoading,
    switchLoadingIconSize: token.calc(token.fontSizeIcon).mul(0.75).equal(),
    switchLoadingIconColor: `rgba(0, 0, 0, ${token.opacityLoading})`,
    switchHandleActiveInset: '-30%'
  });
  return [genSwitchStyle(switchToken),
  // inner style
  genSwitchInnerStyle(switchToken),
  // handle style
  genSwitchHandleStyle(switchToken),
  // loading style
  genSwitchLoadingStyle(switchToken),
  // small style
  genSwitchSmallStyle(switchToken)];
}, prepareComponentToken));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/switch/index.js
"use client";













const InternalSwitch = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    size: customizeSize,
    disabled: customDisabled,
    loading,
    className,
    rootClassName,
    style,
    checked: checkedProp,
    value,
    defaultChecked: defaultCheckedProp,
    defaultValue,
    onChange,
    styles,
    classNames,
    ...restProps
  } = props;
  const [checked, setChecked] = (0,util_es/* useControlledState */.PW)(defaultCheckedProp ?? defaultValue ?? false, checkedProp ?? value);
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.TP)('switch');
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.A);
  const mergedDisabled = (customDisabled ?? disabled) || loading;
  const prefixCls = getPrefixCls('switch', customizePrefixCls);
  // Style
  const [hashId, cssVarCls] = switch_style(prefixCls);
  if (false) // removed by dead control flow
{}
  const mergedSize = (0,useSize/* default */.A)(customizeSize);
  const mergedProps = {
    ...props,
    size: mergedSize,
    disabled: mergedDisabled
  };
  const contextStyleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(contextStyle);
  const styleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(style);
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const loadingIcon = /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-handle`, mergedClassNames.indicator),
    style: mergedStyles.indicator
  }, loading && /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
    className: `${prefixCls}-loading-icon`
  }));
  const classes = (0,clsx/* clsx */.$)(contextClassName, {
    [`${prefixCls}-small`]: mergedSize === 'small',
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, mergedClassNames.root, hashId, cssVarCls);
  const changeHandler = (...args) => {
    setChecked(args[0]);
    onChange?.(...args);
  };
  return /*#__PURE__*/react.createElement(wave/* default */.A, {
    component: "Switch",
    disabled: mergedDisabled
  }, /*#__PURE__*/react.createElement(es, {
    ...restProps,
    classNames: mergedClassNames,
    styles: mergedStyles,
    checked: checked,
    onChange: changeHandler,
    prefixCls: prefixCls,
    className: classes,
    style: mergedStyles.root,
    disabled: mergedDisabled,
    ref: ref,
    loadingIcon: loadingIcon
  }));
});
const switch_Switch = InternalSwitch;
switch_Switch.__ANT_SWITCH = true;
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_switch = (switch_Switch);

/***/ },

/***/ 2176
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ResultTextarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92208);
/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48593);
/* harmony import */ var _components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7525);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
const App=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);const onChange=value=>{setValue(value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{size:100,align:"end",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Switch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{value:value,onChange:onChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ResultTextarea__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{value:value})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 92208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48593);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31968);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26875);
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7772);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
/**
 * @name 结果文本域，用于展示组件返回的值
 */const ResultTextarea=props=>{const{value,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{orientation:"vertical",...rest,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:"onChange\u8FD4\u56DE\u7684\u7ED3\u679C"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:"w-300px",value:(0,_utils_toString__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultTextarea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 48593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name Space 间距
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */const Space=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7525
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64221);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 开关
 * @param value 组件的值
 * @param checked 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/switch-cn/
 */const Switch=props=>{const{value,checked,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{checked:value||checked,...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 31968
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 文本展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */const Text=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Text,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 26875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */const TextArea=props=>{const{onChange,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.TextArea,{onChange:e=>onChange?.(e?.target?.value,e),...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 54856
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// 支持的可返回的数据类型
/**
 * @name getType
 * @description 获取数据类型
 * @param {any} data 需要判断类型的数据
 * @return {string} 返回对应的类型 `Array`、`Boolean`、`Date`、`Error`、`Function`、`Map`、`Null`、`Number`、`RegExp`、`Set`、`String`、`Symbol`、`Undefined`、`Arguments`
 * @example <caption>ts类型</caption>
getType(value:any)
 * @example <caption>demo</caption>
import { getType } from '@zpcscc/utils';

console.log(getType([]));               // 'Array';
console.log(getType(true));             // 'Boolean';
console.log(getType(new Date()));       // 'Date';
console.log(getType(new Error()));      // 'Error';
console.log(getType(()=>{}));           // 'Function';
console.log(getType(new Map()));        // 'Map';
console.log(getType(null));             // 'Null';
console.log(getType(123));              // 'Number';
console.log(getType(/[hello]/g));       // 'RegExp';
console.log(getType(new Set()));        // 'Set';
console.log(getType(Symbol.iterator));  // 'Symbol';
console.log(getType('字符串'));          // 'String';
console.log(getType(undefined));        // 'Undefined';

function () {
  console.log(getType(arguments));      // 'Arguments';
}
 */const getType=data=>{return Object.prototype.toString.call(data).slice(8,-1);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getType);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
/**
 * @name toString
 * @description 将各种格式的数据转为string
 * @param {any} data 需要转换的数据
 * @param {object} stringifyArgs 其他参数，用于传入JSON.stringify
 * @returns {string} 转换后的字符串数据
 * @example <caption>ts类型</caption>
toString(data:any, stringifyArgs?:any);
 * @example <caption>demo</caption>
import { toString } from '@zpcscc/utils';

console.log(toString(true)); // 'true'
console.log(toString(null)); // ''
console.log(toString()); // ''
console.log(toString(undefined)); // ''
console.log(toString(0)); // '0'
console.log(toString(-0)); // '-0'
console.log(toString(123)); // '123'
console.log(toString(() => {})); // '()=>{}'
console.log(toString([])); // '[]'
console.log(toString({})); // '{}'
console.log(toString(Symbol(1))); // 'Symbol(1)'

// stringifyArgs参数, 相当于，JSON.stringify([1,2,3], null, 2));
console.log(toString([1,2,3], null, 2));
// `[
//   1,
//   2,
//   3
// ]`

// 部分数据因为赋值给函数时，已被浏览器自动调整，故无法完整原样转为字符串。
console.log(toString(Symbol.iterator)); // 'Symbol(Symbol.iterator)'
console.log(toString(Number.POSITIVE_INFINITY)); // 'Infinity'
console.log(toString(Number.NEGATIVE_INFINITY)); // '-Infinity'
console.log(toString(Number.MIN_VALUE)); // '5e-324'
 */const toString=(data,...stringifyArgs)=>{if(data===null)return'';if(data===undefined)return'';if(typeof data==='string')return data;let str='';if(typeof data==='number'||typeof data==='boolean'){str=`${data}`;}else if((0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data)==='Symbol'){str=data.toString();}else if(Array.isArray(data)||(0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data)==='Object'){str=JSON.stringify(data,...stringifyArgs);}else{str=String(data);}if(`${str}`==='0'&&1/data===Number.NEGATIVE_INFINITY){str='-0';}return str;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);