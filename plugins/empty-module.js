// 空模块，用于 SSR 时替换 browser-only 的 clipboard 依赖
// 提供一个空的 mock 构造函数，避免 SSR 报错
function MockClipboard() {}
MockClipboard.prototype.on = function () {};
MockClipboard.prototype.destroy = function () {};
module.exports = MockClipboard;
module.exports.default = MockClipboard;
