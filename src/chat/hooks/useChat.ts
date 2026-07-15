import { useCallback, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import getUuId from '@/utils/getUuId';
import { isStreamingAtom, settingsAtom } from '../store/atoms';
import { createChatCompletion } from '../services/mimoApi';
import { useConversation } from './useConversation';
import { API_CONFIG, getApiKey } from '../config';
import type { FileAttachment, Message, ContentPart, ApiMessage } from '../types';

/** 将附件转为 ContentPart[] */
const attachmentsToParts = (attachments: FileAttachment[]): ContentPart[] =>
  attachments.map((att) => {
    if (att.type === 'image' && att.base64) {
      return { type: 'image_url' as const, image_url: { url: att.base64 } };
    }
    if (att.type === 'audio' && att.base64) {
      const base64Data = att.base64.split(',', 2)[1] || att.base64;
      return { type: 'input_audio' as const, input_audio: { data: base64Data, format: 'webm' } };
    }
    if (att.type === 'video' && att.base64) {
      return { type: 'video_url' as const, video_url: { url: att.base64 } };
    }
    return { type: 'text' as const, text: `[${att.type} 附件]` };
  });

export const useChat = () => {
  const [isStreaming, setIsStreaming] = useRecoilState(isStreamingAtom);
  const settings = useRecoilValue(settingsAtom);
  const controllerRef = useRef<AbortController | null>(null);

  const {
    activeConversation,
    activeId,
    createConversation,
    addMessage,
    updateMessage,
    appendToMessage,
  } = useConversation();

  const messages = activeConversation?.messages || [];

  const sendMessage = useCallback(
    async (text: string, attachments: FileAttachment[]) => {
      const parts: ContentPart[] = [];
      if (text) { parts.push({ type: 'text', text }); }
      parts.push(...attachmentsToParts(attachments));

      const userMessage: Message = {
        id: getUuId(8),
        role: 'user',
        content: parts.length === 1 && parts[0].type === 'text' ? (parts[0] as { type: 'text'; text: string }).text : parts,
        timestamp: Date.now(),
      };

      const assistantMessage: Message = {
        id: getUuId(8),
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
        isStreaming: true,
      };

      let convId = activeId;
      if (!convId) {
        const conv = createConversation(settings.model);
        convId = conv.id;
      }

      addMessage(convId, userMessage);
      addMessage(convId, assistantMessage);
      setIsStreaming(true);

      const currentConv = activeConversation;
      const prevMessages = currentConv?.messages || [];
      const allMessages = [...prevMessages, userMessage];
      const apiMessages: ApiMessage[] = allMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const result = await createChatCompletion(
          { apiKey: getApiKey(), model: settings.model, baseUrl: API_CONFIG.baseUrl },
          apiMessages,
          controller.signal,
          (chunk) => { appendToMessage(convId!, assistantMessage.id, chunk); },
        );
        updateMessage(convId!, assistantMessage.id, { content: result, isStreaming: false });
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          updateMessage(convId!, assistantMessage.id, { isStreaming: false });
        } else {
          updateMessage(convId!, assistantMessage.id, {
            content: '',
            isStreaming: false,
            error: error instanceof Error ? error.message : '请求失败',
          });
        }
      } finally {
        setIsStreaming(false);
        controllerRef.current = null;
      }
    },
    [activeId, activeConversation, settings, addMessage, appendToMessage, createConversation, setIsStreaming, updateMessage],
  );

  const stopGeneration = useCallback(() => {
    controllerRef.current?.abort();
    setIsStreaming(false);
  }, [setIsStreaming]);

  return { messages, isStreaming, sendMessage, stopGeneration };
};
