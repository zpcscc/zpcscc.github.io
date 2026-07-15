import { useState, useCallback, useRef } from 'react';
import getUuId from '@/utils/getUuId';
import { fileToBase64 } from '../utils/fileEncoder';
import type { FileAttachment } from '../types';

type RecordingState = 'idle' | 'recording' | 'processing';

export const useAudioRecorder = () => {
  const [state, setState] = useState<RecordingState>('idle');
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;

    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus'
      : 'audio/webm';

    const recorder = new MediaRecorder(stream, { mimeType });
    chunksRef.current = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) { chunksRef.current.push(e.data); }
    };

    recorderRef.current = recorder;
    recorder.start();
    setState('recording');
  }, []);

  const stopRecording = useCallback((): Promise<FileAttachment> => {
    return new Promise((resolve, reject) => {
      const recorder = recorderRef.current;
      if (!recorder || recorder.state === 'inactive') {
        reject(new Error('录音未在进行中'));
        return;
      }

      setState('processing');

      recorder.onstop = async () => {
        streamRef.current?.getTracks().forEach((t) => { t.stop(); });
        streamRef.current = null;
        recorderRef.current = null;

        const blob = new Blob(chunksRef.current, { type: recorder.mimeType });
        const file = new File([blob], 'recording.webm', { type: recorder.mimeType });

        try {
          const base64 = await fileToBase64(file);
          const attachment: FileAttachment = {
            id: getUuId(8),
            file,
            type: 'audio',
            previewUrl: '',
            base64,
          };
          setState('idle');
          resolve(attachment);
        } catch (error) {
          setState('idle');
          reject(error);
        }
      };

      recorder.stop();
    });
  }, []);

  const cancelRecording = useCallback(() => {
    recorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => { t.stop(); });
    streamRef.current = null;
    recorderRef.current = null;
    setState('idle');
  }, []);

  return { recordingState: state, startRecording, stopRecording, cancelRecording };
};
