// Mock pdfjs-dist for SSR builds
// Provides minimal stubs to prevent "window/document is not defined" errors
const mock = {
  GlobalWorkerOptions: { workerSrc: '' },
};
module.exports = mock;
module.exports.default = mock;
