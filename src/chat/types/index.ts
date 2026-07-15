/** 单个内容片段（多模态消息中的一个部分） */
export type ContentPart =
  | { type: 'text'; text: string }
  | { type: 'image_url'; image_url: { url: string } }
  | { type: 'input_audio'; input_audio: { data: string; format: string } }
  | { type: 'video_url'; video_url: { url: string } };

/** 单条消息 */
export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string | ContentPart[];
  timestamp: number;
  /** 流式接收中标记 */
  isStreaming?: boolean;
  /** API 调用失败时的错误信息 */
  error?: string;
};

/** 一个对话 */
export type Conversation = {
  id: string;
  title: string;
  messages: Message[];
  model: string;
  createdAt: number;
  updatedAt: number;
};

/** MiMo API 请求的 message 格式 */
export type ApiMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string | ContentPart[];
};

/** MiMo API 请求体 */
export type ChatCompletionRequest = {
  model: string;
  messages: ApiMessage[];
  stream: boolean;
  temperature?: number;
  max_tokens?: number;
};

/** 文件上传后的预览信息 */
export type FileAttachment = {
  id: string;
  file: File;
  type: 'image' | 'video' | 'audio';
  previewUrl: string;
  base64?: string;
};
