import type { FC, KeyboardEvent, ChangeEvent } from 'react';
import { useRef, useCallback, useState } from 'react';
import { Button, message as antMessage } from 'antd';
import { SendOutlined, PictureOutlined, AudioOutlined, VideoCameraOutlined, StopOutlined } from '@ant-design/icons';
import type { FileAttachment } from '../../types';
import { useFileUpload } from '../../hooks/useFileUpload';
import { useAudioRecorder } from '../../hooks/useAudioRecorder';
import FilePreview from '../FilePreview';

type ChatInputProps = {
  onSend: (text: string, attachments: FileAttachment[]) => void;
  isStreaming: boolean;
  onStop: () => void;
  disabled?: boolean;
};

const ChatInput: FC<ChatInputProps> = ({ onSend, isStreaming, onStop, disabled }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef('');
  const [hasContent, setHasContent] = useState(false);

  const { attachments, addFiles, removeAttachment, clearAttachments } = useFileUpload();
  const { recordingState, startRecording, stopRecording } = useAudioRecorder();
  const isRecording = recordingState === 'recording';

  const adjustHeight = useCallback(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
    }
  }, []);

  const handleSend = useCallback(() => {
    const trimmed = textRef.current.trim();
    if (!trimmed && attachments.length === 0) { return; }
    if (disabled || isStreaming) { return; }
    onSend(trimmed, attachments);
    textRef.current = '';
    if (textareaRef.current) {
      textareaRef.current.value = '';
      textareaRef.current.style.height = 'auto';
    }
    clearAttachments();
  }, [attachments, disabled, isStreaming, onSend, clearAttachments]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) { return; }
    const inputEl = e.target;
    await addFiles(files);
    inputEl.value = '';
  };

  const handleToggleRecording = async () => {
    if (isRecording) {
      try {
        await stopRecording();
      } catch (error) {
        antMessage.error(error instanceof Error ? error.message : '录音失败');
      }
      return;
    }
    try {
      await startRecording();
    } catch {
      antMessage.error('无法访问麦克风，请检查权限设置');
    }
  };

  return (
    <div style={{ padding: '16px 24px 24px', borderTop: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FilePreview attachments={attachments} onRemove={removeAttachment} />
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 8,
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: 12,
            padding: 12,
            background: 'var(--ifm-background-surface-color)',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-300)'; }}
        >
          <textarea
            ref={textareaRef}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              resize: 'none',
              fontSize: 15,
              lineHeight: 1.5,
              maxHeight: 200,
              minHeight: 24,
              fontFamily: 'inherit',
              background: 'transparent',
              color: 'var(--ifm-font-color-base)',
            }}
            defaultValue=""
            onChange={(e) => { textRef.current = e.target.value; setHasContent(textRef.current.trim().length > 0 || attachments.length > 0); adjustHeight(); }}
            onKeyDown={handleKeyDown}
            placeholder="输入消息... (Enter 发送，Shift+Enter 换行)"
            rows={1}
            disabled={disabled}
          />
          {isStreaming ? (
            <Button type="primary" danger icon={<StopOutlined />} onClick={onStop} style={{ flexShrink: 0 }}>停止</Button>
          ) : (
            <Button type="primary" icon={<SendOutlined />} onClick={handleSend} disabled={disabled || !hasContent} style={{ flexShrink: 0 }}>发送</Button>
          )}
        </div>
        <div style={{ display: 'flex', gap: 4, paddingTop: 8 }}>
          <input ref={fileInputRef} type="file" accept="image/*" multiple hidden onChange={handleFileSelect} />
          <Button type="text" size="small" icon={<PictureOutlined />} onClick={() => { fileInputRef.current?.click(); }} title="上传图片" />
          <input ref={videoInputRef} type="file" accept="video/*" hidden onChange={handleFileSelect} />
          <Button type="text" size="small" icon={<VideoCameraOutlined />} onClick={() => { videoInputRef.current?.click(); }} title="上传视频" />
          <Button type="text" size="small" icon={<AudioOutlined />} onClick={handleToggleRecording} danger={isRecording} title={isRecording ? '停止录音' : '录音'} />
        </div>
        <div style={{ fontSize: 12, color: 'var(--ifm-color-emphasis-500)', textAlign: 'center', paddingTop: 8 }}>
          基于 MiMo V2.5 全模态大模型，支持文本、图片、音频、视频输入
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
