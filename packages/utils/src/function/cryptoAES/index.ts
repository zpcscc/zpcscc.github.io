import { CrypterAES } from './cryptoAES';

/**
 * @name 加密
 * @param decryptData 需要加密的文本数据
 * @param keyStr 密钥
 */
export const Encrypt = (decryptData: string, keyStr: string) => {
  // 若没有数据则直接返回空
  if (!decryptData || !keyStr) return;
  // 实例化加密解密工具
  const dbCrypter = new CrypterAES();
  // 设置密钥
  dbCrypter.updateKey(keyStr);
  return dbCrypter.encrypt(decryptData);
};

/**
 * @name 解密
 * @param encryptData 需要解密的文本数据
 * @param keyStr 密钥
 */
export const decrypt = (encryptData: string, keyStr: string) => {
  // 若没有数据则直接返回空
  if (!encryptData || !keyStr) return;
  // 实例化加密解密工具
  const dbCrypter = new CrypterAES();
  // 设置密钥
  dbCrypter.updateKey(keyStr);
  return dbCrypter.decrypt(encryptData, '是否只使用base64加密，缩小代码大小');
};
