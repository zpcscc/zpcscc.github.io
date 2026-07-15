import { type FC } from 'react';
import { RecoilRoot } from 'recoil';
import ChatSidebar from './components/ChatSidebar';
import ChatArea from './components/ChatArea';

const ChatPage: FC = () => {
  return (
    <RecoilRoot>
      <div className="flex h-[calc(100vh-60px)] overflow-hidden">
        <ChatSidebar />
        <ChatArea />
      </div>
    </RecoilRoot>
  );
};

export default ChatPage;
