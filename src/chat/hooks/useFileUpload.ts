import { useState, useCallback } from 'react';
import getUuId from '@/utils/getUuId';
import { fileToBase64, compressImage, videoThumbnail, getFileCategory } from '../utils/fileEncoder';
import type { FileAttachment } from '../types';

export const useFileUpload = () => {
  const [attachments, setAttachments] = useState<FileAttachment[]>([]);
  const [processing, setProcessing] = useState(false);

  const addFiles = useCallback(async (files: FileList | File[]) => {
    setProcessing(true);
    const newAttachments: FileAttachment[] = [];

    for (const file of files) {
      const category = getFileCategory(file);
      if (!category) { continue; }

      try {
        let previewUrl: string;
        let base64: string;

        if (category === 'image') {
          base64 = await compressImage(file);
          previewUrl = base64;
        } else if (category === 'video') {
          previewUrl = await videoThumbnail(file);
          base64 = await fileToBase64(file);
        } else {
          base64 = await fileToBase64(file);
          previewUrl = '';
        }

        newAttachments.push({
          id: getUuId(8),
          file,
          type: category,
          previewUrl,
          base64,
        });
      } catch (error) {
        console.error('文件处理失败:', file.name, error);
      }
    }

    setAttachments((prev) => [...prev, ...newAttachments]);
    setProcessing(false);
    return newAttachments;
  }, []);

  const removeAttachment = useCallback((id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const clearAttachments = useCallback(() => {
    setAttachments([]);
  }, []);

  return { attachments, addFiles, removeAttachment, clearAttachments, processing };
};
