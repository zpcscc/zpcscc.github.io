import type { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import type { FileAttachment } from '../../types';

type FilePreviewProps = {
  attachments: FileAttachment[];
  onRemove: (id: string) => void;
};

const FilePreview: FC<FilePreviewProps> = ({ attachments, onRemove }) => {
  if (attachments.length === 0) { return null; }

  return (
    <div style={{ display: 'flex', gap: 8, padding: '8px 0', overflowX: 'auto' }}>
      {attachments.map((att) => (
        <div key={att.id} style={{ position: 'relative', width: 64, height: 64, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--ifm-color-emphasis-300)' }}>
          {att.type === 'image' && <img src={att.previewUrl} alt="预览" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          {att.type === 'video' && <video src={att.previewUrl} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          {att.type === 'audio' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 24, background: 'var(--ifm-color-emphasis-100)' }}>
              🎵
            </div>
          )}
          <button
            type="button"
            style={{ position: 'absolute', top: 2, right: 2, width: 18, height: 18, borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 12, border: 'none', padding: 0, lineHeight: 1 }}
            onClick={() => { onRemove(att.id); }}
          >
            <CloseOutlined style={{ fontSize: 10 }} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilePreview;
