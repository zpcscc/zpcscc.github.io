import Button from '@/components/Button';
import Space from '@/components/Space';
import TextArea from '@/components/TextArea';
import VideoViewer from '@/components/VideoViewer';
import validate from '@/utils/validate';
import { message } from 'antd';
import { Fragment, useState, type FC } from 'react';

const App: FC = () => {
  const [videoUrl, setVideoUrl] = useState('https://vjs.zencdn.net/v/oceans.mp4');
  const [urlText, setUrlText] = useState('');

  return (
    <Fragment>
      <Space style={{ marginBottom: '10px' }}>
        <TextArea
          className='w-400px'
          rows={3}
          placeholder={'请输入video链接'}
          value={urlText}
          onChange={setUrlText}
        />
        <Button
          type='primary'
          onClick={() => {
            if (validate(urlText, 'url')) {
              setVideoUrl(urlText);
            } else {
              message.error('请输入正确的video链接');
            }
          }}
        >
          预览
        </Button>
      </Space>
      <VideoViewer url={videoUrl} />
    </Fragment>
  );
};

export default App;
