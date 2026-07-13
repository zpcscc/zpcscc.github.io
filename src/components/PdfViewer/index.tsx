import toAbsolutePath from '@/utils/toAbsolutePath';
import validate from '@/utils/validate';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { useEffect, useRef, useState, type FC } from 'react';

pdfjsLib.GlobalWorkerOptions.workerSrc = toAbsolutePath('/pdf.worker.min.mjs');

export type PdfViewerProps = {
  url: string;
  scale?: number;
};

/**
 * @name pdf查看器
 * @param url pdf的链接
 * @link 其他参数详见 https://github.com/mozilla/pdf.js
 */
const PdfViewer: FC<PdfViewerProps> = ({ url, scale = 1 }) => {
  const [pdfPages, setPdfPages] = useState<{ id: string; number: number }[]>([]);
  // pdf所有页面的数组
  const pdfPagesRef = useRef<{ id: string; number: number }[]>([]);
  const pdfDocRef = useRef<PDFDocumentProxy | null>(null);

  // 加载pdf的某一页
  const renderPdfPage = async (number: number) => {
    try {
      const pdfDoc = pdfDocRef.current;
      if (!pdfDoc) return;
      const page = await pdfDoc.getPage(number);
      // 获取视图
      const viewport = page.getViewport({ scale });
      // 获取canvas
      const canvas: HTMLCanvasElement | null = document.querySelector(`#pdf-page-${number}`);
      if (canvas) {
        const context = canvas.getContext('2d');
        if (!context) return;
        const devicePixelRatio = window.devicePixelRatio || 2;
        const outputScale = Math.max(devicePixelRatio, 2); // 输出缩放比例，设置为不低于2，低于2看起来会很糊；
        // 设置canvas的宽高
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        const transform = outputScale === 1 ? undefined : [outputScale, 0, 0, outputScale, 0, 0];
        // 渲染pdf
        const renderContext = {
          canvasContext: context,
          canvas,
          viewport,
          transform,
        };

        page.render(renderContext).promise.then(async () => {
          if (number < pdfPagesRef.current.length) {
            await renderPdfPage(number + 1);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 初始化pdf，加载pdf文件
  const initPdf = async (url: string) => {
    // 加载pdf文件
    const pdfDoc = await pdfjsLib.getDocument({
      url,
      cMapUrl: toAbsolutePath('/cmaps/'),
      cMapPacked: true,
    }).promise;
    pdfDocRef.current = pdfDoc;
    pdfPagesRef.current = [];
    for (let i = 1; i <= pdfDoc.numPages; i++) {
      pdfPagesRef.current.push({ id: `pdf-page-${i}`, number: i });
    }
    setPdfPages(pdfPagesRef.current);
    setTimeout(() => renderPdfPage(1));
  };

  useEffect(() => {
    // 同步清空旧数据（仅 ref，不触发渲染）
    pdfPagesRef.current = [];
    pdfDocRef.current = null;

    if (validate(url, 'url') && url.endsWith('.pdf')) {
      initPdf(url).catch(console.error);
    } else {
      console.error('请输入正确的url');
    }
  }, [url]);

  return (
    <div className='w-full h-full'>
      {pdfPages.map((pageItem) => (
        <canvas className='border-1 border-solid border-black' key={pageItem.id} id={pageItem.id} />
      ))}
    </div>
  );
};

export default PdfViewer;
