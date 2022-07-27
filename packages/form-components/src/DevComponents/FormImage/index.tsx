import React, { useCallback, useRef } from 'react';
import { Button, message, Modal, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type {
  RcFile,
  UploadFile,
  UploadProps,
} from 'antd/lib/upload/interface';
import type { UploadRequestOption } from 'rc-upload/lib/interface';
import { useToggle } from 'ahooks';
import { Wrapper } from './Styled';
import { checkUploadFileFormat } from '../utils';
import fileApis from './fileApis';

// 可上传图片类型
export type ImageAcceptTypes = '.jpg' | '.jpeg' | '.png' | '.gif';

// 图片组件参数
export type FormImageProps = UploadProps & {
  value?: string;
  accept?: string[];
  placeholder: string;
  onChange?: (value?: string) => void;
};

// 上传图片组件
const FormImage: React.FC<FormImageProps> = (props) => {
  const { value, placeholder, accept, onChange, ...rest } = props;
  const ref = useRef<string | null>(null);
  const [visible, { set }] = useToggle(false);

  let _image: UploadFile | null = null;
  try {
    _image = JSON.parse(value ?? '') as UploadFile;
  } catch (e) {
    // empty
  }

  const uploadImage = useCallback(
    async (options: UploadRequestOption) => {
      const file = options.file as RcFile;
      if (!checkUploadFileFormat(file.name, accept ?? [])) {
        message.error('图片格式不正确，请重新选择');
        return false;
      }
      // 检测图片大小
      if (file.size > 2 * 1024 * 1024) {
        message.error('上传图片不能超过2M');
        return false;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('uploadType', 'image');
      formData.append('acceptFileTypes', (accept ?? []).toString());
      ref.current = value ?? null;
      onChange &&
        onChange(
          JSON.stringify({
            uid: file.uid,
            name: file.name,
            status: 'uploading',
          })
        );

      try {
        const img = await fileApis.uploadFile(formData);
        if (img.originUrl && img.thumbnailUrl) {
          onChange &&
            onChange(
              JSON.stringify({
                uid: file.uid,
                name: file.name,
                url: img.originUrl,
                thumbUrl: img.thumbnailUrl,
                type: 'image',
              })
            );
        } else {
          onChange && onChange(ref.current || '');
          ref.current = null;
          message.error('图片上传失败，请稍后再试');
        }
      } catch (e) {
        onChange && onChange(ref.current || '');
        ref.current = null;
        message.error('图片上传失败，请稍后再试');
      }
      return true;
    },
    [accept, onChange, value]
  );

  const checkImgWidth = (file: UploadFile) => {
    return new Promise<{ width: number; height: number }>((resolve) => {
      const img = new Image();
      let width;
      let height;
      img.src = file.thumbUrl || '';
      img.onload = () => {
        // eslint-disable-next-line prefer-destructuring
        width = img.width;
        // eslint-disable-next-line prefer-destructuring
        height = img.height;
        resolve({ width, height });
      };
    })
      .catch()
      .then((_value) => {
        if (_value) set(true);
      });
  };

  const handleRemove = () => {
    // 删除
    onChange && onChange();
  };

  return (
    <Wrapper>
      <Upload
        accept={(accept ?? []).join()}
        fileList={_image ? [_image] : []}
        listType="picture"
        customRequest={uploadImage}
        onRemove={handleRemove}
        onPreview={checkImgWidth}
        locale={{
          downloadFile: '',
          previewFile: '',
          removeFile: '',
          uploadError: '上传失败',
          uploading: '上传中。。。',
        }}
        {...rest}
      >
        <Button icon={<UploadOutlined />}>{placeholder}</Button>
      </Upload>
      <Modal
        visible={visible}
        title={_image?.name}
        width="fit-content"
        footer={null}
        onCancel={() => {
          set(false);
        }}
      >
        <img
          alt={_image?.name}
          style={{ maxWidth: '80vw', maxHeight: '80vh' }}
          src={_image?.url}
        />
      </Modal>
    </Wrapper>
  );
};

export default FormImage;
