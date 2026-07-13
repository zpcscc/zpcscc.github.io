"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[750],{

/***/ 24254
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Jb: () => (/* binding */ resolveStyleOrClass),
  AV: () => (/* binding */ useMergeSemantic),
  XT: () => (/* binding */ useSemanticRootStyle)
});

// UNUSED EXPORTS: mergeClassNames, mergeStyles

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(41292);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/is.js
var is = __webpack_require__(3557);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMergeSemantic/utils.js
/**
 * Fill object structure by schema, initialize empty objects for keys with `_default` property.
 */
const fillObjectBySchema = (obj, schema) => {
  const newObj = {
    ...obj
  };
  Object.keys(schema).forEach(key => {
    if (schema[key]._default) {
      newObj[key] || (newObj[key] = {});
    } else {
      newObj[key] = fillObjectBySchema(newObj[key], schema[key]);
    }
  });
  return newObj;
};
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js





// ========================= ClassNames =========================
const mergeClassNames = (schema = {}, ...classNames) => {
  return classNames.filter(item => Boolean(item)).reduce((acc, cur) => {
    // Loop keys of the current classNames
    Object.keys(cur).forEach(key => {
      const keySchema = schema[key];
      const curVal = cur[key];
      if (keySchema) {
        if ((0,is/* isPlainObject */.Qd)(curVal)) {
          // Loop fill
          acc[key] = mergeClassNames(keySchema, acc[key], curVal);
        } else {
          // Covert string to object structure
          const {
            _default: defaultField
          } = keySchema;
          if (defaultField) {
            acc[key] = acc[key] || {};
            acc[key][defaultField] = (0,clsx/* clsx */.$)(acc[key][defaultField], curVal);
          }
        }
      } else {
        // Flatten fill
        acc[key] = (0,clsx/* clsx */.$)(acc[key], curVal);
      }
    });
    return acc;
  }, {});
};
const useSemanticClassNames = (schema, ...classNames) => {
  return react.useMemo(() => mergeClassNames.apply(void 0, [schema].concat(classNames)), [schema].concat(classNames));
};
// =========================== Styles ===========================
const mergeStyles = (...styles) => {
  return styles.filter(item => Boolean(item)).reduce((acc, cur = {}) => {
    Object.keys(cur).forEach(key => {
      acc[key] = {
        ...acc[key],
        ...cur[key]
      };
    });
    return acc;
  }, {});
};
const useSemanticStyles = (...styles) => {
  return react.useMemo(() => mergeStyles.apply(void 0, styles), [].concat(styles));
};
const useSemanticRootStyle = style => {
  return react.useMemo(() => style ? {
    root: style
  } : undefined, [style]);
};
// =========================== Export ===========================
const resolveStyleOrClass = (value, info) => {
  return (0,is/* isFunction */.Tn)(value) ? value(info) : value;
};
/**
 * @desc Merge classNames and styles from multiple sources. When `schema` is provided, it **must** provide the nest object structure.
 * @descZH 合并来自多个来源的 classNames 和 styles，当提供了 `schema` 时，必须提供嵌套的对象结构。
 */
const useMergeSemantic = (classNamesList, stylesList, info, schema) => {
  const resolvedClassNamesList = classNamesList.map(classNames => classNames ? resolveStyleOrClass(classNames, info) : undefined);
  const resolvedStylesList = stylesList.map(styles => styles ? resolveStyleOrClass(styles, info) : undefined);
  const mergedClassNames = useSemanticClassNames.apply(void 0, [schema].concat((0,toConsumableArray/* default */.A)(resolvedClassNamesList)));
  const mergedStyles = useSemanticStyles.apply(void 0, (0,toConsumableArray/* default */.A)(resolvedStylesList));
  return react.useMemo(() => {
    if (!schema) {
      return [mergedClassNames, mergedStyles];
    }
    return [fillObjectBySchema(mergedClassNames, schema), fillObjectBySchema(mergedStyles, schema)];
  }, [mergedClassNames, mergedStyles, schema]);
};

/***/ },

/***/ 9771
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);

const isValidOrientation = orientation => {
  return orientation === 'horizontal' || orientation === 'vertical';
};
const useOrientation = (orientation, vertical, legacyDirection) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const validOrientation = isValidOrientation(orientation);
    let mergedOrientation;
    if (validOrientation) {
      mergedOrientation = orientation;
    } else if (typeof vertical === 'boolean') {
      mergedOrientation = vertical ? 'vertical' : 'horizontal';
    } else {
      const validLegacyDirection = isValidOrientation(legacyDirection);
      mergedOrientation = validLegacyDirection ? legacyDirection : 'horizontal';
    }
    return [mergedOrientation, mergedOrientation === 'vertical'];
  }, [legacyDirection, orientation, vertical]);
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "M", 0, /* binding */ useOrientation
/* harmony export */ ]);


/***/ },

/***/ 4416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
"use client";


const SizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const SizeContextProvider = ({
  children,
  size
}) => {
  const originSize = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SizeContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "c", 0, /* binding */ SizeContextProvider
/* harmony export */ ]);


/***/ },

/***/ 14301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _util_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3557);
/* harmony import */ var _SizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4416);



const useSize = customSize => {
  const size = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_SizeContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
  const mergedSize = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if ((0,_util_is__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(customSize)) {
      return customSize ?? size;
    }
    if ((0,_util_is__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .Tn)(customSize)) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSize);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 57050
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ divider)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useOrientation.js
var useOrientation = __webpack_require__(9771);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js + 1 modules
var useMergeSemantic = __webpack_require__(24254);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/is.js
var is = __webpack_require__(3557);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(16807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(14301);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var es = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(75025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(90126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 23 modules
var cssinjs_utils_es = __webpack_require__(14209);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/style/index.js



// ============================== Size ================================
const genSizeDividerStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-horizontal': {
        [`&${componentCls}`]: {
          '&-sm': {
            marginBlock: token.marginXS
          },
          '&-md': {
            marginBlock: token.margin
          }
        }
      }
    }
  };
};
// ============================== Shared ==============================
const genSharedDividerStyle = token => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth,
    textPaddingInline,
    orientationMargin,
    verticalMarginInline
  } = token;
  const railCls = `${componentCls}-rail`;
  return {
    [componentCls]: {
      ...(0,style/* resetComponent */.dF)(token),
      borderBlockStart: `${(0,es/* unit */.zA)(lineWidth)} solid ${colorSplit}`,
      [railCls]: {
        borderBlockStart: `${(0,es/* unit */.zA)(lineWidth)} solid ${colorSplit}`
      },
      // vertical
      '&-vertical': {
        position: 'relative',
        top: '-0.06em',
        display: 'inline-block',
        height: '0.9em',
        marginInline: verticalMarginInline,
        marginBlock: 0,
        verticalAlign: 'middle',
        borderTop: 0,
        borderInlineStart: `${(0,es/* unit */.zA)(lineWidth)} solid ${colorSplit}`
      },
      '&-horizontal': {
        display: 'flex',
        clear: 'both',
        width: '100%',
        minWidth: '100%',
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${(0,es/* unit */.zA)(token.marginLG)} 0`
      },
      [`&-horizontal${componentCls}-with-text`]: {
        display: 'flex',
        alignItems: 'center',
        margin: `${(0,es/* unit */.zA)(token.dividerHorizontalWithTextGutterMargin)} 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        borderBlockStart: `0 ${colorSplit}`,
        [`${railCls}-start, ${railCls}-end`]: {
          width: '50%',
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: 'inherit',
          borderBlockEnd: 0,
          content: "''"
        }
      },
      [`&-horizontal${componentCls}-with-text-start`]: {
        [`${railCls}-start`]: {
          width: `calc(${orientationMargin} * 100%)`
        },
        [`${railCls}-end`]: {
          width: `calc(100% - ${orientationMargin} * 100%)`
        }
      },
      [`&-horizontal${componentCls}-with-text-end`]: {
        [`${railCls}-start`]: {
          width: `calc(100% - ${orientationMargin} * 100%)`
        },
        [`${railCls}-end`]: {
          width: `calc(${orientationMargin} * 100%)`
        }
      },
      [`${componentCls}-inner-text`]: {
        display: 'inline-block',
        paddingBlock: 0,
        paddingInline: textPaddingInline
      },
      '&-dashed': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dashed',
        borderWidth: `${(0,es/* unit */.zA)(lineWidth)} 0 0`,
        [railCls]: {
          borderBlockStart: `${(0,es/* unit */.zA)(lineWidth)} dashed ${colorSplit}`
        }
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
        [`${railCls}-start, ${railCls}-end`]: {
          borderStyle: 'dashed none none'
        }
      },
      [`&-vertical${componentCls}-dashed`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      '&-dotted': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dotted',
        borderWidth: `${(0,es/* unit */.zA)(lineWidth)} 0 0`,
        [railCls]: {
          borderBlockStart: `${(0,es/* unit */.zA)(lineWidth)} dotted ${colorSplit}`
        }
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dotted`]: {
        '&::before, &::after': {
          borderStyle: 'dotted none none'
        }
      },
      [`&-vertical${componentCls}-dotted`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${componentCls}-with-text`]: {
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize
      },
      [`&-horizontal${componentCls}-with-text-start${componentCls}-no-default-orientation-margin-start`]: {
        [`${railCls}-start`]: {
          width: 0
        },
        [`${railCls}-end`]: {
          width: '100%'
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      [`&-horizontal${componentCls}-with-text-end${componentCls}-no-default-orientation-margin-end`]: {
        [`${railCls}-start`]: {
          width: '100%'
        },
        [`${railCls}-end`]: {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    }
  };
};
const prepareComponentToken = token => ({
  textPaddingInline: '1em',
  orientationMargin: 0.05,
  verticalMarginInline: token.marginXS
});
// ============================== Export ==============================
/* harmony default export */ const divider_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Divider', token => {
  const dividerToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    dividerHorizontalWithTextGutterMargin: token.margin,
    sizePaddingEdgeHorizontal: 0
  });
  return [genSharedDividerStyle(dividerToken), genSizeDividerStyle(dividerToken)];
}, prepareComponentToken, {
  unitless: {
    orientationMargin: true
  }
}));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js
"use client";










const titlePlacementList = ['left', 'right', 'center', 'start', 'end'];
const Divider = props => {
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.TP)('divider');
  const {
    prefixCls: customizePrefixCls,
    type,
    orientation,
    vertical,
    titlePlacement,
    orientationMargin,
    className,
    rootClassName,
    children,
    dashed,
    variant = 'solid',
    plain,
    style,
    size: customSize,
    classNames,
    styles,
    ...restProps
  } = props;
  const prefixCls = getPrefixCls('divider', customizePrefixCls);
  const railCls = `${prefixCls}-rail`;
  const [hashId, cssVarCls] = divider_style(prefixCls);
  const sizeFullName = (0,useSize/* default */.A)(customSize);
  const hasChildren = !!children;
  const validTitlePlacement = titlePlacementList.includes(orientation || '');
  const mergedTitlePlacement = react.useMemo(() => {
    const placement = titlePlacement ?? (validTitlePlacement ? orientation : 'center');
    if (placement === 'left') {
      return direction === 'rtl' ? 'end' : 'start';
    }
    if (placement === 'right') {
      return direction === 'rtl' ? 'start' : 'end';
    }
    return placement;
  }, [direction, orientation, titlePlacement, validTitlePlacement]);
  const hasMarginStart = mergedTitlePlacement === 'start' && orientationMargin != null;
  const hasMarginEnd = mergedTitlePlacement === 'end' && orientationMargin != null;
  const [mergedOrientation, mergedVertical] = (0,useOrientation/* useOrientation */.M)(orientation, vertical, type);
  // ========================= Semantic =========================
  const mergedProps = {
    ...props,
    orientation: mergedOrientation,
    titlePlacement: mergedTitlePlacement,
    size: sizeFullName
  };
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const classString = (0,clsx/* clsx */.$)(prefixCls, contextClassName, hashId, cssVarCls, `${prefixCls}-${mergedOrientation}`, {
    [`${prefixCls}-with-text`]: hasChildren,
    [`${prefixCls}-with-text-${mergedTitlePlacement}`]: hasChildren,
    [`${prefixCls}-dashed`]: !!dashed,
    [`${prefixCls}-${variant}`]: variant !== 'solid',
    [`${prefixCls}-plain`]: !!plain,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-no-default-orientation-margin-start`]: hasMarginStart,
    [`${prefixCls}-no-default-orientation-margin-end`]: hasMarginEnd,
    [`${prefixCls}-md`]: sizeFullName === 'medium' || sizeFullName === 'middle',
    [`${prefixCls}-sm`]: sizeFullName === 'small',
    [railCls]: !children,
    [mergedClassNames.rail]: mergedClassNames.rail && !children
  }, className, rootClassName, mergedClassNames.root);
  const memoizedPlacementMargin = react.useMemo(() => {
    if ((0,is/* isNumber */.Et)(orientationMargin)) {
      return orientationMargin;
    }
    if (/^\d+$/.test(orientationMargin)) {
      return Number(orientationMargin);
    }
    return orientationMargin;
  }, [orientationMargin]);
  const innerStyle = {
    marginInlineStart: hasMarginStart ? memoizedPlacementMargin : undefined,
    marginInlineEnd: hasMarginEnd ? memoizedPlacementMargin : undefined
  };
  // =================== Warning =====================
  if (false) // removed by dead control flow
{}
  return /*#__PURE__*/react.createElement("div", {
    className: classString,
    style: {
      ...contextStyle,
      ...mergedStyles.root,
      ...(children ? {} : mergedStyles.rail),
      ...style
    },
    ...restProps,
    role: "separator"
  }, children && !mergedVertical && (/*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(railCls, `${railCls}-start`, mergedClassNames.rail),
    style: mergedStyles.rail
  }), /*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-inner-text`, mergedClassNames.content),
    style: {
      ...innerStyle,
      ...mergedStyles.content
    }
  }, children), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(railCls, `${railCls}-end`, mergedClassNames.rail),
    style: mergedStyles.rail
  }))));
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const divider = (Divider);

/***/ },

/***/ 90750
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71448);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
const App=()=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Divider__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{children:'这是分割线'});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 71448
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 分隔线
 * @link 其他参数详见 https://ant.design/components/divider-cn/
 */const Divider=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 41292
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _toConsumableArray)
});

;// ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

;// ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

;// ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}


/***/ }

}]);