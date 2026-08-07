import { type FC } from 'react';
import { ChatProvider } from './store/ChatContext';
import ChatSidebar from './components/ChatSidebar';
import ChatArea from './components/ChatArea';

const ChatPage: FC = () => {
  return (
    <ChatProvider>
      <div className="flex h-[calc(100vh-60px)] overflow-hidden">
        <ChatSidebar />
        <ChatArea />
      </div>
    </ChatProvider>
  );
};

export default ChatPage;
