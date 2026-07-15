import { atom } from 'recoil';
import type { Conversation } from '../types';

const STORAGE_KEYS = {
  CONVERSATIONS: 'mimo-chat-conversations',
  SETTINGS: 'mimo-chat-settings',
} as const;

/** LocalStorage effect：自动同步 atom 值到 localStorage */
const localStorageEffect = <T,>(key: string) =>
  ({ setSelf, onSet }: { setSelf: (value: T | Promise<T>) => void; onSet: (cb: (newValue: T | unknown, oldValue: T | unknown, isReset: boolean) => void) => void }) => {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      try {
        setSelf(JSON.parse(saved));
      } catch {
        // ignore parse errors
      }
    }
    onSet((newValue, _oldValue, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

/** 所有对话记录 */
export const conversationsAtom = atom<Conversation[]>({
  key: 'chat-conversations',
  default: [],
  effects: [localStorageEffect<Conversation[]>(STORAGE_KEYS.CONVERSATIONS)],
});

/** 当前活跃对话 ID */
export const activeConversationIdAtom = atom<string | null>({
  key: 'chat-active-conversation-id',
  default: null,
});

/** 是否正在流式接收 */
export const isStreamingAtom = atom<boolean>({
  key: 'chat-is-streaming',
  default: false,
});

/** 选中的模型 */
export const selectedModelAtom = atom<string>({
  key: 'chat-selected-model',
  default: 'mimo-v2.5',
});

/** 用户设置（仅模型选择，不含 key 和 url） */
export const settingsAtom = atom<{ model: string }>({
  key: 'chat-settings',
  default: {
    model: 'mimo-v2.5',
  },
  effects: [localStorageEffect<{ model: string }>(STORAGE_KEYS.SETTINGS)],
});
