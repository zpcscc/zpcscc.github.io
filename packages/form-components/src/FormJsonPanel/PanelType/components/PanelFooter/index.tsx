import React from 'react';
import { Layout, Button } from 'antd';
import { Wrapper } from './Styled';

interface PanelFooterProps {
  onSubmit?: () => void;
  onClose?: () => void;
  showCancel?: boolean;
  showSubmit?: boolean;
}

// 面板尾部
const PanelFooter: React.FC<PanelFooterProps> = (props) => {
  const { onSubmit, onClose, showCancel = true, showSubmit = true } = props;
  const { Footer } = Layout;

  return (
    <Wrapper>
      <Footer style={{ width: '100%' }}>
        {showCancel && <Button onClick={onClose}>取消</Button>}
        {showSubmit && (
          <Button type="primary" onClick={onSubmit}>
            确定
          </Button>
        )}
      </Footer>
    </Wrapper>
  );
};

export default PanelFooter;
