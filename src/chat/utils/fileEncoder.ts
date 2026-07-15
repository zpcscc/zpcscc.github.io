/** 文件转 base64 data URL */
export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => { resolve(reader.result as string); });
    reader.addEventListener('error', reject);
    reader.readAsDataURL(file);
  });

/** 压缩图片，返回 base64 data URL */
export const compressImage = (file: File, maxWidth = 1024, quality = 0.8): Promise<string> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.addEventListener('load', () => {
      URL.revokeObjectURL(url);

      let { width, height } = img;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('无法创建 canvas context'));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    });

    img.addEventListener('error', () => {
      URL.revokeObjectURL(url);
      reject(new Error('图片加载失败'));
    });

    img.src = url;
  });

/** 视频截取首帧作为预览 */
export const videoThumbnail = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const url = URL.createObjectURL(file);

    video.addEventListener('loadeddata', () => {
      video.currentTime = 0.1;
    });

    video.addEventListener('seeked', () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('无法创建 canvas context'));
        return;
      }

      ctx.drawImage(video, 0, 0);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.6));
    });

    video.addEventListener('error', () => {
      URL.revokeObjectURL(url);
      reject(new Error('视频加载失败'));
    });

    video.src = url;
  });

/** 获取文件类型分类 */
export const getFileCategory = (file: File): 'image' | 'video' | 'audio' | null => {
  if (file.type.startsWith('image/')) { return 'image'; }
  if (file.type.startsWith('video/')) { return 'video'; }
  if (file.type.startsWith('audio/')) { return 'audio'; }
  return null;
};
