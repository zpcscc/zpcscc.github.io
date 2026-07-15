import type { FC, ReactNode } from 'react';
import { useMemo, useCallback, useRef } from 'react';
import { Button, message as antMessage } from 'antd';
import { CopyOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Message, ContentPart } from '../../types';

type MessageItemProps = {
  message: Message;
};

const extractText = (content: string | ContentPart[]): string => {
  if (typeof content === 'string') { return content; }
  return content
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('');
};

/** 代码块：带复制按钮 */
const CodeBlock: FC<{ className?: string; children?: ReactNode }> = ({ className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInline = !className;
  const text = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    antMessage.success('已复制');
  };

  if (isInline) {
    return (
      <code style={{ background: 'var(--ifm-color-emphasis-100)', padding: '2px 6px', borderRadius: 4, fontSize: '0.9em' }}>
        {children}
      </code>
    );
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <Button
        type="text"
        size="small"
        icon={<CopyOutlined />}
        onClick={handleCopy}
        style={{ position: 'absolute', top: 4, right: 4, zIndex: 1, opacity: 0.6 }}
      />
      <pre style={{ background: 'var(--ifm-color-emphasis-100)', borderRadius: 8, padding: '12px 16px', overflowX: 'auto', fontSize: 13, margin: '8px 0' }}>
        <code style={{ background: 'none', padding: 0 }}>{children}</code>
      </pre>
    </div>
  );
};

/** Markdown 渲染组件 */
const MarkdownContent: FC<{ text: string }> = ({ text }) => (
  <Markdown
    remarkPlugins={[remarkGfm]}
    components={{
      code: CodeBlock,
      a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
      table: ({ children }) => (
        <div style={{ overflowX: 'auto', margin: '8px 0' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>{children}</table>
        </div>
      ),
      th: ({ children }) => <th style={{ border: '1px solid var(--ifm-color-emphasis-300)', padding: '6px 12px', background: 'var(--ifm-color-emphasis-100)', fontWeight: 600 }}>{children}</th>,
      td: ({ children }) => <td style={{ border: '1px solid var(--ifm-color-emphasis-300)', padding: '6px 12px' }}>{children}</td>,
      ul: ({ children }) => <ul style={{ paddingLeft: 20, margin: '4px 0', listStyleType: 'disc' }}>{children}</ul>,
      ol: ({ children }) => <ol style={{ paddingLeft: 20, margin: '4px 0' }}>{children}</ol>,
      li: ({ children }) => <li style={{ margin: '2px 0' }}>{children}</li>,
      blockquote: ({ children }) => (
        <blockquote style={{ borderLeft: '3px solid var(--ifm-color-emphasis-300)', paddingLeft: 12, margin: '8px 0', color: 'var(--ifm-color-emphasis-700)' }}>
          {children}
        </blockquote>
      ),
      hr: () => <hr style={{ border: 'none', borderTop: '1px solid var(--ifm-color-emphasis-200)', margin: '12px 0' }} />,
      h1: ({ children }) => <h1 style={{ fontSize: '1.5em', fontWeight: 700, margin: '12px 0 6px' }}>{children}</h1>,
      h2: ({ children }) => <h2 style={{ fontSize: '1.3em', fontWeight: 700, margin: '10px 0 5px' }}>{children}</h2>,
      h3: ({ children }) => <h3 style={{ fontSize: '1.1em', fontWeight: 600, margin: '8px 0 4px' }}>{children}</h3>,
      p: ({ children }) => <p style={{ margin: '4px 0', lineHeight: 1.7 }}>{children}</p>,
    }}
  >
    {text}
  </Markdown>
);

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role === 'user';

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(extractText(message.content));
    antMessage.success('已复制');
  }, [message.content]);

  const renderedContent = useMemo(() => {
    if (typeof message.content === 'string') {
      return <div className="chat-msg-content"><MarkdownContent text={message.content} /></div>;
    }

    return (
      <div className="chat-msg-content">
        {message.content.map((part, index) => {
          if (part.type === 'text') { return <MarkdownContent key={index} text={part.text} />; }
          if (part.type === 'image_url') { return <img key={index} src={part.image_url.url} className="chat-msg-img" alt="uploaded" />; }
          if (part.type === 'input_audio') {
            return (
              <audio key={index} controls className="mt-2">
                <source src={`data:audio/${part.input_audio.format};base64,${part.input_audio.data}`} />
                <track kind="captions" />
              </audio>
            );
          }
          if (part.type === 'video_url') {
            return (
              <video key={index} controls className="chat-msg-img max-h-300px">
                <source src={part.video_url.url} />
                <track kind="captions" />
              </video>
            );
          }
          return null;
        })}
      </div>
    );
  }, [message.content]);

  return (
    <div className={`group flex gap-4 mb-6 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: 16,
          fontWeight: 600,
          color: '#fff',
          background: isUser ? 'var(--ifm-color-primary)' : 'linear-gradient(135deg, #667eea, #764ba2)',
        }}
      >
        {isUser ? <UserOutlined /> : <RobotOutlined />}
      </div>
      <div style={{ flex: 1, minWidth: 0, textAlign: isUser ? 'right' : 'left' }}>
        <div style={{ display: 'inline-block', textAlign: 'left', maxWidth: '100%' }}>
          {renderedContent}
          {message.error && (
            <div style={{ color: 'var(--ifm-color-danger)', background: 'var(--ifm-color-danger-contrast-background)', padding: '8px 12px', borderRadius: 8, fontSize: 14, marginTop: 4 }}>
              {message.error}
            </div>
          )}
          {message.isStreaming && <span style={{ display: 'inline-block', width: 2, height: '1em', background: 'var(--ifm-color-primary)', marginLeft: 2, animation: 'blink 1s step-end infinite' }} />}
          <div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
            <Button type="text" size="small" icon={<CopyOutlined />} onClick={handleCopy}>复制</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
