import type { ApiMessage, ChatCompletionRequest } from '../types';

export type MimoApiConfig = {
  apiKey: string;
  model: string;
  baseUrl: string;
};

/** 获取实际的 API 基础 URL（开发模式下自动使用代理） */
const resolveBaseUrl = (configuredBaseUrl: string): string => {
  if (globalThis.window !== undefined) {
    const isDev = globalThis.window.location.hostname === 'localhost';
    const isDefaultUrl = configuredBaseUrl.includes('xiaomimimo.com');
    if (isDev && isDefaultUrl) {
      return '/api/mimo';
    }
  }
  return configuredBaseUrl;
};

/**
 * 调用 MiMo API 进行流式聊天补全
 * 使用 native fetch + ReadableStream 支持 SSE
 */
export const createChatCompletion = async (
  config: MimoApiConfig,
  messages: ApiMessage[],
  signal?: AbortSignal,
  onChunk?: (text: string) => void,
): Promise<string> => {
  const { apiKey, model, baseUrl: configuredBaseUrl } = config;
  const baseUrl = resolveBaseUrl(configuredBaseUrl);

  const body: ChatCompletionRequest = {
    model,
    messages,
    stream: true,
  };

  const response = await fetch(`${baseUrl}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    throw new Error(`API 请求失败 (${response.status}): ${errorText || response.statusText}`);
  }

  if (!response.body) {
    throw new Error('响应体为空，浏览器可能不支持 ReadableStream');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let fullText = '';
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) { break; }

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) { continue; }

        const data = trimmed.slice(6);
        if (data === '[DONE]') { continue; }

        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            fullText += content;
            onChunk?.(content);
          }
        } catch {
          // 跳过解析失败的行
        }
      }
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return fullText;
    }
    throw error;
  }

  return fullText;
};
