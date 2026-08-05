"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[1451],{

/***/ 65403
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AntdIconLight)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(86623);
;// ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/icons/es/cssUtils.js
const APPEND_ORDER = 'data-rc-order';
const APPEND_PRIORITY = 'data-rc-priority';
const MARK_KEY = 'rc-util-key';
const containerCache = new Map();
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function contains(root, node) {
  if (!root || !node) {
    return false;
  }
  if (root.contains) {
    return root.contains(node);
  }
  let current = node;
  while (current) {
    if (current === root) {
      return true;
    }
    current = current.parentNode;
  }
  return false;
}
function getMark({
  mark
} = {}) {
  if (mark) {
    return mark.startsWith('data-') ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(node => node.tagName === 'STYLE');
}
function injectCSS(css, option = {}) {
  if (!canUseDom()) {
    return null;
  }
  const {
    csp,
    prepend,
    priority = 0
  } = option;
  const mergedOrder = getOrder(prepend);
  const isPrependQueue = mergedOrder === 'prependQueue';
  const styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, `${priority}`);
  }
  if (csp?.nonce) {
    styleNode.nonce = csp.nonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(option);
  const {
    firstChild
  } = container;
  if (prepend) {
    if (isPrependQueue) {
      const existStyle = (option.styles || findStyles(container)).filter(node => {
        if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        const nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key, option = {}) {
  let {
    styles
  } = option;
  styles ||= findStyles(getContainer(option));
  return styles.find(node => node.getAttribute(getMark(option)) === key);
}
function syncRealContainer(container, option) {
  const cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS('', option);
    if (!placeholderStyle) {
      return;
    }
    const {
      parentNode
    } = placeholderStyle;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key, originOption = {}) {
  if (!canUseDom()) {
    return null;
  }
  const container = getContainer(originOption);
  const styles = findStyles(container);
  const option = {
    ...originOption,
    styles
  };
  syncRealContainer(container, option);
  const existNode = findExistNode(key, option);
  if (existNode) {
    if (option.csp?.nonce && existNode.nonce !== option.csp.nonce) {
      existNode.nonce = option.csp.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, option);
  newNode?.setAttribute(getMark(option), key);
  return newNode;
}
function getRoot(ele) {
  return ele?.getRootNode?.();
}
function getShadowRoot(ele) {
  const root = getRoot(ele);
  return typeof ShadowRoot !== 'undefined' && root instanceof ShadowRoot ? root : null;
}
const warned = {};
function warningOnce(valid, message) {
  if (valid || warned[message]) {
    return;
  }
  if (false) // removed by dead control flow
{}
  warned[message] = true;
}
;// ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/icons/es/renderUtils.js



function camelCase(input) {
  return input.replace(/-(.)/g, (match, g) => g.toUpperCase());
}
function warning(valid, message) {
  warningOnce(valid, `[@ant-design/icons] ${message}`);
}
function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
    const val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/react.createElement(node.tag, {
      key,
      ...normalizeAttrs(node.attrs)
    }, (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)));
  }
  return /*#__PURE__*/react.createElement(node.tag, {
    key,
    ...normalizeAttrs(node.attrs),
    ...rootProps
  }, (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)));
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
const svgBaseProps = (/* unused pure expression or super */ null && ({
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
}));
const iconStyles = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin {
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
const useInsertStyles = eleRef => {
  const {
    csp,
    prefixCls,
    layer,
    zeroRuntime
  } = (0,react.useContext)(Context/* default */.A);
  let mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  if (layer) {
    mergedStyleStr = `@layer ${layer} {\n${mergedStyleStr}\n}`;
  }
  ;(0,react.useEffect)(() => {
    if (zeroRuntime) {
      return;
    }
    const ele = eleRef.current;
    const shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, '@ant-design-icons', {
      prepend: !layer,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};
;// ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/icons/es/components/IconBase.js


const IconBase = props => {
  const {
    icon,
    className,
    onClick,
    style,
    primaryColor: _primaryColor,
    secondaryColor: _secondaryColor,
    ...restProps
  } = props;
  const svgRef = react.useRef(null);
  useInsertStyles(svgRef);
  warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);
  if (!isIconDefinition(icon)) {
    return null;
  }
  const target = icon;
  return generate(target.icon, `svg-${target.name}`, {
    className,
    onClick,
    style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    ...restProps,
    ref: svgRef
  });
};
IconBase.displayName = 'IconReact';
/* harmony default export */ const components_IconBase = (IconBase);
;// ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@ant-design/icons/es/components/AntdIconLight.js
'use client';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
;



const Icon = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    // affect outter <i>...</i>
    className,
    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,
    tabIndex,
    onClick,
    twoToneColor: _twoToneColor,
    // other
    ...restProps
  } = props;
  const {
    prefixCls = 'anticon',
    rootClassName
  } = react.useContext(Context/* default */.A);
  const classString = (0,clsx/* clsx */.$)(rootClassName, prefixCls, {
    [`${prefixCls}-${icon.name}`]: !!icon.name,
    [`${prefixCls}-spin`]: !!spin || icon.name === 'loading'
  }, className);
  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  const svgStyle = rotate ? {
    msTransform: `rotate(${rotate}deg)`,
    transform: `rotate(${rotate}deg)`
  } : undefined;
  return /*#__PURE__*/react.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/react.createElement(components_IconBase, {
    icon: icon,
    style: svgStyle
  }));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const AntdIconLight = (Icon);

/***/ },

/***/ 86623
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);

const IconContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 86270
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aF: () => (/* reexport */ CSSMotionList),
  Kq: () => (/* reexport */ context),
  Ay: () => (/* binding */ motion_es)
});

// UNUSED EXPORTS: genCSSMotion

// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.12.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/util/es/index.js + 14 modules
var es = __webpack_require__(83704);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/context.js

const Context = /*#__PURE__*/react.createContext({});
const MotionProvider = props => {
  const {
    children,
    ...rest
  } = props;
  const memoizedValue = react.useMemo(() => {
    return {
      motion: rest.motion
    };
  }, [rest.motion]);
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: memoizedValue
  }, children);
};
/* harmony default export */ const context = (MotionProvider);
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/interface.js
const STATUS_NONE = 'none';
const STATUS_APPEAR = 'appear';
const STATUS_ENTER = 'enter';
const STATUS_LEAVE = 'leave';
const STEP_NONE = 'none';
const STEP_PREPARE = 'prepare';
const STEP_START = 'start';
const STEP_ACTIVE = 'active';
const STEP_ACTIVATED = 'end';
/**
 * Used for disabled motion case.
 * Prepare stage will still work but start & active will be skipped.
 */
const STEP_PREPARED = 'prepared';
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/util/motion.js

// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  const prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes[`Webkit${styleProp}`] = `webkit${eventName}`;
  prefixes[`Moz${styleProp}`] = `moz${eventName}`;
  prefixes[`ms${styleProp}`] = `MS${eventName}`;
  prefixes[`O${styleProp}`] = `o${eventName.toLowerCase()}`;
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  const prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }
    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
const vendorPrefixes = getVendorPrefixes((0,es/* canUseDom */.OC)(), typeof window !== 'undefined' ? window : {});
let style = {};
if ((0,es/* canUseDom */.OC)()) {
  ({
    style
  } = document.createElement('div'));
}
const prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  const prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    const stylePropList = Object.keys(prefixMap);
    const len = stylePropList.length;
    for (let i = 0; i < len; i += 1) {
      const styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return '';
}
const internalAnimationEndName = getVendorPrefixedEventName('animationend');
const internalTransitionEndName = getVendorPrefixedEventName('transitionend');
const supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
const animationEndName = internalAnimationEndName || 'animationend';
const transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (typeof transitionName === 'object') {
    const type = transitionType.replace(/-\w/g, match => match[1].toUpperCase());
    return transitionName[type];
  }
  return `${transitionName}-${transitionType}`;
}
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/hooks/useDomMotionEvents.js



/* harmony default export */ const useDomMotionEvents = (onInternalMotionEnd => {
  const cacheElementRef = (0,react.useRef)();

  // Remove events
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }

  // Patch events
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);

      // Save as cache in case dom removed trigger by `motionDeadline`
      cacheElementRef.current = element;
    }
  }

  // Clean up when removed
  react.useEffect(() => () => {
    removeMotionEvents(cacheElementRef.current);
    cacheElementRef.current = null;
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});
__webpack_require__.dn(useDomMotionEvents);
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/hooks/useIsomorphicLayoutEffect.js



// It's safe to use `useLayoutEffect` but the warning is annoying
const useIsomorphicLayoutEffect = (0,es/* canUseDom */.OC)() ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ const hooks_useIsomorphicLayoutEffect = (useIsomorphicLayoutEffect);
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/hooks/useNextFrame.js


/* harmony default export */ const useNextFrame = (() => {
  const nextFrameRef = react.useRef(null);
  function cancelNextFrame() {
    es/* raf */.er.cancel(nextFrameRef.current);
  }
  function nextFrame(callback, delay = 2) {
    cancelNextFrame();
    const nextFrameId = (0,es/* raf */.er)(() => {
      if (delay <= 1) {
        callback({
          isCanceled: () => nextFrameId !== nextFrameRef.current
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  react.useEffect(() => () => {
    cancelNextFrame();
  }, []);
  return [nextFrame, cancelNextFrame];
});
__webpack_require__.dn(useNextFrame);
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/hooks/useStepQueue.js





const FULL_STEP_QUEUE = [STEP_PREPARE, (/* inlined export .STEP_START */"start"), (/* inlined export .STEP_ACTIVE */"active"), (/* inlined export .STEP_ACTIVATED */"end")];
const SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];

/** Skip current step */
const SkipStep = false;
/** Current step should be update in */
const DoStep = true;
function isActive(step) {
  return step === (/* inlined export .STEP_ACTIVE */"active") || step === (/* inlined export .STEP_ACTIVATED */"end");
}
/* harmony default export */ const useStepQueue = ((status, prepareOnly, callback) => {
  const [step, setStep] = (0,es/* useState */.J0)((/* inlined export .STEP_NONE */"none"));
  const [nextFrame, cancelNextFrame] = useNextFrame();
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  const STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  hooks_useIsomorphicLayoutEffect(() => {
    if (step !== (/* inlined export .STEP_NONE */"none") && step !== (/* inlined export .STEP_ACTIVATED */"end")) {
      const index = STEP_QUEUE.indexOf(step);
      const nextStep = STEP_QUEUE[index + 1];
      const result = callback(step);
      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else if (nextStep) {
        // Do as frame for step update
        nextFrame(info => {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react.useEffect(() => () => {
    cancelNextFrame();
  }, []);
  return [startQueue, step];
});
__webpack_require__.dn(useStepQueue);
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/hooks/useStatus.js







function useStatus(supportMotion, visible, getElement, {
  motionEnter = true,
  motionAppear = true,
  motionLeave = true,
  motionDeadline,
  motionLeaveImmediately,
  onAppearPrepare,
  onEnterPrepare,
  onLeavePrepare,
  onAppearStart,
  onEnterStart,
  onLeaveStart,
  onAppearActive,
  onEnterActive,
  onLeaveActive,
  onAppearEnd,
  onEnterEnd,
  onLeaveEnd,
  onVisibleChanged
}) {
  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  const [asyncVisible, setAsyncVisible] = react.useState();
  const [getStatus, setStatus] = (0,es/* useSyncState */.M7)((/* inlined export .STATUS_NONE */"none"));
  const [style, setStyle] = react.useState([null, null]);
  const currentStatus = getStatus();
  const mountedRef = (0,react.useRef)(false);
  const deadlineRef = (0,react.useRef)(null);

  // =========================== Dom Node ===========================
  function getDomElement() {
    return getElement();
  }

  // ========================== Motion End ==========================
  const activeRef = (0,react.useRef)(false);

  /**
   * Clean up status & style
   */
  function updateMotionEndStatus() {
    setStatus((/* inlined export .STATUS_NONE */"none"));
    setStyle([null, null]);
  }
  const onInternalMotionEnd = (0,es/* useEvent */._q)(event => {
    const status = getStatus();
    // Do nothing since not in any transition status.
    // This may happen when `motionDeadline` trigger.
    if (status === (/* inlined export .STATUS_NONE */"none")) {
      return;
    }
    const element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }
    const currentActive = activeRef.current;
    let canEnd;
    if (status === (/* inlined export .STATUS_APPEAR */"appear") && currentActive) {
      canEnd = onAppearEnd?.(element, event);
    } else if (status === (/* inlined export .STATUS_ENTER */"enter") && currentActive) {
      canEnd = onEnterEnd?.(element, event);
    } else if (status === (/* inlined export .STATUS_LEAVE */"leave") && currentActive) {
      canEnd = onLeaveEnd?.(element, event);
    }

    // Only update status when `canEnd` and not destroyed
    if (currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  });
  const [patchMotionEvents] = useDomMotionEvents(onInternalMotionEnd);

  // ============================= Step =============================
  const getEventHandlers = targetStatus => {
    switch (targetStatus) {
      case (/* inlined export .STATUS_APPEAR */"appear"):
        return {
          [STEP_PREPARE]: onAppearPrepare,
          [(/* inlined export .STEP_START */"start")]: onAppearStart,
          [(/* inlined export .STEP_ACTIVE */"active")]: onAppearActive
        };
      case (/* inlined export .STATUS_ENTER */"enter"):
        return {
          [STEP_PREPARE]: onEnterPrepare,
          [(/* inlined export .STEP_START */"start")]: onEnterStart,
          [(/* inlined export .STEP_ACTIVE */"active")]: onEnterActive
        };
      case (/* inlined export .STATUS_LEAVE */"leave"):
        return {
          [STEP_PREPARE]: onLeavePrepare,
          [(/* inlined export .STEP_START */"start")]: onLeaveStart,
          [(/* inlined export .STEP_ACTIVE */"active")]: onLeaveActive
        };
      default:
        return {};
    }
  };
  const eventHandlers = react.useMemo(() => getEventHandlers(currentStatus), [currentStatus]);
  const [startStep, step] = useStepQueue(currentStatus, !supportMotion, newStep => {
    // Only prepare step can be skip
    if (newStep === STEP_PREPARE) {
      const onPrepare = eventHandlers[STEP_PREPARE];
      if (!onPrepare) {
        return (/* inlined export .SkipStep */false);
      }
      return onPrepare(getDomElement());
    }

    // Rest step is sync update
    if (newStep in eventHandlers) {
      setStyle([eventHandlers[newStep]?.(getDomElement(), null) || null, newStep]);
    }
    if (newStep === (/* inlined export .STEP_ACTIVE */"active") && currentStatus !== (/* inlined export .STATUS_NONE */"none")) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());
      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(() => {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }
    if (newStep === STEP_PREPARED) {
      updateMotionEndStatus();
    }
    return (/* inlined export .DoStep */true);
  });
  const active = isActive(step);
  activeRef.current = active;

  // ============================ Status ============================
  const visibleRef = (0,react.useRef)(null);

  // Update with new status
  hooks_useIsomorphicLayoutEffect(() => {
    // When use Suspense, the `visible` will repeat trigger,
    // But not real change of the `visible`, we need to skip it.
    // https://github.com/ant-design/ant-design/issues/44379
    if (mountedRef.current && visibleRef.current === visible) {
      return;
    }
    setAsyncVisible(visible);
    const isMounted = mountedRef.current;
    mountedRef.current = true;

    // if (!supportMotion) {
    //   return;
    // }

    let nextStatus;

    // Appear
    if (!isMounted && visible && motionAppear) {
      nextStatus = (/* inlined export .STATUS_APPEAR */"appear");
    }

    // Enter
    if (isMounted && visible && motionEnter) {
      nextStatus = (/* inlined export .STATUS_ENTER */"enter");
    }

    // Leave
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = (/* inlined export .STATUS_LEAVE */"leave");
    }
    const nextEventHandlers = getEventHandlers(nextStatus);

    // Update to next status
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      // Set back in case no motion but prev status has prepare step
      setStatus((/* inlined export .STATUS_NONE */"none"));
    }
    visibleRef.current = visible;
  }, [visible]);

  // ============================ Effect ============================
  // Reset when motion changed
  (0,react.useEffect)(() => {
    if (
    // Cancel appear
    currentStatus === (/* inlined export .STATUS_APPEAR */"appear") && !motionAppear ||
    // Cancel enter
    currentStatus === (/* inlined export .STATUS_ENTER */"enter") && !motionEnter ||
    // Cancel leave
    currentStatus === (/* inlined export .STATUS_LEAVE */"leave") && !motionLeave) {
      setStatus((/* inlined export .STATUS_NONE */"none"));
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0,react.useEffect)(() => () => {
    mountedRef.current = false;
    clearTimeout(deadlineRef.current);
  }, []);

  // Trigger `onVisibleChanged`
  const firstMountChangeRef = react.useRef(false);
  (0,react.useEffect)(() => {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== undefined && currentStatus === (/* inlined export .STATUS_NONE */"none")) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged?.(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, currentStatus]);

  // ============================ Styles ============================
  let mergedStyle = style[0];
  if (eventHandlers[STEP_PREPARE] && step === (/* inlined export .STEP_START */"start")) {
    mergedStyle = {
      transition: 'none',
      ...mergedStyle
    };
  }
  const styleStep = style[1];
  return [getStatus, step, mergedStyle, asyncVisible ?? visible,
  // Appear Check
  !mountedRef.current && currentStatus === (/* inlined export .STATUS_NONE */"none") && supportMotion && motionAppear ? 'NONE' :
  // Enter or Leave check
  step === (/* inlined export .STEP_START */"start") || step === (/* inlined export .STEP_ACTIVE */"active") ? styleStep === step : true];
}
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/CSSMotion.js
/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */









function isRefNotConsumed(children) {
  return children?.length < 2;
}

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  let transitionSupport = config;
  if (typeof config === 'object') {
    ({
      transitionSupport
    } = config);
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  const CSSMotion = /*#__PURE__*/react.forwardRef((props, ref) => {
    const {
      // Default config
      visible = true,
      removeOnLeave = true,
      forceRender,
      children,
      motionName,
      leavedClassName,
      eventProps
    } = props;
    const {
      motion: contextMotion
    } = react.useContext(Context);
    const supportMotion = isSupportTransition(props, contextMotion);

    // Ref to the react node, it may be a HTMLElement
    const nodeRef = (0,react.useRef)();
    function getDomElement() {
      return (0,es/* getDOM */.rb)(nodeRef.current);
    }
    const [getStatus, statusStep, statusStyle, mergedVisible, styleReady] = useStatus(supportMotion, visible, getDomElement, props);
    const status = getStatus();

    // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`
    const renderedRef = react.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }

    // ====================== Refs ======================
    const refObj = react.useMemo(() => {
      const obj = {};
      Object.defineProperties(obj, {
        nativeElement: {
          enumerable: true,
          get: getDomElement
        },
        inMotion: {
          enumerable: true,
          get: () => () => getStatus() !== (/* inlined export .STATUS_NONE */"none")
        },
        enableMotion: {
          enumerable: true,
          get: () => () => supportMotion
        }
      });
      return obj;
    }, []);

    // We lock `deps` here since function return object
    // will repeat trigger ref from `refConfig` -> `null` -> `refConfig`
    react.useImperativeHandle(ref, () => refObj, []);

    // ===================== Render =====================
    // return motionChildren as React.ReactElement;
    const idRef = react.useRef(0);
    if (styleReady) {
      idRef.current += 1;
    }

    // We should render children when motionStyle is sync with stepStatus
    const returnNode = react.useMemo(() => {
      if (styleReady === 'NONE') {
        return null;
      }
      let motionChildren;
      const mergedProps = {
        ...eventProps,
        visible
      };
      if (!children) {
        // No children
        motionChildren = null;
      } else if (status === (/* inlined export .STATUS_NONE */"none")) {
        // Stable children
        if (mergedVisible) {
          motionChildren = children({
            ...mergedProps
          }, nodeRef);
        } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
          motionChildren = children({
            ...mergedProps,
            className: leavedClassName
          }, nodeRef);
        } else if (forceRender || !removeOnLeave && !leavedClassName) {
          motionChildren = children({
            ...mergedProps,
            style: {
              display: 'none'
            }
          }, nodeRef);
        } else {
          motionChildren = null;
        }
      } else {
        // In motion
        let statusSuffix;
        if (statusStep === STEP_PREPARE) {
          statusSuffix = 'prepare';
        } else if (isActive(statusStep)) {
          statusSuffix = 'active';
        } else if (statusStep === (/* inlined export .STEP_START */"start")) {
          statusSuffix = 'start';
        }
        const motionCls = getTransitionName(motionName, `${status}-${statusSuffix}`);
        motionChildren = children({
          ...mergedProps,
          className: (0,clsx/* clsx */.$)(getTransitionName(motionName, status), {
            [motionCls]: motionCls && statusSuffix,
            [motionName]: typeof motionName === 'string'
          }),
          style: statusStyle
        }, nodeRef);
      }
      return motionChildren;
    }, [idRef.current]);
    if (isRefNotConsumed(children) && (0,es/* supportNodeRef */.H3)(returnNode)) {
      const originNodeRef = (0,es/* getNodeRef */.A9)(returnNode);
      if (originNodeRef !== nodeRef) {
        return /*#__PURE__*/react.cloneElement(returnNode, {
          ref: (0,es/* composeRef */.K4)(originNodeRef, nodeRef)
        });
      }
    }
    return returnNode;
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ const es_CSSMotion = (genCSSMotion(supportTransition));
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/util/diff.js
const STATUS_ADD = 'add';
const STATUS_KEEP = 'keep';
const STATUS_REMOVE = 'remove';
const STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  let keyObj;
  if (key && typeof key === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }
  return {
    ...keyObj,
    key: String(keyObj.key)
  };
}
function parseKeys(keys = []) {
  return keys.map(wrapKeyToObject);
}
function diffKeys(prevKeys = [], currentKeys = []) {
  let list = [];
  let currentIndex = 0;
  const currentLen = currentKeys.length;
  const prevKeyObjects = parseKeys(prevKeys);
  const currentKeyObjects = parseKeys(currentKeys);

  // Check prev keys to insert or keep
  prevKeyObjects.forEach(keyObj => {
    let hit = false;
    for (let i = currentIndex; i < currentLen; i += 1) {
      const currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(obj => ({
            ...obj,
            status: STATUS_ADD
          })));
          currentIndex = i;
        }
        list.push({
          ...currentKeyObj,
          status: STATUS_KEEP
        });
        currentIndex += 1;
        hit = true;
        break;
      }
    }

    // If not hit, it means key is removed
    if (!hit) {
      list.push({
        ...keyObj,
        status: STATUS_REMOVE
      });
    }
  });

  // Add rest to the list
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(obj => ({
      ...obj,
      status: STATUS_ADD
    })));
  }

  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */
  const keys = {};
  list.forEach(({
    key
  }) => {
    keys[key] = (keys[key] || 0) + 1;
  });
  const duplicatedKeys = Object.keys(keys).filter(key => keys[key] > 1);
  duplicatedKeys.forEach(matchKey => {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(({
      key,
      status
    }) => key !== matchKey || status !== STATUS_REMOVE);

    // Update `STATUS_ADD` to `STATUS_KEEP`
    list.forEach(node => {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/CSSMotionList.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint react/prop-types: 0 */
;



const MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearPrepare', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */
function genCSSMotionList(transitionSupport, CSSMotion = es_CSSMotion) {
  class CSSMotionList extends react.Component {
    static defaultProps = {
      component: 'div'
    };
    state = {
      keyEntities: []
    };
    static getDerivedStateFromProps({
      keys
    }, {
      keyEntities
    }) {
      const parsedKeyObjects = parseKeys(keys);
      const mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
      return {
        keyEntities: mixedKeyEntities.filter(entity => {
          const prevEntity = keyEntities.find(({
            key
          }) => entity.key === key);

          // Remove if already mark as removed
          if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === (/* inlined export .STATUS_REMOVE */"remove")) {
            return false;
          }
          return true;
        })
      };
    }

    // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    removeKey = removeKey => {
      this.setState(prevState => {
        const nextKeyEntities = prevState.keyEntities.map(entity => {
          if (entity.key !== removeKey) return entity;
          return {
            ...entity,
            status: STATUS_REMOVED
          };
        });
        return {
          keyEntities: nextKeyEntities
        };
      }, () => {
        const {
          keyEntities
        } = this.state;
        const restKeysCount = keyEntities.filter(({
          status
        }) => status !== STATUS_REMOVED).length;
        if (restKeysCount === 0 && this.props.onAllRemoved) {
          this.props.onAllRemoved();
        }
      });
    };
    render() {
      const {
        keyEntities
      } = this.state;
      const {
        component,
        children,
        onVisibleChanged,
        onAllRemoved,
        ...restProps
      } = this.props;
      const Component = component || react.Fragment;
      const motionProps = {};
      MOTION_PROP_NAMES.forEach(prop => {
        motionProps[prop] = restProps[prop];
        delete restProps[prop];
      });
      delete restProps.keys;
      return /*#__PURE__*/react.createElement(Component, restProps, keyEntities.map(({
        status,
        ...eventProps
      }, index) => {
        const visible = status === (/* inlined export .STATUS_ADD */"add") || status === (/* inlined export .STATUS_KEEP */"keep");
        return /*#__PURE__*/react.createElement(CSSMotion, _extends({}, motionProps, {
          key: eventProps.key,
          visible: visible,
          eventProps: eventProps,
          onVisibleChanged: changedVisible => {
            onVisibleChanged?.(changedVisible, {
              key: eventProps.key
            });
            if (!changedVisible) {
              this.removeKey(eventProps.key);
            }
          }
        }), isRefNotConsumed(children) ? props => children({
          ...props,
          index
        }) : (props, ref) => children({
          ...props,
          index
        }, ref));
      }));
    }
  }
  return CSSMotionList;
}
/* harmony default export */ const CSSMotionList = (genCSSMotionList(supportTransition));
;// ./node_modules/.pnpm/@rc-component+motion@1.3.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@rc-component/motion/es/index.js




/* harmony default export */ const motion_es = (es_CSSMotion);

/***/ },

/***/ 53414
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Jb: () => (/* binding */ resolveStyleOrClass),
  AV: () => (/* binding */ useMergeSemantic),
  XT: () => (/* binding */ useSemanticRootStyle)
});

// UNUSED EXPORTS: mergeClassNames, mergeStyles

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(58747);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/is.js
var is = __webpack_require__(97789);
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/hooks/useMergeSemantic/utils.js
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
;// ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js





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

/***/ }

}]);