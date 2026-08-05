/**
 * @name 判断是否为苹果公司的设备（包括 iOS 和 macOS Safari）
 * @returns {boolean} 返回布尔值
 */
const isApple = (): boolean => {
  const userAgent = navigator.userAgent;
  // 检测 iOS 设备（iPhone、iPad、iPod）
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS 13+
  // 检测 macOS Safari 浏览器，排除 Chrome、Edge 和 Firefox
  const isMacSafari = /Macintosh/.test(userAgent) &&
    /Safari/.test(userAgent) &&
    !/Chrome|CriOS|Edg|Edge|Firefox/.test(userAgent);
  return isIOS || isMacSafari;
};

export default isApple;
