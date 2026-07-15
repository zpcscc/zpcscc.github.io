import type { FC } from 'react';
import MessageList from '../MessageList';
import ChatInput from '../ChatInput';
import { useChat } from '../../hooks/useChat';
import type { FileAttachment } from '../../types';

const ChatArea: FC = () => {
  const { messages, isStreaming, sendMessage, stopGeneration } = useChat();

  const handleSend = async (text: string, attachments: FileAttachment[]) => {
    try {
      await sendMessage(text, attachments);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, background: 'var(--ifm-background-color)' }}>
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} isStreaming={isStreaming} onStop={stopGeneration} />
    </div>
  );
};

export default ChatArea;
