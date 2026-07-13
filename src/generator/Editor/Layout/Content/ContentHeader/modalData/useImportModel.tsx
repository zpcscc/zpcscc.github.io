import SimpleCodeEditor from '@/components/SimpleCodeEditor';
import componentStructureState from '@/generator/Editor/atoms/componentStructureState';
import { type ComponentItemType } from '@/generator/types';
import toData from '@/utils/toData';
import integrateToSeparate from '@site/src/generator/Render/utils/integrateToSeparate';
import { message, type ModalProps } from 'antd';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { type ModelType } from '../type';

// 导入弹出框
const useImportModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const setComponentStructure = useSetRecoilState(componentStructureState);
  const [value, setValue] = useState<string>();

  return {
    title: '导入',
    cancelText: '取消',
    okText: '确定',
    onCancel: () => setModalType(null),
    onOk: () => {
      const componentItems = toData(value) as ComponentItemType[];
      if (Array.isArray(componentItems)) {
        setComponentStructure(integrateToSeparate(componentItems));
        setModalType(null);
      } else {
        message.error('格式错误');
      }
    },
    children: <SimpleCodeEditor value={value} language='json' onChange={setValue} />,
  };
};

export default useImportModel;
