import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import type { Message } from '../../types';
import MessageItem from '../MessageItem';

type MessageListProps = {
  messages: Message[];
};

const MessageList: FC<MessageListProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, messages.at(-1)?.content]);

  if (messages.length === 0) {
    return (
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--ifm-color-emphasis-600)', gap: 16 }}>
          <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--ifm-font-color-base)' }}>MiMo AI Assistant</div>
          <div style={{ fontSize: 15, maxWidth: 400, textAlign: 'center', lineHeight: 1.6 }}>
            基于小米 MiMo V2.5 全模态大模型，支持文本、图片、音频、视频多模态对话。
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '24px 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        {messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;
