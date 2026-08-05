"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[3671],{

/***/ 73671
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ config_provider),
  cr: () => (/* binding */ globalConfig)
});

// UNUSED EXPORTS: ConfigConsumer, ConfigContext, Variants, configConsumerProps, defaultIconPrefixCls, defaultPrefixCls, warnContext

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var es = __webpack_require__(35605);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(86623);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.12.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/util/es/index.js + 14 modules
var util_es = __webpack_require__(83704);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/is.js
var is = __webpack_require__(97789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__(98085);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/form/validateMessagesContext.js
"use client";


// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-component/form`
/* harmony default export */ const validateMessagesContext = (/*#__PURE__*/(0,react.createContext)(undefined));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__(68367);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/locale/context.js
var locale_context = __webpack_require__(85797);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/locale/index.js
"use client";






const ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (false) // removed by dead control flow
{}
  react.useEffect(() => {
    const clearLocale = (0,modal_locale/* changeConfirmLocale */.L)(locale?.Modal);
    return clearLocale;
  }, [locale]);
  const getMemoizedContextValue = react.useMemo(() => ({
    ...locale,
    exist: true
  }), [locale]);
  return /*#__PURE__*/react.createElement(locale_context/* default */.A.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_locale = (LocaleProvider);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/locale/en_US.js + 5 modules
var en_US = __webpack_require__(38182);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/themes/default/theme.js + 9 modules
var default_theme = __webpack_require__(59844);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/context.js
var context = __webpack_require__(90054);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(85595);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/UniqueProvider/index.js + 1 modules
var UniqueProvider = __webpack_require__(78311);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(4095);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(78271);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(55256);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/hooks/useConfig.js



function useConfig() {
  const componentDisabled = (0,react.useContext)(DisabledContext/* default */.A);
  const componentSize = (0,react.useContext)(SizeContext/* default */.A);
  return {
    componentDisabled,
    componentSize
  };
}
/* harmony default export */ const hooks_useConfig = (useConfig);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/hooks/useTheme.js





function useTheme(theme, parentTheme, config) {
  const warning = (0,_util_warning/* devUseWarning */.rJ)('ConfigProvider');
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? {
    ...context/* defaultConfig */.sb,
    hashed: parentTheme?.hashed ?? context/* defaultConfig */.sb.hashed,
    cssVar: parentTheme?.cssVar
  } : parentTheme;
  // Generate a unique key for cssVar
  const themeKey = (0,react.useId)();
  if (false) // removed by dead control flow
{}
  return (0,util_es/* useMemo */.Kr)(() => {
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = {
      ...parentThemeConfig.components
    };
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = {
        ...mergedComponents[componentName],
        ...theme.components[componentName]
      };
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
    const mergedCssVar = {
      prefix: config?.prefixCls,
      // Same as prefixCls by default
      ...parentThemeConfig.cssVar,
      ...themeConfig.cssVar,
      key: themeConfig.cssVar?.key || cssVarKey
    };
    // Base token
    return {
      ...parentThemeConfig,
      ...themeConfig,
      token: {
        ...parentThemeConfig.token,
        ...themeConfig.token
      },
      components: mergedComponents,
      cssVar: mergedCssVar
    };
  }, [themeConfig, parentThemeConfig, config?.prefixCls, themeKey], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !(0,util_es/* isEqual */.n4)(prevTheme, nextTheme, true);
  }));
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/index.js + 11 modules
var motion_es = __webpack_require__(86270);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(59081);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/MotionWrapper.js
"use client";




const MotionCacheContext = /*#__PURE__*/react.createContext(true);
if (false) // removed by dead control flow
{}
function MotionWrapper(props) {
  const parentMotion = react.useContext(MotionCacheContext);
  const {
    children
  } = props;
  const [, token] = (0,useToken/* default */.Ay)();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = react.useRef(false);
  needWrapMotionProviderRef.current || (needWrapMotionProviderRef.current = parentMotion !== motion);
  if (needWrapMotionProviderRef.current) {
    return /*#__PURE__*/react.createElement(MotionCacheContext.Provider, {
      value: motion
    }, /*#__PURE__*/react.createElement(motion_es/* Provider */.Kq, {
      motion: motion
    }, children));
  }
  return children;
}
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/PropWarning.js
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var devUseWarning;
"use client";



/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */
const PropWarning = /*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(props => {
  const {
    dropdownMatchSelectWidth
  } = props;
  const warning = devUseWarning('ConfigProvider');
  warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
  return null;
})));
if (false) // removed by dead control flow
{}
/* harmony default export */ const config_provider_PropWarning = ( false ? 0 : () => null);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/style/index.js
var style = __webpack_require__(27689);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/theme/util/useResetIconStyle.js



const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token] = (0,useToken/* default */.Ay)();
  // Generate style for icons
  return (0,es/* useStyleRegister */.IV)({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls],
    nonce: () => csp?.nonce,
    layer: {
      name: 'antd'
    }
  }, () => (0,style/* genIconStyle */.jz)(iconPrefixCls));
};
/* harmony default export */ const util_useResetIconStyle = (useResetIconStyle);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/config-provider/index.js
"use client";






















/**
 * This component registers icon styles inside the DesignTokenContext.Provider
 * so that CSS variables use the correct cssVar key from the theme config.
 */
const IconStyle = ({
  iconPrefixCls,
  csp
}) => {
  util_useResetIconStyle(iconPrefixCls, csp);
  return null;
};

/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */
let existThemeConfig = false;
const warnContext = (/* unused pure expression or super */ null && ( false ? 0 : /* istanbul ignore next */
null));

const configConsumerProps = (/* unused pure expression or super */ null && (['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale']));
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'input', 'pagination', 'form', 'select', 'button'];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || (/* inlined export .defaultPrefixCls */"ant");
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || config_provider_context/* defaultIconPrefixCls */.pM;
}
const setGlobalConfig = props => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ('holderRender' in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    globalTheme = theme;
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
const ProviderChildren = props => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    affix,
    anchor,
    app,
    form,
    locale: rawLocale,
    componentSize,
    direction,
    space,
    splitter,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    masonry,
    menu,
    pagination,
    input,
    inputPassword,
    inputSearch,
    textArea,
    otp,
    empty,
    badge,
    borderBeam,
    radio,
    rate,
    ribbon,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    cardMeta,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    qrcode,
    floatButton,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect,
    watermark
  } = props;
  // https://github.com/ant-design/ant-design/issues/57295
  const locale = react.useMemo(() => {
    if ((0,is/* isPlainObject */.Qd)(rawLocale) && Object.prototype.hasOwnProperty.call(rawLocale, 'default') && rawLocale.default?.locale) {
      return rawLocale.default;
    }
    return rawLocale;
  }, [rawLocale]);
  // =================================== Context ===================================
  const getPrefixCls = react.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || config_provider_context/* defaultIconPrefixCls */.pM;
  const csp = customCsp || parentContext.csp;
  const mergedTheme = useTheme(theme, parentContext.theme, {
    prefixCls: getPrefixCls('')
  });
  if (false) // removed by dead control flow
{}
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    affix,
    anchor,
    app,
    locale: locale || legacyLocale,
    direction,
    space,
    splitter,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth ?? dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    inputPassword,
    inputSearch,
    textArea,
    otp,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    masonry,
    menu,
    pagination,
    empty,
    badge,
    borderBeam,
    radio,
    rate,
    ribbon,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    cardMeta,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    qrcode,
    floatButton,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect,
    watermark
  };
  if (false) // removed by dead control flow
{}
  const config = {
    ...parentContext
  };
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  if (typeof autoInsertSpaceInButton !== 'undefined') {
    // merge deprecated api
    config.button = {
      autoInsertSpace: autoInsertSpaceInButton,
      ...config.button
    };
  }
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0,util_es/* useMemo */.Kr)(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const {
    layer
  } = react.useContext(es/* StyleContext */.J);
  const memoIconContextValue = react.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp,
    layer: layer ? 'antd' : undefined,
    zeroRuntime: !!layer || mergedTheme?.zeroRuntime
  }), [iconPrefixCls, csp, layer, mergedTheme?.zeroRuntime]);
  let childNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(IconStyle, {
    iconPrefixCls: iconPrefixCls,
    csp: csp
  }), /*#__PURE__*/react.createElement(config_provider_PropWarning, {
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }), children);
  const validateMessages = react.useMemo(() => (0,util_es/* merge */.h1)(en_US/* default */.A.Form?.defaultValidateMessages || {}, memoedConfig.locale?.Form?.defaultValidateMessages || {}, memoedConfig.form?.validateMessages || {}, form?.validateMessages || {}), [memoedConfig, form?.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react.createElement(validateMessagesContext.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale) {
    childNode = /*#__PURE__*/react.createElement(es_locale, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/react.createElement(Context/* default */.A.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/react.createElement(SizeContext/* SizeContextProvider */.c, {
      size: componentSize
    }, childNode);
  }
  // =================================== Motion ===================================
  childNode = /*#__PURE__*/react.createElement(MotionWrapper, null, childNode);
  // ================================ Tooltip Unique ===============================
  if (tooltip?.unique) {
    childNode = /*#__PURE__*/react.createElement(UniqueProvider/* default */.A, null, childNode);
  }
  // ================================ Dynamic theme ================================
  const memoTheme = react.useMemo(() => {
    const {
      algorithm,
      token,
      components,
      cssVar,
      ...rest
    } = mergedTheme || {};
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0,es/* createTheme */.an)(algorithm) : default_theme/* default */.A;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(([componentName, componentToken]) => {
      const parsedToken = {
        ...componentToken
      };
      if ('algorithm' in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || (0,is/* isFunction */.Tn)(parsedToken.algorithm)) {
          parsedToken.theme = (0,es/* createTheme */.an)(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = {
      ...seed/* default */.A,
      ...token
    };
    return {
      ...rest,
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: {
        override: mergedToken,
        ...parsedComponents
      },
      cssVar
    };
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/react.createElement(context/* DesignTokenContext */.vG.Provider, {
      value: memoTheme
    }, childNode);
  }
  // ================================== Warning ===================================
  if (memoedConfig.warning) {
    childNode = /*#__PURE__*/react.createElement(_util_warning/* WarningContext */._n.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.X, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/react.createElement(config_provider_context/* ConfigContext */.QO.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => {
  const context = react.useContext(config_provider_context/* ConfigContext */.QO);
  const antLocale = react.useContext(locale_context/* default */.A);
  return /*#__PURE__*/react.createElement(ProviderChildren, {
    parentContext: context,
    legacyLocale: antLocale,
    ...props
  });
};
ConfigProvider.ConfigContext = config_provider_context/* ConfigContext */.QO;
ConfigProvider.SizeContext = SizeContext/* default */.A;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = hooks_useConfig;
Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
     false ? 0 : void 0;
    return SizeContext/* default */.A;
  }
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const config_provider = (ConfigProvider);

/***/ },

/***/ 68367
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ changeConfirmLocale),
/* harmony export */   l: () => (/* binding */ getConfirmLocale)
/* harmony export */ });
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38182);

let runtimeLocale = {
  ..._locale_en_US__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Modal
};
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale) => ({
  ...merged,
  ...locale
}), _locale_en_US__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = {
      ...newLocale
    };
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter(locale => locale !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = {
    ..._locale_en_US__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Modal
  };
}
function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }

}]);