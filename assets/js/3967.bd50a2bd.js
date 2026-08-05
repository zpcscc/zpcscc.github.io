"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[3967],{

/***/ 83967
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * @name toAbsolutePath
 * @description 相对路径转绝对路径
 * @param {string} url 相对路径url
 * @return {string} 返回绝对路径url
 * @example <caption>ts类型</caption>
toAbsolutePath(data:string)
 * @example <caption>demo</caption>
import { toAbsolutePath } from '@zpcscc/utils';

console.log(toAbsolutePath('/img/logo.png')); // https://zpcscc.top/img/logo.png
 */const toAbsolutePath=url=>{const a=document.createElement('a');a.href=url;return a.href;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toAbsolutePath);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);