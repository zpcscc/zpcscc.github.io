"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[3883],{

/***/ 48225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ UnstableContext),
  A: () => (/* binding */ es)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/hooks/useControlledState.js
var useControlledState = __webpack_require__(71826);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/hooks/useEvent.js
var useEvent = __webpack_require__(24349);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/isEqual.js
var isEqual = __webpack_require__(35141);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/warning.js
var warning = __webpack_require__(53753);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__(8143);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/util.js
function getOffset(value, min, max) {
  return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
  const offset = getOffset(value, min, max);
  const positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = `${offset * 100}%`;
      positionStyle.transform = 'translateX(50%)';
      break;
    case 'btt':
      positionStyle.bottom = `${offset * 100}%`;
      positionStyle.transform = 'translateY(50%)';
      break;
    case 'ttb':
      positionStyle.top = `${offset * 100}%`;
      positionStyle.transform = 'translateY(-50%)';
      break;
    default:
      positionStyle.left = `${offset * 100}%`;
      positionStyle.transform = 'translateX(-50%)';
      break;
  }
  return positionStyle;
}

/** Return index value if is list or return value directly */
function getIndex(value, index) {
  return Array.isArray(value) ? value[index] : value;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/KeyCode.js
var KeyCode = __webpack_require__(54911);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/context.js

const SliderContext = /*#__PURE__*/react.createContext({
  min: 0,
  max: 0,
  direction: 'ltr',
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: true,
  styles: {},
  classNames: {},
  isHandleDisabled: () => false
});
/* harmony default export */ const es_context = (SliderContext);
/** @private NOT PROMISE AVAILABLE. DO NOT USE IN PRODUCTION. */
const UnstableContext = /*#__PURE__*/react.createContext({});
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Handles/Handle.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Handle = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls,
    value,
    valueIndex,
    onStartMove,
    onDelete,
    style,
    render,
    dragging,
    draggingDelete,
    onOffsetChange,
    onChangeComplete,
    onFocus,
    onMouseEnter,
    ...restProps
  } = props;
  const {
    min,
    max,
    direction,
    keyboard,
    range,
    tabIndex,
    ariaLabelForHandle,
    ariaLabelledByForHandle,
    ariaRequired,
    ariaValueTextFormatterForHandle,
    styles,
    classNames,
    isHandleDisabled
  } = react.useContext(es_context);
  const mergedDisabled = isHandleDisabled(valueIndex);
  const handlePrefixCls = `${prefixCls}-handle`;

  // ============================ Events ============================
  const onInternalStartMove = e => {
    if (mergedDisabled) {
      e.stopPropagation();
      return;
    }
    onStartMove(e, valueIndex);
  };
  const onInternalFocus = e => {
    onFocus?.(e, valueIndex);
  };
  const onInternalMouseEnter = e => {
    onMouseEnter(e, valueIndex);
  };

  // =========================== Keyboard ===========================
  const onKeyDown = e => {
    if (!mergedDisabled && keyboard) {
      let offset;

      // Change the value
      switch (e.which || e.keyCode) {
        case KeyCode/* default */.A.LEFT:
          offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
          break;
        case KeyCode/* default */.A.RIGHT:
          offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
          break;

        // Up is plus
        case KeyCode/* default */.A.UP:
          offset = direction !== 'ttb' ? 1 : -1;
          break;

        // Down is minus
        case KeyCode/* default */.A.DOWN:
          offset = direction !== 'ttb' ? -1 : 1;
          break;
        case KeyCode/* default */.A.HOME:
          offset = 'min';
          break;
        case KeyCode/* default */.A.END:
          offset = 'max';
          break;
        case KeyCode/* default */.A.PAGE_UP:
          offset = 2;
          break;
        case KeyCode/* default */.A.PAGE_DOWN:
          offset = -2;
          break;
        case KeyCode/* default */.A.BACKSPACE:
        case KeyCode/* default */.A.DELETE:
          onDelete?.(valueIndex);
          break;
      }
      if (offset !== undefined) {
        e.preventDefault();
        onOffsetChange(offset, valueIndex);
      }
    }
  };
  const handleKeyUp = e => {
    switch (e.which || e.keyCode) {
      case KeyCode/* default */.A.LEFT:
      case KeyCode/* default */.A.RIGHT:
      case KeyCode/* default */.A.UP:
      case KeyCode/* default */.A.DOWN:
      case KeyCode/* default */.A.HOME:
      case KeyCode/* default */.A.END:
      case KeyCode/* default */.A.PAGE_UP:
      case KeyCode/* default */.A.PAGE_DOWN:
        onChangeComplete?.();
        break;
    }
  };

  // ============================ Offset ============================
  const positionStyle = getDirectionStyle(direction, value, min, max);

  // ============================ Render ============================
  let divProps = {};
  if (valueIndex !== null) {
    divProps = {
      tabIndex: mergedDisabled ? undefined : getIndex(tabIndex, valueIndex) ?? undefined,
      role: 'slider',
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': value,
      'aria-disabled': mergedDisabled,
      'aria-label': getIndex(ariaLabelForHandle, valueIndex),
      'aria-labelledby': getIndex(ariaLabelledByForHandle, valueIndex),
      'aria-required': getIndex(ariaRequired, valueIndex),
      'aria-valuetext': getIndex(ariaValueTextFormatterForHandle, valueIndex)?.(value),
      'aria-orientation': direction === 'ltr' || direction === 'rtl' ? 'horizontal' : 'vertical',
      onMouseDown: onInternalStartMove,
      onTouchStart: onInternalStartMove,
      onFocus: onInternalFocus,
      onMouseEnter: onInternalMouseEnter,
      onKeyDown,
      onKeyUp: handleKeyUp
    };
  }
  let handleNode = /*#__PURE__*/react.createElement("div", _extends({
    ref: ref,
    className: (0,clsx/* clsx */.$)(handlePrefixCls, {
      [`${handlePrefixCls}-${valueIndex + 1}`]: valueIndex !== null && range,
      [`${handlePrefixCls}-dragging`]: dragging,
      [`${handlePrefixCls}-dragging-delete`]: draggingDelete,
      [`${handlePrefixCls}-disabled`]: mergedDisabled
    }, classNames.handle),
    style: {
      ...positionStyle,
      ...style,
      ...styles.handle
    }
  }, divProps, restProps));

  // Customize
  if (render) {
    handleNode = render(handleNode, {
      index: valueIndex,
      prefixCls,
      value,
      dragging,
      draggingDelete
    });
  }
  return handleNode;
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const Handles_Handle = (Handle);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Handles/index.js
function Handles_extends() { Handles_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Handles_extends.apply(this, arguments); }




const Handles = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls,
    style,
    onStartMove,
    onOffsetChange,
    values,
    handleRender,
    activeHandleRender,
    draggingIndex,
    draggingDelete,
    onFocus,
    ...restProps
  } = props;
  const handlesRef = react.useRef({});

  // =========================== Active ===========================
  const [activeVisible, setActiveVisible] = react.useState(false);
  const [activeIndex, setActiveIndex] = react.useState(-1);
  const onActive = index => {
    setActiveIndex(index);
    setActiveVisible(true);
  };
  const onHandleFocus = (e, index) => {
    onActive(index);
    onFocus?.(e);
  };
  const onHandleMouseEnter = (e, index) => {
    onActive(index);
  };

  // =========================== Render ===========================
  react.useImperativeHandle(ref, () => ({
    focus: index => {
      handlesRef.current[index]?.focus();
    },
    hideHelp: () => {
      (0,react_dom.flushSync)(() => {
        setActiveVisible(false);
      });
    }
  }));

  // =========================== Render ===========================
  // Handle Props
  const handleProps = {
    prefixCls,
    onStartMove,
    onOffsetChange,
    render: handleRender,
    onFocus: onHandleFocus,
    onMouseEnter: onHandleMouseEnter,
    ...restProps
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, values.map((value, index) => {
    const dragging = draggingIndex === index;
    return /*#__PURE__*/react.createElement(Handles_Handle, Handles_extends({
      ref: node => {
        if (!node) {
          delete handlesRef.current[index];
        } else {
          handlesRef.current[index] = node;
        }
      },
      dragging: dragging,
      draggingDelete: dragging && draggingDelete,
      style: getIndex(style, index),
      key: index,
      value: value,
      valueIndex: index
    }, handleProps));
  }), activeHandleRender && activeVisible && /*#__PURE__*/react.createElement(Handles_Handle, Handles_extends({
    key: "a11y"
  }, handleProps, {
    value: values[activeIndex],
    valueIndex: null,
    dragging: draggingIndex !== -1,
    draggingDelete: draggingDelete,
    render: activeHandleRender,
    style: {
      pointerEvents: 'none'
    },
    tabIndex: undefined,
    "aria-hidden": true
  })));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_Handles = (Handles);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Marks/Mark.js




const Mark = props => {
  const {
    prefixCls,
    style,
    children,
    value,
    onClick
  } = props;
  const {
    min,
    max,
    direction,
    includedStart,
    includedEnd,
    included
  } = react.useContext(es_context);
  const textCls = `${prefixCls}-text`;

  // ============================ Offset ============================
  const positionStyle = getDirectionStyle(direction, value, min, max);
  return /*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(textCls, {
      [`${textCls}-active`]: included && includedStart <= value && value <= includedEnd
    }),
    style: {
      ...positionStyle,
      ...style
    },
    onMouseDown: e => {
      e.stopPropagation();
    },
    onClick: () => {
      onClick(value);
    }
  }, children);
};
/* harmony default export */ const Marks_Mark = (Mark);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Marks/index.js


const Marks = props => {
  const {
    prefixCls,
    marks = [],
    onClick
  } = props;
  const markPrefixCls = `${prefixCls}-mark`;

  // Not render mark if empty
  if (!marks.length) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", {
    className: markPrefixCls
  }, marks.map(({
    value,
    style,
    label
  }) => /*#__PURE__*/react.createElement(Marks_Mark, {
    key: value,
    prefixCls: markPrefixCls,
    style: style,
    value: value,
    onClick: onClick
  }, label)));
};
/* harmony default export */ const es_Marks = (Marks);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Steps/Dot.js




const Dot = props => {
  const {
    prefixCls,
    value,
    style,
    activeStyle
  } = props;
  const {
    min,
    max,
    direction,
    included,
    includedStart,
    includedEnd
  } = react.useContext(es_context);
  const dotClassName = `${prefixCls}-dot`;
  const active = included && includedStart <= value && value <= includedEnd;

  // ============================ Offset ============================
  let mergedStyle = {
    ...getDirectionStyle(direction, value, min, max),
    ...(typeof style === 'function' ? style(value) : style)
  };
  if (active) {
    mergedStyle = {
      ...mergedStyle,
      ...(typeof activeStyle === 'function' ? activeStyle(value) : activeStyle)
    };
  }
  return /*#__PURE__*/react.createElement("span", {
    className: (0,clsx/* clsx */.$)(dotClassName, {
      [`${dotClassName}-active`]: active
    }),
    style: mergedStyle
  });
};
/* harmony default export */ const Steps_Dot = (Dot);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Steps/index.js



const Steps = props => {
  const {
    prefixCls,
    marks,
    dots,
    style,
    activeStyle
  } = props;
  const {
    min,
    max,
    step
  } = react.useContext(es_context);
  const stepDots = react.useMemo(() => {
    const dotSet = new Set();

    // Add marks
    marks.forEach(mark => {
      dotSet.add(mark.value);
    });

    // Fill dots
    if (dots && step !== null) {
      let current = min;
      while (current <= max) {
        dotSet.add(current);
        current += step;
      }
    }
    return Array.from(dotSet);
  }, [min, max, step, dots, marks]);
  return /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-step`
  }, stepDots.map(dotValue => /*#__PURE__*/react.createElement(Steps_Dot, {
    prefixCls: prefixCls,
    key: dotValue,
    value: dotValue,
    style: style,
    activeStyle: activeStyle
  })));
};
/* harmony default export */ const es_Steps = (Steps);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Tracks/Track.js




const Track = props => {
  const {
    prefixCls,
    style,
    start,
    end,
    index,
    onStartMove,
    replaceCls
  } = props;
  const {
    direction,
    min,
    max,
    disabled,
    range,
    classNames
  } = react.useContext(es_context);
  const trackPrefixCls = `${prefixCls}-track`;
  const offsetStart = getOffset(start, min, max);
  const offsetEnd = getOffset(end, min, max);

  // ============================ Events ============================
  const onInternalStartMove = e => {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  };

  // ============================ Render ============================
  const positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = `${offsetStart * 100}%`;
      positionStyle.width = `${offsetEnd * 100 - offsetStart * 100}%`;
      break;
    case 'btt':
      positionStyle.bottom = `${offsetStart * 100}%`;
      positionStyle.height = `${offsetEnd * 100 - offsetStart * 100}%`;
      break;
    case 'ttb':
      positionStyle.top = `${offsetStart * 100}%`;
      positionStyle.height = `${offsetEnd * 100 - offsetStart * 100}%`;
      break;
    default:
      positionStyle.left = `${offsetStart * 100}%`;
      positionStyle.width = `${offsetEnd * 100 - offsetStart * 100}%`;
  }
  const className = replaceCls || (0,clsx/* clsx */.$)(trackPrefixCls, {
    [`${trackPrefixCls}-${index + 1}`]: index !== null && range,
    [`${prefixCls}-track-draggable`]: onStartMove
  }, classNames.track);
  return /*#__PURE__*/react.createElement("div", {
    className: className,
    style: {
      ...positionStyle,
      ...style
    },
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove
  });
};
/* harmony default export */ const Tracks_Track = (Track);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Tracks/index.js





const Tracks = props => {
  const {
    prefixCls,
    style,
    values,
    startPoint,
    onStartMove: propsOnStartMove
  } = props;
  const {
    included,
    range,
    min,
    styles,
    classNames,
    isHandleDisabled
  } = react.useContext(es_context);
  const hasDisabledHandle = react.useMemo(() => values.some((_, index) => isHandleDisabled(index)), [isHandleDisabled, values]);
  const onStartMove = hasDisabledHandle ? undefined : propsOnStartMove;

  // =========================== List ===========================
  const trackList = react.useMemo(() => {
    if (!range) {
      // null value do not have track
      if (values.length === 0) {
        return [];
      }
      const startValue = startPoint ?? min;
      const endValue = values[0];
      return [{
        start: Math.min(startValue, endValue),
        end: Math.max(startValue, endValue)
      }];
    }

    // Multiple
    const list = [];
    for (let i = 0; i < values.length - 1; i += 1) {
      list.push({
        start: values[i],
        end: values[i + 1]
      });
    }
    return list;
  }, [values, range, startPoint, min]);
  if (!included) {
    return null;
  }

  // ========================== Render ==========================
  const tracksNode = trackList?.length && (classNames.tracks || styles.tracks) ? /*#__PURE__*/react.createElement(Tracks_Track, {
    index: null,
    prefixCls: prefixCls,
    start: trackList[0].start,
    end: trackList[trackList.length - 1].end,
    replaceCls: (0,clsx/* clsx */.$)(classNames.tracks, `${prefixCls}-tracks`),
    style: styles.tracks
  }) : null;
  return /*#__PURE__*/react.createElement(react.Fragment, null, tracksNode, trackList.map(({
    start,
    end
  }, index) => /*#__PURE__*/react.createElement(Tracks_Track, {
    index: index,
    prefixCls: prefixCls,
    style: {
      ...getIndex(style, index),
      ...styles.track
    },
    start: start,
    end: end,
    key: index,
    onStartMove: onStartMove
  })));
};
/* harmony default export */ const es_Tracks = (Tracks);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/hooks/useDisabled.js

const useDisabled = rawDisabled => {
  const isHandleDisabled = react.useCallback(index => {
    if (typeof rawDisabled === 'boolean') {
      return rawDisabled;
    }
    return rawDisabled[index] ?? false;
  }, [rawDisabled]);
  const getDisabledState = react.useCallback(rawValues => {
    if (typeof rawDisabled === 'boolean') {
      return [rawDisabled, rawDisabled && rawValues.length > 0];
    }
    return [rawValues.length > 0 && rawValues.every((_, index) => isHandleDisabled(index)), rawValues.some((_, index) => isHandleDisabled(index))];
  }, [rawDisabled, isHandleDisabled]);
  return react.useMemo(() => [isHandleDisabled, getDisabledState], [isHandleDisabled, getDisabledState]);
};
/* harmony default export */ const hooks_useDisabled = (useDisabled);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(84874);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/hooks/useDrag.js




/** Drag to delete offset. It's a user experience number for dragging out */
const REMOVE_DIST = 130;
function getPosition(e) {
  const obj = 'targetTouches' in e ? e.targetTouches[0] : e;
  return {
    pageX: obj.pageX,
    pageY: obj.pageY
  };
}
function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues, editable, minCount, isHandleDisabled) {
  const [draggingValue, setDraggingValue] = react.useState(null);
  const [draggingIndex, setDraggingIndex] = react.useState(-1);
  const [draggingDelete, setDraggingDelete] = react.useState(false);
  const [cacheValues, setCacheValues] = react.useState(rawValues);
  const [originValues, setOriginValues] = react.useState(rawValues);
  const mouseMoveEventRef = react.useRef(null);
  const mouseUpEventRef = react.useRef(null);
  const touchEventTargetRef = react.useRef(null);
  const {
    onDragStart,
    onDragChange
  } = react.useContext(UnstableContext);
  (0,useLayoutEffect/* default */.A)(() => {
    if (draggingIndex === -1) {
      setCacheValues(rawValues);
    }
  }, [rawValues, draggingIndex]);

  // Clean up event
  react.useEffect(() => () => {
    if (mouseMoveEventRef.current) {
      document.removeEventListener('mousemove', mouseMoveEventRef.current);
    }
    if (mouseUpEventRef.current) {
      document.removeEventListener('mouseup', mouseUpEventRef.current);
    }
    if (touchEventTargetRef.current) {
      if (mouseMoveEventRef.current) {
        touchEventTargetRef.current.removeEventListener('touchmove', mouseMoveEventRef.current);
      }
      if (mouseUpEventRef.current) {
        touchEventTargetRef.current.removeEventListener('touchend', mouseUpEventRef.current);
      }
    }
  }, []);
  const flushValues = (nextValues, nextValue, deleteMark) => {
    // Perf: Only update state when value changed
    if (nextValue !== undefined) {
      setDraggingValue(nextValue);
    }
    setCacheValues(nextValues);
    let changeValues = nextValues;
    if (deleteMark) {
      changeValues = nextValues.filter((_, i) => i !== draggingIndex);
    }
    triggerChange(changeValues);

    // Optional callback for drag change (not used in current implementation)
    if (onDragChange) {
      onDragChange({
        rawValues: nextValues,
        deleteIndex: deleteMark ? draggingIndex : -1,
        draggingIndex,
        draggingValue: nextValue
      });
    }
  };
  const updateCacheValue = (0,useEvent/* default */.A)((valueIndex, offsetPercent, deleteMark) => {
    if (valueIndex === -1) {
      // >>>> Dragging on the track
      // Defensive: should not happen as Tracks/index.tsx blocks this when any handle is disabled
      if (originValues.some((_, index) => isHandleDisabled(index))) {
        return;
      }
      const startValue = originValues[0];
      const endValue = originValues[originValues.length - 1];
      const maxStartOffset = min - startValue;
      const maxEndOffset = max - endValue;

      // Get valid offset
      let offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset);

      // Use first value to revert back of valid offset (like steps marks)
      const formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      const cloneCacheValues = originValues.map(val => val + offset);
      flushValues(cloneCacheValues);
    } else {
      // >>>> Dragging on the handle
      const offsetDist = (max - min) * offsetPercent;

      // Always start with the valueIndex origin value
      const cloneValues = [...cacheValues];
      cloneValues[valueIndex] = originValues[valueIndex];
      const next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
      flushValues(next.values, next.value, deleteMark);
    }
  });
  const onStartMove = (e, valueIndex, startValues) => {
    e.stopPropagation();
    const initialValues = startValues || rawValues;
    // Defensive: should not happen as Handle.tsx blocks this when handle is disabled
    if (isHandleDisabled(valueIndex)) {
      return;
    }
    const originValue = initialValues[valueIndex];
    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(initialValues);
    setCacheValues(initialValues);
    setDraggingDelete(false);
    const {
      pageX: startX,
      pageY: startY
    } = getPosition(e);

    // We declare it here since closure can't get outer latest value
    let deleteMark = false;

    // Optional callback for drag start (not used in current implementation)
    if (onDragStart) {
      onDragStart({
        rawValues: initialValues,
        draggingIndex: valueIndex,
        draggingValue: originValue
      });
    }

    // Moving
    const onMouseMove = event => {
      event.preventDefault();
      const {
        pageX: moveX,
        pageY: moveY
      } = getPosition(event);
      const offsetX = moveX - startX;
      const offsetY = moveY - startY;
      const {
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      let offSetPercent;
      let removeDist;
      switch (direction) {
        case 'btt':
          offSetPercent = -offsetY / height;
          removeDist = offsetX;
          break;
        case 'ttb':
          offSetPercent = offsetY / height;
          removeDist = offsetX;
          break;
        case 'rtl':
          offSetPercent = -offsetX / width;
          removeDist = offsetY;
          break;
        default:
          offSetPercent = offsetX / width;
          removeDist = offsetY;
      }

      // Check if need mark remove
      deleteMark = editable ? Math.abs(removeDist) > REMOVE_DIST && minCount < cacheValues.length : false;
      setDraggingDelete(deleteMark);
      updateCacheValue(valueIndex, offSetPercent, deleteMark);
    };

    // End
    const onMouseUp = event => {
      event.preventDefault();
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      if (touchEventTargetRef.current) {
        if (mouseMoveEventRef.current) {
          touchEventTargetRef.current.removeEventListener('touchmove', mouseMoveEventRef.current);
        }
        if (mouseUpEventRef.current) {
          touchEventTargetRef.current.removeEventListener('touchend', mouseUpEventRef.current);
        }
      }
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;
      touchEventTargetRef.current = null;
      finishChange(deleteMark);
      setDraggingIndex(-1);
      setDraggingDelete(false);
    };
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    e.currentTarget.addEventListener('touchend', onMouseUp);
    e.currentTarget.addEventListener('touchmove', onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
    touchEventTargetRef.current = e.currentTarget;
  };

  // Only return cache value when it mapping with rawValues
  const returnValues = react.useMemo(() => {
    const sourceValues = [...rawValues].sort((a, b) => a - b);
    const targetValues = [...cacheValues].sort((a, b) => a - b);
    const counts = {};
    targetValues.forEach(val => {
      counts[val] = (counts[val] || 0) + 1;
    });
    sourceValues.forEach(val => {
      counts[val] = (counts[val] || 0) - 1;
    });
    const maxDiffCount = editable ? 1 : 0;
    const diffCount = Object.values(counts).reduce((prev, next) => prev + Math.abs(next), 0);
    return diffCount <= maxDiffCount ? cacheValues : rawValues;
  }, [rawValues, cacheValues, editable]);
  return [draggingIndex, draggingValue, draggingDelete, returnValues, onStartMove];
}
/* harmony default export */ const hooks_useDrag = (useDrag);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/hooks/useOffset.js


/** Format the value in the range of [min, max] */

/** Format value align with step */

/** Format value align with step & marks */

/**
 * Get the effective moving range for a handle.
 * Disabled handles are treated as fixed anchors, and `pushable` is applied as the gap
 * that enabled handles must keep away from those anchors.
 */
const getDisabledBoundaryValues = (values, valueIndex, min, max, pushable, isHandleDisabled) => {
  const pushGap = typeof pushable === 'number' ? pushable : 0;
  let minBound = min;
  let maxBound = max;
  for (let i = valueIndex - 1; i >= 0; i -= 1) {
    if (isHandleDisabled(i)) {
      minBound = values[i] + pushGap;
      break;
    }
  }
  for (let i = valueIndex + 1; i < values.length; i += 1) {
    if (isHandleDisabled(i)) {
      maxBound = values[i] - pushGap;
      break;
    }
  }
  return [minBound, maxBound];
};

/**
 * Find the nearest enabled handle that can accept the target value.
 * A handle is only considered when the target value falls inside its disabled-anchor
 * boundaries, so clicking outside an enabled segment becomes a no-op.
 */
const getClosestEnabledHandleIndex = (values, targetValue, min, max, pushable, isHandleDisabled) => {
  let closestIndex = -1;
  let closestDist = max - min;
  values.forEach((value, index) => {
    if (isHandleDisabled(index)) {
      return;
    }
    const [minBound, maxBound] = getDisabledBoundaryValues(values, index, min, max, pushable, isHandleDisabled);
    if (minBound <= targetValue && targetValue <= maxBound) {
      const dist = Math.abs(targetValue - value);
      if (dist <= closestDist) {
        closestDist = dist;
        closestIndex = index;
      }
    }
  });
  return closestIndex;
};
function useOffset(min, max, step, markList, allowCross, pushable, isHandleDisabled) {
  const formatRangeValue = react.useCallback(val => Math.max(min, Math.min(max, val)), [min, max]);
  const formatStepValue = react.useCallback(val => {
    if (step !== null) {
      const stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step;

      // Cut number in case to be like 0.30000000000000004
      const getDecimal = num => (String(num).split('.')[1] || '').length;
      const maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
      const fixedValue = Number(stepValue.toFixed(maxDecimal));
      return min <= fixedValue && fixedValue <= max ? fixedValue : null;
    }
    return null;
  }, [step, min, max, formatRangeValue]);
  const formatValue = react.useCallback(val => {
    const formatNextValue = formatRangeValue(val);

    // List align values
    const alignValues = markList.map(mark => mark.value);
    if (step !== null) {
      alignValues.push(formatStepValue(val));
    }

    // min & max
    alignValues.push(min, max);

    // Align with marks
    let closeValue = alignValues[0];
    let closeDist = max - min;
    alignValues.forEach(alignValue => {
      const dist = Math.abs(formatNextValue - alignValue);
      if (dist <= closeDist) {
        closeValue = alignValue;
        closeDist = dist;
      }
    });
    return closeValue;
  }, [min, max, markList, step, formatRangeValue, formatStepValue]);

  // ========================== Offset ==========================
  // Single Value
  const offsetValue = (values, offset, valueIndex, mode = 'unit') => {
    if (typeof offset === 'number') {
      let nextValue;
      const originValue = values[valueIndex];

      // Only used for `dist` mode
      const targetDistValue = originValue + offset;

      // Compare next step value & mark value which is best match
      let potentialValues = [];
      markList.forEach(mark => {
        potentialValues.push(mark.value);
      });

      // Min & Max
      potentialValues.push(min, max);

      // In case origin value is align with mark but not with step
      potentialValues.push(formatStepValue(originValue));

      // Put offset step value also
      const sign = offset > 0 ? 1 : -1;
      if (mode === 'unit') {
        potentialValues.push(formatStepValue(originValue + sign * step));
      } else {
        potentialValues.push(formatStepValue(targetDistValue));
      }

      // Find close one
      potentialValues = potentialValues.filter(val => val !== null)
      // Remove reverse value
      .filter(val => offset < 0 ? val <= originValue : val >= originValue);
      if (mode === 'unit') {
        // `unit` mode can not contain itself
        potentialValues = potentialValues.filter(val => val !== originValue);
      }
      const compareValue = mode === 'unit' ? originValue : targetDistValue;
      nextValue = potentialValues[0];
      let valueDist = Math.abs(nextValue - compareValue);
      potentialValues.forEach(potentialValue => {
        const dist = Math.abs(potentialValue - compareValue);
        if (dist < valueDist) {
          nextValue = potentialValue;
          valueDist = dist;
        }
      });

      // Out of range will back to range
      if (nextValue === undefined) {
        return offset < 0 ? min : max;
      }

      // `dist` mode
      if (mode === 'dist') {
        return nextValue;
      }

      // `unit` mode may need another round
      if (Math.abs(offset) > 1) {
        const cloneValues = [...values];
        cloneValues[valueIndex] = nextValue;
        return offsetValue(cloneValues, offset - sign, valueIndex, mode);
      }
      return nextValue;
    } else if (offset === 'min') {
      return min;
    } else if (offset === 'max') {
      return max;
    }

    // Unreachable since `offset` is typed as number | 'min' | 'max'.
    return max;
  };

  /** Same as `offsetValue` but return `changed` mark to tell value changed */
  const offsetChangedValue = (values, offset, valueIndex, mode = 'unit') => {
    const originValue = values[valueIndex];
    const nextValue = offsetValue(values, offset, valueIndex, mode);
    return {
      value: nextValue,
      changed: nextValue !== originValue
    };
  };
  const needPush = dist => {
    return pushable === null && dist === 0 || typeof pushable === 'number' && dist < pushable;
  };

  // Values
  const offsetValues = (values, offset, valueIndex, mode = 'unit') => {
    const nextValues = values.map(formatValue);
    const originValue = nextValues[valueIndex];
    const [minBound, maxBound] = getDisabledBoundaryValues(nextValues, valueIndex, min, max, pushable, isHandleDisabled);
    const nextValue = offsetValue(nextValues, offset, valueIndex, mode);
    nextValues[valueIndex] = nextValue;
    if (minBound <= maxBound) {
      nextValues[valueIndex] = Math.max(minBound, Math.min(maxBound, nextValues[valueIndex]));
    } else {
      nextValues[valueIndex] = originValue;
    }
    if (allowCross === false) {
      // >>>>> Allow Cross
      const pushNum = pushable || 0;

      // ============ AllowCross ===============
      if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
        nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
      }
      if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
        nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
      }
    } else if (typeof pushable === 'number' || pushable === null) {
      // >>>>> Pushable
      // =============== Push ==================

      // >>>>>> Basic push
      // End values
      for (let i = valueIndex + 1; i < nextValues.length; i += 1) {
        if (isHandleDisabled(i)) {
          break;
        }
        let changed = true;
        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          ({
            value: nextValues[i],
            changed
          } = offsetChangedValue(nextValues, 1, i));
        }
        const [, itemMaxBound] = getDisabledBoundaryValues(nextValues, i, min, max, pushable, isHandleDisabled);
        nextValues[i] = Math.min(nextValues[i], itemMaxBound);
      }

      // Start values
      for (let i = valueIndex; i > 0; i -= 1) {
        if (isHandleDisabled(i - 1)) {
          break;
        }
        let changed = true;
        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          ({
            value: nextValues[i - 1],
            changed
          } = offsetChangedValue(nextValues, -1, i - 1));
        }
        const [itemMinBound] = getDisabledBoundaryValues(nextValues, i - 1, min, max, pushable, isHandleDisabled);
        nextValues[i - 1] = Math.max(nextValues[i - 1], itemMinBound);
      }

      // >>>>> Revert back to safe push range
      // End to Start
      for (let i = nextValues.length - 1; i > 0; i -= 1) {
        if (isHandleDisabled(i) || isHandleDisabled(i - 1)) {
          continue;
        }
        let changed = true;
        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          ({
            value: nextValues[i - 1],
            changed
          } = offsetChangedValue(nextValues, -1, i - 1));
        }
        const [itemMinBound] = getDisabledBoundaryValues(nextValues, i - 1, min, max, pushable, isHandleDisabled);
        nextValues[i - 1] = Math.max(nextValues[i - 1], itemMinBound);
      }

      // Start to End
      for (let i = 0; i < nextValues.length - 1; i += 1) {
        if (isHandleDisabled(i) || isHandleDisabled(i + 1)) {
          continue;
        }
        let changed = true;
        while (needPush(nextValues[i + 1] - nextValues[i]) && changed) {
          ({
            value: nextValues[i + 1],
            changed
          } = offsetChangedValue(nextValues, 1, i + 1));
        }
        const [, itemMaxBound] = getDisabledBoundaryValues(nextValues, i + 1, min, max, pushable, isHandleDisabled);
        nextValues[i + 1] = Math.min(nextValues[i + 1], itemMaxBound);
      }
    }
    return {
      value: nextValues[valueIndex],
      values: nextValues
    };
  };
  return [formatValue, offsetValues];
}
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/hooks/useRange.js


function useRange(range) {
  return (0,react.useMemo)(() => {
    if (range === true || !range) {
      return [!!range, false, false, 0];
    }
    const {
      editable,
      draggableTrack,
      minCount,
      maxCount
    } = range;
    if (false) // removed by dead control flow
{}
    return [true, !!editable, !editable && !!draggableTrack, minCount || 0, maxCount];
  }, [range]);
}
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/Slider.js
















/**
 * New:
 * - click mark to update range value
 * - handleRender
 * - Fix handle with count not correct
 * - Fix pushable not work in some case
 * - No more FindDOMNode
 * - Move all position related style into inline style
 * - Key: up is plus, down is minus
 * - fix Key with step = null not align with marks
 * - Change range should not trigger onChange
 * - keyboard support pushable
 */

const Slider = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls = 'rc-slider',
    className,
    style,
    classNames,
    styles,
    id,
    disabled: rawDisabled = false,
    keyboard = true,
    autoFocus,
    onFocus,
    onBlur,
    // Value
    min = 0,
    max = 100,
    step = 1,
    value,
    defaultValue,
    range,
    count,
    onChange,
    onBeforeChange,
    onAfterChange,
    onChangeComplete,
    // Cross
    allowCross = true,
    pushable = false,
    // Direction
    reverse,
    vertical,
    // Style
    included = true,
    startPoint,
    trackStyle,
    handleStyle,
    railStyle,
    dotStyle,
    activeDotStyle,
    // Decorations
    marks,
    dots,
    // Components
    handleRender,
    activeHandleRender,
    track,
    // Accessibility
    tabIndex = 0,
    ariaLabelForHandle,
    ariaLabelledByForHandle,
    ariaRequired,
    ariaValueTextFormatterForHandle
  } = props;
  const handlesRef = react.useRef(null);
  const containerRef = react.useRef(null);
  const [mergedValue, setValue] = (0,useControlledState/* default */.A)(defaultValue, value);
  const direction = react.useMemo(() => {
    if (vertical) {
      return reverse ? 'ttb' : 'btt';
    }
    return reverse ? 'rtl' : 'ltr';
  }, [reverse, vertical]);

  // ============================ Range =============================
  const [rangeEnabled, rangeEditable, rangeDraggableTrack, minCount, maxCount] = useRange(range);
  const mergedMin = react.useMemo(() => isFinite(min) ? min : 0, [min]);
  const mergedMax = react.useMemo(() => isFinite(max) ? max : 100, [max]);

  // ============================= Step =============================
  const mergedStep = react.useMemo(() => step !== null && step <= 0 ? 1 : step, [step]);

  // ============================= Push =============================
  const mergedPush = react.useMemo(() => {
    if (typeof pushable === 'boolean') {
      return pushable ? mergedStep : false;
    }
    return pushable >= 0 ? pushable : false;
  }, [pushable, mergedStep]);

  // ============================ Marks =============================
  const markList = react.useMemo(() => {
    const markRecord = marks || {};
    return Object.keys(markRecord).map(key => {
      const mark = markRecord[key];
      const markObj = {
        value: Number(key)
      };
      if (mark && typeof mark === 'object' && ! /*#__PURE__*/react.isValidElement(mark) && ('label' in mark || 'style' in mark)) {
        markObj.style = mark.style;
        markObj.label = mark.label;
      } else {
        markObj.label = mark;
      }
      return markObj;
    }).filter(({
      label
    }) => label || typeof label === 'number').sort((a, b) => a.value - b.value);
  }, [marks]);

  // ============================ Disabled ============================
  const [isHandleDisabled, getDisabledState] = hooks_useDisabled(rawDisabled);

  // ============================ Format ============================
  const [formatValue, offsetValues] = useOffset(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush, isHandleDisabled);

  // ============================ Values ============================
  const rawValues = react.useMemo(() => {
    const valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];
    const [val0 = mergedMin] = valueList;
    let returnValues = mergedValue === null ? [] : [val0];

    // Format as range
    if (rangeEnabled) {
      returnValues = [...valueList];

      // When count provided or value is `undefined`, we fill values
      if (count || mergedValue === undefined) {
        const pointCount = count !== undefined && count >= 0 ? count + 1 : 2;
        returnValues = returnValues.slice(0, pointCount);

        // Fill with count
        while (returnValues.length < pointCount) {
          returnValues.push(returnValues[returnValues.length - 1] ?? mergedMin);
        }
      }
      returnValues.sort((a, b) => a - b);
    }

    // Align in range
    returnValues.forEach((val, index) => {
      returnValues[index] = formatValue(val);
    });
    return returnValues;
  }, [mergedValue, rangeEnabled, mergedMin, count, formatValue]);
  const [disabled, hasDisabledHandle] = react.useMemo(() => getDisabledState(rawValues), [getDisabledState, rawValues]);
  const effectiveRangeEditable = rangeEditable && !hasDisabledHandle;

  // =========================== onChange ===========================
  const getTriggerValue = triggerValues => rangeEnabled ? triggerValues : triggerValues[0];
  const triggerChange = (0,useEvent/* default */.A)(nextValues => {
    // Order first
    const cloneNextValues = [...nextValues].sort((a, b) => a - b);

    // Trigger event if needed
    if (onChange && !(0,isEqual/* default */.A)(cloneNextValues, rawValues, true)) {
      onChange(getTriggerValue(cloneNextValues));
    }

    // We set this later since it will re-render component immediately
    setValue(cloneNextValues);
  });
  const finishChange = (0,useEvent/* default */.A)(draggingDelete => {
    // Trigger from `useDrag` will tell if it's a delete action
    if (draggingDelete) {
      handlesRef.current.hideHelp();
    }
    const finishValue = getTriggerValue(rawValues);
    onAfterChange?.(finishValue);
    (0,warning/* default */.Ay)(!onAfterChange, '[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead.');
    onChangeComplete?.(finishValue);
  });
  const onDelete = index => {
    if (disabled || !effectiveRangeEditable || rawValues.length <= minCount) {
      return;
    }
    const cloneNextValues = [...rawValues];
    cloneNextValues.splice(index, 1);
    onBeforeChange?.(getTriggerValue(cloneNextValues));
    triggerChange(cloneNextValues);
    const nextFocusIndex = Math.max(0, index - 1);
    handlesRef.current.hideHelp();
    handlesRef.current.focus(nextFocusIndex);
  };
  const [draggingIndex, draggingValue, draggingDelete, cacheValues, onStartDrag] = hooks_useDrag(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues, effectiveRangeEditable, minCount, isHandleDisabled);

  /**
   * When `rangeEditable` will insert a new value in the values array.
   * Else it will replace the value in the values array.
   */
  const changeToCloseValue = (newValue, e) => {
    if (!disabled) {
      const valueIndex = rawValues.length ? getClosestEnabledHandleIndex(rawValues, newValue, mergedMin, mergedMax, mergedPush, isHandleDisabled) : 0;
      if (valueIndex === -1) {
        return;
      }

      // Create new values
      const cloneNextValues = [...rawValues];
      let valueBeforeIndex = 0; // Record the index which value < newValue
      const valueDist = rawValues.length ? Math.abs(newValue - rawValues[valueIndex]) : mergedMax - mergedMin;
      rawValues.forEach((val, index) => {
        if (val < newValue) {
          valueBeforeIndex = index;
        }
      });
      let focusIndex = valueIndex;
      if (effectiveRangeEditable && valueDist !== 0 && (!maxCount || rawValues.length < maxCount)) {
        cloneNextValues.splice(valueBeforeIndex + 1, 0, newValue);
        focusIndex = valueBeforeIndex + 1;
      } else {
        cloneNextValues[valueIndex] = newValue;
        focusIndex = valueIndex;
      }

      // Fill value to match default 2 (only when `rawValues` is empty)
      if (rangeEnabled && !rawValues.length && count === undefined) {
        cloneNextValues.push(newValue);
      }
      const nextValue = getTriggerValue(cloneNextValues);
      onBeforeChange?.(nextValue);
      triggerChange(cloneNextValues);
      if (e) {
        document.activeElement?.blur?.();
        handlesRef.current.focus(focusIndex);
        onStartDrag(e, focusIndex, cloneNextValues);
      } else {
        // https://github.com/ant-design/ant-design/issues/49997
        onAfterChange?.(nextValue);
        (0,warning/* default */.Ay)(!onAfterChange, '[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead.');
        onChangeComplete?.(nextValue);
      }
    }
  };

  // ============================ Click =============================
  const onSliderMouseDown = e => {
    e.preventDefault();
    const {
      width,
      height,
      left,
      top,
      bottom,
      right
    } = containerRef.current.getBoundingClientRect();
    const {
      clientX,
      clientY
    } = e;
    let percent;
    switch (direction) {
      case 'btt':
        percent = (bottom - clientY) / height;
        break;
      case 'ttb':
        percent = (clientY - top) / height;
        break;
      case 'rtl':
        percent = (right - clientX) / width;
        break;
      default:
        percent = (clientX - left) / width;
    }
    const nextValue = mergedMin + percent * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue), e);
  };

  // =========================== Keyboard ===========================
  const [keyboardValue, setKeyboardValue] = react.useState(null);
  const onHandleOffsetChange = (offset, valueIndex) => {
    if (!disabled && !isHandleDisabled(valueIndex)) {
      const next = offsetValues(rawValues, offset, valueIndex);
      onBeforeChange?.(getTriggerValue(rawValues));
      triggerChange(next.values);
      setKeyboardValue({
        value: next.value,
        index: valueIndex
      });
    }
  };
  react.useEffect(() => {
    if (keyboardValue !== null) {
      const {
        value: nextKeyboardValue,
        index
      } = keyboardValue;
      const valueIndex = rawValues[index] === nextKeyboardValue ? index : rawValues.indexOf(nextKeyboardValue);
      if (valueIndex >= 0) {
        handlesRef.current.focus(valueIndex);
      }
    }
    setKeyboardValue(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardValue]);

  // ============================= Drag =============================
  const mergedDraggableTrack = react.useMemo(() => {
    if (rangeDraggableTrack && mergedStep === null) {
      if (false) // removed by dead control flow
{}
      return false;
    }
    return rangeDraggableTrack;
  }, [rangeDraggableTrack, mergedStep]);
  const onStartMove = (0,useEvent/* default */.A)((e, valueIndex) => {
    onStartDrag(e, valueIndex);
    onBeforeChange?.(getTriggerValue(rawValues));
  });

  // Auto focus for updated handle
  const dragging = draggingIndex !== -1;
  react.useEffect(() => {
    if (!dragging) {
      const valueIndex = rawValues.lastIndexOf(draggingValue);
      handlesRef.current.focus(valueIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  // =========================== Included ===========================
  const sortedCacheValues = react.useMemo(() => [...cacheValues].sort((a, b) => a - b), [cacheValues]);

  // Provide a range values with included [min, max]
  // Used for Track, Mark & Dot
  const [includedStart, includedEnd] = react.useMemo(() => {
    if (!rangeEnabled) {
      return [mergedMin, sortedCacheValues[0]];
    }
    return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
  }, [sortedCacheValues, rangeEnabled, mergedMin]);

  // ============================= Refs =============================
  react.useImperativeHandle(ref, () => ({
    focus: () => {
      handlesRef.current.focus(0);
    },
    blur: () => {
      const {
        activeElement
      } = document;
      if (containerRef.current?.contains(activeElement)) {
        activeElement?.blur();
      }
    }
  }));

  // ========================== Auto Focus ==========================
  const autoFocusRef = react.useRef(autoFocus);
  react.useEffect(() => {
    if (autoFocusRef.current) {
      handlesRef.current.focus(0);
    }
  }, []);

  // =========================== Context ============================
  const context = react.useMemo(() => ({
    min: mergedMin,
    max: mergedMax,
    direction,
    disabled,
    keyboard,
    step: mergedStep,
    included,
    includedStart,
    includedEnd,
    range: rangeEnabled,
    tabIndex,
    ariaLabelForHandle,
    ariaLabelledByForHandle,
    ariaRequired,
    ariaValueTextFormatterForHandle,
    styles: styles || {},
    classNames: classNames || {},
    isHandleDisabled
  }), [mergedMin, mergedMax, direction, disabled, keyboard, mergedStep, included, includedStart, includedEnd, rangeEnabled, tabIndex, ariaLabelForHandle, ariaLabelledByForHandle, ariaRequired, ariaValueTextFormatterForHandle, styles, classNames, isHandleDisabled]);

  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(es_context.Provider, {
    value: context
  }, /*#__PURE__*/react.createElement("div", {
    ref: containerRef,
    className: (0,clsx/* clsx */.$)(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-vertical`]: vertical,
      [`${prefixCls}-horizontal`]: !vertical,
      [`${prefixCls}-with-marks`]: markList.length
    }),
    style: style,
    onMouseDown: onSliderMouseDown,
    id: id
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx/* clsx */.$)(`${prefixCls}-rail`, classNames?.rail),
    style: {
      ...railStyle,
      ...styles?.rail
    }
  }), track !== false && /*#__PURE__*/react.createElement(es_Tracks, {
    prefixCls: prefixCls,
    style: trackStyle,
    values: rawValues,
    startPoint: startPoint,
    onStartMove: mergedDraggableTrack ? onStartMove : undefined
  }), /*#__PURE__*/react.createElement(es_Steps, {
    prefixCls: prefixCls,
    marks: markList,
    dots: dots,
    style: dotStyle,
    activeStyle: activeDotStyle
  }), /*#__PURE__*/react.createElement(es_Handles, {
    ref: handlesRef,
    prefixCls: prefixCls,
    style: handleStyle,
    values: cacheValues,
    draggingIndex: draggingIndex,
    draggingDelete: draggingDelete,
    onStartMove: onStartMove,
    onOffsetChange: onHandleOffsetChange,
    onFocus: onFocus,
    onBlur: onBlur,
    handleRender: handleRender,
    activeHandleRender: activeHandleRender,
    onChangeComplete: finishChange,
    onDelete: effectiveRangeEditable ? onDelete : undefined
  }), /*#__PURE__*/react.createElement(es_Marks, {
    prefixCls: prefixCls,
    marks: markList,
    onClick: changeToCloseValue
  })));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_Slider = (Slider);
;// ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/index.js


/* harmony default export */ const es = (es_Slider);

/***/ },

/***/ 84942
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);

/** @private Internal context. Do not use in your production. */
const SliderInternalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderInternalContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 73883
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ slider)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+slider@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/slider/es/index.js + 15 modules
var es = __webpack_require__(48225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/index.js + 12 modules
var util_es = __webpack_require__(23392);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(16007);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/slider/Context.js
var Context = __webpack_require__(84942);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 7 modules
var tooltip = __webpack_require__(90570);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/slider/SliderTooltip.js
"use client";





const SliderTooltip = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    open,
    draggingDelete,
    value
  } = props;
  const innerRef = (0,react.useRef)(null);
  const mergedOpen = open && !draggingDelete;
  const rafRef = (0,react.useRef)(null);
  function cancelKeepAlign() {
    util_es/* raf */.er.cancel(rafRef.current);
    rafRef.current = null;
  }
  function keepAlign() {
    rafRef.current = (0,util_es/* raf */.er)(() => {
      innerRef.current?.forceAlign();
      rafRef.current = null;
    });
  }
  react.useEffect(() => {
    if (mergedOpen) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [mergedOpen, props.title, value]);
  return /*#__PURE__*/react.createElement(tooltip/* default */.A, {
    ref: (0,util_es/* composeRef */.K4)(innerRef, ref),
    ...props,
    open: mergedOpen
  });
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const slider_SliderTooltip = (SliderTooltip);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 38 modules
var cssinjs_es = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+fast-color@3.0.1/node_modules/@ant-design/fast-color/es/index.js + 2 modules
var fast_color_es = __webpack_require__(55550);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(75025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(90126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 23 modules
var cssinjs_utils_es = __webpack_require__(14209);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/slider/style/index.js




// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    antCls,
    controlSize,
    dotSize,
    marginFull,
    marginPart,
    colorFillContentHover,
    handleColorDisabled,
    calc,
    handleSize,
    handleSizeHover,
    handleActiveColor,
    handleActiveOutlineColor,
    handleLineWidth,
    handleLineWidthHover,
    motionDurationMid
  } = token;
  const disabledHandle = {
    backgroundColor: token.colorBgElevated,
    cursor: 'not-allowed',
    width: handleSize,
    height: handleSize,
    boxShadow: `0 0 0 ${(0,cssinjs_es/* unit */.zA)(handleLineWidth)} ${handleColorDisabled}`,
    insetInlineStart: 0,
    insetBlockStart: 0
  };
  return {
    [componentCls]: {
      ...(0,style/* resetComponent */.dF)(token),
      position: 'relative',
      height: controlSize,
      margin: `${(0,cssinjs_es/* unit */.zA)(marginPart)} ${(0,cssinjs_es/* unit */.zA)(marginFull)}`,
      padding: 0,
      cursor: 'pointer',
      touchAction: 'none',
      // https://github.com/ant-design/ant-design/issues/55686
      // Prevent text selection on adjacent content when dragging the handle in Safari.
      userSelect: 'none',
      '&-vertical': {
        margin: `${(0,cssinjs_es/* unit */.zA)(marginFull)} ${(0,cssinjs_es/* unit */.zA)(marginPart)}`
      },
      [`${componentCls}-rail`]: {
        position: 'absolute',
        backgroundColor: token.railBg,
        borderRadius: token.borderRadiusXS,
        transition: `background-color ${motionDurationMid}`
      },
      [`${componentCls}-track,${componentCls}-tracks`]: {
        position: 'absolute',
        transition: `background-color ${motionDurationMid}`
      },
      [`${componentCls}-track`]: {
        backgroundColor: token.trackBg,
        borderRadius: token.borderRadiusXS
      },
      [`${componentCls}-track-draggable`]: {
        boxSizing: 'content-box',
        backgroundClip: 'content-box',
        border: 'solid rgba(0,0,0,0)'
      },
      '&:hover': {
        [`${componentCls}-rail`]: {
          backgroundColor: token.railHoverBg
        },
        [`${componentCls}-track`]: {
          backgroundColor: token.trackHoverBg
        },
        [`${componentCls}-dot`]: {
          borderColor: colorFillContentHover
        },
        [`${componentCls}-handle:not(${componentCls}-handle-disabled)::after`]: {
          boxShadow: `0 0 0 ${(0,cssinjs_es/* unit */.zA)(handleLineWidth)} ${token.colorPrimaryBorderHover}`
        },
        [`${componentCls}-dot-active`]: {
          borderColor: token.dotActiveBorderColor
        }
      },
      [`${componentCls}-handle`]: {
        position: 'absolute',
        width: handleSize,
        height: handleSize,
        outline: 'none',
        userSelect: 'none',
        // Dragging status
        '&-dragging-delete': {
          opacity: 0
        },
        // 扩大选区
        '&::before': {
          content: '""',
          position: 'absolute',
          insetInlineStart: calc(handleLineWidth).mul(-1).equal(),
          insetBlockStart: calc(handleLineWidth).mul(-1).equal(),
          width: calc(handleSize).add(calc(handleLineWidth).mul(2)).equal(),
          height: calc(handleSize).add(calc(handleLineWidth).mul(2)).equal(),
          backgroundColor: 'transparent'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: handleSize,
          height: handleSize,
          backgroundColor: token.colorBgElevated,
          boxShadow: `0 0 0 ${(0,cssinjs_es/* unit */.zA)(handleLineWidth)} ${token.handleColor}`,
          outline: `0px solid transparent`,
          borderRadius: '50%',
          cursor: 'pointer',
          transition: ['inset-inline-start', 'inset-block-start', 'width', 'height', 'box-shadow', 'outline'].map(prop => `${prop} ${motionDurationMid}`).join(', ')
        },
        '&:hover, &:active, &:focus': {
          [`&:not(${componentCls}-handle-disabled)::before`]: {
            insetInlineStart: calc(handleSizeHover).sub(handleSize).div(2).add(handleLineWidthHover).mul(-1).equal(),
            insetBlockStart: calc(handleSizeHover).sub(handleSize).div(2).add(handleLineWidthHover).mul(-1).equal(),
            width: calc(handleSizeHover).add(calc(handleLineWidthHover).mul(2)).equal(),
            height: calc(handleSizeHover).add(calc(handleLineWidthHover).mul(2)).equal()
          },
          [`&:not(${componentCls}-handle-disabled)::after`]: {
            boxShadow: `0 0 0 ${(0,cssinjs_es/* unit */.zA)(handleLineWidthHover)} ${handleActiveColor}`,
            outline: `6px solid ${handleActiveOutlineColor}`,
            width: handleSizeHover,
            height: handleSizeHover,
            insetInlineStart: token.calc(handleSize).sub(handleSizeHover).div(2).equal(),
            insetBlockStart: token.calc(handleSize).sub(handleSizeHover).div(2).equal()
          }
        }
      },
      [`&-lock ${componentCls}-handle`]: {
        '&::before, &::after': {
          transition: 'none'
        }
      },
      [`${componentCls}-mark`]: {
        position: 'absolute',
        fontSize: token.fontSize
      },
      [`${componentCls}-mark-text`]: {
        position: 'absolute',
        display: 'inline-block',
        color: token.colorTextDescription,
        textAlign: 'center',
        wordBreak: 'keep-all',
        cursor: 'pointer',
        userSelect: 'none',
        '&-active': {
          color: token.colorText
        }
      },
      [`${componentCls}-step`]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none'
      },
      [`${componentCls}-dot`]: {
        position: 'absolute',
        width: dotSize,
        height: dotSize,
        backgroundColor: token.colorBgElevated,
        border: `${(0,cssinjs_es/* unit */.zA)(handleLineWidth)} solid ${token.dotBorderColor}`,
        borderRadius: '50%',
        cursor: 'pointer',
        transition: `border-color ${token.motionDurationSlow}`,
        pointerEvents: 'auto',
        '&-active': {
          borderColor: token.dotActiveBorderColor
        }
      },
      [`&${componentCls}-disabled`]: {
        cursor: 'not-allowed',
        [`${componentCls}-rail`]: {
          backgroundColor: `${token.railBg} !important`
        },
        [`${componentCls}-track`]: {
          backgroundColor: `${token.trackBgDisabled} !important`
        },
        [`
          ${componentCls}-dot
        `]: {
          backgroundColor: token.colorBgElevated,
          borderColor: token.trackBgDisabled,
          boxShadow: 'none',
          cursor: 'not-allowed'
        },
        [`${componentCls}-handle::after`]: {
          ...disabledHandle
        },
        [`
          ${componentCls}-mark-text,
          ${componentCls}-dot
        `]: {
          cursor: `not-allowed !important`
        }
      },
      [`${componentCls}-handle-disabled::after`]: {
        ...disabledHandle
      },
      [`&-tooltip ${antCls}-tooltip-container`]: {
        minWidth: 'unset'
      }
    }
  };
};
// ============================ Horizontal ============================
const genDirectionStyle = (token, horizontal) => {
  const {
    componentCls,
    railSize,
    handleSize,
    dotSize,
    marginFull,
    calc
  } = token;
  const railPadding = horizontal ? 'paddingBlock' : 'paddingInline';
  const full = horizontal ? 'width' : 'height';
  const part = horizontal ? 'height' : 'width';
  const handlePos = horizontal ? 'insetBlockStart' : 'insetInlineStart';
  const markInset = horizontal ? 'top' : 'insetInlineStart';
  const handlePosSize = calc(railSize).mul(3).sub(handleSize).div(2).equal();
  const draggableBorderSize = calc(handleSize).sub(railSize).div(2).equal();
  const draggableBorder = horizontal ? {
    borderWidth: `${(0,cssinjs_es/* unit */.zA)(draggableBorderSize)} 0`,
    transform: `translateY(${(0,cssinjs_es/* unit */.zA)(calc(draggableBorderSize).mul(-1).equal())})`
  } : {
    borderWidth: `0 ${(0,cssinjs_es/* unit */.zA)(draggableBorderSize)}`,
    transform: `translateX(${(0,cssinjs_es/* unit */.zA)(token.calc(draggableBorderSize).mul(-1).equal())})`
  };
  return {
    [railPadding]: railSize,
    [part]: calc(railSize).mul(3).equal(),
    [`${componentCls}-rail`]: {
      [full]: '100%',
      [part]: railSize
    },
    [`${componentCls}-track,${componentCls}-tracks`]: {
      [part]: railSize
    },
    [`${componentCls}-track-draggable`]: {
      ...draggableBorder
    },
    [`${componentCls}-handle`]: {
      [handlePos]: handlePosSize
    },
    [`${componentCls}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      // https://github.com/ant-design/ant-design/issues/43731
      [markInset]: calc(railSize).mul(3).add(horizontal ? 0 : marginFull).equal(),
      [full]: '100%'
    },
    [`${componentCls}-step`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [markInset]: railSize,
      [full]: '100%',
      [part]: railSize
    },
    [`${componentCls}-dot`]: {
      position: 'absolute',
      [handlePos]: calc(railSize).sub(dotSize).div(2).equal()
    }
  };
};
// ============================ Horizontal ============================
const genHorizontalStyle = token => {
  const {
    componentCls,
    marginPartWithMark
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      ...genDirectionStyle(token, true),
      [`&${componentCls}-with-marks`]: {
        marginBottom: marginPartWithMark
      }
    }
  };
};
// ============================= Vertical =============================
const genVerticalStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-vertical`]: {
      ...genDirectionStyle(token, false),
      height: '100%'
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => {
  // Handle line width is always width-er 1px
  const increaseHandleWidth = 1;
  const controlSize = token.controlHeightLG / 4;
  const controlSizeHover = token.controlHeightSM / 2;
  const handleLineWidth = token.lineWidth + increaseHandleWidth;
  const handleLineWidthHover = token.lineWidth + increaseHandleWidth * 1.5;
  const handleActiveColor = token.colorPrimary;
  const handleActiveOutlineColor = new fast_color_es/* FastColor */.Y(handleActiveColor).setA(0.2).toRgbString();
  return {
    controlSize,
    railSize: 4,
    handleSize: controlSize,
    handleSizeHover: controlSizeHover,
    dotSize: 8,
    handleLineWidth,
    handleLineWidthHover,
    railBg: token.colorFillTertiary,
    railHoverBg: token.colorFillSecondary,
    trackBg: token.colorPrimaryBorder,
    trackHoverBg: token.colorPrimaryBorderHover,
    handleColor: token.colorPrimaryBorder,
    handleActiveColor,
    handleActiveOutlineColor,
    handleColorDisabled: new fast_color_es/* FastColor */.Y(token.colorTextDisabled).onBackground(token.colorBgContainer).toHexString(),
    dotBorderColor: token.colorBorderSecondary,
    dotActiveBorderColor: token.colorPrimaryBorder,
    trackBgDisabled: token.colorBgContainerDisabled
  };
};
/* harmony default export */ const slider_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Slider', token => {
  const sliderToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    marginPart: token.calc(token.controlHeight).sub(token.controlSize).div(2).equal(),
    marginFull: token.calc(token.controlSize).div(2).equal(),
    marginPartWithMark: token.calc(token.controlHeightLG).sub(token.controlSize).equal()
  });
  return [genBaseStyle(sliderToken), genHorizontalStyle(sliderToken), genVerticalStyle(sliderToken)];
}, prepareComponentToken));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/slider/useRafLock.js


function useRafLock() {
  const [state, setState] = react.useState(false);
  const rafRef = react.useRef(null);
  const cleanup = () => {
    util_es/* raf */.er.cancel(rafRef.current);
  };
  const setDelayState = nextState => {
    cleanup();
    if (nextState) {
      setState(nextState);
    } else {
      rafRef.current = (0,util_es/* raf */.er)(() => {
        setState(nextState);
      });
    }
  };
  react.useEffect(() => cleanup, []);
  return [state, setDelayState];
}
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/slider/index.js
"use client";















function getTipFormatter(tipFormatter) {
  if (tipFormatter || tipFormatter === null) {
    return tipFormatter;
  }
  return val => (0,is/* isNumber */.Et)(val) ? val.toString() : '';
}
const Slider = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    range,
    className,
    rootClassName,
    style,
    disabled,
    // Deprecated Props
    tooltip = {},
    onChangeComplete,
    classNames,
    styles,
    vertical,
    orientation,
    ...restProps
  } = props;
  const [, mergedVertical] = (0,useOrientation/* useOrientation */.M)(orientation, vertical);
  const {
    getPrefixCls,
    direction: contextDirection,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    getPopupContainer
  } = (0,context/* useComponentConfig */.TP)('slider');
  const contextDisabled = react.useContext(DisabledContext/* default */.A);
  const mergedDisabled = disabled ?? contextDisabled;
  // =========== Merged Props for Semantic ==========
  const mergedProps = {
    ...props,
    disabled: mergedDisabled,
    vertical: mergedVertical
  };
  const contextStyleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(contextStyle);
  const styleRoot = (0,useMergeSemantic/* useSemanticRootStyle */.XT)(style);
  const [mergedClassNames, mergedStyles] = (0,useMergeSemantic/* useMergeSemantic */.AV)([contextClassNames, classNames], [contextStyles, contextStyleRoot, styles, styleRoot], {
    props: mergedProps
  });
  // ============================= Context ==============================
  const {
    handleRender: contextHandleRender,
    direction: internalContextDirection
  } = react.useContext(Context/* default */.A);
  const mergedDirection = internalContextDirection || contextDirection;
  const isRTL = mergedDirection === 'rtl';
  // =============================== Open ===============================
  const [hoverOpen, setHoverOpen] = useRafLock();
  const [focusOpen, setFocusOpen] = useRafLock();
  const tooltipProps = {
    ...tooltip
  };
  const {
    open: tooltipOpen,
    placement: tooltipPlacement,
    getPopupContainer: getTooltipPopupContainer,
    prefixCls: customizeTooltipPrefixCls,
    formatter: tipFormatter
  } = tooltipProps;
  const lockOpen = tooltipOpen;
  const activeOpen = (hoverOpen || focusOpen) && lockOpen !== false;
  const mergedTipFormatter = getTipFormatter(tipFormatter);
  // ============================= Change ==============================
  const [dragging, setDragging] = useRafLock();
  const onInternalChangeComplete = nextValues => {
    onChangeComplete?.(nextValues);
    setDragging(false);
  };
  // ============================ Placement ============================
  const getTooltipPlacement = (placement, vert) => {
    if (placement) {
      return placement;
    }
    if (!vert) {
      return 'top';
    }
    return isRTL ? 'left' : 'right';
  };
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('slider', customizePrefixCls);
  const [hashId, cssVarCls] = slider_style(prefixCls);
  const rootClassNames = (0,clsx/* clsx */.$)(className, contextClassName, mergedClassNames.root, rootClassName, {
    [`${prefixCls}-rtl`]: isRTL,
    [`${prefixCls}-lock`]: dragging
  }, hashId, cssVarCls);
  // make reverse default on rtl direction
  if (isRTL && !mergedVertical) {
    restProps.reverse = !restProps.reverse;
  }
  // ============================= Warning ==============================
  // Warning for deprecated usage
  if (false) // removed by dead control flow
{}
  // ============================== Handle ==============================
  react.useEffect(() => {
    const onMouseUp = () => {
      // Delay for 1 frame to make the click to enable hide tooltip
      // even when the handle is focused
      (0,util_es/* raf */.er)(() => {
        setFocusOpen(false);
      }, 1);
    };
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  const useActiveTooltipHandle = range && !lockOpen;
  const handleRender = contextHandleRender || ((node, info) => {
    const {
      index
    } = info;
    const nodeProps = node.props;
    function proxyEvent(eventName, event, triggerRestPropsEvent) {
      if (triggerRestPropsEvent) {
        restProps[eventName]?.(event);
      }
      nodeProps[eventName]?.(event);
    }
    const passedProps = {
      ...nodeProps,
      onMouseEnter: e => {
        setHoverOpen(true);
        proxyEvent('onMouseEnter', e);
      },
      onMouseLeave: e => {
        setHoverOpen(false);
        proxyEvent('onMouseLeave', e);
      },
      onMouseDown: e => {
        setFocusOpen(true);
        setDragging(true);
        proxyEvent('onMouseDown', e);
      },
      onFocus: e => {
        setFocusOpen(true);
        restProps.onFocus?.(e);
        proxyEvent('onFocus', e, true);
      },
      onBlur: e => {
        setFocusOpen(false);
        restProps.onBlur?.(e);
        proxyEvent('onBlur', e, true);
      }
    };
    const cloneNode = /*#__PURE__*/react.cloneElement(node, passedProps);
    const open = (!!lockOpen || activeOpen) && mergedTipFormatter !== null;
    // Wrap on handle with Tooltip when is single mode or multiple with all show tooltip
    if (!useActiveTooltipHandle) {
      return /*#__PURE__*/react.createElement(slider_SliderTooltip, {
        ...tooltipProps,
        prefixCls: getPrefixCls('tooltip', customizeTooltipPrefixCls),
        title: mergedTipFormatter ? mergedTipFormatter(info.value) : undefined,
        value: info.value,
        open: open,
        placement: getTooltipPlacement(tooltipPlacement, mergedVertical),
        key: index,
        classNames: {
          root: `${prefixCls}-tooltip`
        },
        getPopupContainer: getTooltipPopupContainer || getPopupContainer
      }, cloneNode);
    }
    return cloneNode;
  });
  // ========================== Active Handle ===========================
  const activeHandleRender = useActiveTooltipHandle ? (handle, info) => {
    const cloneNode = /*#__PURE__*/react.cloneElement(handle, {
      style: {
        ...handle.props.style,
        visibility: 'hidden'
      }
    });
    return /*#__PURE__*/react.createElement(slider_SliderTooltip, {
      ...tooltipProps,
      prefixCls: getPrefixCls('tooltip', customizeTooltipPrefixCls),
      title: mergedTipFormatter ? mergedTipFormatter(info.value) : undefined,
      open: mergedTipFormatter !== null && activeOpen,
      placement: getTooltipPlacement(tooltipPlacement, mergedVertical),
      key: "tooltip",
      classNames: {
        root: `${prefixCls}-tooltip`
      },
      getPopupContainer: getTooltipPopupContainer || getPopupContainer,
      draggingDelete: info.draggingDelete
    }, cloneNode);
  } : undefined;
  // ============================== Render ==============================
  const rootStyle = {
    ...mergedStyles.root
  };
  return /*#__PURE__*/react.createElement(es/* default */.A, {
    ...restProps,
    classNames: mergedClassNames,
    styles: mergedStyles,
    step: restProps.step,
    range: range,
    className: rootClassNames,
    style: rootStyle,
    disabled: mergedDisabled,
    vertical: mergedVertical,
    ref: ref,
    prefixCls: prefixCls,
    handleRender: handleRender,
    activeHandleRender: activeHandleRender,
    onChangeComplete: onInternalChangeComplete
  });
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const slider = (Slider);

/***/ }

}]);