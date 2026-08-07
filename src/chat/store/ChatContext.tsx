import { createContext, useContext, useState, useCallback, type Dispatch, type ReactNode, type SetStateAction } from 'react';
import type { Conversation } from '../types';

const STORAGE_KEYS = {
  CONVERSATIONS: 'mimo-chat-conversations',
  SETTINGS: 'mimo-chat-settings',
} as const;

const loadFromStorage = <T,>(key: string, fallback: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved === null ? fallback : JSON.parse(saved);
  } catch {
    return fallback;
  }
};

type ChatState = {
  conversations: Conversation[];
  activeConversationId: string | null;
  isStreaming: boolean;
  settings: { model: string };
  setConversations: Dispatch<SetStateAction<Conversation[]>>;
  setActiveConversationId: Dispatch<SetStateAction<string | null>>;
  setIsStreaming: Dispatch<SetStateAction<boolean>>;
  setSettings: Dispatch<SetStateAction<{ model: string }>>;
};

const ChatContext = createContext<ChatState | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [conversations, setConversationsRaw] = useState<Conversation[]>(() =>
    loadFromStorage<Conversation[]>(STORAGE_KEYS.CONVERSATIONS, []),
  );
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [settings, setSettingsRaw] = useState<{ model: string }>(() =>
    loadFromStorage<{ model: string }>(STORAGE_KEYS.SETTINGS, { model: 'mimo-v2.5' }),
  );

  const setConversations: typeof setConversationsRaw = useCallback((value) => {
    setConversationsRaw((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(next));
      return next;
    });
  }, []);

  const setSettings: typeof setSettingsRaw = useCallback((value) => {
    setSettingsRaw((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeConversationId,
        isStreaming,
        settings,
        setConversations,
        setActiveConversationId,
        setIsStreaming,
        setSettings,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    throw new Error('useChatContext must be used within ChatProvider');
  }
  return ctx;
};
