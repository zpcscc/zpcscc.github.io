// * 加载 CryptoJS
import CryptoJS from 'crypto-js/core'
import 'crypto-js/enc-base64'
import 'crypto-js/aes'


// * 后文变量命名中的 DS 表示 DataStructure，Crypto所用的数据结构
const defaultCfg = {
  key: '1111111111111111',
  iv: '0000000000000000',
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
  encryptedFormat: 'Hex',
  decryptedFormat: 'Utf8',
}

// * 预处理设置，key 和 iv 需要转义成 DS 结构
const formatCfg = (rawCfg: typeof defaultCfg) => ({
  key: CryptoJS.enc.Utf8.parse(rawCfg.key),
  AEScfg: {
    iv: CryptoJS.enc.Utf8.parse(rawCfg.iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  },
})

type KeyHandler = (key: string) => string

type Config = ReturnType<typeof formatCfg>

const AES_Encrypt = (data: any, cfg: Config, dataType?: string): string => {
  // * 如果是对象 需要先字符串化（否则无法直接加密）
  const dataStr = typeof data === 'string' ? data : JSON.stringify(data)

  // * CryptoJS.AES.encrypt 只能解析 DS， 因此需要将 str 结构化
  const CryptoDS = CryptoJS.enc.Utf8.parse(dataStr)

  const encryptedDS = CryptoJS.AES.encrypt(CryptoDS, cfg.key, cfg.AEScfg)

  const encryptedStr = encryptedDS.ciphertext.toString().toUpperCase()

  return dataType ? encryptedDS.toString() : encryptedStr
}

const AES_Decrypt = (
  hexStr: string,
  withCfg: Config,
  dataType?: string
): any => {
  let base64Str: string = ''
  // 有dataType则传进来的直接是base64的数据
  if (dataType) {
    base64Str = hexStr
  } else {
    // * CryptoJS.AES.decrypt 只能解析 base64， 因此需要将 hexStr 转码成 base64Str
    const CryptoDS = CryptoJS.enc.Hex.parse(hexStr)
    base64Str = CryptoJS.enc.Base64.stringify(CryptoDS)
  }

  const decryptedDS = CryptoJS.AES.decrypt(
    base64Str,
    withCfg.key,
    withCfg.AEScfg
  )

  const decryptedStr = decryptedDS.toString(CryptoJS.enc.Utf8)

  // * 如果是对象等结构，尝试 JSON 化
  let parsedData = decryptedStr
  try {
    parsedData = JSON.parse(decryptedStr)
  } catch (error) {}

  return parsedData
}

/**
 * @description 简单封装 Crypto.js，给数据库提供AES加密解密方法
 * crypto.js 的 key 支持16位字符串 规则需要约定
 */
class CrypterAES {
  private _key: string = ''
  private currentCfg = formatCfg(defaultCfg)

  // * 截取16位key
  private keyHandler = (key: string) => ('' + key).slice(0, 16).padEnd(16)

  constructor(key?: string, keyHandler?: KeyHandler) {
    if (keyHandler) this.updateKeyHandler(keyHandler)
    if (key) this.updateKey(key)
  }

  updateKeyHandler(fn: KeyHandler) {
    this.keyHandler = fn
  }
  updateKey(key?: string) {
    if (!key) return
    key = this.keyHandler(key)
    this._key = key
    this.currentCfg.key = CryptoJS.enc.Utf8.parse(key)
  }
  getKey() {
    return this._key
  }
  encrypt(data: any, dataType?: string) {
    return AES_Encrypt(data, this.currentCfg, dataType)
  }
  decrypt(data: string, dataType?: string) {
    return AES_Decrypt(data || '', this.currentCfg, dataType)
  }
}

export { CrypterAES }
