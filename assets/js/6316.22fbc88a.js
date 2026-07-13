"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[6316],{

/***/ 69541
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Checkbox */
/* harmony import */ var _rc_component_util_es_hooks_useControlledState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71826);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13526);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30758);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




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

/***/ 83931
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useBubbleLock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _rc_component_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23392);


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

/***/ 32648
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useForm),
  H: () => (/* binding */ toNamePathStr)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/index.js + 43 modules
var es = __webpack_require__(1203);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/index.js + 12 modules
var util_es = __webpack_require__(23392);
;// ./node_modules/.pnpm/compute-scroll-into-view@3.1.1/node_modules/compute-scroll-into-view/dist/index.js
const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},dist_r=(e,r)=>{var i,s,d,h;if("undefined"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k="start"===f||"nearest"===f?x-T:"end"===f?I+F:x+v/2-T+F,D="center"===u?R+E/2-V+B:"end"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:l,width:r,top:i,right:s,bottom:d,left:h}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&I<=H&&C<=b&&(e===m&&!n(e)||x>=i&&I<=d&&R>=h&&C<=s))return L;const a=getComputedStyle(e),g=parseInt(a.borderLeftWidth,10),p=parseInt(a.borderTopWidth,10),W=parseInt(a.borderRightWidth,10),T=parseInt(a.borderBottomWidth,10);let B=0,F=0;const V="offsetWidth"in e?e.offsetWidth-e.clientWidth-g-W:0,S="offsetHeight"in e?e.offsetHeight-e.clientHeight-p-T:0,X="offsetWidth"in e?0===e.offsetWidth?0:r/e.offsetWidth:0,Y="offsetHeight"in e?0===e.offsetHeight?0:l/e.offsetHeight:0;if(m===e)B="start"===f?k:"end"===f?k-H:"nearest"===f?o(M,M+H,H,p,T,M+k,M+k+v,v):k-H/2,F="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:o(y,y+b,b,g,W,y+D,y+D+E,E),B=Math.max(0,B+M),F=Math.max(0,F+y);else{B="start"===f?k-i-p:"end"===f?k-d+T+S:"nearest"===f?o(i,d,l,p,T+S,k,k+v,v):k-(i+l/2)+S/2,F="start"===u?D-h-g:"center"===u?D-(h+r/2)+V/2:"end"===u?D-s+W+V:o(h,s,r,g,W+V,D,D+E,E);const{scrollLeft:t,scrollTop:n}=e;B=0===Y?0:Math.max(0,Math.min(n+B/Y,e.scrollHeight-l/Y+S)),F=0===X?0:Math.max(0,Math.min(t+F/X,e.scrollWidth-r/X+V)),k+=n-B,D+=t-F}L.push({el:e,top:B,left:F})}return L};//# sourceMappingURL=index.js.map

;// ./node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js
const dist_o=t=>!1===t?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:"start",inline:"nearest"};function dist_e(e,r){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>"object"==typeof t&&"function"==typeof t.behavior)(r))return r.behavior(dist_r(e,r));const l="boolean"==typeof r||null==r?void 0:r.behavior;for(const{el:a,top:i,left:s}of dist_r(e,dist_o(r))){const t=i-n.top+n.bottom,o=s-n.left+n.right;a.scroll({top:t,left:o,behavior:l})}}//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/is.js
var is = __webpack_require__(3557);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/util.js
var util = __webpack_require__(28088);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/hooks/useForm.js






function toNamePathStr(name) {
  const namePath = (0,util/* toArray */.$r)(name);
  return namePath.join('_');
}
function getFieldDOMNode(name, wrapForm) {
  const field = wrapForm.getFieldInstance(name);
  const fieldDom = (0,util_es/* getDOM */.rb)(field);
  if (fieldDom) {
    return fieldDom;
  }
  const fieldId = (0,util/* getFieldId */.kV)((0,util/* toArray */.$r)(name), wrapForm.__INTERNAL__.name);
  if (fieldId) {
    return document.getElementById(fieldId);
  }
}
function useForm(form) {
  const [rcForm] = (0,es/* useForm */.mN)();
  const itemsRef = react.useRef({});
  const wrapForm = react.useMemo(() => form ?? {
    ...rcForm,
    __INTERNAL__: {
      itemRef: name => node => {
        const namePathStr = toNamePathStr(name);
        if (node) {
          itemsRef.current[namePathStr] = node;
        } else {
          delete itemsRef.current[namePathStr];
        }
      }
    },
    scrollToField: (name, options = {}) => {
      const {
        focus,
        ...restOpt
      } = options;
      const node = getFieldDOMNode(name, wrapForm);
      if (node) {
        dist_e(node, {
          scrollMode: 'if-needed',
          block: 'nearest',
          ...restOpt
        });
        // Focus if scroll success
        if (focus) {
          wrapForm.focusField(name);
        }
      }
    },
    focusField: name => {
      const itemRef = wrapForm.getFieldInstance(name);
      if ((0,is/* isFunction */.Tn)(itemRef?.focus)) {
        itemRef.focus();
      } else {
        getFieldDOMNode(name, wrapForm)?.focus?.();
      }
    },
    getFieldInstance: name => {
      const namePathStr = toNamePathStr(name);
      return itemsRef.current[namePathStr];
    }
  }, [form, rcForm]);
  return [wrapForm];
}

/***/ },

/***/ 28088
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ toArray),
/* harmony export */   BS: () => (/* binding */ getStatus),
/* harmony export */   kV: () => (/* binding */ getFieldId)
/* harmony export */ });
// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
const formItemNameBlackList = ['parentNode'];
// default form item id prefix.
const defaultItemNamePrefixCls = 'form_item';
function toArray(candidate) {
  if (candidate === undefined || candidate === false) {
    return [];
  }
  return Array.isArray(candidate) ? candidate : [candidate];
}
function getFieldId(namePath, formName) {
  if (!namePath.length) {
    return undefined;
  }
  const mergedId = namePath.join('_');
  if (formName) {
    return `${formName}_${mergedId}`;
  }
  const isIllegalName = formItemNameBlackList.includes(mergedId);
  return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId;
}
/**
 * Get merged status by meta or passed `validateStatus`.
 */
function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
  let status = defaultValidateStatus;
  if (validateStatus !== undefined) {
    status = validateStatus;
  } else if (meta.validating) {
    status = 'validating';
  } else if (errors.length) {
    status = 'error';
  } else if (warnings.length) {
    status = 'warning';
  } else if (meta.touched || hasFeedback && meta.validated) {
    // success feedback should display when pass hasFeedback prop and current value is valid value
    status = 'success';
  }
  return status;
}

/***/ },

/***/ 66316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_radio)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/index.js + 12 modules
var es = __webpack_require__(23392);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useOrientation.js
var useOrientation = __webpack_require__(9771);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/is.js
var is = __webpack_require__(3557);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(16807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(14301);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/context.js
var form_context = __webpack_require__(38625);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/hooks/useForm.js + 2 modules
var useForm = __webpack_require__(32648);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/context.js

const RadioGroupContext = /*#__PURE__*/react.createContext(undefined);
const RadioGroupContextProvider = RadioGroupContext.Provider;
/* harmony default export */ const radio_context = (RadioGroupContext);
const RadioOptionTypeContext = /*#__PURE__*/react.createContext(undefined);
const RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+checkbox@2.0.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/checkbox/es/index.js
var checkbox_es = __webpack_require__(69541);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js + 1 modules
var useMergeSemantic = __webpack_require__(24254);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(32473);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/wave/interface.js
var wave_interface = __webpack_require__(40616);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/checkbox/useBubbleLock.js
var useBubbleLock = __webpack_require__(83931);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(16007);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var cssinjs_es = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(75025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(90126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 23 modules
var cssinjs_utils_es = __webpack_require__(14209);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/style/index.js



// ============================== Styles ==============================
// styles from RadioGroup only
const getGroupRadioStyle = token => {
  const {
    componentCls,
    antCls,
    lineWidth,
    borderRadius,
    borderRadiusLG,
    borderRadiusSM,
    calc
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  const buttonWrapperCls = `${componentCls}-button-wrapper`;
  const badgeCls = `${antCls}-badge`;
  const genVerticalBadgeButtonStyle = radius => ({
    [`> ${badgeCls}`]: {
      width: 'auto'
    },
    [`> ${badgeCls} > ${buttonWrapperCls}`]: {
      width: '100%'
    },
    [`> ${badgeCls}:not(:last-child)`]: {
      marginBlockEnd: calc(lineWidth).mul(-1).equal()
    },
    [`> ${badgeCls} > ${buttonWrapperCls}:not(:last-child)`]: {
      marginBlockEnd: 0
    },
    [`> ${badgeCls}:first-child > ${buttonWrapperCls}`]: {
      borderStartStartRadius: radius,
      borderStartEndRadius: radius,
      borderEndStartRadius: 0,
      borderEndEndRadius: 0
    },
    [`> ${badgeCls}:last-child > ${buttonWrapperCls}`]: {
      borderStartStartRadius: 0,
      borderStartEndRadius: 0,
      borderEndStartRadius: radius,
      borderEndEndRadius: radius
    },
    [`> ${badgeCls}:not(:first-child):not(:last-child) > ${buttonWrapperCls}`]: {
      borderRadius: 0
    },
    [`> ${badgeCls}:first-child:last-child > ${buttonWrapperCls}`]: {
      borderRadius: radius
    }
  });
  return {
    [groupPrefixCls]: {
      ...(0,style/* resetComponent */.dF)(token),
      display: 'inline-block',
      fontSize: 0,
      // RTL
      [`&${groupPrefixCls}-rtl`]: {
        direction: 'rtl'
      },
      [`&${groupPrefixCls}-block`]: {
        display: 'flex'
      },
      [`${antCls}-badge ${antCls}-badge-count`]: {
        zIndex: 1
      },
      [`> ${antCls}-badge:not(:first-child) > ${antCls}-button-wrapper`]: {
        borderInlineStart: 'none'
      },
      '&-vertical': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: token.marginXS,
        [`&:has(> ${buttonWrapperCls}, > ${badgeCls} > ${buttonWrapperCls})`]: {
          rowGap: 0
        },
        [`${componentCls}-wrapper`]: {
          marginInlineEnd: 0
        },
        ...genVerticalBadgeButtonStyle(borderRadius),
        [`&${groupPrefixCls}-large`]: {
          ...genVerticalBadgeButtonStyle(borderRadiusLG)
        },
        [`&${groupPrefixCls}-small`]: {
          ...genVerticalBadgeButtonStyle(borderRadiusSM)
        }
      }
    }
  };
};
// Styles from radio-wrapper
const getRadioBasicStyle = token => {
  const {
    componentCls,
    wrapperMarginInlineEnd,
    colorPrimary,
    colorPrimaryHover,
    radioSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOutCirc,
    colorBgContainer,
    colorBorder,
    lineWidth,
    colorBgContainerDisabled,
    colorTextDisabled,
    paddingXS,
    dotColorDisabled,
    dotSize,
    lineType,
    radioColor,
    radioBgColor
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      ...(0,style/* resetComponent */.dF)(token),
      display: 'inline-flex',
      alignItems: 'baseline',
      marginInlineStart: 0,
      marginInlineEnd: wrapperMarginInlineEnd,
      cursor: 'pointer',
      '&:last-child': {
        marginInlineEnd: 0
      },
      // RTL
      [`&${componentCls}-wrapper-rtl`]: {
        direction: 'rtl'
      },
      '&-disabled': {
        cursor: 'not-allowed',
        color: token.colorTextDisabled
      },
      '&::after': {
        display: 'inline-block',
        width: 0,
        overflow: 'hidden',
        content: '"\\a0"'
      },
      '&-block': {
        flex: 1,
        justifyContent: 'center'
      },
      // ===================== Radio =====================
      [componentCls]: {
        ...(0,style/* resetComponent */.dF)(token),
        position: 'relative',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        cursor: 'pointer',
        alignSelf: 'center',
        // Styles moved from inner
        boxSizing: 'border-box',
        display: 'block',
        width: `calc(${radioSize} * 1px)`,
        height: `calc(${radioSize} * 1px)`,
        backgroundColor: colorBgContainer,
        border: `${(0,cssinjs_es/* unit */.zA)(lineWidth)} ${lineType} ${colorBorder}`,
        borderRadius: '50%',
        transition: `all ${motionDurationMid}`,
        flex: 'none',
        // Dot
        '&:after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(0)',
          width: `calc(${dotSize} * 1px)`,
          height: `calc(${dotSize} * 1px)`,
          backgroundColor: radioColor,
          borderRadius: '50%',
          transformOrigin: '50% 50%',
          opacity: 0,
          transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`
        },
        // Wrapper > Radio > input
        [`${componentCls}-input`]: {
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
          margin: 0
        },
        // Focus outline on radio when input is focus-visible
        [`&:has(${componentCls}-input:focus-visible)`]: (0,style/* genFocusOutline */.jk)(token)
      },
      // ===================== Hover =====================
      [`&:hover:not(${componentCls}-wrapper-disabled) ${componentCls}`]: {
        borderColor: colorPrimary
      },
      [`&:hover ${componentCls}-checked:not(${componentCls}-disabled)`]: {
        backgroundColor: colorPrimaryHover,
        borderColor: 'transparent'
      },
      // ==================== Checked ====================
      [`${componentCls}-checked`]: {
        backgroundColor: radioBgColor,
        borderColor: colorPrimary,
        '&::after': {
          transform: `translate(-50%, -50%)`,
          opacity: 1
        }
      },
      // ==================== Disable ====================
      [`${componentCls}-disabled`]: {
        // Wrapper > Radio > input
        [`&, ${componentCls}-input`]: {
          cursor: 'not-allowed',
          // Disabled for native input to enable Tooltip event handler
          pointerEvents: 'none'
        },
        // Disabled radio styles
        background: colorBgContainerDisabled,
        borderColor: colorBorder,
        '&::after': {
          backgroundColor: dotColorDisabled
        }
      },
      [`${componentCls}-disabled + span`]: {
        color: colorTextDisabled,
        cursor: 'not-allowed'
      },
      [`span${componentCls} + *`]: {
        paddingInlineStart: paddingXS,
        paddingInlineEnd: paddingXS
      }
    }
  };
};
// Styles from radio-button
const getRadioButtonStyle = token => {
  const {
    buttonColor,
    controlHeight,
    componentCls,
    lineWidth,
    lineType,
    colorBorder,
    motionDurationMid,
    buttonPaddingInline,
    fontSize,
    buttonBg,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    paddingXS,
    borderRadius,
    borderRadiusSM,
    borderRadiusLG,
    buttonCheckedBg,
    buttonSolidCheckedColor,
    colorTextDisabled,
    colorBgContainerDisabled,
    buttonCheckedBgDisabled,
    buttonCheckedColorDisabled,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryActive,
    buttonSolidCheckedBg,
    buttonSolidCheckedHoverBg,
    buttonSolidCheckedActiveBg,
    calc
  } = token;
  return {
    [`${componentCls}-button-wrapper`]: {
      position: 'relative',
      display: 'inline-block',
      height: controlHeight,
      margin: 0,
      paddingInline: buttonPaddingInline,
      paddingBlock: 0,
      color: buttonColor,
      fontSize,
      lineHeight: (0,cssinjs_es/* unit */.zA)(calc(controlHeight).sub(calc(lineWidth).mul(2)).equal()),
      background: buttonBg,
      border: `${(0,cssinjs_es/* unit */.zA)(lineWidth)} ${lineType} ${colorBorder}`,
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: calc(lineWidth).add(0.02).equal(),
      borderInlineEndWidth: lineWidth,
      cursor: 'pointer',
      transition: [`color`, `background-color`, `box-shadow`].map(prop => `${prop} ${motionDurationMid}`).join(','),
      a: {
        color: buttonColor
      },
      [`> ${componentCls}-button`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: -1,
        width: '100%',
        height: '100%'
      },
      '&:not(:last-child)': {
        marginInlineEnd: calc(lineWidth).mul(-1).equal()
      },
      '&:first-child': {
        borderInlineStart: `${(0,cssinjs_es/* unit */.zA)(lineWidth)} ${lineType} ${colorBorder}`,
        borderStartStartRadius: borderRadius,
        borderEndStartRadius: borderRadius
      },
      '&:last-child': {
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius
      },
      '&:first-child:last-child': {
        borderRadius
      },
      [`${componentCls}-group-large &`]: {
        height: controlHeightLG,
        fontSize: fontSizeLG,
        lineHeight: (0,cssinjs_es/* unit */.zA)(calc(controlHeightLG).sub(calc(lineWidth).mul(2)).equal()),
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG
        },
        '&:last-child': {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        }
      },
      [`${componentCls}-group-small &`]: {
        height: controlHeightSM,
        paddingInline: calc(paddingXS).sub(lineWidth).equal(),
        paddingBlock: 0,
        lineHeight: (0,cssinjs_es/* unit */.zA)(calc(controlHeightSM).sub(calc(lineWidth).mul(2)).equal()),
        '&:first-child': {
          borderStartStartRadius: borderRadiusSM,
          borderEndStartRadius: borderRadiusSM
        },
        '&:last-child': {
          borderStartEndRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        }
      },
      [`${componentCls}-group-vertical > &`]: {
        marginInlineEnd: 0,
        borderRadius: 0,
        '&:not(:last-child)': {
          marginBlockEnd: calc(lineWidth).mul(-1).equal()
        },
        '&:first-child': {
          borderStartStartRadius: borderRadius,
          borderStartEndRadius: borderRadius,
          borderEndStartRadius: 0,
          borderEndEndRadius: 0
        },
        '&:last-child': {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          borderEndStartRadius: borderRadius,
          borderEndEndRadius: borderRadius
        },
        '&:first-child:last-child': {
          borderRadius
        }
      },
      [`${componentCls}-group-vertical${componentCls}-group-large > &`]: {
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        '&:last-child': {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:first-child:last-child': {
          borderRadius: borderRadiusLG
        }
      },
      [`${componentCls}-group-vertical${componentCls}-group-small > &`]: {
        '&:first-child': {
          borderStartStartRadius: borderRadiusSM,
          borderStartEndRadius: borderRadiusSM
        },
        '&:last-child': {
          borderEndStartRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        },
        '&:first-child:last-child': {
          borderRadius: borderRadiusSM
        }
      },
      '&:hover': {
        position: 'relative',
        color: colorPrimary
      },
      '&:has(:focus-visible)': (0,style/* genFocusOutline */.jk)(token),
      [`${componentCls}, input[type='checkbox'], input[type='radio']`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: 'none'
      },
      [`&-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        zIndex: 1,
        color: colorPrimary,
        background: buttonCheckedBg,
        borderColor: colorPrimary,
        '&::before': {
          backgroundColor: colorPrimary
        },
        '&:first-child': {
          borderColor: colorPrimary
        },
        '&:hover': {
          color: colorPrimaryHover,
          borderColor: colorPrimaryHover,
          '&::before': {
            backgroundColor: colorPrimaryHover
          }
        },
        '&:active': {
          color: colorPrimaryActive,
          borderColor: colorPrimaryActive,
          '&::before': {
            backgroundColor: colorPrimaryActive
          }
        }
      },
      [`${componentCls}-group-solid &-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        color: buttonSolidCheckedColor,
        background: buttonSolidCheckedBg,
        borderColor: buttonSolidCheckedBg,
        '&:hover': {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedHoverBg,
          borderColor: buttonSolidCheckedHoverBg
        },
        '&:active': {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedActiveBg,
          borderColor: buttonSolidCheckedActiveBg
        }
      },
      '&-disabled': {
        color: colorTextDisabled,
        backgroundColor: colorBgContainerDisabled,
        borderColor: colorBorder,
        cursor: 'not-allowed',
        '&:first-child, &:hover': {
          color: colorTextDisabled,
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder
        }
      },
      [`&-disabled${componentCls}-button-wrapper-checked`]: {
        color: buttonCheckedColorDisabled,
        backgroundColor: buttonCheckedBgDisabled,
        borderColor: colorBorder,
        boxShadow: 'none'
      },
      '&-block': {
        flex: 1,
        textAlign: 'center'
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => {
  const {
    wireframe,
    padding,
    marginXS,
    lineWidth,
    fontSizeLG,
    colorText,
    colorBgContainer,
    colorTextDisabled,
    controlItemBgActiveDisabled,
    colorTextLightSolid,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryActive,
    colorWhite
  } = token;
  const dotPadding = 4; // Fixed value
  const radioSize = fontSizeLG;
  const radioDotSize = wireframe ? radioSize - dotPadding * 2 : radioSize - (dotPadding + lineWidth) * 2;
  return {
    // Radio
    radioSize,
    dotSize: radioDotSize,
    dotColorDisabled: colorTextDisabled,
    // Radio buttons
    buttonSolidCheckedColor: colorTextLightSolid,
    buttonSolidCheckedBg: colorPrimary,
    buttonSolidCheckedHoverBg: colorPrimaryHover,
    buttonSolidCheckedActiveBg: colorPrimaryActive,
    buttonBg: colorBgContainer,
    buttonCheckedBg: colorBgContainer,
    buttonColor: colorText,
    buttonCheckedBgDisabled: controlItemBgActiveDisabled,
    buttonCheckedColorDisabled: colorTextDisabled,
    buttonPaddingInline: padding - lineWidth,
    wrapperMarginInlineEnd: marginXS,
    // internal
    radioColor: wireframe ? colorPrimary : colorWhite,
    radioBgColor: wireframe ? colorBgContainer : colorPrimary
  };
};
/* harmony default export */ const radio_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Radio', token => {
  const {
    controlOutline,
    controlOutlineWidth
  } = token;
  const radioFocusShadow = `0 0 0 ${(0,cssinjs_es/* unit */.zA)(controlOutlineWidth)} ${controlOutline}`;
  const radioButtonFocusShadow = radioFocusShadow;
  const radioToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    radioFocusShadow,
    radioButtonFocusShadow
  });
  return [getGroupRadioStyle(radioToken), getRadioBasicStyle(radioToken), getRadioButtonStyle(radioToken)];
}, prepareComponentToken, {
  unitless: {
    radioSize: true,
    dotSize: true
  }
}));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/radio.js
"use client";

















const InternalRadio = (props, ref) => {
  const groupContext = react.useContext(radio_context);
  const radioOptionTypeContext = react.useContext(RadioOptionTypeContext);
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.TP)('radio');
  const innerRef = react.useRef(null);
  const mergedRef = (0,es/* composeRef */.K4)(ref, innerRef);
  const {
    isFormItemInput
  } = react.useContext(form_context/* FormItemInputContext */.$W);
  if (false) // removed by dead control flow
{}
  const onChange = e => {
    props.onChange?.(e);
    groupContext?.onChange?.(e);
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    style,
    title,
    classNames,
    styles,
    checked,
    ...restProps
  } = props;
  const radioPrefixCls = getPrefixCls('radio', customizePrefixCls);
  const isButtonType = (groupContext?.optionType || radioOptionTypeContext) === 'button';
  const prefixCls = isButtonType ? `${radioPrefixCls}-button` : radioPrefixCls;
  // Style
  const rootCls = (0,useCSSVarCls/* default */.A)(radioPrefixCls);
  const [hashId, cssVarCls] = radio_style(radioPrefixCls, rootCls);
  const radioProps = {
    ...restProps
  };
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.A);
  // ====================== Checked ======================
  const hasChecked = 'checked' in props;
  let mergedChecked = checked;
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    mergedChecked = props.value === groupContext.value;
    radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
  }
  if (hasChecked || groupContext) {
    radioProps.checked = mergedChecked;
  }
  radioProps.disabled = radioProps.disabled ?? disabled;
  // =========== Merged Props for Semantic ===========
  const mergedProps = {
    ...props,
    ...radioProps,
    checked: mergedChecked
  };
  const contextStyleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(contextStyle);
  const styleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(style);
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  const wrapperClassString = (0,clsx/* clsx */.$)(`${prefixCls}-wrapper`, {
    [`${prefixCls}-wrapper-checked`]: mergedChecked,
    [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    [`${prefixCls}-wrapper-rtl`]: direction === 'rtl',
    [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput,
    [`${prefixCls}-wrapper-block`]: !!groupContext?.block
  }, contextClassName, className, rootClassName, mergedClassNames.root, hashId, cssVarCls, rootCls);
  // ============================ Event Lock ============================
  const [onLabelClick, onInputClick] = (0,useBubbleLock/* default */.A)(radioProps.onClick);
  // ============================== Render ==============================
  return /*#__PURE__*/react.createElement(wave/* default */.A, {
    component: "Radio",
    disabled: radioProps.disabled
  }, /*#__PURE__*/react.createElement("label", {
    className: wrapperClassString,
    style: mergedStyles.root,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    title: title,
    onClick: onLabelClick
  }, /*#__PURE__*/react.createElement(checkbox_es/* default */.A, {
    ...radioProps,
    className: (0,clsx/* clsx */.$)(mergedClassNames.icon, {
      [wave_interface/* TARGET_CLS */.D]: !isButtonType
    }),
    style: mergedStyles.icon,
    type: "radio",
    prefixCls: prefixCls,
    ref: mergedRef,
    onClick: onInputClick
  }), (0,is/* isReactRenderable */.AZ)(children) ? (/*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-label`, mergedClassNames.label),
    style: mergedStyles.label
  }, children)) : null));
};
const Radio = /*#__PURE__*/react.forwardRef(InternalRadio);
if (false) // removed by dead control flow
{}
/* harmony default export */ const radio_radio = (Radio);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/group.js
"use client";














const RadioGroup = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.QO);
  const {
    name: formItemName
  } = react.useContext(form_context/* FormItemInputContext */.$W);
  const defaultName = (0,es/* useId */.Bi)((0,useForm/* toNamePathStr */.H)(formItemName));
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    options,
    buttonStyle = 'outline',
    disabled,
    children,
    size: customizeSize,
    style,
    id,
    optionType,
    name = defaultName,
    defaultValue,
    value: customizedValue,
    block = false,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    orientation,
    vertical,
    role = 'radiogroup'
  } = props;
  const [value, setValue] = (0,es/* useControlledState */.PW)(defaultValue, customizedValue);
  const onRadioChange = react.useCallback(event => {
    const lastValue = value;
    const val = event.target.value;
    if (!('value' in props)) {
      setValue(val);
    }
    if (val !== lastValue) {
      onChange?.(event);
    }
  }, [value, setValue, onChange]);
  const prefixCls = getPrefixCls('radio', customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  // Style
  const rootCls = (0,useCSSVarCls/* default */.A)(prefixCls);
  const [hashId, cssVarCls] = radio_style(prefixCls, rootCls);
  let childrenToRender = children;
  // 如果存在 options, 优先使用
  if (options && options.length > 0) {
    childrenToRender = options.map(option => {
      if (typeof option === 'string' || (0,is/* isNumber */.Et)(option)) {
        // 此处类型自动推导为 string
        return /*#__PURE__*/react.createElement(radio_radio, {
          key: option.toString(),
          prefixCls: prefixCls,
          disabled: disabled,
          value: option,
          checked: value === option
        }, option);
      }
      // 此处类型自动推导为 { label: string value: string }
      return /*#__PURE__*/react.createElement(radio_radio, {
        key: `radio-group-value-options-${option.value}`,
        prefixCls: prefixCls,
        disabled: option.disabled || disabled,
        value: option.value,
        checked: value === option.value,
        title: option.title,
        style: option.style,
        className: option.className,
        id: option.id,
        required: option.required
      }, option.label);
    });
  }
  const mergedSize = (0,useSize/* default */.A)(customizeSize);
  const [, mergedVertical] = (0,useOrientation/* useOrientation */.M)(orientation, vertical);
  const classString = (0,clsx/* clsx */.$)(groupPrefixCls, `${groupPrefixCls}-${buttonStyle}`, {
    [`${groupPrefixCls}-large`]: mergedSize === 'large',
    [`${groupPrefixCls}-small`]: mergedSize === 'small',
    [`${groupPrefixCls}-rtl`]: direction === 'rtl',
    [`${groupPrefixCls}-block`]: block
  }, className, rootClassName, hashId, cssVarCls, rootCls);
  const memoizedValue = react.useMemo(() => ({
    onChange: onRadioChange,
    value,
    disabled,
    name,
    optionType,
    block
  }), [onRadioChange, value, disabled, name, optionType, block]);
  return /*#__PURE__*/react.createElement("div", {
    ...(0,es/* pickAttrs */.KE)(props, {
      aria: true,
      data: true
    }),
    role: role,
    className: (0,clsx/* clsx */.$)(classString, {
      [`${prefixCls}-group-vertical`]: mergedVertical
    }),
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onFocus: onFocus,
    onBlur: onBlur,
    id: id,
    ref: ref
  }, /*#__PURE__*/react.createElement(RadioGroupContextProvider, {
    value: memoizedValue
  }, childrenToRender));
});
/* harmony default export */ const group = (/*#__PURE__*/react.memo(RadioGroup));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/radioButton.js
"use client";





const RadioButton = (props, ref) => {
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const {
    prefixCls: customizePrefixCls,
    ...radioProps
  } = props;
  const prefixCls = getPrefixCls('radio', customizePrefixCls);
  return /*#__PURE__*/react.createElement(RadioOptionTypeContextProvider, {
    value: "button"
  }, /*#__PURE__*/react.createElement(radio_radio, {
    prefixCls: prefixCls,
    ...radioProps,
    type: "radio",
    ref: ref
  }));
};
/* harmony default export */ const radioButton = (/*#__PURE__*/react.forwardRef(RadioButton));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/index.js
"use client";





const radio_Radio = radio_radio;
radio_Radio.Button = radioButton;
radio_Radio.Group = group;
radio_Radio.__ANT_RADIO = true;
/* harmony default export */ const es_radio = (radio_Radio);

/***/ }

}]);