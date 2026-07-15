"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[3791],{

/***/ 1203
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: Field, FieldContext, FormProvider, List, ListContext, default, useForm, useWatch

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/index.js + 12 modules
var es = __webpack_require__(23392);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/FieldContext.js


const HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const warningFunc = () => {
  (0,es/* warning */.$e)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
const Context = /*#__PURE__*/react.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: () => {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
/* harmony default export */ const FieldContext = (Context);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/ListContext.js

const ListContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const es_ListContext = (ListContext);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/utils/typeUtil.js
function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/messages.js
function newMessages() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      tel: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone() {
      const cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
const messages_messages = newMessages();
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/util.js
/* eslint no-console:0 */

const formatRegExp = /%[sdj%]/g;
let warning = () => {};

// don't print warning message when in production env or node runtime
if (typeof process !== 'undefined' && process.env && "production" !== 'production' && 0 && 0) // removed by dead control flow
{}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  const fields = {};
  errors.forEach(error => {
    const field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template, ...args) {
  let i = 0;
  const len = args.length;
  if (typeof template === 'function') {
    // eslint-disable-next-line prefer-spread
    return template.apply(null, args);
  }
  if (typeof template === 'string') {
    const str = template.replace(formatRegExp, x => {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          // removed by dead control flow

        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern' || type === 'tel';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function asyncParallelArray(arr, func, callback) {
  const results = [];
  let total = 0;
  const arrLength = arr.length;
  function count(errors) {
    results.push(...(errors || []));
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(a => {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  let index = 0;
  const arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    const original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  const ret = [];
  Object.keys(objArr).forEach(k => {
    ret.push(...(objArr[k] || []));
  });
  return ret;
}
class AsyncValidationError extends Error {
  errors;
  fields;
  constructor(errors, fields) {
    super('Async Validation Error');
    this.errors = errors;
    this.fields = fields;
  }
}
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    const pending = new Promise((resolve, reject) => {
      const next = errors => {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      const flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    pending.catch(e => e);
    return pending;
  }
  const firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  const objArrKeys = Object.keys(objArr);
  const objArrLength = objArrKeys.length;
  let total = 0;
  const results = [];
  const pending = new Promise((resolve, reject) => {
    const next = errors => {
      // eslint-disable-next-line prefer-spread
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(key => {
      const arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch(e => e);
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}
function getValue(value, path) {
  let v = value;
  for (let i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return oe => {
    let fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (const s in source) {
      if (source.hasOwnProperty(s)) {
        const value = source[s];
        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = {
            ...target[s],
            ...value
          };
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/enum.js

const ENUM = 'enum';
const enumerable = (rule, value, source, errors, options) => {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
};
/* harmony default export */ const rule_enum = (enumerable);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/pattern.js

const pattern = (rule, value, source, errors, options) => {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      const _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
/* harmony default export */ const rule_pattern = (pattern);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/range.js

const range = (rule, value, source, errors, options) => {
  const len = typeof rule.len === 'number';
  const min = typeof rule.min === 'number';
  const max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  let val = value;
  let key = null;
  const num = typeof value === 'number';
  const str = typeof value === 'string';
  const arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".length !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
/* harmony default export */ const rule_range = (range);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/required.js

const required = (rule, value, source, errors, options, type) => {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
/* harmony default export */ const rule_required = (required);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/url.js
// https://github.com/kevva/url-regex/blob/master/index.js
let urlReg;
/* harmony default export */ const url = (() => {
  if (urlReg) {
    return urlReg;
  }
  const word = '[a-fA-F\\d:]';
  const b = options => options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : '';
  const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  const v6seg = '[a-fA-F\\d]{1,4}';
  const v6List = [`(?:${v6seg}:){7}(?:${v6seg}|:)`,
  // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
  `(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)`,
  // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
  `(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)`,
  // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
  `(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)`,
  // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
  `(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)`,
  // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
  `(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)`,
  // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
  `(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)`,
  // 1::              1::3:4:5:6:7:8   1::8            1::
  `(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))` // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ];
  const v6Eth0 = `(?:%[0-9a-zA-Z]{1,})?`; // %eth0            %1

  const v6 = `(?:${v6List.join('|')})${v6Eth0}`;

  // Pre-compile only the exact regexes because adding a global flag make regexes stateful
  const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
  const v4exact = new RegExp(`^${v4}$`);
  const v6exact = new RegExp(`^${v6}$`);
  const ip = options => options && options.exact ? v46Exact : new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');
  ip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');
  ip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');
  const protocol = `(?:(?:[a-z]+:)?//)`;
  const auth = '(?:\\S+(?::\\S*)?@)?';
  const ipv4 = ip.v4().source;
  const ipv6 = ip.v6().source;
  const host = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)';
  const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
  const tld = `(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))`;
  const port = '(?::\\d{2,5})?';
  const path = '(?:[/?#][^\\s"]*)?';
  const regex = `(?:${protocol}|www\\.)${auth}(?:localhost|${ipv4}|${ipv6}|${host}${domain}${tld})${port}${path}`;
  urlReg = new RegExp(`(?:^${regex}$)`, 'i');
  return urlReg;
});
__webpack_require__.dn(url);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/type.js



/* eslint max-len:0 */

const type_pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
const types = {
  integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float(value) {
    return types.number(value) && !types.integer(value);
  },
  array(value) {
    return Array.isArray(value);
  },
  regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method(value) {
    return typeof value === 'function';
  },
  email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(type_pattern.email);
  },
  tel(value) {
    return typeof value === 'string' && value.length <= 32 && !!value.match(type_pattern.tel);
  },
  url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(url());
  },
  hex(value) {
    return typeof value === 'string' && !!value.match(type_pattern.hex);
  }
};
const type = (rule, value, source, errors, options) => {
  if (rule.required && value === undefined) {
    rule_required(rule, value, source, errors, options);
    return;
  }
  const custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'tel', 'number', 'date', 'url', 'hex'];
  const ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
/* harmony default export */ const rule_type = (type);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/whitespace.js


/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
const whitespace = (rule, value, source, errors, options) => {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
/* harmony default export */ const rule_whitespace = (whitespace);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/rule/index.js






/* harmony default export */ const es_rule = ({
  required: rule_required,
  whitespace: rule_whitespace,
  type: rule_type,
  range: rule_range,
  enum: rule_enum,
  pattern: rule_pattern
});
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/any.js


const any = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
  }
  callback(errors);
};
/* harmony default export */ const validator_any = (any);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/array.js

const array = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'array');
    if (value !== undefined && value !== null) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_array = (array);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/boolean.js


const boolean_boolean = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_boolean = (boolean_boolean);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/date.js


const date = (rule, value, callback, source, options) => {
  // console.log('integer rule called %j', rule);
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'date')) {
      let dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      es_rule.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        es_rule.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_date = (date);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/enum.js


const enum_ENUM = 'enum';
const enum_enumerable = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule[enum_ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_enum = (enum_enumerable);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/float.js


const floatFn = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_float = (floatFn);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/integer.js


const integer = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_integer = (integer);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/method.js


const method = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_method = (method);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/number.js


const number = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      // eslint-disable-next-line no-param-reassign
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_number = (number);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/object.js


const object = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_object = (object);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/pattern.js


const pattern_pattern = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      es_rule.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_pattern = (pattern_pattern);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/regexp.js


const regexp = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_regexp = (regexp);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/required.js

const required_required = (rule, value, callback, source, options) => {
  const errors = [];
  const type = Array.isArray(value) ? 'array' : typeof value;
  es_rule.required(rule, value, source, errors, options, type);
  callback(errors);
};
/* harmony default export */ const validator_required = (required_required);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/string.js


const string = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
      es_rule.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        es_rule.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_string = (string);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/type.js


const type_type = (rule, value, callback, source, options) => {
  const ruleType = rule.type;
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ const validator_type = (type_type);
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/validator/index.js















/* harmony default export */ const es_validator = ({
  string: validator_string,
  method: validator_method,
  number: validator_number,
  boolean: validator_boolean,
  regexp: validator_regexp,
  integer: validator_integer,
  float: validator_float,
  array: validator_array,
  object: validator_object,
  enum: validator_enum,
  pattern: validator_pattern,
  date: validator_date,
  url: validator_type,
  hex: validator_type,
  email: validator_type,
  tel: validator_type,
  required: validator_required,
  any: validator_any
});
;// ./node_modules/.pnpm/@rc-component+async-validator@6.0.0/node_modules/@rc-component/async-validator/es/index.js





/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
class Schema {
  // ========================= Static =========================
  static register = function register(type, validator) {
    if (typeof validator !== 'function') {
      throw new Error('Cannot register a validator by type, validator is not a function');
    }
    es_validator[type] = validator;
  };
  static warning = warning;
  static messages = messages_messages;
  static validators = es_validator;

  // ======================== Instance ========================
  rules = null;
  _messages = messages_messages;
  constructor(descriptor) {
    this.define(descriptor);
  }
  define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    Object.keys(rules).forEach(name => {
      const item = rules[name];
      this.rules[name] = Array.isArray(item) ? item : [item];
    });
  }
  messages(messages) {
    if (messages) {
      this._messages = deepMerge(newMessages(), messages);
    }
    return this._messages;
  }

  // eslint-disable-next-line @typescript-eslint/unified-signatures

  validate(source_, o = {}, oc = () => {}) {
    let source = source_;
    let options = o;
    let callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      let errors = [];
      let fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat(...e);
        } else {
          errors.push(e);
        }
      }
      for (let i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      let messages = this.messages();
      if (messages === messages_messages) {
        messages = newMessages();
      }
      deepMerge(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    const series = {};
    const keys = options.keys || Object.keys(this.rules);
    keys.forEach(z => {
      const arr = this.rules[z];
      let value = source[z];
      arr.forEach(r => {
        let rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = {
              ...source
            };
          }
          value = source[z] = rule.transform(value);
          if (value !== undefined && value !== null) {
            rule.type = rule.type || (Array.isArray(value) ? 'array' : typeof value);
          }
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = {
            ...rule
          };
        }

        // Fill validator. Skip if nothing need to validate
        rule.validator = this.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = this.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    const errorFields = {};
    return asyncMap(series, options, (data, doIt) => {
      const rule = data.rule;
      let deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return {
          ...schema,
          fullField: `${rule.fullField}.${key}`,
          fullFields: rule.fullFields ? [...rule.fullFields, key] : [key]
        };
      }
      function cb(e = []) {
        let errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }
        if (errorList.length && rule.message !== undefined && rule.message !== null) {
          errorList = [].concat(rule.message);
        }

        // Fill error info
        let filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          let fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(key => {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = {
            ...fieldsSchema,
            ...data.rule.fields
          };
          const paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(field => {
            const fieldSchema = fieldsSchema[field];
            const fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          const schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, errs => {
            const finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push(...filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push(...errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      let res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error?.(error);
          // rethrow to report error
          if (!options.suppressValidatorError) {
            setTimeout(() => {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || `${rule.fullField || rule.field} fails`);
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(() => cb(), e => cb(e));
      }
    }, results => {
      complete(results);
    }, source);
  }
  getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !es_validator.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  }
  getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    const keys = Object.keys(rule);
    const messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return es_validator.required;
    }
    return es_validator[this.getType(rule)] || undefined;
  }
}
/* harmony default export */ const async_validator_es = (Schema);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/utils/messages.js
const typeTemplate = "'${name}' is not a valid ${type}";
const defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    tel: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/utils/validateUtil.js





// Remove incorrect original ts define
const AsyncValidator = async_validator_es;

/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */
function replaceMessage(template, kv) {
  return template.replace(/\\?\$\{\w+\}/g, str => {
    if (str.startsWith('\\')) {
      return str.slice(1);
    }
    const key = str.slice(2, -1);
    return kv[key];
  });
}
const CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
async function validateRule(name, value, rule, options, messageVariables) {
  const cloneRule = {
    ...rule
  };

  // Bug of `async-validator`
  // https://github.com/react-component/field-form/issues/316
  // https://github.com/react-component/field-form/issues/313
  delete cloneRule.ruleIndex;

  // https://github.com/ant-design/ant-design/issues/40497#issuecomment-1422282378
  AsyncValidator.warning = () => void 0;
  if (cloneRule.validator) {
    const originValidator = cloneRule.validator;
    cloneRule.validator = (...args) => {
      try {
        return originValidator(...args);
      } catch (error) {
        console.error(error);
        return Promise.reject(CODE_LOGIC_ERROR);
      }
    };
  }

  // We should special handle array validate
  let subRuleField = null;
  if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
    subRuleField = cloneRule.defaultField;
    delete cloneRule.defaultField;
  }
  const validator = new AsyncValidator({
    [name]: [cloneRule]
  });
  const messages = (0,es/* merge */.h1)(defaultValidateMessages, options.validateMessages);
  validator.messages(messages);
  let result = [];
  try {
    await Promise.resolve(validator.validate({
      [name]: value
    }, {
      ...options
    }));
  } catch (errObj) {
    if (errObj.errors) {
      result = errObj.errors.map(({
        message
      }, index) => {
        const mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
        return /*#__PURE__*/react.isValidElement(mergedMessage) ?
        /*#__PURE__*/
        // Wrap ReactNode with `key`
        react.cloneElement(mergedMessage, {
          key: `error_${index}`
        }) : mergedMessage;
      });
    }
  }
  if (!result.length && subRuleField && Array.isArray(value) && value.length > 0) {
    const subResults = await Promise.all(value.map((subValue, i) => validateRule(`${name}.${i}`, subValue, subRuleField, options, messageVariables)));
    return subResults.reduce((prev, errors) => [...prev, ...errors], []);
  }

  // Replace message with variables
  const kv = {
    ...rule,
    name,
    enum: (rule.enum || []).join(', '),
    ...messageVariables
  };
  const fillVariableResult = result.map(error => {
    if (typeof error === 'string') {
      return replaceMessage(error, kv);
    }
    return error;
  });
  return fillVariableResult;
}

/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  const name = namePath.join('.');

  // Fill rule with context
  const filledRules = rules.map((currentRule, ruleIndex) => {
    const originValidatorFunc = currentRule.validator;
    const cloneRule = {
      ...currentRule,
      ruleIndex
    };

    // Replace validator if needed
    if (originValidatorFunc) {
      cloneRule.validator = (rule, val, callback) => {
        let hasPromise = false;

        // Wrap callback only accept when promise not provided
        const wrappedCallback = (...args) => {
          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(() => {
            (0,es/* warning */.$e)(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');
            if (!hasPromise) {
              callback(...args);
            }
          });
        };

        // Get promise
        const promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';

        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */
        (0,es/* warning */.$e)(hasPromise, '`callback` is deprecated. Please return a promise instead.');
        if (hasPromise) {
          promise.then(() => {
            callback();
          }).catch(err => {
            callback(err || ' ');
          });
        }
      };
    }
    return cloneRule;
  }).sort(({
    warningOnly: w1,
    ruleIndex: i1
  }, {
    warningOnly: w2,
    ruleIndex: i2
  }) => {
    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });

  // Do validate rules
  let summaryPromise;
  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise(async (resolve, reject) => {
      /* eslint-disable no-await-in-loop */
      for (let i = 0; i < filledRules.length; i += 1) {
        const rule = filledRules[i];
        const errors = await validateRule(name, value, rule, options, messageVariables);
        if (errors.length) {
          reject([{
            errors,
            rule
          }]);
          return;
        }
      }
      /* eslint-enable */

      resolve([]);
    });
  } else {
    // >>>>> Validate by parallel
    const rulePromises = filledRules.map(rule => validateRule(name, value, rule, options, messageVariables).then(errors => ({
      errors,
      rule
    })));
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(errors => {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  }

  // Internal catch error to avoid console error log.
  summaryPromise.catch(e => e);
  return summaryPromise;
}
async function finishOnAllFailed(rulePromises) {
  return Promise.all(rulePromises).then(errorsList => {
    const errors = [].concat(...errorsList);
    return errors;
  });
}
async function finishOnFirstFailed(rulePromises) {
  let count = 0;
  return new Promise(resolve => {
    rulePromises.forEach(promise => {
      promise.then(ruleError => {
        if (ruleError.errors.length) {
          resolve([ruleError]);
        }
        count += 1;
        if (count === rulePromises.length) {
          resolve([]);
        }
      });
    });
  });
}
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/utils/valueUtil.js




/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */
function getNamePath(path) {
  return toArray(path);
}

/**
 * Create a new store object that contains only the values referenced by
 * the provided list of name paths.
 */
function cloneByNamePathList(store, namePathList) {
  let newStore = {};
  namePathList.forEach(namePath => {
    const value = (0,es/* get */.Jt)(store, namePath);
    newStore = (0,es/* set */.hZ)(newStore, namePath, value);
  });
  return newStore;
}

/**
 * Check if `namePathList` includes `namePath`.
 * @param namePathList A list of `InternalNamePath[]`
 * @param namePath Compare `InternalNamePath`
 * @param partialMatch True will make `[a, b]` match `[a, b, c]`
 */
function containsNamePath(namePathList, namePath, partialMatch = false) {
  return namePathList && namePathList.some(path => matchNamePath(namePath, path, partialMatch));
}

/**
 * Check if `namePath` is super set or equal of `subNamePath`.
 * @param namePath A list of `InternalNamePath[]`
 * @param subNamePath Compare `InternalNamePath`
 * @param partialMatch Default false. True will make `[a, b]` match `[a, b, c]`
 */
function matchNamePath(namePath, subNamePath, partialMatch = false) {
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every((nameUnit, i) => namePath[i] === nameUnit);
}

// Like `shallowEqual`, but we not check the data which may cause re-render

function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || typeof source !== 'object' || typeof target !== 'object') {
    return false;
  }
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  const keys = new Set([...sourceKeys, ...targetKeys]);
  return [...keys].every(key => {
    const sourceValue = source[key];
    const targetValue = target[key];
    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && typeof event.target === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */
function move(array, moveIndex, toIndex) {
  const {
    length
  } = array;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  const item = array[moveIndex];
  const diff = moveIndex - toIndex;
  if (diff > 0) {
    // move left
    return [...array.slice(0, toIndex), item, ...array.slice(toIndex, moveIndex), ...array.slice(moveIndex + 1, length)];
  }
  if (diff < 0) {
    // move right
    return [...array.slice(0, moveIndex), ...array.slice(moveIndex + 1, toIndex + 1), item, ...array.slice(toIndex + 1, length)];
  }
  return array;
}
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/hooks/useNotifyWatch.js

/**
 * Call action with delay in macro task.
 */
const macroTask = fn => {
  const channel = new MessageChannel();
  channel.port1.onmessage = fn;
  channel.port2.postMessage(null);
};
class WatcherCenter {
  namePathList = [];
  taskId = 0;
  watcherList = new Set();
  form;
  constructor(form) {
    this.form = form;
  }
  register(callback) {
    this.watcherList.add(callback);
    return () => {
      this.watcherList.delete(callback);
    };
  }
  notify(namePath) {
    // Insert with deduplication
    namePath.forEach(path => {
      if (this.namePathList.every(exist => !matchNamePath(exist, path))) {
        this.namePathList.push(path);
      }
    });
    this.doBatch();
  }
  doBatch() {
    this.taskId += 1;
    const currentId = this.taskId;
    macroTask(() => {
      if (currentId === this.taskId && this.watcherList.size) {
        const formInst = this.form.getForm();
        const values = formInst.getFieldsValue();
        const allValues = formInst.getFieldsValue(true);
        this.watcherList.forEach(callback => {
          callback(values, allValues, this.namePathList);
        });
        this.namePathList = [];
      }
    });
  }
}
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/utils/delayUtil.js


async function delayFrame() {
  return new Promise(resolve => {
    macroTask(() => {
      (0,es/* raf */.er)(() => {
        resolve();
      });
    });
  });
}
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/Field.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const EMPTY_ERRORS = [];
const EMPTY_WARNINGS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style

// We use Class instead of Hooks here since it will cost much code by using Hooks.
class Field extends react.PureComponent {
  static contextType = FieldContext;
  state = {
    resetCount: 0
  };
  cancelRegisterFunc = null;
  mounted = false;

  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */
  touched = false;

  /**
   * Mark when touched & validated. Currently only used for `dependencies`.
   * Note that we do not think field with `initialValue` is dirty
   * but this will be by `isFieldDirty` func.
   */
  dirty = false;
  validatePromise;
  prevValidating;
  errors = EMPTY_ERRORS;
  warnings = EMPTY_WARNINGS;

  // ============================== Subscriptions ==============================
  constructor(props) {
    super(props);

    // Register on init
    if (props.fieldContext) {
      const {
        getInternalHooks
      } = props.fieldContext;
      const {
        initEntityValue
      } = getInternalHooks(HOOK_MARK);
      initEntityValue(this);
    }
  }
  componentDidMount() {
    const {
      shouldUpdate,
      fieldContext
    } = this.props;
    this.mounted = true;

    // Register on init
    if (fieldContext) {
      const {
        getInternalHooks
      } = fieldContext;
      const {
        registerField
      } = getInternalHooks(HOOK_MARK);
      this.cancelRegisterFunc = registerField(this);
    }

    // One more render for component in case fields not ready
    if (shouldUpdate === true) {
      this.reRender();
    }
  }
  componentWillUnmount() {
    this.cancelRegister();
    this.triggerMetaEvent(true);
    this.mounted = false;
  }
  cancelRegister = () => {
    const {
      preserve,
      isListField,
      name
    } = this.props;
    if (this.cancelRegisterFunc) {
      this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
    }
    this.cancelRegisterFunc = null;
  };

  // ================================== Utils ==================================
  getNamePath = () => {
    const {
      name,
      fieldContext
    } = this.props;
    const {
      prefixName = []
    } = fieldContext;
    return name !== undefined ? [...prefixName, ...name] : [];
  };
  getRules = () => {
    const {
      rules = [],
      fieldContext
    } = this.props;
    return rules.map(rule => {
      if (typeof rule === 'function') {
        return rule(fieldContext);
      }
      return rule;
    });
  };
  reRender() {
    if (!this.mounted) return;
    this.forceUpdate();
  }
  refresh = () => {
    if (!this.mounted) return;

    /**
     * Clean up current node.
     */
    this.setState(({
      resetCount
    }) => ({
      resetCount: resetCount + 1
    }));
  };

  // Event should only trigger when meta changed
  metaCache = null;
  triggerMetaEvent = destroy => {
    const {
      onMetaChange
    } = this.props;
    if (onMetaChange) {
      const meta = {
        ...this.getMeta(),
        destroy
      };
      if (!(0,es/* isEqual */.n4)(this.metaCache, meta)) {
        onMetaChange(meta);
      }
      this.metaCache = meta;
    } else {
      this.metaCache = null;
    }
  };

  // ========================= Field Entity Interfaces =========================
  // Trigger by store update. Check if need update the component
  onStoreChange = (prevStore, namePathList, info) => {
    const {
      shouldUpdate,
      dependencies = [],
      onReset
    } = this.props;
    const {
      store
    } = info;
    const namePath = this.getNamePath();
    const prevValue = this.getValue(prevStore);
    const curValue = this.getValue(store);
    const namePathMatch = namePathList && containsNamePath(namePathList, namePath);

    // `setFieldsValue` is a quick access to update related status
    if (info.type === 'valueUpdate' && info.source === 'external' && !(0,es/* isEqual */.n4)(prevValue, curValue)) {
      this.touched = true;
      this.dirty = true;
      this.validatePromise = null;
      this.errors = EMPTY_ERRORS;
      this.warnings = EMPTY_WARNINGS;
      this.triggerMetaEvent();
    }
    switch (info.type) {
      case 'reset':
        if (!namePathList || namePathMatch) {
          // Clean up state
          this.touched = false;
          this.dirty = false;
          this.validatePromise = undefined;
          this.errors = EMPTY_ERRORS;
          this.warnings = EMPTY_WARNINGS;
          this.triggerMetaEvent();
          onReset?.();
          this.refresh();
          return;
        }
        break;

      /**
       * In case field with `preserve = false` nest deps like:
       * - A = 1 => show B
       * - B = 1 => show C
       * - Reset A, need clean B, C
       */
      case 'remove':
        {
          if (shouldUpdate && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            this.reRender();
            return;
          }
          break;
        }
      case 'setField':
        {
          const {
            data
          } = info;
          if (namePathMatch) {
            if ('touched' in data) {
              this.touched = data.touched;
            }
            if ('validating' in data && !('originRCField' in data)) {
              this.validatePromise = data.validating ? Promise.resolve([]) : null;
            }
            if ('errors' in data) {
              this.errors = data.errors || EMPTY_ERRORS;
            }
            if ('warnings' in data) {
              this.warnings = data.warnings || EMPTY_WARNINGS;
            }
            this.dirty = true;
            this.triggerMetaEvent();
            this.reRender();
            return;
          } else if ('value' in data && containsNamePath(namePathList, namePath, true)) {
            // Contains path with value should also check
            this.reRender();
            return;
          }

          // Handle update by `setField` with `shouldUpdate`
          if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            this.reRender();
            return;
          }
          break;
        }
      case 'dependenciesUpdate':
        {
          /**
           * Trigger when marked `dependencies` updated. Related fields will all update
           */
          const dependencyList = dependencies.map(getNamePath);
          // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
          // emitted earlier and they will work there
          // If set it may cause unnecessary twice rerendering
          if (dependencyList.some(dependency => containsNamePath(info.relatedFields, dependency))) {
            this.reRender();
            return;
          }
          break;
        }
      default:
        // 1. If `namePath` exists in `namePathList`, means it's related value and should update
        //      For example <List name="list"><Field name={['list', 0]}></List>
        //      If `namePathList` is [['list']] (List value update), Field should be updated
        //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
        // 2.
        //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
        //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
        //       is not provided
        //   2.2 If `shouldUpdate` provided, use customize logic to update the field
        //       else to check if value changed
        if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
          this.reRender();
          return;
        }
        break;
    }
    if (shouldUpdate === true) {
      this.reRender();
    }
  };
  validateRules = options => {
    // We should fixed namePath & value to avoid developer change then by form function
    const namePath = this.getNamePath();
    const currentValue = this.getValue();
    const {
      triggerName,
      validateOnly = false,
      delayFrame: showDelayFrame
    } = options || {};

    // Force change to async to avoid rule OOD under renderProps field
    const rootPromise = Promise.resolve().then(async () => {
      if (!this.mounted) {
        return [];
      }
      const {
        validateFirst = false,
        messageVariables,
        validateDebounce
      } = this.props;

      // Should wait for the frame render,
      // since developer may `useWatch` value in the rules.
      if (showDelayFrame) {
        await delayFrame();
      }

      // Start validate
      let filteredRules = this.getRules();
      if (triggerName) {
        filteredRules = filteredRules.filter(rule => rule).filter(rule => {
          const {
            validateTrigger
          } = rule;
          if (!validateTrigger) {
            return true;
          }
          const triggerList = toArray(validateTrigger);
          return triggerList.includes(triggerName);
        });
      }

      // Wait for debounce. Skip if no `triggerName` since its from `validateFields / submit`
      if (validateDebounce && triggerName) {
        await new Promise(resolve => {
          setTimeout(resolve, validateDebounce);
        });

        // Skip since out of date
        if (this.validatePromise !== rootPromise) {
          return [];
        }
      }
      const promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
      promise.catch(e => e).then((ruleErrors = EMPTY_ERRORS) => {
        if (this.validatePromise === rootPromise) {
          this.validatePromise = null;

          // Get errors & warnings
          const nextErrors = [];
          const nextWarnings = [];
          ruleErrors.forEach?.(({
            rule: {
              warningOnly
            },
            errors = EMPTY_ERRORS
          }) => {
            if (warningOnly) {
              nextWarnings.push(...errors);
            } else {
              nextErrors.push(...errors);
            }
          });
          this.errors = nextErrors;
          this.warnings = nextWarnings;
          this.triggerMetaEvent();
          this.reRender();
        }
      });
      return promise;
    });
    if (validateOnly) {
      return rootPromise;
    }
    this.validatePromise = rootPromise;
    this.dirty = true;
    this.errors = EMPTY_ERRORS;
    this.warnings = EMPTY_WARNINGS;
    this.triggerMetaEvent();

    // Force trigger re-render since we need sync renderProps with new meta
    this.reRender();
    return rootPromise;
  };
  isFieldValidating = () => !!this.validatePromise;
  isFieldTouched = () => this.touched;
  isFieldDirty = () => {
    // Touched or validate or has initialValue
    if (this.dirty || this.props.initialValue !== undefined) {
      return true;
    }

    // Form set initialValue
    const {
      fieldContext
    } = this.props;
    const {
      getInitialValue
    } = fieldContext.getInternalHooks(HOOK_MARK);
    if (getInitialValue(this.getNamePath()) !== undefined) {
      return true;
    }
    return false;
  };
  getErrors = () => this.errors;
  getWarnings = () => this.warnings;
  isListField = () => this.props.isListField;
  isList = () => this.props.isList;
  isPreserve = () => this.props.preserve;

  // ============================= Child Component =============================
  getMeta = () => {
    // Make error & validating in cache to save perf
    this.prevValidating = this.isFieldValidating();
    const meta = {
      touched: this.isFieldTouched(),
      validating: this.prevValidating,
      errors: this.errors,
      warnings: this.warnings,
      name: this.getNamePath(),
      validated: this.validatePromise === null
    };
    return meta;
  };

  // Only return validate child node. If invalidate, will do nothing about field.
  getOnlyChild = children => {
    // Support render props
    if (typeof children === 'function') {
      const meta = this.getMeta();
      return {
        ...this.getOnlyChild(children(this.getControlled(), meta, this.props.fieldContext)),
        isFunction: true
      };
    }

    // Filed element only
    const childList = (0,es/* toArray */.$r)(children);
    if (childList.length !== 1 || ! /*#__PURE__*/react.isValidElement(childList[0])) {
      return {
        child: childList,
        isFunction: false
      };
    }
    return {
      child: childList[0],
      isFunction: false
    };
  };

  // ============================== Field Control ==============================
  getValue = store => {
    const {
      getFieldsValue
    } = this.props.fieldContext;
    const namePath = this.getNamePath();
    return (0,es/* get */.Jt)(store || getFieldsValue(true), namePath);
  };
  getControlled = (childProps = {}) => {
    const {
      name,
      trigger = 'onChange',
      validateTrigger,
      getValueFromEvent,
      normalize,
      valuePropName = 'value',
      getValueProps,
      fieldContext
    } = this.props;
    const mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
    const namePath = this.getNamePath();
    const {
      getInternalHooks,
      getFieldsValue
    } = fieldContext;
    const {
      dispatch
    } = getInternalHooks(HOOK_MARK);
    const value = this.getValue();
    const mergedGetValueProps = getValueProps || (val => ({
      [valuePropName]: val
    }));
    const originTriggerFunc = childProps[trigger];
    const valueProps = name !== undefined ? mergedGetValueProps(value) : {};

    // warning when prop value is function
    if (false) // removed by dead control flow
{}
    const control = {
      ...childProps,
      ...valueProps
    };

    // Add trigger
    control[trigger] = (...args) => {
      // Mark as touched
      this.touched = true;
      this.dirty = true;
      this.triggerMetaEvent();
      let newValue;
      if (getValueFromEvent) {
        newValue = getValueFromEvent(...args);
      } else {
        newValue = defaultGetValueFromEvent(valuePropName, ...args);
      }
      if (normalize) {
        newValue = normalize(newValue, value, getFieldsValue(true));
      }
      if (newValue !== value) {
        dispatch({
          type: 'updateValue',
          namePath,
          value: newValue
        });
      }
      if (originTriggerFunc) {
        originTriggerFunc(...args);
      }
    };

    // Add validateTrigger
    const validateTriggerList = toArray(mergedValidateTrigger || []);
    validateTriggerList.forEach(triggerName => {
      // Wrap additional function of component, so that we can get latest value from store
      const originTrigger = control[triggerName];
      control[triggerName] = (...args) => {
        if (originTrigger) {
          originTrigger(...args);
        }

        // Always use latest rules
        const {
          rules
        } = this.props;
        if (rules && rules.length) {
          // We dispatch validate to root,
          // since it will update related data with other field with same name
          dispatch({
            type: 'validateField',
            namePath,
            triggerName
          });
        }
      };
    });
    return control;
  };
  render() {
    const {
      resetCount
    } = this.state;
    const {
      children
    } = this.props;
    const {
      child,
      isFunction
    } = this.getOnlyChild(children);

    // Not need to `cloneElement` since user can handle this in render function self
    let returnChildNode;
    if (isFunction) {
      returnChildNode = child;
    } else if ( /*#__PURE__*/react.isValidElement(child)) {
      returnChildNode = /*#__PURE__*/react.cloneElement(child, this.getControlled(child.props));
    } else {
      (0,es/* warning */.$e)(!child, '`children` of Field is not validate ReactElement.');
      returnChildNode = child;
    }
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: resetCount
    }, returnChildNode);
  }
}
function WrapperField({
  name,
  ...restProps
}) {
  const fieldContext = react.useContext(FieldContext);
  const listContext = react.useContext(es_ListContext);
  const namePath = name !== undefined ? getNamePath(name) : undefined;
  const isMergedListField = restProps.isListField ?? !!listContext;
  let key = 'keep';
  if (!isMergedListField) {
    key = `_${(namePath || []).join('_')}`;
  }

  // Warning if it's a directly list field.
  // We can still support multiple level field preserve.
  if (false) // removed by dead control flow
{}
  return /*#__PURE__*/react.createElement(Field, _extends({
    key: key,
    name: namePath,
    isListField: isMergedListField
  }, restProps, {
    fieldContext: fieldContext
  }));
}
/* harmony default export */ const es_Field = (WrapperField);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/List.js






function List({
  name,
  initialValue,
  children,
  rules,
  validateTrigger,
  isListField
}) {
  const context = react.useContext(FieldContext);
  const wrapperListContext = react.useContext(es_ListContext);
  const keyRef = react.useRef({
    keys: [],
    id: 0
  });
  const keyManager = keyRef.current;
  const prefixName = react.useMemo(() => {
    const parentPrefixName = getNamePath(context.prefixName) || [];
    return [...parentPrefixName, ...getNamePath(name)];
  }, [context.prefixName, name]);
  const fieldContext = react.useMemo(() => ({
    ...context,
    prefixName
  }), [context, prefixName]);

  // List context
  const listContext = react.useMemo(() => ({
    getKey: namePath => {
      const len = prefixName.length;
      const pathName = namePath[len];
      return [keyManager.keys[pathName], namePath.slice(len + 1)];
    }
  }), [keyManager, prefixName]);

  // User should not pass `children` as other type.
  if (typeof children !== 'function') {
    (0,es/* warning */.$e)(false, 'Form.List only accepts function as children.');
    return null;
  }
  const shouldUpdate = (prevValue, nextValue, {
    source
  }) => {
    if (source === 'internal') {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /*#__PURE__*/react.createElement(es_ListContext.Provider, {
    value: listContext
  }, /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: fieldContext
  }, /*#__PURE__*/react.createElement(es_Field, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true,
    isListField: isListField ?? !!wrapperListContext
  }, ({
    value = [],
    onChange
  }, meta) => {
    const {
      getFieldValue
    } = context;
    const getNewValue = () => {
      const values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */
    const operations = {
      add: (defaultValue, index) => {
        // Mapping keys
        const newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [...keyManager.keys.slice(0, index), keyManager.id, ...keyManager.keys.slice(index)];
          onChange([...newValue.slice(0, index), defaultValue, ...newValue.slice(index)]);
        } else {
          if (false) // removed by dead control flow
{}
          keyManager.keys = [...keyManager.keys, keyManager.id];
          onChange([...newValue, defaultValue]);
        }
        keyManager.id += 1;
      },
      remove: index => {
        const newValue = getNewValue();
        const indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter((_, keysIndex) => !indexSet.has(keysIndex));

        // Trigger store change
        onChange(newValue.filter((_, valueIndex) => !indexSet.has(valueIndex)));
      },
      move(from, to) {
        if (from === to) {
          return;
        }
        const newValue = getNewValue();

        // Do not handle out of range
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = move(keyManager.keys, from, to);

        // Trigger store change
        onChange(move(newValue, from, to));
      }
    };
    let listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (false) // removed by dead control flow
{}
    }
    return children(listValue.map((__, index) => {
      let key = keyManager.keys[index];
      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key,
        isListField: true
      };
    }), operations, meta);
  })));
}
/* harmony default export */ const es_List = (List);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  let hasError = false;
  let count = promiseList.length;
  const results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.catch(e => {
        hasError = true;
        return e;
      }).then(result => {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/utils/NameMap.js
const SPLIT = '__@field_split__';

/**
 * Convert name path into string to fast the fetch speed of Map.
 */
function normalize(namePath) {
  return namePath.map(cell => `${typeof cell}:${cell}`)
  // Magic split
  .join(SPLIT);
}

/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */
class NameMap {
  kvs = new Map();
  set(key, value) {
    this.kvs.set(normalize(key), value);
  }
  get(key) {
    return this.kvs.get(normalize(key));
  }
  getAsPrefix(key) {
    const normalizedKey = normalize(key);
    const normalizedPrefix = normalizedKey + SPLIT;
    const results = [];
    const current = this.kvs.get(normalizedKey);
    if (current !== undefined) {
      results.push(current);
    }
    this.kvs.forEach((value, itemNormalizedKey) => {
      if (itemNormalizedKey.startsWith(normalizedPrefix)) {
        results.push(value);
      }
    });
    return results;
  }
  update(key, updater) {
    const origin = this.get(key);
    const next = updater(origin);
    if (!next) {
      this.delete(key);
    } else {
      this.set(key, next);
    }
  }
  delete(key) {
    this.kvs.delete(normalize(key));
  }

  // Since we only use this in test, let simply realize this
  map(callback) {
    return [...this.kvs.entries()].map(([key, value]) => {
      const cells = key.split(SPLIT);
      return callback({
        key: cells.map(cell => {
          const [, type, unit] = cell.match(/^([^:]*):(.*)$/);
          return type === 'number' ? Number(unit) : unit;
        }),
        value
      });
    });
  }
  toJSON() {
    const json = {};
    this.map(({
      key,
      value
    }) => {
      json[key.join('.')] = value;
      return null;
    });
    return json;
  }
}
/* harmony default export */ const utils_NameMap = (NameMap);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/hooks/useForm.js








class FormStore {
  formHooked = false;
  forceRootUpdate;
  subscribable = true;
  store = {};
  fieldEntities = [];
  initialValues = {};
  callbacks = {};
  validateMessages = null;
  preserve = null;
  lastValidatePromise = null;
  watcherCenter = new WatcherCenter(this);
  constructor(forceRootUpdate) {
    this.forceRootUpdate = forceRootUpdate;
  }
  getForm = () => ({
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    getFieldError: this.getFieldError,
    getFieldWarning: this.getFieldWarning,
    getFieldsError: this.getFieldsError,
    isFieldsTouched: this.isFieldsTouched,
    isFieldTouched: this.isFieldTouched,
    isFieldValidating: this.isFieldValidating,
    isFieldsValidating: this.isFieldsValidating,
    resetFields: this.resetFields,
    setFields: this.setFields,
    setFieldValue: this.setFieldValue,
    setFieldsValue: this.setFieldsValue,
    validateFields: this.validateFields,
    submit: this.submit,
    _init: true,
    getInternalHooks: this.getInternalHooks
  });

  // ======================== Internal Hooks ========================
  getInternalHooks = key => {
    if (key === HOOK_MARK) {
      this.formHooked = true;
      return {
        dispatch: this.dispatch,
        initEntityValue: this.initEntityValue,
        registerField: this.registerField,
        useSubscribe: this.useSubscribe,
        setInitialValues: this.setInitialValues,
        destroyForm: this.destroyForm,
        setCallbacks: this.setCallbacks,
        setValidateMessages: this.setValidateMessages,
        getFields: this.getFields,
        setPreserve: this.setPreserve,
        getInitialValue: this.getInitialValue,
        registerWatch: this.registerWatch
      };
    }
    (0,es/* warning */.$e)(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };
  useSubscribe = subscribable => {
    this.subscribable = subscribable;
  };

  /**
   * Record prev Form unmount fieldEntities which config preserve false.
   * This need to be refill with initialValues instead of store value.
   */
  prevWithoutPreserves = null;

  /**
   * First time `setInitialValues` should update store with initial value
   */
  setInitialValues = (initialValues, init) => {
    this.initialValues = initialValues || {};
    if (init) {
      let nextStore = (0,es/* merge */.h1)(initialValues, this.store);

      // We will take consider prev form unmount fields.
      // When the field is not `preserve`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return
      this.prevWithoutPreserves?.map(({
        key: namePath
      }) => {
        nextStore = (0,es/* set */.hZ)(nextStore, namePath, (0,es/* get */.Jt)(initialValues, namePath));
      });
      this.prevWithoutPreserves = null;
      this.updateStore(nextStore);
    }
  };
  destroyForm = clearOnDestroy => {
    if (clearOnDestroy) {
      // destroy form reset store
      this.updateStore({});
    } else {
      // Fill preserve fields
      const prevWithoutPreserves = new utils_NameMap();
      this.getFieldEntities(true).forEach(entity => {
        if (!this.isMergedPreserve(entity.isPreserve())) {
          prevWithoutPreserves.set(entity.getNamePath(), true);
        }
      });
      this.prevWithoutPreserves = prevWithoutPreserves;
    }
  };
  getInitialValue = namePath => {
    const initValue = (0,es/* get */.Jt)(this.initialValues, namePath);

    // Not cloneDeep when without `namePath`
    return namePath.length ? (0,es/* merge */.h1)(initValue) : initValue;
  };
  setCallbacks = callbacks => {
    this.callbacks = callbacks;
  };
  setValidateMessages = validateMessages => {
    this.validateMessages = validateMessages;
  };
  setPreserve = preserve => {
    this.preserve = preserve;
  };

  // ============================= Watch ============================
  registerWatch = callback => {
    return this.watcherCenter.register(callback);
  };
  notifyWatch = (namePath = []) => {
    this.watcherCenter.notify(namePath);
  };

  // ========================== Dev Warning =========================
  timeoutId = null;
  warningUnhooked = () => {
    if (false) // removed by dead control flow
{}
  };

  // ============================ Store =============================
  updateStore = nextStore => {
    this.store = nextStore;
  };

  // ============================ Fields ============================
  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */
  getFieldEntities = (pure = false) => {
    if (!pure) {
      return this.fieldEntities;
    }
    return this.fieldEntities.filter(field => field.getNamePath().length);
  };

  /**
   * Get a map of registered field entities with their name path as the key.
   * @param pure Only include fields which have a `name`. Default: false
   * @returns A NameMap containing field entities indexed by their name paths
   */
  getFieldsMap = (pure = false) => {
    const cache = new utils_NameMap();
    this.getFieldEntities(pure).forEach(field => {
      const namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  };

  /**
   * Get field entities based on a list of name paths.
   * @param nameList - Array of name paths to search for. If not provided, returns all field entities with names.
   * @param includesSubNamePath - Whether to include fields that have the given name path as a prefix.
   */
  getFieldEntitiesForNamePathList = (nameList, includesSubNamePath = false) => {
    if (!nameList) {
      return this.getFieldEntities(true);
    }
    const cache = this.getFieldsMap(true);
    if (!includesSubNamePath) {
      return nameList.map(name => {
        const namePath = getNamePath(name);
        return cache.get(namePath) || {
          INVALIDATE_NAME_PATH: getNamePath(name)
        };
      });
    }
    return nameList.flatMap(name => {
      const namePath = getNamePath(name);
      const fields = cache.getAsPrefix(namePath);
      if (fields.length) {
        return fields;
      }
      return [{
        INVALIDATE_NAME_PATH: namePath
      }];
    });
  };
  getFieldsValue = (nameList, filterFunc) => {
    this.warningUnhooked();

    // Fill args
    let mergedNameList;
    let mergedFilterFunc;
    if (nameList === true || Array.isArray(nameList)) {
      mergedNameList = nameList;
      mergedFilterFunc = filterFunc;
    } else if (nameList && typeof nameList === 'object') {
      mergedFilterFunc = nameList.filter;
    }
    if (mergedNameList === true && !mergedFilterFunc) {
      return this.store;
    }
    const fieldEntities = this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null, true);
    const filteredNameList = [];
    const listNamePaths = [];
    fieldEntities.forEach(entity => {
      const namePath = entity.INVALIDATE_NAME_PATH || entity.getNamePath();

      // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count
      if (entity.isList?.()) {
        listNamePaths.push(namePath);
        return;
      }
      if (!mergedFilterFunc) {
        filteredNameList.push(namePath);
      } else {
        const meta = 'getMeta' in entity ? entity.getMeta() : null;
        if (mergedFilterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    let mergedValues = cloneByNamePathList(this.store, filteredNameList.map(getNamePath));

    // We need fill the list as [] if Form.List is empty
    listNamePaths.forEach(namePath => {
      if (!(0,es/* get */.Jt)(mergedValues, namePath)) {
        mergedValues = (0,es/* set */.hZ)(mergedValues, namePath, []);
      }
    });
    return mergedValues;
  };
  getFieldValue = name => {
    this.warningUnhooked();
    const namePath = getNamePath(name);
    return (0,es/* get */.Jt)(this.store, namePath);
  };
  getFieldsError = nameList => {
    this.warningUnhooked();
    const fieldEntities = this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map((entity, index) => {
      if (entity && !entity.INVALIDATE_NAME_PATH) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };
  getFieldError = name => {
    this.warningUnhooked();
    const namePath = getNamePath(name);
    const fieldError = this.getFieldsError([namePath])[0];
    return fieldError.errors;
  };
  getFieldWarning = name => {
    this.warningUnhooked();
    const namePath = getNamePath(name);
    const fieldError = this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  };
  isFieldsTouched = (...args) => {
    this.warningUnhooked();
    const [arg0, arg1] = args;
    let namePathList;
    let isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    const fieldEntities = this.getFieldEntities(true);
    const isFieldTouched = field => field.isFieldTouched();

    // ===== Will get fully compare when not config namePathList =====
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(entity => isFieldTouched(entity) || entity.isList()) : fieldEntities.some(isFieldTouched);
    }

    // Generate a nest tree for validate
    const map = new utils_NameMap();
    namePathList.forEach(shortNamePath => {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(field => {
      const fieldNamePath = field.getNamePath();

      // Find matched entity and put into list
      namePathList.forEach(shortNamePath => {
        if (shortNamePath.every((nameUnit, i) => fieldNamePath[i] === nameUnit)) {
          map.update(shortNamePath, list => [...list, field]);
        }
      });
    });

    // Check if NameMap value is touched
    const isNamePathListTouched = entities => entities.some(isFieldTouched);
    const namePathListEntities = map.map(({
      value
    }) => value);
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };
  isFieldTouched = name => {
    this.warningUnhooked();
    return this.isFieldsTouched([name]);
  };
  isFieldsValidating = nameList => {
    this.warningUnhooked();
    const fieldEntities = this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(testField => testField.isFieldValidating());
    }
    const namePathList = nameList.map(getNamePath);
    return fieldEntities.some(testField => {
      const fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };
  isFieldValidating = name => {
    this.warningUnhooked();
    return this.isFieldsValidating([name]);
  };

  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */
  resetWithFieldInitialValue = (info = {}) => {
    // Create cache
    const cache = new utils_NameMap();
    const fieldEntities = this.getFieldEntities(true);
    fieldEntities.forEach(field => {
      const {
        initialValue
      } = field.props;
      const namePath = field.getNamePath();

      // Record only if has `initialValue`
      if (initialValue !== undefined) {
        const records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });

    // Reset
    const resetWithFields = entities => {
      entities.forEach(field => {
        const {
          initialValue
        } = field.props;
        if (initialValue !== undefined) {
          const namePath = field.getNamePath();
          const formInitialValue = this.getInitialValue(namePath);
          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0,es/* warning */.$e)(false, `Form already set 'initialValues' with path '${namePath.join('.')}'. Field can not overwrite it.`);
          } else {
            const records = cache.get(namePath);
            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              (0,es/* warning */.$e)(false, `Multiple Field with path '${namePath.join('.')}' set 'initialValue'. Can not decide which one to pick.`);
            } else if (records) {
              const originValue = this.getFieldValue(namePath);
              const isListField = field.isListField();

              // Set `initialValue`
              if (!isListField && (!info.skipExist || originValue === undefined)) {
                this.updateStore((0,es/* set */.hZ)(this.store, namePath, [...records][0].value));
              }
            }
          }
        }
      });
    };
    let requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(namePath => {
        const records = cache.get(namePath);
        if (records) {
          requiredFieldEntities.push(...[...records].map(r => r.entity));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  };
  resetFields = nameList => {
    this.warningUnhooked();
    const prevStore = this.store;
    if (!nameList) {
      this.updateStore((0,es/* merge */.h1)(this.initialValues));
      this.resetWithFieldInitialValue();
      this.notifyObservers(prevStore, null, {
        type: 'reset'
      });
      this.notifyWatch();
      return;
    }

    // Reset by `nameList`
    const namePathList = nameList.map(getNamePath);
    namePathList.forEach(namePath => {
      const initialValue = this.getInitialValue(namePath);
      this.updateStore((0,es/* set */.hZ)(this.store, namePath, initialValue));
    });
    this.resetWithFieldInitialValue({
      namePathList
    });
    this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
    this.notifyWatch(namePathList);
  };
  setFields = fields => {
    this.warningUnhooked();
    const prevStore = this.store;
    const namePathList = [];
    fields.forEach(fieldData => {
      const {
        name,
        ...data
      } = fieldData;
      const namePath = getNamePath(name);
      namePathList.push(namePath);

      // Value
      if ('value' in data) {
        this.updateStore((0,es/* set */.hZ)(this.store, namePath, data.value));
      }
      this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
    this.notifyWatch(namePathList);
  };
  getFields = () => {
    const entities = this.getFieldEntities(true);
    const fields = entities.map(field => {
      const namePath = field.getNamePath();
      const meta = field.getMeta();
      const fieldData = {
        ...meta,
        name: namePath,
        value: this.getFieldValue(namePath)
      };
      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  };

  // =========================== Observer ===========================
  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */
  initEntityValue = entity => {
    const {
      initialValue
    } = entity.props;
    if (initialValue !== undefined) {
      const namePath = entity.getNamePath();
      const prevValue = (0,es/* get */.Jt)(this.store, namePath);
      if (prevValue === undefined) {
        this.updateStore((0,es/* set */.hZ)(this.store, namePath, initialValue));
      }
    }
  };
  isMergedPreserve = fieldPreserve => {
    const mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : this.preserve;
    return mergedPreserve ?? true;
  };
  registerField = entity => {
    this.fieldEntities.push(entity);
    const namePath = entity.getNamePath();
    this.notifyWatch([namePath]);

    // Set initial values
    if (entity.props.initialValue !== undefined) {
      const prevStore = this.store;
      this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    }

    // un-register field callback
    return (isListField, preserve, subNamePath = []) => {
      this.fieldEntities = this.fieldEntities.filter(item => item !== entity);

      // Clean up store value if not preserve
      if (!this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        const defaultValue = isListField ? undefined : this.getInitialValue(namePath);
        if (namePath.length && this.getFieldValue(namePath) !== defaultValue && this.fieldEntities.every(field =>
        // Only reset when no namePath exist
        !matchNamePath(field.getNamePath(), namePath))) {
          const prevStore = this.store;
          this.updateStore((0,es/* set */.hZ)(prevStore, namePath, defaultValue, true));

          // Notify that field is unmount
          this.notifyObservers(prevStore, [namePath], {
            type: 'remove'
          });

          // Dependencies update
          this.triggerDependenciesUpdate(prevStore, namePath);
        }
      }
      this.notifyWatch([namePath]);
    };
  };
  dispatch = action => {
    switch (action.type) {
      case 'updateValue':
        {
          const {
            namePath,
            value
          } = action;
          this.updateValue(namePath, value);
          break;
        }
      case 'validateField':
        {
          const {
            namePath,
            triggerName
          } = action;
          this.validateFields([namePath], {
            triggerName
          });
          break;
        }
      default:
      // Currently we don't have other action. Do nothing.
    }
  };
  notifyObservers = (prevStore, namePathList, info) => {
    if (this.subscribable) {
      const mergedInfo = {
        ...info,
        store: this.getFieldsValue(true)
      };
      this.getFieldEntities().forEach(({
        onStoreChange
      }) => {
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  /**
   * Notify dependencies children with parent update
   * We need delay to trigger validate in case Field is under render props
   */
  triggerDependenciesUpdate = (prevStore, namePath) => {
    const childrenFields = this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      this.validateFields(childrenFields, {
        // Delay to avoid `useWatch` dynamic adjust rules that deps not get latest one
        delayFrame: true
      });
    }
    this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath, ...childrenFields]
    });
    return childrenFields;
  };
  updateValue = (name, value) => {
    const namePath = getNamePath(name);
    const prevStore = this.store;
    this.updateStore((0,es/* set */.hZ)(this.store, namePath, value));
    this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });
    this.notifyWatch([namePath]);

    // Dependencies update
    const childrenFields = this.triggerDependenciesUpdate(prevStore, namePath);

    // trigger callback function
    const {
      onValuesChange
    } = this.callbacks;
    if (onValuesChange) {
      const changedValues = cloneByNamePathList(this.store, [namePath]);
      const allValues = this.getFieldsValue();
      const mergedAllValues = (0,es/* set */.hZ)(allValues, namePath, (0,es/* get */.Jt)(changedValues, namePath));
      onValuesChange(changedValues, mergedAllValues);
    }
    this.triggerOnFieldsChange([namePath, ...childrenFields]);
  };

  // Let all child Field get update.
  setFieldsValue = store => {
    this.warningUnhooked();
    const prevStore = this.store;
    if (store) {
      const nextStore = (0,es/* merge */.h1)(this.store, store);
      this.updateStore(nextStore);
    }
    this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
    this.notifyWatch();
  };
  setFieldValue = (name, value) => {
    this.setFields([{
      name,
      value,
      errors: [],
      warnings: [],
      touched: true
    }]);
  };
  getDependencyChildrenFields = rootNamePath => {
    const children = new Set();
    const childrenFields = [];
    const dependencies2fields = new utils_NameMap();

    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */
    this.getFieldEntities().forEach(field => {
      const {
        dependencies
      } = field.props;
      (dependencies || []).forEach(dependency => {
        const dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, (fields = new Set()) => {
          fields.add(field);
          return fields;
        });
      });
    });
    const fillChildren = namePath => {
      const fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(field => {
        if (!children.has(field)) {
          children.add(field);
          const fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  };
  triggerOnFieldsChange = (namePathList, filedErrors) => {
    const {
      onFieldsChange
    } = this.callbacks;
    if (onFieldsChange) {
      const fields = this.getFields();

      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */
      if (filedErrors) {
        const cache = new utils_NameMap();
        filedErrors.forEach(({
          name,
          errors
        }) => {
          cache.set(name, errors);
        });
        fields.forEach(field => {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      const changedFields = fields.filter(({
        name: fieldName
      }) => containsNamePath(namePathList, fieldName));
      if (changedFields.length) {
        onFieldsChange(changedFields, fields);
      }
    }
  };

  // =========================== Validate ===========================
  validateFields = (arg1, arg2) => {
    this.warningUnhooked();
    let nameList;
    let options;
    if (Array.isArray(arg1) || typeof arg1 === 'string' || typeof arg2 === 'string') {
      nameList = arg1;
      options = arg2;
    } else {
      options = arg1;
    }
    const provideNameList = !!nameList;
    const namePathList = provideNameList ? nameList.map(getNamePath) : [];
    // Same namePathList, but does not include Form.List name
    const finalValueNamePathList = [...namePathList];

    // Collect result in promise list
    const promiseList = [];

    // We temp save the path which need trigger for `onFieldsChange`
    const TMP_SPLIT = String(Date.now());
    const validateNamePathList = new Set();
    const {
      recursive,
      dirty
    } = options || {};
    this.getFieldEntities(true).forEach(field => {
      const fieldNamePath = field.getNamePath();

      // Add field if not provide `nameList`
      if (!provideNameList) {
        if (
        // If is field, pass directly
        !field.isList() ||
        // If is list, do not add if already exist sub field in the namePathList
        !namePathList.some(name => matchNamePath(name, fieldNamePath, true))) {
          finalValueNamePathList.push(fieldNamePath);
        }
        namePathList.push(fieldNamePath);
      }

      // Skip if without rule
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      // Skip if only validate dirty field
      if (dirty && !field.isFieldDirty()) {
        return;
      }
      validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));

      // Add field validate rule in to promise list
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
        const promise = field.validateRules({
          validateMessages: {
            ...defaultValidateMessages,
            ...this.validateMessages
          },
          ...options
        });

        // Wrap promise with field
        promiseList.push(promise.then(() => ({
          name: fieldNamePath,
          errors: [],
          warnings: []
        })).catch(ruleErrors => {
          const mergedErrors = [];
          const mergedWarnings = [];
          ruleErrors.forEach?.(({
            rule: {
              warningOnly
            },
            errors
          }) => {
            if (warningOnly) {
              mergedWarnings.push(...errors);
            } else {
              mergedErrors.push(...errors);
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    const summaryPromise = allPromiseFinish(promiseList);
    this.lastValidatePromise = summaryPromise;

    // Notify fields with rule that validate has finished and need update
    summaryPromise.catch(results => results).then(results => {
      const resultNamePathList = results.map(({
        name
      }) => name);
      this.notifyObservers(this.store, resultNamePathList, {
        type: 'validateFinish'
      });
      this.triggerOnFieldsChange(resultNamePathList, results);
    });
    const returnPromise = summaryPromise.then(() => {
      if (this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(this.getFieldsValue(finalValueNamePathList));
      }
      return Promise.reject([]);
    }).catch(results => {
      const errorList = results.filter(result => result && result.errors.length);
      const errorMessage = errorList[0]?.errors?.[0];
      return Promise.reject({
        message: errorMessage,
        values: this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: this.lastValidatePromise !== summaryPromise
      });
    });

    // Do not throw in console
    returnPromise.catch(e => e);

    // `validating` changed. Trigger `onFieldsChange`
    const triggerNamePathList = namePathList.filter(namePath => validateNamePathList.has(namePath.join(TMP_SPLIT)));
    this.triggerOnFieldsChange(triggerNamePathList);
    return returnPromise;
  };

  // ============================ Submit ============================
  submit = () => {
    this.warningUnhooked();
    this.validateFields().then(values => {
      const {
        onFinish
      } = this.callbacks;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(e => {
      const {
        onFinishFailed
      } = this.callbacks;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };
}
function useForm(form) {
  const formRef = react.useRef(null);
  const [, forceUpdate] = react.useState({});

  // Create singleton FormStore
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      const forceReRender = () => {
        forceUpdate({});
      };
      const formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
/* harmony default export */ const hooks_useForm = (useForm);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/FormContext.js

const FormContext = /*#__PURE__*/react.createContext({
  triggerFormChange: () => {},
  triggerFormFinish: () => {},
  registerForm: () => {},
  unregisterForm: () => {}
});
const FormProvider = ({
  validateMessages,
  onFormChange,
  onFormFinish,
  children
}) => {
  const formContext = react.useContext(FormContext);
  const formsRef = react.useRef({});
  return /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: {
      ...formContext,
      validateMessages: {
        ...formContext.validateMessages,
        ...validateMessages
      },
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: (name, changedFields) => {
        if (onFormChange) {
          onFormChange(name, {
            changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: (name, values) => {
        if (onFormFinish) {
          onFormFinish(name, {
            values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: (name, form) => {
        if (name) {
          formsRef.current = {
            ...formsRef.current,
            [name]: form
          };
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: name => {
        const newForms = {
          ...formsRef.current
        };
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    }
  }, children);
};

/* harmony default export */ const es_FormContext = (FormContext);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/Form.js
function Form_extends() { Form_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Form_extends.apply(this, arguments); }






const Form = (props, ref) => {
  const {
    name,
    initialValues,
    fields,
    form,
    preserve,
    children,
    component: Component = 'form',
    validateMessages,
    validateTrigger = 'onChange',
    onValuesChange,
    onFieldsChange,
    onFinish,
    onFinishFailed,
    clearOnDestroy,
    ...restProps
  } = props;
  const nativeElementRef = react.useRef(null);
  const formContext = react.useContext(es_FormContext);

  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  const [formInstance] = hooks_useForm(form);
  const {
    useSubscribe,
    setInitialValues,
    setCallbacks,
    setValidateMessages,
    setPreserve,
    destroyForm
  } = formInstance.getInternalHooks(HOOK_MARK);

  // Pass ref with form instance
  react.useImperativeHandle(ref, () => ({
    ...formInstance,
    nativeElement: nativeElementRef.current
  }));

  // Register form into Context
  react.useEffect(() => {
    formContext.registerForm(name, formInstance);
    return () => {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);

  // Pass props to store
  setValidateMessages({
    ...formContext.validateMessages,
    ...validateMessages
  });
  setCallbacks({
    onValuesChange,
    onFieldsChange: (changedFields, ...rest) => {
      formContext.triggerFormChange(name, changedFields);
      if (onFieldsChange) {
        onFieldsChange(changedFields, ...rest);
      }
    },
    onFinish: values => {
      formContext.triggerFormFinish(name, values);
      if (onFinish) {
        onFinish(values);
      }
    },
    onFinishFailed
  });
  setPreserve(preserve);

  // Set initial value, init store value when first mount
  const mountRef = react.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }

  // ========================== Unmount ===========================
  react.useEffect(() => () => destroyForm(clearOnDestroy),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  // Prepare children by `children` type
  let childrenNode;
  const childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    const values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  }

  // Not use subscribe when using render props
  useSubscribe(!childrenRenderProps);

  // Listen if fields provided. We use ref to save prev data here to avoid additional render
  const prevFieldsRef = react.useRef(null);
  react.useEffect(() => {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);

  // =========================== Render ===========================
  const formContextValue = react.useMemo(() => ({
    ...formInstance,
    validateTrigger
  }), [formInstance, validateTrigger]);
  const wrapperNode = /*#__PURE__*/react.createElement(es_ListContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component === false) {
    return wrapperNode;
  }
  return /*#__PURE__*/react.createElement(Component, Form_extends({}, restProps, {
    ref: nativeElementRef,
    onSubmit: event => {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: event => {
      event.preventDefault();
      formInstance.resetFields();
      restProps.onReset?.(event);
    }
  }), wrapperNode);
};
/* harmony default export */ const es_Form = (Form);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/hooks/useWatch.js





function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch {
    return Math.random();
  }
}

// ------- selector type -------

// ------- selector type end -------

function useWatch(...args) {
  const [dependencies, _form = {}] = args;
  const options = isFormInstance(_form) ? {
    form: _form
  } : _form;
  const form = options.form;
  const [value, setValue] = (0,react.useState)(() => typeof dependencies === 'function' ? dependencies({}) : undefined);
  const valueStr = (0,react.useMemo)(() => stringify(value), [value]);
  const valueStrRef = (0,react.useRef)(valueStr);
  valueStrRef.current = valueStr;
  const fieldContext = (0,react.useContext)(FieldContext);
  const formInstance = form || fieldContext;
  const isValidForm = formInstance && formInstance._init;

  // Warning if not exist form instance
  if (false) // removed by dead control flow
{}

  // ============================== Form ==============================
  const {
    getFieldsValue,
    getInternalHooks
  } = formInstance;
  const {
    registerWatch
  } = getInternalHooks(HOOK_MARK);

  // ============================= Update =============================
  const triggerUpdate = (0,es/* useEvent */._q)((values, allValues) => {
    const watchValue = options.preserve ? allValues ?? getFieldsValue(true) : values ?? getFieldsValue();
    const nextValue = typeof dependencies === 'function' ? dependencies(watchValue) : (0,es/* get */.Jt)(watchValue, getNamePath(dependencies));
    if (stringify(value) !== stringify(nextValue)) {
      setValue(nextValue);
    }
  });

  // ============================= Effect =============================
  const flattenDeps = typeof dependencies === 'function' ? dependencies : JSON.stringify(dependencies);

  // Deps changed
  (0,react.useEffect)(() => {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }
    triggerUpdate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValidForm, flattenDeps]);

  // Value changed
  (0,react.useEffect)(() => {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }
    const cancelRegister = registerWatch((values, allValues) => {
      triggerUpdate(values, allValues);
    });
    return cancelRegister;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValidForm]);
  return value;
}
/* harmony default export */ const hooks_useWatch = (useWatch);
;// ./node_modules/.pnpm/@rc-component+form@1.8.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/form/es/index.js









const InternalForm = /*#__PURE__*/react.forwardRef(es_Form);
const RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = es_Field;
RefForm.List = es_List;
RefForm.useForm = hooks_useForm;
RefForm.useWatch = hooks_useWatch;

/* harmony default export */ const form_es = ((/* unused pure expression or super */ null && (RefForm)));

/***/ },

/***/ 75494
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13526);

const _InputStatuses = (/* unused pure expression or super */ null && (['warning', 'error', '', 'success', 'validating']));
const getStatusClassNames = (prefixCls, status, hasFeedback) => {
  return (0,clsx__WEBPACK_IMPORTED_MODULE_0__/* .clsx */ .$)({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
};
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "L", 0, /* binding */ getStatusClassNames,
/* harmony export */   "v", 0, /* binding */ getMergedStatus
/* harmony export */ ]);


/***/ },

/***/ 8377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */
const useCSSVarCls = prefixCls => `${prefixCls}-css-var`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCSSVarCls);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 38625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports FormContext, NoStyleItemContext, FormProvider, FormItemPrefixContext */
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var RcFormProvider;
/* unused harmony import specifier */ var omit;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _rc_component_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1203);
/* harmony import */ var _rc_component_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23392);
"use client";




const FormContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext({
  labelAlign: 'right',
  layout: 'horizontal',
  itemRef: () => {}
})));
const NoStyleItemContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));
const FormProvider = props => {
  const providerProps = omit(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(RcFormProvider, {
    ...providerProps
  });
};
const FormItemPrefixContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext({
  prefixCls: ''
})));
const FormItemInputContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) // removed by dead control flow
{}
const NoFormStyle = ({
  children,
  status,
  override
}) => {
  const formItemInputContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormItemInputContext);
  const newFormItemInputContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const newContext = {
      ...formItemInputContext
    };
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
const VariantContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "$W", 0, /* binding */ FormItemInputContext,
/* harmony export */   "Pp", 0, /* binding */ VariantContext,
/* harmony export */   "XB", 0, /* binding */ NoFormStyle
/* harmony export */ ]);


/***/ }

}]);