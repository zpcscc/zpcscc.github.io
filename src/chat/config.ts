import cryptoAES from '@/thirdparty/crypto/cryptoAES';

/** 加密存储的 API 配置（不允许用户修改） */
const ENCRYPTED_API_KEY = '1C18435B86DF9D6E28441F6E726DA75DC4E5B992E78C39477FCF895A72D81ADD30E3157C36AE2E280A4E6194894CDBE2F4779DFA1315402296CB76BE0A372CD9';
const CRYPTO_KEY = 'mimo-chat-sec-key';

export const API_CONFIG = {
  baseUrl: 'https://token-plan-cn.xiaomimimo.com',
} as const;

/** 模型选项列表 */
export const MODEL_OPTIONS = [
  { value: 'mimo-v2.5', label: 'MiMo V2.5（性价比）' },
  { value: 'mimo-v2.5-pro', label: 'MiMo V2.5 Pro（旗舰）' },
] as const;

/** 获取解密后的 API Key */
export const getApiKey = (): string => cryptoAES.decrypt(ENCRYPTED_API_KEY, CRYPTO_KEY);
