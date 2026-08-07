import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import { type FC } from 'react';

const ChatRoute: FC = () => {
  return (
    <Layout title='AI Chat' noFooter>
      <BrowserOnly fallback={<div style={{ padding: 16, textAlign: 'center' }}>加载中...</div>}>
        {() => {
          const { default: ChatPage } = require('@/chat/ChatPage');
          return <ChatPage />;
        }}
      </BrowserOnly>
    </Layout>
  );
};

export default ChatRoute;
