import React from 'react';

function useScrollPenetrate(container?: HTMLElement) {
  const scrollContainer =
    container || (document?.scrollingElement as HTMLElement);

  if (!scrollContainer) return;

  const getScrollTop = React.useCallback(() => {
    return scrollContainer?.scrollTop;
  }, [scrollContainer]);

  const fixedBody = React.useCallback(
    (scrollTop: number) => {
      scrollContainer.style.position = 'fixed';
      scrollContainer.style.width = '100%';
      scrollContainer.style.top = `-${scrollTop}px`;
    },
    [scrollContainer]
  );

  const looseBody = React.useCallback(() => {
    scrollContainer.style.position = '';
    let top = scrollContainer.style.top;
    scrollContainer.scrollTop = -parseInt(top);
    scrollContainer.style.top = '';
  }, [scrollContainer]);

  // 打开弹窗后调用
  const modalVisible = React.useCallback(() => {
    const currentScrollTop = getScrollTop();
    fixedBody(currentScrollTop);
  }, [getScrollTop, fixedBody]);

  // 关闭弹窗前调用
  const modalHide = React.useCallback(() => {
    looseBody();
  }, [looseBody]);

  return [modalVisible, modalHide];
}

export default useScrollPenetrate;
