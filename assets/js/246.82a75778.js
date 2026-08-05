"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[246],{

/***/ 46466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Checkbox */
/* harmony import */ var _rc_component_util_es_hooks_useControlledState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69101);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13526);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71763);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
;



const Checkbox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref) => {
  const {
    prefixCls = 'rc-checkbox',
    className,
    style,
    checked,
    disabled,
    defaultChecked = false,
    type = 'checkbox',
    title,
    onChange,
    ...inputProps
  } = props;
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const holderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [rawValue, setRawValue] = (0,_rc_component_util_es_hooks_useControlledState__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(defaultChecked, checked);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(ref, () => ({
    focus: options => {
      inputRef.current?.focus(options);
    },
    blur: () => {
      inputRef.current?.blur();
    },
    input: inputRef.current,
    nativeElement: holderRef.current
  }));
  const classString = (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .$)(prefixCls, className, {
    [`${prefixCls}-checked`]: rawValue,
    [`${prefixCls}-disabled`]: disabled
  });
  const handleChange = e => {
    if (disabled) {
      return;
    }
    if (!('checked' in props)) {
      setRawValue(e.target.checked);
    }
    onChange?.({
      target: {
        ...props,
        type,
        checked: e.target.checked
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classString,
    title: title,
    style: style,
    ref: holderRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", _extends({}, inputProps, {
    className: `${prefixCls}-input`,
    ref: inputRef,
    onChange: handleChange,
    disabled: disabled,
    checked: !!rawValue,
    type: type
  })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7443
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_checkbox)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+checkbox@2.0.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/checkbox/es/index.js
var es = __webpack_require__(46466);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.12.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/util/es/index.js + 14 modules
var util_es = __webpack_require__(83704);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js + 1 modules
var useMergeSemantic = __webpack_require__(53414);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/is.js
var is = __webpack_require__(97789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(73889);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/wave/interface.js
var wave_interface = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4095);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(78271);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(75326);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/form/context.js
var form_context = __webpack_require__(2633);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/checkbox/GroupContext.js

const GroupContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const checkbox_GroupContext = (GroupContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var cssinjs_es = __webpack_require__(35605);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/index.js
var style = __webpack_require__(27689);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/motion/util.js
var util = __webpack_require__(55978);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/cssinjs-utils/es/index.js + 14 modules
var cssinjs_utils_es = __webpack_require__(47226);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(63334);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/checkbox/style/index.js




// ============================== Styles ==============================
const genCheckboxStyle = token => {
  const {
    checkboxCls,
    checkboxSize,
    lineWidth
  } = token;
  const wrapperCls = `${checkboxCls}-wrapper`;
  const hoverMediaQuery = '@media (hover: hover) and (pointer: fine)';
  return [
  // ===================== Basic =====================
  {
    // Group
    [`${checkboxCls}-group`]: {
      ...(0,style/* resetComponent */.dF)(token),
      display: 'inline-flex',
      flexWrap: 'wrap',
      columnGap: token.marginXS,
      // Group > Grid
      [`> ${token.antCls}-row`]: {
        flex: 1
      }
    },
    // Wrapper
    [wrapperCls]: {
      ...(0,style/* resetComponent */.dF)(token),
      display: 'inline-flex',
      alignItems: 'baseline',
      cursor: 'pointer',
      // Fix checkbox & radio in flex align #30260
      '&:after': {
        display: 'inline-block',
        width: 0,
        overflow: 'hidden',
        content: "'\\a0'"
      },
      // Checkbox near checkbox
      [`& + ${wrapperCls}`]: {
        marginInlineStart: 0
      }
    },
    // Wrapper > Checkbox
    [checkboxCls]: {
      ...(0,style/* resetComponent */.dF)(token),
      position: 'relative',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      cursor: 'pointer',
      // To make alignment right when `controlHeight` is changed
      // Ref: https://github.com/ant-design/ant-design/issues/41564
      alignSelf: 'center',
      // Styles moved from inner
      boxSizing: 'border-box',
      display: 'block',
      width: checkboxSize,
      height: checkboxSize,
      direction: 'ltr',
      backgroundColor: token.colorBgContainer,
      border: `${(0,cssinjs_es/* unit */.zA)(lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      borderCollapse: 'separate',
      transition: `all ${token.motionDurationSlow}`,
      flex: 'none',
      ...(0,util/* genNoMotionStyle */.V)(),
      // Checkmark
      '&:after': {
        boxSizing: 'border-box',
        position: 'absolute',
        top: `calc(${checkboxSize} / 2 - ${lineWidth})`,
        insetInlineStart: `calc(${checkboxSize} / 4 - ${lineWidth})`,
        display: 'table',
        width: token.calc(checkboxSize).div(14).mul(5).equal(),
        height: token.calc(checkboxSize).div(14).mul(8).equal(),
        border: `${(0,cssinjs_es/* unit */.zA)(token.lineWidthBold)} solid ${token.colorWhite}`,
        borderTop: 0,
        borderInlineStart: 0,
        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
        opacity: 0,
        content: '""',
        transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`,
        ...(0,util/* genNoMotionRawStyle */.X)()
      },
      // Wrapper > Checkbox > input
      [`${checkboxCls}-input`]: {
        position: 'absolute',
        // Since baseline align will get additional space offset,
        // we need to move input to top to make it align with text.
        // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
        inset: `calc(-1 * (${lineWidth}))`,
        zIndex: 1,
        cursor: 'pointer',
        opacity: 0,
        margin: 0
      },
      // Focus outline on checkbox when input is focus-visible
      [`&:has(${checkboxCls}-input:focus-visible)`]: (0,style/* genFocusOutline */.jk)(token),
      // Wrapper > Checkbox + Text
      '& + span': {
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS
      }
    }
  },
  // ===================== Hover =====================
  {
    [hoverMediaQuery]: {
      // Wrapper & Wrapper > Checkbox
      [`
          ${wrapperCls}:not(${wrapperCls}-disabled),
          ${checkboxCls}:not(${checkboxCls}-disabled)
        `]: {
        [`&:hover ${checkboxCls}`]: {
          borderColor: token.colorPrimary
        }
      },
      [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
        [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled)`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: 'transparent'
        }
      }
    }
  },
  // ==================== Checked ====================
  {
    // Wrapper > Checkbox
    [`${checkboxCls}-checked`]: {
      backgroundColor: token.colorPrimary,
      borderColor: token.colorPrimary,
      '&:after': {
        opacity: 1,
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`,
        ...(0,util/* genNoMotionRawStyle */.X)()
      },
      [hoverMediaQuery]: {
        // Hover on checked checkbox directly
        [`&:not(${checkboxCls}-disabled):hover`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: 'transparent'
        }
      }
    }
  },
  // ================= Indeterminate =================
  {
    [checkboxCls]: {
      '&-indeterminate': {
        backgroundColor: token.colorBgContainer,
        borderColor: token.colorBorder,
        '&:after': {
          top: '50%',
          insetInlineStart: '50%',
          width: token.calc(token.fontSizeLG).div(2).equal(),
          height: token.calc(token.fontSizeLG).div(2).equal(),
          backgroundColor: token.colorPrimary,
          border: 0,
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 1,
          content: '""'
        },
        [hoverMediaQuery]: {
          // https://github.com/ant-design/ant-design/issues/50074
          [`&:not(${checkboxCls}-disabled):hover`]: {
            backgroundColor: token.colorBgContainer,
            borderColor: token.colorPrimary
          }
        }
      }
    }
  },
  // ==================== Disable ====================
  {
    // Wrapper
    [`${wrapperCls}-disabled`]: {
      cursor: 'not-allowed'
    },
    // Wrapper > Checkbox
    [`${checkboxCls}-disabled`]: {
      // Wrapper > Checkbox > input
      [`&, ${checkboxCls}-input`]: {
        cursor: 'not-allowed',
        // Disabled for native input to enable Tooltip event handler
        // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
        pointerEvents: 'none'
      },
      // Disabled checkbox styles
      background: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
      '&:after': {
        borderColor: token.colorTextDisabled
      },
      '& + span': {
        color: token.colorTextDisabled
      },
      [`&${checkboxCls}-indeterminate::after`]: {
        background: token.colorTextDisabled
      }
    }
  }];
};
// ============================== Export ==============================
function getStyle(prefixCls, token) {
  const checkboxToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    checkboxCls: `.${prefixCls}`,
    checkboxSize: token.controlInteractiveSize
  });
  return genCheckboxStyle(checkboxToken);
}
/* harmony default export */ const checkbox_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Checkbox', (token, {
  prefixCls
}) => [getStyle(prefixCls, token)]));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/checkbox/useBubbleLock.js
var useBubbleLock = __webpack_require__(19539);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/checkbox/Checkbox.js
"use client";

















const InternalCheckbox = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    indeterminate = false,
    onMouseEnter,
    onMouseLeave,
    skipGroup = false,
    disabled,
    // Style
    rootClassName,
    className,
    style,
    classNames,
    styles,
    // Name
    name,
    // Value
    value,
    // Checked
    checked,
    defaultChecked,
    onChange,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.TP)('checkbox');
  const checkboxGroup = react.useContext(checkbox_GroupContext);
  const {
    isFormItemInput
  } = react.useContext(form_context/* FormItemInputContext */.$W);
  const contextDisabled = react.useContext(DisabledContext/* default */.A);
  const mergedDisabled = (checkboxGroup?.disabled || disabled) ?? contextDisabled;
  // ============================= Warning ==============================
  if (false) // removed by dead control flow
{}
  // ============================= Checked ==============================
  const [innerChecked, setInnerChecked] = (0,util_es/* useControlledState */.PW)(defaultChecked, checked);
  let mergedChecked = innerChecked;
  const onInternalChange = (0,util_es/* useEvent */._q)(event => {
    setInnerChecked(event.target.checked);
    onChange?.(event);
    if (!skipGroup && checkboxGroup?.toggleOption) {
      checkboxGroup.toggleOption({
        label: children,
        value
      });
    }
  });
  // ============================== Group ===============================
  if (checkboxGroup && !skipGroup) {
    mergedChecked = checkboxGroup.value.includes(value);
  }
  const checkboxRef = react.useRef(null);
  const mergedRef = (0,util_es/* useComposeRef */.xK)(ref, checkboxRef);
  react.useEffect(() => {
    if (skipGroup || !checkboxGroup) {
      return;
    }
    checkboxGroup.registerValue(value);
    return () => {
      checkboxGroup.cancelValue(value);
    };
  }, [value, skipGroup]);
  // ========================== Indeterminate ===========================
  react.useEffect(() => {
    if (checkboxRef.current?.input) {
      checkboxRef.current.input.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  const rootCls = (0,useCSSVarCls/* default */.A)(prefixCls);
  const [hashId, cssVarCls] = checkbox_style(prefixCls, rootCls);
  const checkboxProps = {
    ...restProps
  };
  // =========== Merged Props for Semantic ==========
  const mergedProps = {
    ...props,
    indeterminate,
    disabled: mergedDisabled,
    checked: mergedChecked
  };
  const contextStyleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(contextStyle);
  const styleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(style);
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const classString = (0,clsx/* clsx */.$)(`${prefixCls}-wrapper`, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-wrapper-checked`]: mergedChecked,
    [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
    [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
  }, contextClassName, className, mergedClassNames.root, rootClassName, cssVarCls, rootCls, hashId);
  const checkboxClass = (0,clsx/* clsx */.$)(mergedClassNames.icon, {
    [`${prefixCls}-indeterminate`]: indeterminate
  }, wave_interface/* TARGET_CLS */.D, hashId);
  // ============================ Event Lock ============================
  const [onLabelClick, onInputClick] = (0,useBubbleLock/* default */.A)(checkboxProps.onClick);
  // ============================== Render ==============================
  return /*#__PURE__*/react.createElement(wave/* default */.A, {
    component: "Checkbox",
    disabled: mergedDisabled
  }, /*#__PURE__*/react.createElement("label", {
    className: classString,
    style: mergedStyles.root,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onClick: onLabelClick
  }, /*#__PURE__*/react.createElement(es/* default */.A, {
    ...checkboxProps,
    name: !skipGroup && checkboxGroup ? checkboxGroup.name : name,
    checked: mergedChecked,
    onClick: onInputClick,
    onChange: onInternalChange,
    prefixCls: prefixCls,
    className: checkboxClass,
    style: mergedStyles.icon,
    disabled: mergedDisabled,
    ref: mergedRef,
    value: value
  }), (0,is/* isReactRenderable */.AZ)(children) && (/*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-label`, mergedClassNames.label),
    style: mergedStyles.label
  }, children))));
};
const Checkbox = /*#__PURE__*/react.forwardRef(InternalCheckbox);
if (false) // removed by dead control flow
{}
/* harmony default export */ const checkbox_Checkbox = (Checkbox);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(58747);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/checkbox/Group.js
"use client";











const CheckboxGroup = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    defaultValue,
    children,
    options = [],
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    onChange,
    role = 'group',
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.QO);
  const [value, setValue] = react.useState(restProps.value || defaultValue || []);
  const [registeredValues, setRegisteredValues] = react.useState([]);
  react.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);
  const memoizedOptions = react.useMemo(() => options.map(option => {
    if (typeof option === 'string' || (0,is/* isNumber */.Et)(option)) {
      return {
        label: option,
        value: option
      };
    }
    return option;
  }), [options]);
  const cancelValue = val => {
    setRegisteredValues(prevValues => prevValues.filter(v => v !== val));
  };
  const registerValue = val => {
    setRegisteredValues(prevValues => [].concat((0,toConsumableArray/* default */.A)(prevValues), [val]));
  };
  const toggleOption = option => {
    const optionIndex = value.indexOf(option.value);
    const newValue = (0,toConsumableArray/* default */.A)(value);
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!('value' in restProps)) {
      setValue(newValue);
    }
    onChange?.(newValue.filter(val => registeredValues.includes(val)).sort((a, b) => {
      const indexA = memoizedOptions.findIndex(opt => opt.value === a);
      const indexB = memoizedOptions.findIndex(opt => opt.value === b);
      return indexA - indexB;
    }));
  };
  const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const rootCls = (0,useCSSVarCls/* default */.A)(prefixCls);
  const [hashId, cssVarCls] = checkbox_style(prefixCls, rootCls);
  const domProps = (0,util_es/* omit */.cJ)(restProps, ['value', 'disabled']);
  const childrenNode = options.length ? memoizedOptions.map(option => (/*#__PURE__*/react.createElement(checkbox_Checkbox, {
    prefixCls: prefixCls,
    key: option.value.toString(),
    disabled: 'disabled' in option ? option.disabled : restProps.disabled,
    value: option.value,
    checked: value.includes(option.value),
    onChange: option.onChange,
    className: (0,clsx/* clsx */.$)(`${groupPrefixCls}-item`, option.className),
    style: option.style,
    title: option.title,
    id: option.id,
    required: option.required
  }, option.label))) : children;
  const memoizedContext = react.useMemo(() => ({
    toggleOption,
    value,
    disabled: restProps.disabled,
    name: restProps.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue,
    cancelValue
  }), [toggleOption, value, restProps.disabled, restProps.name, registerValue, cancelValue]);
  const classString = (0,clsx/* clsx */.$)(groupPrefixCls, {
    [`${groupPrefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, cssVarCls, rootCls, hashId);
  return /*#__PURE__*/react.createElement("div", {
    className: classString,
    style: style,
    role: role,
    ...domProps,
    ref: ref
  }, /*#__PURE__*/react.createElement(checkbox_GroupContext.Provider, {
    value: memoizedContext
  }, childrenNode));
});

/* harmony default export */ const Group = (CheckboxGroup);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/checkbox/index.js
"use client";



const es_checkbox_Checkbox = checkbox_Checkbox;
es_checkbox_Checkbox.Group = Group;
es_checkbox_Checkbox.__ANT_CHECKBOX = true;
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_checkbox = (es_checkbox_Checkbox);

/***/ },

/***/ 19539
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useBubbleLock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);
/* harmony import */ var _rc_component_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83704);


/**
 * When click on the label,
 * the event will be stopped to prevent the label from being clicked twice.
 * label click -> input click -> label click again
 */
function useBubbleLock(onOriginInputClick) {
  const labelClickLockRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const clearLock = () => {
    _rc_component_util__WEBPACK_IMPORTED_MODULE_1__/* .raf */ .er.cancel(labelClickLockRef.current);
    labelClickLockRef.current = null;
  };
  const onLabelClick = () => {
    clearLock();
    labelClickLockRef.current = (0,_rc_component_util__WEBPACK_IMPORTED_MODULE_1__/* .raf */ .er)(() => {
      labelClickLockRef.current = null;
    });
  };
  const onInputClick = e => {
    if (labelClickLockRef.current) {
      e.stopPropagation();
      clearLock();
    }
    onOriginInputClick?.(e);
  };
  return [onLabelClick, onInputClick];
}

/***/ },

/***/ 246
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(85223);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/checkbox/index.js + 4 modules
var es_checkbox = __webpack_require__(7443);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./src/components/Checkbox/index.tsx
/**
 * @name 单个勾选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param prefix 前缀内容
 * @param suffix 后缀内容
 * @param spaceOptions Space组件配置
 * @link https://ant.design/components/checkbox-cn/
 */const Checkbox=props=>{const{value,prefix,suffix,spaceOptions,onChange,...rest}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{className:"w-full",...spaceOptions,children:[prefix,/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{checked:Boolean(value),onChange:e=>onChange?.(e?.target?.checked),...rest}),suffix]});};/* harmony default export */ const components_Checkbox = (Checkbox);
// EXTERNAL MODULE: ./src/components/Input/index.tsx
var Input = __webpack_require__(31603);
// EXTERNAL MODULE: ./src/components/ResultTextarea/index.tsx
var ResultTextarea = __webpack_require__(47768);
// EXTERNAL MODULE: ./src/components/Space/index.tsx
var Space = __webpack_require__(52265);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
;// ./docs-components/Checkbox/Checkbox.tsx
const App=()=>{const[value,setValue]=(0,react.useState)(true);const onChange=value=>{setValue(value);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Space/* default */.A,{size:100,align:"end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_Checkbox,{value:value,onChange:onChange// 前缀后缀支持文本与React.node
,prefix:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{placeholder:"\u8FD9\u662F\u524D\u7F00\u8F93\u5165\u6846"}),suffix:'这是后缀文本内容'// 对内部的space组件进行配置
,spaceOptions:{size:5}}),/*#__PURE__*/(0,jsx_runtime.jsx)(ResultTextarea/* default */.A,{value:value})]});};/* harmony default export */ const Checkbox_Checkbox = (App);

/***/ },

/***/ 31603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91987);
/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */const Input=props=>{const{onChange,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",onChange:e=>onChange?.(e?.target?.value,e),...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 47768
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52265);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9336);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97715);
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40436);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91987);
/**
 * @name 结果文本域，用于展示组件返回的值
 */const ResultTextarea=props=>{const{value,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{orientation:"vertical",...rest,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:"onChange\u8FD4\u56DE\u7684\u7ED3\u679C"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:"w-300px",value:(0,_utils_toString__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultTextarea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 52265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85223);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91987);
/**
 * @name Space 间距
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */const Space=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 9336
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73001);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91987);
/**
 * @name 文本展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */const Text=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Text,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 97715
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91987);
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

/***/ 51952
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

/***/ 40436
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51952);
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