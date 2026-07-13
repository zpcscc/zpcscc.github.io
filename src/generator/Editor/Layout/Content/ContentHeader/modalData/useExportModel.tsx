import SimpleCodeEditor from '@/components/SimpleCodeEditor';
import toString from '@/utils/toString';
import componentStructureState from '@site/src/generator/Editor/atoms/componentStructureState';
import separateToIntegrate from '@site/src/generator/Render/utils/separateToIntegrate';
import { Button, Space, message, type ModalProps } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRecoilValue } from 'recoil';
import { type ModelType } from '../type';

// 导出弹出框
const useExportModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const { componentItems, structureItems } = useRecoilValue(componentStructureState);
  const componentItemsData = separateToIntegrate(componentItems, structureItems);
  const value = toString(componentItemsData, null, 2);

  return {
    title: '导出',
    onCancel: () => setModalType(null),
    footer: (
      <Space>
        <Button onClick={() => setModalType(null)}>取消</Button>
        <CopyToClipboard
          text={value}
          onCopy={() => {
            message.success('复制成功');
            setModalType(null);
          }}
        >
          <Button type='primary'>复制</Button>
        </CopyToClipboard>
      </Space>
    ),
    children: <SimpleCodeEditor value={value} language='json' />,
  };
};

export default useExportModel;
