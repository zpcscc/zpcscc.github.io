"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[5427],{

/***/ 56597
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3557);


const normalizeMaskConfig = (mask, maskClosable) => {
  let maskConfig = {};
  if ((0,_is__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(mask)) {
    maskConfig = mask;
  }
  if (typeof mask === 'boolean') {
    maskConfig = {
      enabled: mask
    };
  }
  if (maskConfig.closable === undefined && maskClosable !== undefined) {
    maskConfig.closable = maskClosable;
  }
  return maskConfig;
};
const useMergedMask = (mask, contextMask, prefixCls, maskClosable) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const maskConfig = normalizeMaskConfig(mask, maskClosable);
    const contextMaskConfig = normalizeMaskConfig(contextMask);
    const mergedConfig = {
      blur: false,
      ...contextMaskConfig,
      ...maskConfig,
      closable: maskConfig.closable ?? maskClosable ?? contextMaskConfig.closable ?? true
    };
    const className = mergedConfig.blur ? `${prefixCls}-mask-blur` : undefined;
    return [mergedConfig.enabled !== false, {
      mask: className
    }, !!mergedConfig.closable];
  }, [mask, contextMask, prefixCls, maskClosable]);
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* binding */ normalizeMaskConfig,
/* harmony export */   "u", 0, /* binding */ useMergedMask
/* harmony export */ ]);


/***/ },

/***/ 15427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ modal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/index.js + 12 modules
var es = __webpack_require__(23392);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/is.js
var is = __webpack_require__(3557);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(16807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 6 modules
var config_provider = __webpack_require__(46470);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js
var CheckCircleFilled = __webpack_require__(49539);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
var CloseCircleFilled = __webpack_require__(23407);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js
var ExclamationCircleFilled = __webpack_require__(78282);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js
var InfoCircleFilled = __webpack_require__(45007);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMergedMask.js
var useMergedMask = __webpack_require__(56597);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(68107);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(84691);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(94353);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/Button.js + 9 modules
var Button = __webpack_require__(34454);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/buttonHelpers.js
var buttonHelpers = __webpack_require__(75641);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/ActionButton.js
"use client";






const ActionButton = props => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = react.useRef(false);
  const buttonRef = react.useRef(null);
  const [loading, setLoading] = (0,es/* useState */.J0)(false);
  const onInternalClose = (...args) => {
    close?.(...args);
  };
  react.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        buttonRef.current?.focus({
          preventScroll: true
        });
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [autoFocus]);
  const handlePromiseOnOk = returnValueOfOnOk => {
    if (!(0,is/* isThenable */.Qg)(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then((...args) => {
      setLoading(false, true);
      onInternalClose.apply(void 0, args);
      clickedRef.current = false;
    }, e => {
      // See: https://github.com/ant-design/ant-design/issues/6183
      setLoading(false, true);
      clickedRef.current = false;
      // Do not throw if is `await` mode
      if (isSilent?.()) {
        return;
      }
      return Promise.reject(e);
    });
  };
  const onClick = e => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !(0,is/* isThenable */.Qg)(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      // https://github.com/ant-design/ant-design/issues/23358
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!(0,is/* isThenable */.Qg)(returnValueOfOnOk)) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return /*#__PURE__*/react.createElement(Button/* default */.A, {
    ...(0,buttonHelpers/* convertLegacyProps */.DU)(type),
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls,
    ...buttonProps,
    ref: buttonRef
  }, children);
};
/* harmony default export */ const _util_ActionButton = (ActionButton);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/context.js

const ModalContext = /*#__PURE__*/react.createContext({});
const {
  Provider: ModalContextProvider
} = ModalContext;
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/ConfirmCancelBtn.js
"use client";




const ConfirmCancelBtn = () => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    rootPrefixCls,
    close,
    onCancel,
    onConfirm,
    onClose
  } = (0,react.useContext)(ModalContext);
  return mergedOkCancel ? (/*#__PURE__*/react.createElement(_util_ActionButton, {
    isSilent: isSilent,
    actionFn: onCancel,
    close: (...args) => {
      close?.(...args);
      onConfirm?.(false);
      onClose?.();
    },
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelTextLocale)) : null;
};
/* harmony default export */ const components_ConfirmCancelBtn = (ConfirmCancelBtn);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/ConfirmOkBtn.js
"use client";




const ConfirmOkBtn = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk,
    onClose
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(_util_ActionButton, {
    isSilent: isSilent,
    type: okType || 'primary',
    actionFn: onOk,
    close: (...args) => {
      close?.(...args);
      onConfirm?.(true);
      onClose?.();
    },
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okTextLocale);
};
/* harmony default export */ const components_ConfirmOkBtn = (ConfirmOkBtn);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(78613);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+portal@2.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/portal/es/index.js + 7 modules
var portal_es = __webpack_require__(5217);
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/context.js

const RefContext = /*#__PURE__*/react.createContext({});
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  let motionName = transitionName;
  if (!motionName && animationName) {
    motionName = `${prefixCls}-${animationName}`;
  }
  return motionName;
}

// =============================== Offset ===============================
function getScroll(w, top) {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`];
  const method = `scroll${top ? 'Top' : 'Left'}`;
  if (typeof ret !== 'number') {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top
  };
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/motion/es/index.js + 11 modules
var motion_es = __webpack_require__(98591);
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/Dialog/Content/MemoChildren.js

/* harmony default export */ const MemoChildren = (/*#__PURE__*/react.memo(({
  children
}) => children, (_, {
  shouldUpdate
}) => !shouldUpdate));
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/Dialog/Content/Panel.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Panel = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls,
    className,
    style,
    title,
    ariaId,
    footer,
    closable,
    closeIcon,
    onClose,
    children,
    bodyStyle,
    bodyProps,
    modalRender,
    onMouseDown,
    onMouseUp,
    holderRef,
    visible,
    forceRender,
    width,
    height,
    classNames: modalClassNames,
    styles: modalStyles,
    isFixedPos,
    focusTrap
  } = props;

  // ================================= Refs =================================
  const {
    panel: panelRef
  } = react.useContext(RefContext);
  const internalRef = (0,react.useRef)(null);
  const mergedRef = (0,es/* useComposeRef */.xK)(holderRef, panelRef, internalRef);
  const [ignoreElement] = (0,es/* useLockFocus */.T$)(visible && isFixedPos && focusTrap !== false, () => internalRef.current);
  react.useImperativeHandle(ref, () => ({
    focus: () => {
      internalRef.current?.focus({
        preventScroll: true
      });
    }
  }));

  // ================================ Style =================================
  const contentStyle = {};
  if (width !== undefined) {
    contentStyle.width = width;
  }
  if (height !== undefined) {
    contentStyle.height = height;
  }
  // ================================ Render ================================
  const footerNode = footer ? /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-footer`, modalClassNames?.footer),
    style: {
      ...modalStyles?.footer
    }
  }, footer) : null;
  const headerNode = title ? /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-header`, modalClassNames?.header),
    style: {
      ...modalStyles?.header
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-title`, modalClassNames?.title),
    id: ariaId,
    style: {
      ...modalStyles?.title
    }
  }, title)) : null;
  const closableObj = (0,react.useMemo)(() => {
    if (typeof closable === 'object' && closable !== null) {
      return closable;
    }
    if (closable) {
      return {
        closeIcon: closeIcon ?? /*#__PURE__*/react.createElement("span", {
          className: `${prefixCls}-close-x`
        })
      };
    }
    return {};
  }, [closable, closeIcon, prefixCls]);
  const ariaProps = (0,es/* pickAttrs */.KE)(closableObj, true);
  const closeBtnIsDisabled = typeof closable === 'object' && closable.disabled;
  const closerNode = closable ? /*#__PURE__*/react.createElement("button", _extends({
    type: "button",
    onClick: onClose,
    "aria-label": "Close"
  }, ariaProps, {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-close`, modalClassNames?.close),
    disabled: closeBtnIsDisabled,
    style: modalStyles?.close
  }), closableObj.closeIcon) : null;
  const content = /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-container`, modalClassNames?.container),
    style: modalStyles?.container
  }, closerNode, headerNode, /*#__PURE__*/react.createElement("div", _extends({
    className: (0,clsx/* clsx */.$)(`${prefixCls}-body`, modalClassNames?.body),
    style: {
      ...bodyStyle,
      ...modalStyles?.body
    }
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/react.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: mergedRef,
    style: {
      ...style,
      ...contentStyle
    },
    className: (0,clsx/* clsx */.$)(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    tabIndex: -1,
    onFocus: e => {
      ignoreElement(e.target);
    }
  }, /*#__PURE__*/react.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const Content_Panel = (Panel);
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/Dialog/Content/index.js
function Content_extends() { Content_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Content_extends.apply(this, arguments); }






const Content = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls,
    title,
    style,
    className,
    visible,
    forceRender,
    destroyOnHidden,
    motionName,
    ariaId,
    onVisibleChanged,
    mousePosition
  } = props;
  const dialogRef = (0,react.useRef)(null);
  const panelRef = (0,react.useRef)(null);

  // ============================== Refs ==============================
  react.useImperativeHandle(ref, () => ({
    ...panelRef.current,
    inMotion: dialogRef.current.inMotion,
    enableMotion: dialogRef.current.enableMotion
  }));

  // ============================= Style ==============================
  const [transformOrigin, setTransformOrigin] = react.useState();
  const contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    if (!dialogRef.current?.nativeElement) {
      return;
    }
    const elementOffset = offset(dialogRef.current.nativeElement);
    setTransformOrigin(mousePosition && (mousePosition.x || mousePosition.y) ? `${mousePosition.x - elementOffset.left}px ${mousePosition.y - elementOffset.top}px` : '');
  }

  // ============================= Render =============================
  return /*#__PURE__*/react.createElement(motion_es/* default */.Ay, {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnHidden,
    ref: dialogRef
  }, ({
    className: motionClassName,
    style: motionStyle
  }, motionRef) => /*#__PURE__*/react.createElement(Content_Panel, Content_extends({}, props, {
    ref: panelRef,
    title: title,
    ariaId: ariaId,
    prefixCls: prefixCls,
    holderRef: motionRef,
    style: {
      ...motionStyle,
      ...style,
      ...contentStyle
    },
    className: (0,clsx/* clsx */.$)(className, motionClassName)
  })));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const Dialog_Content = (Content);
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/Dialog/Mask.js
function Mask_extends() { Mask_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Mask_extends.apply(this, arguments); }



const Mask = props => {
  const {
    prefixCls,
    style,
    visible,
    maskProps,
    motionName,
    className
  } = props;
  return /*#__PURE__*/react.createElement(motion_es/* default */.Ay, {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: `${prefixCls}-mask-hidden`
  }, ({
    className: motionClassName,
    style: motionStyle
  }, ref) => /*#__PURE__*/react.createElement("div", Mask_extends({
    ref: ref,
    style: {
      ...motionStyle,
      ...style
    },
    className: (0,clsx/* clsx */.$)(`${prefixCls}-mask`, motionClassName, className)
  }, maskProps)));
};
/* harmony default export */ const Dialog_Mask = (Mask);
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/Dialog/index.js
function Dialog_extends() { Dialog_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dialog_extends.apply(this, arguments); }







const Dialog = props => {
  const {
    prefixCls = 'rc-dialog',
    zIndex,
    visible = false,
    focusTriggerAfterClose = true,
    wrapStyle,
    wrapClassName,
    wrapProps,
    onClose,
    afterOpenChange,
    afterClose,
    // Dialog
    transitionName,
    animation,
    closable = true,
    // Mask
    mask = true,
    maskTransitionName,
    maskAnimation,
    maskClosable = true,
    maskStyle,
    maskProps,
    rootClassName,
    rootStyle,
    classNames: modalClassNames,
    styles: modalStyles
  } = props;
  if (false) // removed by dead control flow
{}
  const lastOutSideActiveElementRef = (0,react.useRef)(null);
  const wrapperRef = (0,react.useRef)(null);
  const contentRef = (0,react.useRef)(null);
  const [animatedVisible, setAnimatedVisible] = react.useState(visible);
  const [isFixedPos, setIsFixedPos] = react.useState(false);

  // ========================== Init ==========================
  const ariaId = (0,es/* useId */.Bi)();
  function saveLastOutSideActiveElementRef() {
    if (!(0,es/* contains */.gR)(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!(0,es/* contains */.gR)(wrapperRef.current, document.activeElement)) {
      contentRef.current?.focus();
    }
  }

  // ========================= Events =========================
  // Close action will trigger by:
  //   1. When hide motion end
  //   2. Controlled `open` to `false` immediately after set to `true` which will not trigger motion
  function doClose() {
    // Clean up scroll bar & focus back
    setAnimatedVisible(false);
    if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
      try {
        lastOutSideActiveElementRef.current.focus({
          preventScroll: true
        });
      } catch (e) {
        // Do nothing
      }
      lastOutSideActiveElementRef.current = null;
    }

    // Trigger afterClose only when change visible from true to false
    if (animatedVisible) {
      afterClose?.();
    }
  }
  function onDialogVisibleChanged(newVisible) {
    // Try to focus
    if (newVisible) {
      focusDialogContent();
    } else {
      doClose();
    }
    afterOpenChange?.(newVisible);
  }
  function onInternalClose(e) {
    onClose?.(e);
  }

  // >>> Content
  const mouseDownOnMaskRef = (0,react.useRef)(false);

  // >>> Wrapper
  // Close only when element not on dialog
  let onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = e => {
      if (wrapperRef.current === e.target && mouseDownOnMaskRef.current) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperMouseDown(e) {
    mouseDownOnMaskRef.current = e.target === wrapperRef.current;
  }

  // ========================= Effect =========================
  (0,react.useEffect)(() => {
    if (visible) {
      mouseDownOnMaskRef.current = false;
      setAnimatedVisible(true);
      saveLastOutSideActiveElementRef();

      // Calc the position style
      if (wrapperRef.current) {
        const computedWrapStyle = getComputedStyle(wrapperRef.current);
        setIsFixedPos(computedWrapStyle.position === 'fixed');
      }
    } else if (animatedVisible && contentRef.current.enableMotion() && !contentRef.current.inMotion()) {
      doClose();
    }
  }, [visible]);
  const mergedStyle = {
    zIndex,
    ...wrapStyle,
    ...modalStyles?.wrapper,
    display: !animatedVisible ? 'none' : null
  };

  // ========================= Render =========================
  return /*#__PURE__*/react.createElement("div", Dialog_extends({
    className: (0,clsx/* clsx */.$)(`${prefixCls}-root`, rootClassName),
    style: rootStyle
  }, (0,es/* pickAttrs */.KE)(props, {
    data: true
  })), /*#__PURE__*/react.createElement(Dialog_Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: {
      zIndex,
      ...maskStyle,
      ...modalStyles?.mask
    },
    maskProps: maskProps,
    className: modalClassNames?.mask
  }), /*#__PURE__*/react.createElement("div", Dialog_extends({
    className: (0,clsx/* clsx */.$)(`${prefixCls}-wrap`, wrapClassName, modalClassNames?.wrapper),
    ref: wrapperRef,
    onClick: onWrapperClick,
    onMouseDown: onWrapperMouseDown,
    style: mergedStyle
  }, wrapProps), /*#__PURE__*/react.createElement(Dialog_Content, Dialog_extends({}, props, {
    isFixedPos: isFixedPos,
    ref: contentRef,
    closable: closable,
    ariaId: ariaId,
    prefixCls: prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
};
/* harmony default export */ const es_Dialog = (Dialog);
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/DialogWrap.js
function DialogWrap_extends() { DialogWrap_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DialogWrap_extends.apply(this, arguments); }




// fix issue #10656
/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */

const DialogWrap = props => {
  const {
    visible,
    getContainer,
    forceRender,
    destroyOnHidden = false,
    afterClose,
    closable,
    panelRef,
    keyboard = true,
    scrollLock = true,
    onClose
  } = props;
  const {
    scrollLock: _,
    ...restProps
  } = props;
  const [animatedVisible, setAnimatedVisible] = react.useState(visible);
  const refContext = react.useMemo(() => ({
    panel: panelRef
  }), [panelRef]);
  const onEsc = ({
    top,
    event
  }) => {
    if (top && keyboard) {
      event.stopPropagation();
      onClose?.(event);
      return;
    }
  };
  react.useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  // Destroy on close will remove wrapped div
  if (!forceRender && destroyOnHidden && !animatedVisible) {
    return null;
  }
  return /*#__PURE__*/react.createElement(RefContext.Provider, {
    value: refContext
  }, /*#__PURE__*/react.createElement(portal_es/* default */.A, {
    open: visible || forceRender || animatedVisible,
    onEsc: onEsc,
    autoDestroy: false,
    getContainer: getContainer,
    autoLock: scrollLock && (visible || animatedVisible)
  }, /*#__PURE__*/react.createElement(es_Dialog, DialogWrap_extends({}, restProps, {
    destroyOnHidden: destroyOnHidden,
    afterClose: () => {
      const closableObj = closable && typeof closable === 'object' ? closable : {};
      const {
        afterClose: closableAfterClose
      } = closableObj || {};
      closableAfterClose?.();
      afterClose?.();
      setAnimatedVisible(false);
    }
  }))));
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_DialogWrap = (DialogWrap);
;// ./node_modules/.pnpm/@rc-component+dialog@1.10.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/dialog/es/index.js



/* harmony default export */ const dialog_es = (es_DialogWrap);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = __webpack_require__(21841);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/en_US.js + 5 modules
var en_US = __webpack_require__(17706);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useClosable.js
"use client";







const pickClosable = context => {
  if (!context) {
    return undefined;
  }
  const {
    closable,
    closeIcon
  } = context;
  return {
    closable,
    closeIcon
  };
};
const EmptyFallbackCloseCollection = {};
const computeClosableConfig = (closable, closeIcon) => {
  if (!closable && (closable === false || closeIcon === false || closeIcon === null)) {
    return false;
  }
  if (!(0,is/* isNonNullable */.R)(closable) && !(0,is/* isNonNullable */.R)(closeIcon)) {
    return null;
  }
  let closableConfig = {
    closeIcon: typeof closeIcon !== 'boolean' && (0,is/* isNonNullable */.R)(closeIcon) ? closeIcon : undefined
  };
  if ((0,is/* isPlainObject */.Qd)(closable)) {
    closableConfig = {
      ...closableConfig,
      ...closable
    };
  }
  return closableConfig;
};
const mergeClosableConfigs = (propConfig, contextConfig, fallbackConfig) => {
  if (propConfig === false) {
    return false;
  }
  if (propConfig) {
    return (0,es/* mergeProps */.v6)(fallbackConfig, contextConfig, propConfig);
  }
  if (contextConfig === false) {
    return false;
  }
  if (contextConfig) {
    return (0,es/* mergeProps */.v6)(fallbackConfig, contextConfig);
  }
  return fallbackConfig.closable ? fallbackConfig : false;
};
const computeCloseIcon = (mergedConfig, fallbackCloseCollection, closeLabel) => {
  const {
    closeIconRender
  } = fallbackCloseCollection;
  const {
    closeIcon,
    ...restConfig
  } = mergedConfig;
  let finalCloseIcon = closeIcon;
  const ariaOrDataProps = (0,es/* pickAttrs */.KE)(restConfig, true);
  if ((0,is/* isNonNullable */.R)(finalCloseIcon)) {
    if (closeIconRender) {
      finalCloseIcon = closeIconRender(finalCloseIcon);
    }
    finalCloseIcon = /*#__PURE__*/react.isValidElement(finalCloseIcon) ? (/*#__PURE__*/react.cloneElement(finalCloseIcon, {
      'aria-label': closeLabel,
      ...finalCloseIcon.props,
      ...ariaOrDataProps
    })) : (/*#__PURE__*/react.createElement("span", {
      "aria-label": closeLabel,
      ...ariaOrDataProps
    }, finalCloseIcon));
  }
  return [finalCloseIcon, ariaOrDataProps];
};
const computeClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection, closeLabel = 'Close') => {
  const propConfig = computeClosableConfig(propCloseCollection?.closable, propCloseCollection?.closeIcon);
  const contextConfig = computeClosableConfig(contextCloseCollection?.closable, contextCloseCollection?.closeIcon);
  const mergedFallback = {
    closeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.A, null),
    ...fallbackCloseCollection
  };
  const mergedConfig = mergeClosableConfigs(propConfig, contextConfig, mergedFallback);
  const closeBtnIsDisabled = typeof mergedConfig !== 'boolean' ? !!mergedConfig?.disabled : false;
  if (mergedConfig === false) {
    return [false, null, closeBtnIsDisabled, {}];
  }
  const [closeIcon, ariaProps] = computeCloseIcon(mergedConfig, mergedFallback, closeLabel);
  return [true, closeIcon, closeBtnIsDisabled, ariaProps];
};
const useClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection) => {
  const [contextLocale] = (0,useLocale/* default */.A)('global', en_US/* default */.A.global);
  return react.useMemo(() => {
    return computeClosable(propCloseCollection, contextCloseCollection, {
      closeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.A, null),
      ...fallbackCloseCollection
    }, contextLocale.close);
  }, [propCloseCollection, contextCloseCollection, fallbackCloseCollection, contextLocale.close]);
};
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(19219);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js + 1 modules
var useMergeSemantic = __webpack_require__(24254);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/styleChecker.js

const canUseDocElement = () => (0,es/* canUseDom */.OC)() && window.document.documentElement;

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/zindexContext.js
var zindexContext = __webpack_require__(73096);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(8377);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/useFocusable.js

function useFocusable(focusable, defaultTrap, legacyFocusTriggerAfterClose) {
  return (0,react.useMemo)(() => {
    const ret = {
      trap: defaultTrap ?? true,
      focusTriggerAfterClose: legacyFocusTriggerAfterClose ?? true
    };
    return {
      ...ret,
      ...focusable
    };
  }, [focusable, defaultTrap, legacyFocusTriggerAfterClose]);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(14301);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Element.js
"use client";





const Element = props => {
  const {
    prefixCls,
    className,
    style,
    size,
    shape
  } = props;
  if (false) // removed by dead control flow
{}
  const sizeCls = (0,clsx/* clsx */.$)({
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-sm`]: size === 'small'
  });
  const shapeCls = (0,clsx/* clsx */.$)({
    [`${prefixCls}-circle`]: shape === 'circle',
    [`${prefixCls}-square`]: shape === 'square',
    [`${prefixCls}-round`]: shape === 'round'
  });
  const sizeStyle = react.useMemo(() => (0,is/* isNumber */.Et)(size) ? {
    width: size,
    height: size,
    lineHeight: `${size}px`
  } : {}, [size]);
  return /*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(prefixCls, sizeCls, shapeCls, className),
    style: {
      ...sizeStyle,
      ...style
    }
  });
};
/* harmony default export */ const skeleton_Element = (Element);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var cssinjs_es = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(90126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 23 modules
var cssinjs_utils_es = __webpack_require__(14209);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/style/index.js


const skeletonClsLoading = new cssinjs_es/* Keyframes */.Mo(`ant-skeleton-loading`, {
  '0%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0 50%'
  }
});
const genSkeletonElementCommonSize = size => ({
  height: size,
  lineHeight: (0,cssinjs_es/* unit */.zA)(size)
});
const genSkeletonElementSize = size => ({
  width: size,
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonColor = token => ({
  background: token.skeletonLoadingBackground,
  backgroundSize: '400% 100%',
  animationName: skeletonClsLoading,
  animationDuration: token.skeletonLoadingMotionDuration,
  animationTimingFunction: 'ease',
  animationIterationCount: 'infinite'
});
const genSkeletonElementInputSize = (size, calc) => ({
  width: calc(size).mul(5).equal(),
  minWidth: calc(size).mul(5).equal(),
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonElementAvatar = token => {
  const {
    skeletonAvatarCls,
    gradientFromColor,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token;
  return {
    [skeletonAvatarCls]: {
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      ...genSkeletonElementSize(controlHeight)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: '50%'
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: {
      ...genSkeletonElementSize(controlHeightLG)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: {
      ...genSkeletonElementSize(controlHeightSM)
    }
  };
};
const genSkeletonElementInput = token => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonInputCls]: {
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      ...genSkeletonElementInputSize(controlHeight, calc)
    },
    [`${skeletonInputCls}-lg`]: {
      ...genSkeletonElementInputSize(controlHeightLG, calc)
    },
    [`${skeletonInputCls}-sm`]: {
      ...genSkeletonElementInputSize(controlHeightSM, calc)
    }
  };
};
const genSkeletonElementShape = token => {
  const {
    gradientFromColor,
    borderRadiusSM,
    imageSizeBase,
    calc
  } = token;
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    background: gradientFromColor,
    borderRadius: borderRadiusSM,
    ...genSkeletonElementSize(calc(imageSizeBase).mul(2).equal())
  };
};
const genSkeletonElementNode = token => {
  return {
    [token.skeletonNodeCls]: {
      ...genSkeletonElementShape(token)
    }
  };
};
const genSkeletonElementImage = token => {
  const {
    skeletonImageCls,
    imageSizeBase,
    calc
  } = token;
  return {
    [skeletonImageCls]: {
      ...genSkeletonElementShape(token),
      [`${skeletonImageCls}-path`]: {
        fill: '#bfbfbf'
      },
      [`${skeletonImageCls}-svg`]: {
        ...genSkeletonElementSize(imageSizeBase),
        maxWidth: calc(imageSizeBase).mul(4).equal(),
        maxHeight: calc(imageSizeBase).mul(4).equal()
      },
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: '50%'
      }
    },
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: '50%'
    }
  };
};
const genSkeletonElementButtonShape = (token, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: '50%'
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
const genSkeletonElementButtonSize = (size, calc) => ({
  width: calc(size).mul(2).equal(),
  minWidth: calc(size).mul(2).equal(),
  ...genSkeletonElementCommonSize(size)
});
const genSkeletonElementButton = token => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonButtonCls]: {
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: calc(controlHeight).mul(2).equal(),
      minWidth: calc(controlHeight).mul(2).equal(),
      ...genSkeletonElementButtonSize(controlHeight, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls),
    [`${skeletonButtonCls}-lg`]: {
      ...genSkeletonElementButtonSize(controlHeightLG, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`),
    [`${skeletonButtonCls}-sm`]: {
      ...genSkeletonElementButtonSize(controlHeightSM, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`)
  };
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonNodeCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    padding,
    marginSM,
    borderRadius,
    titleHeight,
    blockRadius,
    paragraphLiHeight,
    controlHeightXS,
    paragraphMarginTop
  } = token;
  return {
    [componentCls]: {
      display: 'table',
      width: '100%',
      [`${componentCls}-header`]: {
        display: 'table-cell',
        paddingInlineEnd: padding,
        verticalAlign: 'top',
        // Avatar
        [skeletonAvatarCls]: {
          display: 'inline-block',
          verticalAlign: 'top',
          background: gradientFromColor,
          ...genSkeletonElementSize(controlHeight)
        },
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: '50%'
        },
        [`${skeletonAvatarCls}-lg`]: {
          ...genSkeletonElementSize(controlHeightLG)
        },
        [`${skeletonAvatarCls}-sm`]: {
          ...genSkeletonElementSize(controlHeightSM)
        }
      },
      [`${componentCls}-section`]: {
        display: 'table-cell',
        width: '100%',
        verticalAlign: 'top',
        // Title
        [skeletonTitleCls]: {
          width: '100%',
          height: titleHeight,
          background: gradientFromColor,
          borderRadius: blockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [skeletonParagraphCls]: {
          padding: 0,
          '> li': {
            width: '100%',
            height: paragraphLiHeight,
            listStyle: 'none',
            background: gradientFromColor,
            borderRadius: blockRadius,
            '+ li': {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: '61%'
        }
      },
      [`&-round ${componentCls}-section`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-section`]: {
      // Title
      [skeletonTitleCls]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: paragraphMarginTop
        }
      }
    },
    // Skeleton with element
    [`${componentCls}${componentCls}-element`]: {
      display: 'inline-block',
      width: 'auto',
      ...genSkeletonElementButton(token),
      ...genSkeletonElementAvatar(token),
      ...genSkeletonElementInput(token),
      ...genSkeletonElementNode(token),
      ...genSkeletonElementImage(token)
    },
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: '100%',
      [skeletonButtonCls]: {
        width: '100%'
      },
      [skeletonInputCls]: {
        width: '100%'
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonNodeCls},
        ${skeletonImageCls}
      `]: {
        ...genSkeletonColor(token)
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => {
  const {
    colorFillContent,
    colorFill
  } = token;
  const gradientFromColor = colorFillContent;
  const gradientToColor = colorFill;
  return {
    color: gradientFromColor,
    colorGradientEnd: gradientToColor,
    gradientFromColor,
    gradientToColor,
    titleHeight: token.controlHeight / 2,
    blockRadius: token.borderRadiusSM,
    paragraphMarginTop: token.marginLG + token.marginXXS,
    paragraphLiHeight: token.controlHeight / 2
  };
};
/* harmony default export */ const skeleton_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Skeleton', token => {
  const {
    componentCls,
    calc
  } = token;
  const skeletonToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    skeletonAvatarCls: `${componentCls}-avatar`,
    skeletonTitleCls: `${componentCls}-title`,
    skeletonParagraphCls: `${componentCls}-paragraph`,
    skeletonButtonCls: `${componentCls}-button`,
    skeletonInputCls: `${componentCls}-input`,
    skeletonNodeCls: `${componentCls}-node`,
    skeletonImageCls: `${componentCls}-image`,
    imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${token.gradientFromColor} 25%, ${token.gradientToColor} 37%, ${token.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: '1.4s'
  });
  return genBaseStyle(skeletonToken);
}, prepareComponentToken, {
  deprecatedTokens: [['color', 'gradientFromColor'], ['colorGradientEnd', 'gradientToColor']]
}));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Avatar.js
"use client";







const SkeletonAvatar = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    active,
    style,
    styles,
    shape = 'circle',
    size: customSize,
    ...rest
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [hashId, cssVarCls] = skeleton_style(prefixCls);
  const mergedSize = (0,useSize/* default */.A)(ctx => customSize ?? ctx);
  const cls = (0,clsx/* clsx */.$)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return /*#__PURE__*/react.createElement("div", {
    className: cls,
    style: styles?.root
  }, /*#__PURE__*/react.createElement(skeleton_Element, {
    prefixCls: `${prefixCls}-avatar`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    shape: shape,
    size: mergedSize,
    ...rest
  }));
};
/* harmony default export */ const Avatar = (SkeletonAvatar);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Button.js
"use client";







const SkeletonButton = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    classNames,
    active,
    style,
    styles,
    block = false,
    size: customSize,
    ...rest
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [hashId, cssVarCls] = skeleton_style(prefixCls);
  const mergedSize = (0,useSize/* default */.A)(ctx => customSize ?? ctx);
  const cls = (0,clsx/* clsx */.$)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return /*#__PURE__*/react.createElement("div", {
    className: cls,
    style: styles?.root
  }, /*#__PURE__*/react.createElement(skeleton_Element, {
    prefixCls: `${prefixCls}-button`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    size: mergedSize,
    ...rest
  }));
};
/* harmony default export */ const skeleton_Button = (SkeletonButton);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Node.js
"use client";





const SkeletonNode = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    internalClassName,
    style,
    styles,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [hashId, cssVarCls] = skeleton_style(prefixCls);
  const cls = (0,clsx/* clsx */.$)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, hashId, classNames?.root, className, rootClassName, cssVarCls);
  return /*#__PURE__*/react.createElement("div", {
    className: cls,
    style: styles?.root
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(classNames?.content, internalClassName || `${prefixCls}-node`),
    style: {
      ...styles?.content,
      ...style
    }
  }, children));
};
/* harmony default export */ const Node = (SkeletonNode);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Image.js
"use client";




const SkeletonImage = props => {
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('skeleton', props.prefixCls);
  return /*#__PURE__*/react.createElement(Node, {
    ...props,
    internalClassName: `${prefixCls}-image`
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${prefixCls}-image-svg`
  }, /*#__PURE__*/react.createElement("title", null, "Image placeholder"), /*#__PURE__*/react.createElement("path", {
    d: "M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",
    className: `${prefixCls}-image-path`
  })));
};
/* harmony default export */ const Image = (SkeletonImage);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Input.js
"use client";







const SkeletonInput = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    active,
    block,
    style,
    styles,
    size: customSize,
    ...rest
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [hashId, cssVarCls] = skeleton_style(prefixCls);
  const mergedSize = (0,useSize/* default */.A)(ctx => customSize ?? ctx);
  const cls = (0,clsx/* clsx */.$)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return /*#__PURE__*/react.createElement("div", {
    className: cls,
    style: styles?.root
  }, /*#__PURE__*/react.createElement(skeleton_Element, {
    prefixCls: `${prefixCls}-input`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    size: mergedSize,
    ...rest
  }));
};
/* harmony default export */ const Input = (SkeletonInput);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Paragraph.js
"use client";



const getWidth = (index, props) => {
  const {
    width,
    rows = 2
  } = props;
  if (Array.isArray(width)) {
    return width[index];
  }
  // last paragraph
  if (rows - 1 === index) {
    return width;
  }
  return undefined;
};
const Paragraph = props => {
  const {
    prefixCls,
    className,
    style,
    rows = 0
  } = props;
  const rowList = Array.from({
    length: rows
  }).map((_, index) => (/*#__PURE__*/react.createElement("li", {
    key: index,
    style: {
      width: getWidth(index, props)
    }
  })));
  return /*#__PURE__*/react.createElement("ul", {
    className: (0,clsx/* clsx */.$)(prefixCls, className),
    style: style
  }, rowList);
};
/* harmony default export */ const skeleton_Paragraph = (Paragraph);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Title.js
"use client";

/* eslint-disable jsx-a11y/heading-has-content */


const Title = ({
  prefixCls,
  className,
  width,
  style
}) => (/*#__PURE__*/react.createElement("h3", {
  className: (0,clsx/* clsx */.$)(prefixCls, className),
  style: {
    width,
    ...style
  }
}));
/* harmony default export */ const skeleton_Title = (Title);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/Skeleton.js
"use client";















function getComponentProps(prop) {
  if ((0,is/* isPlainObject */.Qd)(prop)) {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
// Tips: ctx.classNames.root < ctx.className < cpns.classNames.root < cpns.className < rootClassName
const Skeleton = props => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    classNames,
    style,
    styles,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.TP)('skeleton');
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [hashId, cssVarCls] = skeleton_style(prefixCls);
  const mergedProps = {
    ...props,
    avatar,
    title,
    paragraph
  };
  const contextStyleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(contextStyle);
  const styleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(style);
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  if (loading || !('loading' in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    // Avatar
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = {
        className: mergedClassNames.avatar,
        prefixCls: `${prefixCls}-avatar`,
        ...getAvatarBasicProps(hasTitle, hasParagraph),
        ...getComponentProps(avatar),
        style: mergedStyles.avatar
      };
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* clsx */.$)(mergedClassNames.header, `${prefixCls}-header`),
        style: mergedStyles.header
      }, /*#__PURE__*/react.createElement(skeleton_Element, {
        ...avatarProps
      }));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      let $title;
      if (hasTitle) {
        const titleProps = {
          className: mergedClassNames.title,
          prefixCls: `${prefixCls}-title`,
          ...getTitleBasicProps(hasAvatar, hasParagraph),
          ...getComponentProps(title),
          style: mergedStyles.title
        };
        $title = /*#__PURE__*/react.createElement(skeleton_Title, {
          ...titleProps
        });
      }
      // Paragraph
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = {
          className: mergedClassNames.paragraph,
          prefixCls: `${prefixCls}-paragraph`,
          ...getParagraphBasicProps(hasAvatar, hasTitle),
          ...getComponentProps(paragraph),
          style: mergedStyles.paragraph
        };
        paragraphNode = /*#__PURE__*/react.createElement(skeleton_Paragraph, {
          ...paragraphProps
        });
      }
      contentNode = /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* clsx */.$)(mergedClassNames.section, `${prefixCls}-section`),
        style: mergedStyles.section
      }, $title, paragraphNode);
    }
    const cls = (0,clsx/* clsx */.$)(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-round`]: round
    }, mergedClassNames.root, contextClassName, className, rootClassName, hashId, cssVarCls);
    return /*#__PURE__*/react.createElement("div", {
      className: cls,
      style: mergedStyles.root
    }, avatarNode, contentNode);
  }
  return children ?? null;
};
Skeleton.Button = skeleton_Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;
if (false) // removed by dead control flow
{}
/* harmony default export */ const skeleton_Skeleton = (Skeleton);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js
"use client";


/* harmony default export */ const skeleton = (skeleton_Skeleton);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/watermark/context.js


function voidFunc() {}
const WatermarkContext = /*#__PURE__*/react.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = react.useContext(WatermarkContext);
  const panelEleRef = react.useRef(null);
  const panelRef = (0,es/* useEvent */._q)(ele => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      if (innerContentEle) {
        watermark.add(innerContentEle);
        panelEleRef.current = innerContentEle;
      }
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
/* harmony default export */ const watermark_context = ((/* unused pure expression or super */ null && (WatermarkContext)));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(16007);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/NormalCancelBtn.js
"use client";




const NormalCancelBtn = () => {
  const {
    cancelButtonProps,
    cancelTextLocale,
    onCancel
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: onCancel,
    ...cancelButtonProps
  }, cancelTextLocale);
};
/* harmony default export */ const components_NormalCancelBtn = (NormalCancelBtn);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/NormalOkBtn.js
"use client";





const NormalOkBtn = () => {
  const {
    confirmLoading,
    okButtonProps,
    okType,
    okTextLocale,
    onOk
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(Button/* default */.A, {
    ...(0,buttonHelpers/* convertLegacyProps */.DU)(okType),
    loading: confirmLoading,
    onClick: onOk,
    ...okButtonProps
  }, okTextLocale);
};
/* harmony default export */ const components_NormalOkBtn = (NormalOkBtn);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__(49847);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/shared.js
"use client";










function renderCloseIcon(prefixCls, closeIcon) {
  return /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.A, {
    className: `${prefixCls}-close-icon`
  }));
}
const Footer = props => {
  const {
    okText,
    okType = 'primary',
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  const [locale] = (0,useLocale/* default */.A)('Modal', (0,modal_locale/* getConfirmLocale */.l)());
  // ================== Locale Text ==================
  const okTextLocale = okText || locale?.okText;
  const cancelTextLocale = cancelText || locale?.cancelText;
  const memoizedValue = react.useMemo(() => {
    return {
      confirmLoading,
      okButtonProps,
      cancelButtonProps,
      okTextLocale,
      cancelTextLocale,
      okType,
      onOk,
      onCancel
    };
  }, [confirmLoading, okButtonProps, cancelButtonProps, okTextLocale, cancelTextLocale, okType, onOk, onCancel]);
  let footerNode;
  if ((0,is/* isFunction */.Tn)(footer) || typeof footer === 'undefined') {
    footerNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_NormalCancelBtn, null), /*#__PURE__*/react.createElement(components_NormalOkBtn, null));
    if ((0,is/* isFunction */.Tn)(footer)) {
      footerNode = footer(footerNode, {
        OkBtn: components_NormalOkBtn,
        CancelBtn: components_NormalCancelBtn
      });
    }
    footerNode = /*#__PURE__*/react.createElement(ModalContextProvider, {
      value: memoizedValue
    }, footerNode);
  } else {
    footerNode = footer;
  }
  return /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.X, {
    disabled: false
  }, footerNode);
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(41292);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/style/index.js
var style = __webpack_require__(90542);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var es_style = __webpack_require__(75025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/motion/fade.js
var fade = __webpack_require__(45992);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(37);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/style/index.js






function box(position) {
  return {
    position,
    inset: 0
  };
}
const genModalMaskStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: 'none',
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: 'none'
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-container`]: {
        pointerEvents: 'none'
      },
      [`${componentCls}-mask`]: {
        ...box('fixed'),
        zIndex: token.zIndexPopupBase,
        height: '100%',
        backgroundColor: token.colorBgMask,
        pointerEvents: 'none',
        [`&${componentCls}-mask-blur`]: {
          backdropFilter: 'blur(4px)'
        },
        [`${componentCls}-hidden`]: {
          display: 'none'
        }
      },
      [`${componentCls}-wrap`]: {
        ...box('fixed'),
        zIndex: token.zIndexPopupBase,
        overflow: 'auto',
        outline: 0,
        WebkitOverflowScrolling: 'touch'
      }
    }
  }, {
    [`${componentCls}-root`]: (0,fade/* initFadeMotion */.p9)(token)
  }];
};
const genModalStyle = token => {
  const {
    componentCls,
    motionDurationMid
  } = token;
  return [
  // ======================== Root =========================
  {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-centered`]: {
        textAlign: 'center',
        '&::before': {
          display: 'inline-block',
          width: 0,
          height: '100%',
          verticalAlign: 'middle',
          content: '""'
        },
        [componentCls]: {
          top: 0,
          display: 'inline-block',
          paddingBottom: 0,
          textAlign: 'start',
          verticalAlign: 'middle'
        }
      },
      [`@media (max-width: ${token.screenSMMax}px)`]: {
        [componentCls]: {
          maxWidth: 'calc(100vw - 16px)',
          margin: `${(0,cssinjs_es/* unit */.zA)(token.marginXS)} auto`
        },
        [`${componentCls}-centered`]: {
          [componentCls]: {
            flex: 1
          }
        }
      }
    }
  },
  // ======================== Modal ========================
  {
    [componentCls]: {
      ...(0,es_style/* resetComponent */.dF)(token),
      pointerEvents: 'none',
      position: 'relative',
      top: 100,
      width: 'auto',
      maxWidth: `calc(100vw - ${(0,cssinjs_es/* unit */.zA)(token.calc(token.margin).mul(2).equal())})`,
      margin: '0 auto',
      '&:focus-visible': {
        borderRadius: token.borderRadiusLG,
        ...(0,es_style/* genFocusOutline */.jk)(token)
      },
      [`${componentCls}-title`]: {
        margin: 0,
        color: token.titleColor,
        fontWeight: token.fontWeightStrong,
        fontSize: token.titleFontSize,
        lineHeight: token.titleLineHeight,
        wordWrap: 'break-word'
      },
      [`${componentCls}-container`]: {
        position: 'relative',
        backgroundColor: token.contentBg,
        backgroundClip: 'padding-box',
        border: 0,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadow,
        pointerEvents: 'auto',
        padding: token.contentPadding
      },
      [`${componentCls}-close`]: {
        position: 'absolute',
        top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
        padding: 0,
        color: token.modalCloseIconColor,
        fontWeight: token.fontWeightStrong,
        lineHeight: 1,
        textDecoration: 'none',
        background: 'transparent',
        borderRadius: token.borderRadiusSM,
        width: token.modalCloseBtnSize,
        height: token.modalCloseBtnSize,
        border: 0,
        outline: 0,
        cursor: 'pointer',
        transition: ['color', 'background-color'].map(prop => `${prop} ${motionDurationMid}`).join(', '),
        '&-x': {
          display: 'flex',
          fontSize: token.fontSizeLG,
          fontStyle: 'normal',
          lineHeight: (0,cssinjs_es/* unit */.zA)(token.modalCloseBtnSize),
          justifyContent: 'center',
          textTransform: 'none',
          textRendering: 'auto'
        },
        '&:disabled': {
          pointerEvents: 'none'
        },
        '&:hover': {
          color: token.modalCloseIconHoverColor,
          backgroundColor: token.colorBgTextHover,
          textDecoration: 'none'
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive
        },
        ...(0,es_style/* genFocusStyle */.K8)(token)
      },
      [`${componentCls}-header`]: {
        color: token.colorText,
        background: token.headerBg,
        borderRadius: `${(0,cssinjs_es/* unit */.zA)(token.borderRadiusLG)} ${(0,cssinjs_es/* unit */.zA)(token.borderRadiusLG)} 0 0`,
        marginBottom: token.headerMarginBottom,
        padding: token.headerPadding,
        borderBottom: token.headerBorderBottom
      },
      [`${componentCls}-body`]: {
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordWrap: 'break-word',
        padding: token.bodyPadding,
        [`${componentCls}-body-skeleton`]: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: `${(0,cssinjs_es/* unit */.zA)(token.margin)} auto`
        }
      },
      [`${componentCls}-footer`]: {
        textAlign: 'end',
        background: token.footerBg,
        marginTop: token.footerMarginTop,
        padding: token.footerPadding,
        borderTop: token.footerBorderTop,
        borderRadius: token.footerBorderRadius,
        [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginInlineStart: token.marginXS
        }
      },
      [`${componentCls}-open`]: {
        overflow: 'hidden'
      }
    }
  },
  // ======================== Pure =========================
  {
    [`${componentCls}-pure-panel`]: {
      top: 'auto',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      [`${componentCls}-container,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto'
      },
      [`${componentCls}-confirm-body`]: {
        marginBottom: 'auto'
      }
    }
  }];
};
const genRTLStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl',
        [`${componentCls}-confirm-body`]: {
          direction: 'rtl'
        }
      }
    }
  };
};
const genResponsiveWidthStyle = token => {
  const {
    componentCls
  } = token;
  const oriGridMediaSizesMap = (0,style/* getMediaSize */.i4)(token);
  const gridMediaSizesMap = {
    ...oriGridMediaSizesMap
  };
  delete gridMediaSizesMap.xs;
  const cssVarPrefix = `--${componentCls.replace('.', '')}-`;
  const responsiveStyles = Object.keys(gridMediaSizesMap).map(key => ({
    [`@media (min-width: ${(0,cssinjs_es/* unit */.zA)(gridMediaSizesMap[key])})`]: {
      width: `var(${cssVarPrefix}${key}-width)`
    }
  }));
  return {
    [`${componentCls}-root`]: {
      [componentCls]: [].concat((0,toConsumableArray/* default */.A)(Object.keys(oriGridMediaSizesMap).map((currentKey, index) => {
        const previousKey = Object.keys(oriGridMediaSizesMap)[index - 1];
        return previousKey ? {
          [`${cssVarPrefix}${currentKey}-width`]: `var(${cssVarPrefix}${previousKey}-width)`
        } : null;
      })), [{
        width: `var(${cssVarPrefix}xs-width)`
      }], (0,toConsumableArray/* default */.A)(responsiveStyles))
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterBorderWidth: token.lineWidth,
    modalCloseIconColor: token.colorIcon,
    modalCloseIconHoverColor: token.colorIconHover,
    modalCloseBtnSize: token.controlHeight,
    modalConfirmIconSize: token.fontHeight,
    modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
  });
  return modalToken;
};
const style_prepareComponentToken = token => ({
  footerBg: 'transparent',
  headerBg: 'transparent',
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading,
  // internal
  contentPadding: token.wireframe ? 0 : `${(0,cssinjs_es/* unit */.zA)(token.paddingMD)} ${(0,cssinjs_es/* unit */.zA)(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${(0,cssinjs_es/* unit */.zA)(token.padding)} ${(0,cssinjs_es/* unit */.zA)(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${(0,cssinjs_es/* unit */.zA)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${(0,cssinjs_es/* unit */.zA)(token.paddingXS)} ${(0,cssinjs_es/* unit */.zA)(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${(0,cssinjs_es/* unit */.zA)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  footerBorderRadius: token.wireframe ? `0 0 ${(0,cssinjs_es/* unit */.zA)(token.borderRadiusLG)} ${(0,cssinjs_es/* unit */.zA)(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${(0,cssinjs_es/* unit */.zA)(token.padding * 2)} ${(0,cssinjs_es/* unit */.zA)(token.padding * 2)} ${(0,cssinjs_es/* unit */.zA)(token.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
  confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM,
  mask: true
});
/* harmony default export */ const modal_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Modal', token => {
  const modalToken = prepareToken(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), (0,zoom/* initZoomMotion */.aB)(modalToken, 'zoom'), genResponsiveWidthStyle(modalToken)];
}, style_prepareComponentToken, {
  unitless: {
    titleLineHeight: true
  }
}));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/Modal.js
"use client";






















let mousePosition;
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = e => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}
const Modal = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    open,
    wrapClassName,
    centered,
    getContainer,
    style,
    width = 520,
    footer,
    classNames,
    styles,
    children,
    loading,
    confirmLoading,
    zIndex: customizeZIndex,
    mousePosition: customizeMousePosition,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    destroyOnHidden,
    destroyOnClose,
    panelRef = null,
    closable,
    mask: modalMask,
    modalRender,
    maskClosable,
    scrollLock,
    // Focusable
    focusTriggerAfterClose,
    focusable,
    ...restProps
  } = props;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    centered: contextCentered,
    cancelButtonProps: contextCancelButtonProps,
    okButtonProps: contextOkButtonProps,
    mask: contextMask,
    focusable: contextFocusable
  } = (0,context/* useComponentConfig */.TP)('modal');
  const {
    modal: modalContext
  } = react.useContext(context/* ConfigContext */.QO);
  const [closableAfterClose, onClose] = react.useMemo(() => {
    if (typeof closable === 'boolean') {
      return [undefined, undefined];
    }
    return [closable?.afterClose, closable?.onClose];
  }, [closable]);
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  // ============================ Mask ============================
  const [mergedMask, maskBlurClassName, mergeMaskClosable] = (0,useMergedMask/* useMergedMask */.u)(modalMask, contextMask, prefixCls, maskClosable);
  // ========================== Focusable =========================
  const mergedFocusable = useFocusable({
    ...contextFocusable,
    ...focusable
  }, mergedMask, focusTriggerAfterClose);
  // ============================ Open ============================
  const handleCancel = e => {
    if (confirmLoading) {
      return;
    }
    onCancel?.(e);
    onClose?.();
  };
  const handleOk = e => {
    onOk?.(e);
    onClose?.();
  };
  if (false) // removed by dead control flow
{}
  // Style
  const rootCls = (0,useCSSVarCls/* default */.A)(prefixCls);
  const [hashId, cssVarCls] = modal_style(prefixCls, rootCls);
  const wrapClassNameExtended = (0,clsx/* clsx */.$)(wrapClassName, {
    [`${prefixCls}-centered`]: centered ?? contextCentered,
    [`${prefixCls}-wrap-rtl`]: direction === 'rtl'
  });
  const dialogFooter = footer !== null && !loading ? (/*#__PURE__*/react.createElement(Footer, {
    ...props,
    okButtonProps: {
      ...contextOkButtonProps,
      ...okButtonProps
    },
    onOk: handleOk,
    cancelButtonProps: {
      ...contextCancelButtonProps,
      ...cancelButtonProps
    },
    onCancel: handleCancel
  })) : null;
  const [rawClosable, mergedCloseIcon, closeBtnIsDisabled, ariaProps] = useClosable(pickClosable(props), pickClosable(modalContext), {
    closable: true,
    closeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.A, {
      className: `${prefixCls}-close-icon`
    }),
    closeIconRender: icon => renderCloseIcon(prefixCls, icon)
  });
  const mergedClosable = rawClosable ? {
    disabled: closeBtnIsDisabled,
    closeIcon: mergedCloseIcon,
    afterClose: closableAfterClose,
    ...ariaProps
  } : false;
  // ============================ modalRender ============================
  const mergedModalRender = modalRender ? node => /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-render`
  }, modalRender(node)) : undefined;
  // ============================ Refs ============================
  // Select `ant-modal-container` by `panelRef`
  const panelClassName = `.${prefixCls}-${modalRender ? 'render' : 'container'}`;
  const innerPanelRef = usePanelRef(panelClassName);
  const mergedPanelRef = (0,es/* composeRef */.K4)(panelRef, innerPanelRef);
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,useZIndex/* useZIndex */.YK)('Modal', customizeZIndex);
  const mergedProps = {
    ...props,
    width,
    panelRef,
    focusTriggerAfterClose: mergedFocusable.focusTriggerAfterClose,
    focusable: mergedFocusable,
    mask: mergedMask,
    maskClosable: mergeMaskClosable,
    zIndex
  };
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames, maskBlurClassName], [contextStyles, styles], {
    props: mergedProps
  });
  // =========================== Width ============================
  const [numWidth, responsiveWidth] = react.useMemo(() => {
    if ((0,is/* isPlainObject */.Qd)(width)) {
      return [undefined, width];
    }
    return [width, undefined];
  }, [width]);
  const responsiveWidthVars = react.useMemo(() => {
    const vars = {};
    if (responsiveWidth) {
      Object.keys(responsiveWidth).forEach(breakpoint => {
        const breakpointWidth = responsiveWidth[breakpoint];
        if ((0,is/* isNonNullable */.R)(breakpointWidth)) {
          vars[`--${prefixCls}-${breakpoint}-width`] = (0,is/* isNumber */.Et)(breakpointWidth) ? `${breakpointWidth}px` : breakpointWidth;
        }
      });
    }
    return vars;
  }, [prefixCls, responsiveWidth]);
  // =========================== Render ===========================
  return /*#__PURE__*/react.createElement(ContextIsolator/* default */.A, {
    form: true,
    space: true
  }, /*#__PURE__*/react.createElement(zindexContext/* default */.A.Provider, {
    value: contextZIndex
  }, /*#__PURE__*/react.createElement(dialog_es, {
    width: numWidth,
    ...restProps,
    zIndex: zIndex,
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    rootClassName: (0,clsx/* clsx */.$)(hashId, rootClassName, cssVarCls, rootCls, mergedClassNames.root),
    rootStyle: mergedStyles.root,
    footer: dialogFooter,
    visible: open,
    mousePosition: customizeMousePosition ?? mousePosition,
    onClose: handleCancel,
    closable: mergedClosable,
    closeIcon: mergedCloseIcon,
    transitionName: (0,motion/* getTransitionName */.b)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.b)(rootPrefixCls, 'fade', props.maskTransitionName),
    mask: mergedMask,
    maskClosable: mergeMaskClosable,
    scrollLock: scrollLock,
    className: (0,clsx/* clsx */.$)(hashId, className, contextClassName),
    style: {
      ...contextStyle,
      ...style,
      ...responsiveWidthVars
    },
    classNames: {
      ...mergedClassNames,
      wrapper: (0,clsx/* clsx */.$)(mergedClassNames.wrapper, wrapClassNameExtended)
    },
    styles: mergedStyles,
    panelRef: mergedPanelRef,
    destroyOnHidden: destroyOnHidden ?? destroyOnClose,
    modalRender: mergedModalRender,
    // Focusable
    focusTriggerAfterClose: mergedFocusable.focusTriggerAfterClose,
    focusTrap: mergedFocusable.trap
  }, loading ? (/*#__PURE__*/react.createElement(skeleton, {
    active: true,
    title: false,
    paragraph: {
      rows: 4
    },
    className: `${prefixCls}-body-skeleton`
  })) : children)));
};
/* harmony default export */ const modal_Modal = (Modal);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/style/confirm.js




// ============================= Confirm ==============================
const genModalConfirmStyle = token => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight,
    modalTitleHeight,
    fontHeight,
    confirmBodyPadding
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      '&-rtl': {
        direction: 'rtl'
      },
      [`${token.antCls}-modal-header`]: {
        display: 'none'
      },
      [`${confirmComponentCls}-body-wrapper`]: {
        ...(0,es_style/* clearFix */.t6)()
      },
      [`&${componentCls} ${componentCls}-body`]: {
        padding: confirmBodyPadding
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'start',
        [`> ${token.iconCls}`]: {
          flex: 'none',
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token.confirmIconMarginInlineEnd,
          marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        },
        [`&-has-title > ${token.iconCls}`]: {
          marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        rowGap: token.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${(0,cssinjs_es/* unit */.zA)(token.marginSM)})`
      },
      [`${confirmComponentCls}-body-no-icon ${confirmComponentCls}-paragraph`]: {
        maxWidth: '100%'
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${token.iconCls} + ${confirmComponentCls}-paragraph`]: {
        maxWidth: `calc(100% - ${(0,cssinjs_es/* unit */.zA)(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal())})`
      },
      [`${confirmComponentCls}-title`]: {
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-container`]: {
        color: token.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: 'end',
        marginTop: token.confirmBtnsMarginTop,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ const style_confirm = ((0,genStyleUtils/* genSubStyleComponent */.bf)(['Modal', 'confirm'], token => {
  const modalToken = prepareToken(token);
  return genModalConfirmStyle(modalToken);
}, style_prepareComponentToken, {
  // confirm is weak than modal since no conflict here
  order: -1000
}));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/fallbackProp.js
var fallbackProp = __webpack_require__(26686);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/ConfirmDialog.js
"use client";





















const ConfirmContent = props => {
  const {
    prefixCls,
    icon,
    okText,
    cancelText,
    confirmPrefixCls,
    type,
    okCancel,
    footer,
    // Legacy for static function usage
    locale: staticLocale,
    autoFocusButton,
    focusable,
    ...restProps
  } = props;
  const {
    infoIcon,
    successIcon,
    errorIcon,
    warningIcon
  } = (0,context/* useComponentConfig */.TP)('modal');
  if (false) // removed by dead control flow
{}
  // Icon
  let mergedIcon = icon;
  // 支持传入 { icon: null } 或 { icon: false } 来隐藏`Modal.confirm`默认的Icon
  if (icon === undefined) {
    switch (type) {
      case 'info':
        mergedIcon = (0,fallbackProp/* default */.A)(infoIcon, /*#__PURE__*/react.createElement(InfoCircleFilled/* default */.A, null));
        break;
      case 'success':
        mergedIcon = (0,fallbackProp/* default */.A)(successIcon, /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.A, null));
        break;
      case 'error':
        mergedIcon = (0,fallbackProp/* default */.A)(errorIcon, /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.A, null));
        break;
      default:
        mergedIcon = (0,fallbackProp/* default */.A)(warningIcon, /*#__PURE__*/react.createElement(ExclamationCircleFilled/* default */.A, null));
    }
  }
  // 默认为 true，保持向下兼容
  const mergedOkCancel = okCancel ?? type === 'confirm';
  const mergedAutoFocusButton = react.useMemo(() => {
    const base = focusable?.autoFocusButton || autoFocusButton;
    return base || base === null ? base : 'ok';
  }, [autoFocusButton, focusable?.autoFocusButton]);
  const [locale] = (0,useLocale/* default */.A)('Modal');
  const mergedLocale = staticLocale || locale;
  // ================== Locale Text ==================
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale?.okText : mergedLocale?.justOkText);
  const cancelTextLocale = cancelText || mergedLocale?.cancelText;
  // ================= Context Value =================
  const {
    closable
  } = restProps;
  const {
    onClose
  } = (0,is/* isPlainObject */.Qd)(closable) ? closable : {};
  const memoizedValue = react.useMemo(() => {
    return {
      autoFocusButton: mergedAutoFocusButton,
      cancelTextLocale,
      okTextLocale,
      mergedOkCancel,
      onClose,
      ...restProps
    };
  }, [mergedAutoFocusButton, cancelTextLocale, okTextLocale, mergedOkCancel, onClose, restProps]);
  // ====================== Footer Origin Node ======================
  const footerOriginNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_ConfirmCancelBtn, null), /*#__PURE__*/react.createElement(components_ConfirmOkBtn, null));
  const hasTitle = (0,is/* isReactRenderable */.AZ)(props.title);
  const hasIcon = (0,is/* isReactRenderable */.AZ)(mergedIcon);
  const bodyCls = `${confirmPrefixCls}-body`;
  return /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(bodyCls, {
      [`${bodyCls}-has-title`]: hasTitle,
      [`${bodyCls}-no-icon`]: !hasIcon
    })
  }, mergedIcon, /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-paragraph`
  }, hasTitle && /*#__PURE__*/react.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content))), footer === undefined || (0,is/* isFunction */.Tn)(footer) ? (/*#__PURE__*/react.createElement(ModalContextProvider, {
    value: memoizedValue
  }, /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, (0,is/* isFunction */.Tn)(footer) ? footer(footerOriginNode, {
    OkBtn: components_ConfirmOkBtn,
    CancelBtn: components_ConfirmCancelBtn
  }) : footerOriginNode))) : footer, /*#__PURE__*/react.createElement(style_confirm, {
    prefixCls: prefixCls
  }));
};
const ConfirmDialog = props => {
  const {
    close,
    zIndex,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    bodyStyle,
    closable = false,
    onConfirm,
    styles,
    title,
    mask,
    maskClosable,
    okButtonProps,
    cancelButtonProps
  } = props;
  const {
    cancelButtonProps: contextCancelButtonProps,
    okButtonProps: contextOkButtonProps
  } = (0,context/* useComponentConfig */.TP)('modal');
  if (false) // removed by dead control flow
{}
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const classString = (0,clsx/* clsx */.$)(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === 'rtl'
  }, props.className);
  // ========================== Mask ==========================
  // 默认为 false，保持旧版默认行为
  const mergedMask = react.useMemo(() => {
    const nextMaskConfig = (0,useMergedMask/* normalizeMaskConfig */.A)(mask, maskClosable);
    nextMaskConfig.closable ?? (nextMaskConfig.closable = false);
    return nextMaskConfig;
  }, [mask, maskClosable]);
  // ========================= zIndex =========================
  const [, token] = (0,useToken/* default */.Ay)();
  const mergedZIndex = react.useMemo(() => {
    if (zIndex !== undefined) {
      return zIndex;
    }
    // Static always use max zIndex
    return token.zIndexPopupBase + (/* inlined export .CONTAINER_MAX_OFFSET */1000);
  }, [zIndex, token]);
  // ========================= Render =========================
  return /*#__PURE__*/react.createElement(modal_Modal, {
    ...props,
    className: classString,
    wrapClassName: (0,clsx/* clsx */.$)({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: () => {
      close?.({
        triggerCancel: true
      });
      onConfirm?.(false);
    },
    title: title,
    footer: null,
    transitionName: (0,motion/* getTransitionName */.b)(rootPrefixCls || '', 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.b)(rootPrefixCls || '', 'fade', props.maskTransitionName),
    mask: mergedMask,
    style: style,
    styles: {
      body: bodyStyle,
      mask: maskStyle,
      ...styles
    },
    width: width,
    zIndex: mergedZIndex,
    closable: closable
  }, /*#__PURE__*/react.createElement(ConfirmContent, {
    ...props,
    confirmPrefixCls: confirmPrefixCls,
    okButtonProps: {
      ...contextOkButtonProps,
      ...okButtonProps
    },
    cancelButtonProps: {
      ...contextCancelButtonProps,
      ...cancelButtonProps
    }
  }));
};
const ConfirmDialogWrapper = props => {
  const {
    rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  } = props;
  return /*#__PURE__*/react.createElement(config_provider/* default */.Ay, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction,
    theme: theme
  }, /*#__PURE__*/react.createElement(ConfirmDialog, {
    ...props
  }));
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const modal_ConfirmDialog = (ConfirmDialogWrapper);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/destroyFns.js
const destroyFns = [];
/* harmony default export */ const modal_destroyFns = (destroyFns);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/confirm.js
"use client";









let defaultRootPrefixCls = '';
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
const confirm_ConfirmDialogWrapper = props => {
  const {
    prefixCls: customizePrefixCls,
    getContainer,
    direction
  } = props;
  const runtimeLocale = (0,modal_locale/* getConfirmLocale */.l)();
  const config = (0,react.useContext)(context/* ConfigContext */.QO);
  const rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
  // because Modal.config set rootPrefixCls, which is different from other components
  const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
  let mergedGetContainer = getContainer;
  if (mergedGetContainer === false) {
    mergedGetContainer = undefined;
    if (false) // removed by dead control flow
{}
  }
  return /*#__PURE__*/react.createElement(modal_ConfirmDialog, {
    ...props,
    rootPrefixCls: rootPrefixCls,
    prefixCls: prefixCls,
    iconPrefixCls: config.iconPrefixCls,
    theme: config.theme,
    direction: direction ?? config.direction,
    locale: config.locale?.Modal ?? runtimeLocale,
    getContainer: mergedGetContainer
  });
};
function confirm_confirm(config) {
  const global = (0,config_provider/* globalConfig */.cr)();
  if (false) // removed by dead control flow
{}
  const container = document.createDocumentFragment();
  let currentConfig = {
    ...config,
    close,
    open: true
  };
  let timeoutId;
  function destroy(...args) {
    const triggerCancel = args.some(param => param?.triggerCancel);
    if (triggerCancel) {
      config.onCancel?.(() => {}, ...args.slice(1));
    }
    for (let i = 0; i < modal_destroyFns.length; i++) {
      const fn = modal_destroyFns[i];
      if (fn === close) {
        modal_destroyFns.splice(i, 1);
        break;
      }
    }
    (0,es/* unmount */.vs)(container).then(() => {
      // Do nothing
    });
  }
  const scheduleRender = props => {
    clearTimeout(timeoutId);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    timeoutId = setTimeout(() => {
      const rootPrefixCls = global.getPrefixCls(undefined, getRootPrefixCls());
      const iconPrefixCls = global.getIconPrefixCls();
      const theme = global.getTheme();
      const dom = /*#__PURE__*/react.createElement(confirm_ConfirmDialogWrapper, {
        ...props
      });
      (0,es/* render */.XX)(/*#__PURE__*/react.createElement(config_provider/* default */.Ay, {
        prefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        theme: theme
      }, (0,is/* isFunction */.Tn)(global.holderRender) ? global.holderRender(dom) : dom), container);
    });
  };
  function close(...args) {
    currentConfig = {
      ...currentConfig,
      open: false,
      afterClose: () => {
        if ((0,is/* isFunction */.Tn)(config.afterClose)) {
          config.afterClose();
        }
        // @ts-ignore
        destroy.apply(this, args);
      }
    };
    scheduleRender(currentConfig);
  }
  function update(configUpdate) {
    if ((0,is/* isFunction */.Tn)(configUpdate)) {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate
      };
    }
    scheduleRender(currentConfig);
  }
  scheduleRender(currentConfig);
  modal_destroyFns.push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return {
    ...props,
    type: 'warning'
  };
}
function withInfo(props) {
  return {
    ...props,
    type: 'info'
  };
}
function withSuccess(props) {
  return {
    ...props,
    type: 'success'
  };
}
function withError(props) {
  return {
    ...props,
    type: 'error'
  };
}
function withConfirm(props) {
  return {
    ...props,
    type: 'confirm'
  };
}
function modalGlobalConfig({
  rootPrefixCls
}) {
   false ? 0 : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(71761);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/PurePanel.js
"use client";












const PurePanel_PurePanel = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    closeIcon,
    closable,
    type,
    title,
    children,
    footer,
    classNames,
    styles,
    ...restProps
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const {
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.TP)('modal');
  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls('modal');
  const rootCls = (0,useCSSVarCls/* default */.A)(rootPrefixCls);
  const [hashId, cssVarCls] = modal_style(prefixCls, rootCls);
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, styles], {
    props
  });
  const confirmPrefixCls = `${prefixCls}-confirm`;
  // Choose target props by confirm mark
  let additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable ?? false,
      title: '',
      footer: '',
      children: (/*#__PURE__*/react.createElement(ConfirmContent, {
        ...props,
        prefixCls: prefixCls,
        confirmPrefixCls: confirmPrefixCls,
        rootPrefixCls: rootPrefixCls,
        content: children
      }))
    };
  } else {
    additionalProps = {
      closable: closable ?? true,
      title,
      footer: footer !== null && /*#__PURE__*/react.createElement(Footer, {
        ...props
      }),
      children
    };
  }
  return /*#__PURE__*/react.createElement(Content_Panel, {
    prefixCls: prefixCls,
    className: (0,clsx/* clsx */.$)(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className, contextClassName, cssVarCls, rootCls, mergedClassNames.root),
    style: {
      ...contextStyle,
      ...mergedStyles.root
    },
    ...restProps,
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable: closable,
    classNames: mergedClassNames,
    styles: mergedStyles,
    ...additionalProps
  });
};
/* harmony default export */ const modal_PurePanel = ((0,PurePanel/* withPureRenderTheme */.U)(PurePanel_PurePanel));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/usePatchElement.js


const usePatchElement = () => {
  const [elements, setElements] = react.useState([]);
  const patchElement = react.useCallback(element => {
    // append a new element to elements (and create a new ref)
    setElements(originElements => [].concat((0,toConsumableArray/* default */.A)(originElements), [element]));
    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      setElements(originElements => originElements.filter(ele => ele !== element));
    };
  }, []);
  return [elements, patchElement];
};
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/useModal/HookModal.js
"use client";







const HookModal = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    afterClose: hookAfterClose,
    config,
    ...restProps
  } = props;
  const [open, setOpen] = react.useState(true);
  const [innerConfig, setInnerConfig] = react.useState(config);
  const {
    direction,
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('modal');
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    hookAfterClose();
    innerConfig.afterClose?.();
  };
  const close = (...args) => {
    setOpen(false);
    const triggerCancel = args.some(param => param?.triggerCancel);
    if (triggerCancel) {
      innerConfig.onCancel?.(() => {}, ...args.slice(1));
    }
  };
  react.useImperativeHandle(ref, () => ({
    destroy: close,
    update: newConfig => {
      setInnerConfig(originConfig => {
        const nextConfig = (0,is/* isFunction */.Tn)(newConfig) ? newConfig(originConfig) : newConfig;
        return {
          ...originConfig,
          ...nextConfig
        };
      });
    }
  }));
  const mergedOkCancel = innerConfig.okCancel ?? innerConfig.type === 'confirm';
  const [contextLocale] = (0,useLocale/* default */.A)('Modal', en_US/* default */.A.Modal);
  return /*#__PURE__*/react.createElement(modal_ConfirmDialog, {
    prefixCls: prefixCls,
    rootPrefixCls: rootPrefixCls,
    ...innerConfig,
    close: close,
    open: open,
    afterClose: afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale?.okText : contextLocale?.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || contextLocale?.cancelText,
    ...restProps
  });
});
/* harmony default export */ const useModal_HookModal = (HookModal);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/useModal/index.js
"use client";







let uuid = 0;
const ElementsHolder = /*#__PURE__*/react.memo(/*#__PURE__*/react.forwardRef((_props, ref) => {
  const [elements, patchElement] = usePatchElement();
  react.useImperativeHandle(ref, () => ({
    patchElement
  }), [patchElement]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, elements);
}));
function useModal() {
  const holderRef = react.useRef(null);
  // ========================== Effect ==========================
  const [actionQueue, setActionQueue] = react.useState([]);
  react.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = (0,toConsumableArray/* default */.A)(actionQueue);
      cloneQueue.forEach(action => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  // =========================== Hook ===========================
  const getConfirmFunc = react.useCallback(withFunc => function hookConfirm(config) {
    uuid += 1;
    const modalRef = /*#__PURE__*/react.createRef();
    // Proxy to promise with `onClose`
    let resolvePromise;
    const promise = new Promise(resolve => {
      resolvePromise = resolve;
    });
    let silent = false;
    let closeFunc;
    const modal = /*#__PURE__*/react.createElement(useModal_HookModal, {
      key: `modal-${uuid}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: () => {
        closeFunc?.();
      },
      isSilent: () => silent,
      onConfirm: confirmed => {
        resolvePromise(confirmed);
      }
    });
    closeFunc = holderRef.current?.patchElement(modal);
    if (closeFunc) {
      modal_destroyFns.push(closeFunc);
    }
    const instance = {
      destroy: () => {
        function destroyAction() {
          modalRef.current?.destroy();
        }
        if (modalRef.current) {
          destroyAction();
        } else {
          setActionQueue(prev => [].concat((0,toConsumableArray/* default */.A)(prev), [destroyAction]));
        }
      },
      update: newConfig => {
        function updateAction() {
          modalRef.current?.update(newConfig);
        }
        if (modalRef.current) {
          updateAction();
        } else {
          setActionQueue(prev => [].concat((0,toConsumableArray/* default */.A)(prev), [updateAction]));
        }
      },
      then: resolve => {
        silent = true;
        return promise.then(resolve);
      }
    };
    return instance;
  }, []);
  const fns = react.useMemo(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }), [getConfirmFunc]);
  return [fns, /*#__PURE__*/react.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
/* harmony default export */ const modal_useModal = (useModal);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js
"use client";






function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}
const es_modal_Modal = modal_Modal;
es_modal_Modal.useModal = modal_useModal;
es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};
es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};
es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};
es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;
es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};
es_modal_Modal.destroyAll = function destroyAllFn() {
  while (modal_destroyFns.length) {
    const close = modal_destroyFns.pop();
    if (close) {
      close();
    }
  }
};
es_modal_Modal.config = modalGlobalConfig;
es_modal_Modal._InternalPanelDoNotUseOrYouWillBeFired = modal_PurePanel;
if (false) // removed by dead control flow
{}
/* harmony default export */ const modal = (es_modal_Modal);

/***/ }

}]);