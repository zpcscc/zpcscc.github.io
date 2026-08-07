import type { FC } from 'react';
import { useState } from 'react';
import { Button, Select, Popconfirm } from 'antd';
import { PlusOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons';
import { useChatContext } from '../../store/ChatContext';
import { useConversation } from '../../hooks/useConversation';
import { MODEL_OPTIONS } from '../../config';

const ChatSidebar: FC = () => {
  const { conversations, activeConversationId: activeId, setActiveConversationId: setActiveId, settings, setSettings } = useChatContext();
  const { deleteConversation } = useConversation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleNewChat = () => { setActiveId(null); setMobileOpen(false); };
  const handleSelect = (id: string) => { setActiveId(id); setMobileOpen(false); };

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    const now = new Date();
    if (d.toDateString() === now.toDateString()) { return d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }); }
    return d.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' });
  };

  const getBgColor = (convId: string) => {
    if (convId === activeId) { return 'var(--ifm-color-emphasis-200)'; }
    if (hoveredId === convId) { return 'var(--ifm-color-emphasis-100)'; }
    return 'transparent';
  };

  return (
    <>
      <Button
        icon={<MenuOutlined />}
        onClick={() => { setMobileOpen(!mobileOpen); }}
        size="small"
        style={{ display: 'none' }}
        className="max-md:!flex! fixed left-2 bottom-2 z-99"
      />

      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, top: 60, background: 'rgba(0,0,0,0.3)', zIndex: 99 }}
          className="md:hidden"
          onClick={() => { setMobileOpen(false); }}
          onKeyDown={() => { setMobileOpen(false); }}
          role="button"
          tabIndex={0}
        />
      )}

      <aside
        style={{
          width: 280,
          minWidth: 280,
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid var(--ifm-color-emphasis-300)',
          background: 'var(--ifm-background-surface-color)',
        }}
        className="max-md:fixed max-md:left-0 max-md:top-[60px] max-md:bottom-0 max-md:z-100 max-md:transition-transform max-md:duration-300 max-md:-translate-x-full"
        {...(mobileOpen ? { 'data-mobile-open': '' } : {})}
      >
        <div style={{ padding: 16, borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
          <Button type="primary" icon={<PlusOutlined />} style={{ width: '100%' }} onClick={handleNewChat}>新对话</Button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 8 }}>
          {conversations.length === 0 ? (
            <div style={{ padding: '24px 0', textAlign: 'center', color: 'var(--ifm-color-emphasis-500)', fontSize: 14 }}>暂无对话记录</div>
          ) : (
            conversations.map((conv) => (
              <div
                key={conv.id}
                role="button"
                tabIndex={0}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  marginBottom: 2,
                  background: getBgColor(conv.id),
                }}
                onClick={() => { handleSelect(conv.id); }}
                onKeyDown={() => { handleSelect(conv.id); }}
                onMouseEnter={() => { setHoveredId(conv.id); }}
                onMouseLeave={() => { setHoveredId(null); }}
              >
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 14, color: 'var(--ifm-font-color-base)' }}>{conv.title}</span>
                <span style={{ fontSize: 12, color: 'var(--ifm-color-emphasis-600)', marginLeft: 8, whiteSpace: 'nowrap' }}>{formatTime(conv.updatedAt)}</span>
                <Popconfirm title="确定删除此对话？" onConfirm={() => { deleteConversation(conv.id); }} okText="删除" cancelText="取消">
                  <Button
                    type="text"
                    size="small"
                    icon={<DeleteOutlined />}
                    style={{ marginLeft: 4, opacity: hoveredId === conv.id ? 1 : 0, transition: 'opacity 0.15s' }}
                    onClick={(e) => { e.stopPropagation(); }}
                  />
                </Popconfirm>
              </div>
            ))
          )}
        </div>

        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--ifm-color-emphasis-200)' }}>
          <Select
            value={settings.model}
            onChange={(model) => { setSettings({ ...settings, model }); }}
            options={[...MODEL_OPTIONS]}
            size="small"
            style={{ width: '100%' }}
          />
        </div>
      </aside>

      {mobileOpen && (
        <style>{`
          @media (max-width: 767.9px) {
            aside[data-mobile-open] { transform: translateX(0) !important; }
          }
        `}</style>
      )}
    </>
  );
};

export default ChatSidebar;
