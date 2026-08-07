import { useCallback } from 'react';
import getUuId from '@/utils/getUuId';
import { useChatContext } from '../store/ChatContext';
import type { Conversation, ContentPart, Message } from '../types';

/** 从用户消息提取标题 */
const extractTitle = (content: string | ContentPart[]): string => {
  const text =
    typeof content === 'string'
      ? content
      : content
          .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
          .map((p) => p.text)
          .join('');
  return text.slice(0, 30) || '新对话';
};

export const useConversation = () => {
  const { conversations, setConversations, activeConversationId: activeId, setActiveConversationId: setActiveId } = useChatContext();

  const activeConversation = conversations.find((c) => c.id === activeId) || null;

  const createConversation = useCallback(
    (model: string) => {
      const id = getUuId(8);
      const conv: Conversation = {
        id,
        title: '新对话',
        messages: [],
        model,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      setConversations((prev) => [conv, ...prev]);
      setActiveId(id);
      return conv;
    },
    [setConversations, setActiveId],
  );

  const deleteConversation = useCallback(
    (id: string) => {
      setConversations((prev) => prev.filter((c) => c.id !== id));
      if (activeId === id) { setActiveId(null); }
    },
    [activeId, setConversations, setActiveId],
  );

  const addMessage = useCallback(
    (convId: string, message: Message) => {
      setConversations((prev) =>
        prev.map((c) => {
          if (c.id !== convId) { return c; }
          const updated = { ...c, messages: [...c.messages, message], updatedAt: Date.now() };
          if (c.title === '新对话' && message.role === 'user') {
            updated.title = extractTitle(message.content);
          }
          return updated;
        }),
      );
    },
    [setConversations],
  );

  const updateMessage = useCallback(
    (convId: string, msgId: string, updates: Partial<Message>) => {
      setConversations((prev) =>
        prev.map((c) => {
          if (c.id !== convId) { return c; }
          return {
            ...c,
            messages: c.messages.map((m) => (m.id === msgId ? { ...m, ...updates } : m)),
            updatedAt: Date.now(),
          };
        }),
      );
    },
    [setConversations],
  );

  const appendToMessage = useCallback(
    (convId: string, msgId: string, chunk: string) => {
      setConversations((prev) =>
        prev.map((c) => {
          if (c.id !== convId) { return c; }
          return {
            ...c,
            messages: c.messages.map((m) => {
              if (m.id !== msgId) { return m; }
              const prevContent = typeof m.content === 'string' ? m.content : '';
              return { ...m, content: prevContent + chunk };
            }),
            updatedAt: Date.now(),
          };
        }),
      );
    },
    [setConversations],
  );

  return {
    conversations,
    activeId,
    activeConversation,
    setActiveId,
    createConversation,
    deleteConversation,
    addMessage,
    updateMessage,
    appendToMessage,
  };
};
