import isApple from './isApple';

const addImageCount = () => {
  if (isApple()) {
    const g = globalThis as unknown as Record<string, number>;
    g.drawImageCount = (g.drawImageCount || 0) + 1;
  }
};

export default addImageCount;
