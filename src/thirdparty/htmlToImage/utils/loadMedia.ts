import {
  isElementNode,
  isImageElement,
  isSVGImageElementNode,
  isVideoElement
} from './checkElement';
import createImage from './createImage';
import isApple from './isApple';

type LoadMediaOptions = {
  ownerDocument?: Document;
  timeout?: number;
  onError?: (error: Error) => void;
};

type Media = HTMLVideoElement | HTMLImageElement | SVGImageElement;

export const getDocument = <T extends Node>(target?: T | null): Document => {
  return ((target && isElementNode(target as any) ? target?.ownerDocument : target) ??
    globalThis.document) as any;
};

const loadMedia = (media: any, options?: LoadMediaOptions): Promise<any> => {
  // @ts-expect-error
  return new Promise((resolve) => {
    const { timeout, ownerDocument, onError: userOnError } = options ?? {};
    const node: Media =
      typeof media === 'string' ? createImage(media, getDocument(ownerDocument)) : media;
    let timer: any = null;
    let removeEventListeners: null | (() => void) = null;

    const onResolve = () => {
      resolve(node);

      timer && clearTimeout(timer);
      removeEventListeners?.();
    };

    if (timeout) {
      timer = setTimeout(onResolve, timeout);
    }

    if (isVideoElement(node)) {
      const currentSrc = node.currentSrc || node.src;
      if (!currentSrc) {
        if (node.poster) {
          // eslint-disable-next-line no-promise-executor-return
          return loadMedia(node.poster, options).then(resolve);
        }
        onResolve();
        return;
      }
      if (node.readyState >= 2) {
        onResolve();
        return;
      }
      const onLoadeddata = onResolve;
      const onError = (error: any) => {
        userOnError?.(error);
        onResolve();
      };
      removeEventListeners = () => {
        node.removeEventListener('loadeddata', onLoadeddata);
        node.removeEventListener('error', onError);
      };
      node.addEventListener('loadeddata', onLoadeddata, { once: true });
      node.addEventListener('error', onError, { once: true });
    } else {
      // eslint-disable-next-line unicorn/prefer-https -- SVG namespace URI, not a URL
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.append(node);
      document.body.append(svg);
      const currentSrc = isSVGImageElementNode(node)
        ? node.href.baseVal
        : node.currentSrc || node.src;

      if (!currentSrc) {
        onResolve();
        return;
      }

      const onLoad = async () => {
        svg.remove();
        if (isImageElement(node) && 'decode' in node) {
          try {
            await node.decode();

            if (isApple()) {
              try {
                // 获取图像并确保 SVG 内部的所有图像已加载
                const svgContent = decodeURIComponent(node.src.split(',', 2)[1]);
                const svgDoc = new DOMParser().parseFromString(svgContent, 'image/svg+xml');

                // 收集所有 data URL 图片（img src、background-image、SVG image 等）
                const imageUrls = new Set<string>();

                // 1. 查找所有 <img> 标签的 src
                for (const el of svgDoc.querySelectorAll('img')) {
                  const src = el.getAttribute('src');
                  if (src && /^data:image\//.test(src)) {
                    imageUrls.add(src);
                  }
                }

                // 2. 查找所有带 background-image 的元素
                for (const el of svgDoc.querySelectorAll('*')) {
                  const bgImage = (el as HTMLElement).style?.backgroundImage;
                  if (bgImage) {
                    const match = bgImage.match(
                      /url\(["']?(data:image\/[^"']+)["']?\)/
                    );
                    if (match?.[1]) {
                      imageUrls.add(match[1]);
                    }
                  }
                }

                // 3. 查找 SVG <image> 标签
                for (const el of svgDoc.querySelectorAll('image')) {
                  const href = el.getAttribute('href') || el.getAttribute('xlink:href');
                  if (href && /^data:image\//.test(href)) {
                    imageUrls.add(href);
                  }
                }

                if (imageUrls.size > 0) {
                  const loadImagesPromises = [...imageUrls].map((url) => {
                    return new Promise<void>((resolve) => {
                      const imgElement = new Image();
                      imgElement.addEventListener('load', () => {
                        // 使用 decode() 确保图片完全解码
                        if ('decode' in imgElement) {
                          imgElement.decode().then(resolve).catch(resolve);
                        } else {
                          resolve();
                        }
                      });
                      imgElement.addEventListener('error', () => resolve()); // 错误时也继续
                      imgElement.src = url;
                    });
                  });

                  // 等待所有图像加载并解码完成
                  await Promise.all(loadImagesPromises);
                }
              } catch (error) {
                console.log('Apple SVG image preload error:', error);
              }
            }
          } catch (error) {
            console.log('error:', error);
          }
        }
        if (globalThis && globalThis.requestAnimationFrame) {
          globalThis.requestAnimationFrame(() => {
            onResolve();
          });
        } else {
          onResolve();
        }
      };

      const onError = (error: any) => {
        console.log('error:', error);
        svg.remove();
        onResolve();
      };

      if (isImageElement(node) && node.complete) {
        // eslint-disable-next-line no-promise-executor-return
        return onLoad();
      }

      removeEventListeners = () => {
        node.removeEventListener('load', onLoad);
        node.removeEventListener('error', onError);
      };

      node.addEventListener('load', onLoad, { once: true });
      node.addEventListener('error', onError, { once: true });
    }
  });
};

export default loadMedia;
