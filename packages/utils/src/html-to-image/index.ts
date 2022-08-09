/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-return-await */
/* sonarjs-disable*/
import type { OptionsType } from './type';
import {
  cloneNode,
  embedImages,
  applyStyleWithOptions,
  embedWebFonts,
  getWebFontCSS,
} from './helpers';
import {
  getNodeWidth,
  getNodeHeight,
  getPixelRatio,
  createImage,
  canvasToBlob,
  nodeToDataURL,
} from './util';

function getImageSize(node: HTMLElement, options: OptionsType = {}) {
  const width = options.width || getNodeWidth(node);
  const height = options.height || getNodeHeight(node);

  return { width, height };
}

export async function toSvg<T extends HTMLElement>(
  node: T,
  options: OptionsType = {}
): Promise<string> {
  const { width, height } = getImageSize(node, options);

  return await Promise.resolve(node)
    .then((nativeNode) => cloneNode(nativeNode, options, true))
    .then((clonedNode) => embedWebFonts(clonedNode!, options))
    .then((clonedNode) => embedImages(clonedNode, options))
    .then((clonedNode) => applyStyleWithOptions(clonedNode, options))
    .then((clonedNode) => nodeToDataURL(clonedNode, width, height));
}

const dimensionCanvasLimit = 16384; // as per https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size

function checkCanvasDimensions(canvas: HTMLCanvasElement) {
  if (
    canvas.width > dimensionCanvasLimit ||
    canvas.height > dimensionCanvasLimit
  ) {
    if (
      canvas.width > dimensionCanvasLimit &&
      canvas.height > dimensionCanvasLimit
    ) {
      if (canvas.width > canvas.height) {
        canvas.height *= dimensionCanvasLimit / canvas.width;
        canvas.width = dimensionCanvasLimit;
      } else {
        canvas.width *= dimensionCanvasLimit / canvas.height;
        canvas.height = dimensionCanvasLimit;
      }
    } else if (canvas.width > dimensionCanvasLimit) {
      canvas.height *= dimensionCanvasLimit / canvas.width;
      canvas.width = dimensionCanvasLimit;
    } else {
      canvas.width *= dimensionCanvasLimit / canvas.height;
      canvas.height = dimensionCanvasLimit;
    }
  }
}
export async function toCanvas<T extends HTMLElement>(
  node: T,
  options: OptionsType = {}
): Promise<HTMLCanvasElement> {
  return await toSvg(node, options)
    .then(createImage)
    .then((img) => {
      const canvas = document.createElement('canvas');
      // eslint-disable-next-line
      const context = canvas.getContext('2d')!;
      const ratio = options.pixelRatio || getPixelRatio();
      const { width, height } = getImageSize(node, options);

      const canvasWidth = options.canvasWidth || width;
      const canvasHeight = options.canvasHeight || height;

      canvas.width = canvasWidth * ratio;
      canvas.height = canvasHeight * ratio;

      if (!options.skipAutoScale) {
        checkCanvasDimensions(canvas);
      }
      canvas.style.width = `${canvasWidth}`;
      canvas.style.height = `${canvasHeight}`;

      if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      context.drawImage(img, 0, 0, canvas.width, canvas.height);

      return canvas;
    });
}

export async function toPixelData<T extends HTMLElement>(
  node: T,
  options: OptionsType = {}
): Promise<Uint8ClampedArray> {
  const { width, height } = getImageSize(node, options);
  return await toCanvas(node, options).then((canvas) => {
    // eslint-disable-next-line
    const ctx = canvas.getContext('2d')!;
    return ctx.getImageData(0, 0, width, height).data;
  });
}

export async function toPng<T extends HTMLElement>(
  node: T,
  options: OptionsType = {}
): Promise<string> {
  return await toCanvas(node, options).then((canvas) => canvas.toDataURL());
}

export async function toJpeg<T extends HTMLElement>(
  node: T,
  options: OptionsType = {}
): Promise<string> {
  return await toCanvas(node, options).then((canvas) =>
    canvas.toDataURL('image/jpeg', options.quality || 1)
  );
}

export async function toBlob<T extends HTMLElement>(
  node: T,
  options: OptionsType = {}
): Promise<Blob | null> {
  return await toCanvas(node, options).then(canvasToBlob);
}

export async function getFontEmbedCSS<T extends HTMLElement>(
  node: T,
  options: OptionsType = {}
): Promise<string> {
  return await getWebFontCSS(node, options);
}
