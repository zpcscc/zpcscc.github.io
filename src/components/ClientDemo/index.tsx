import type React from 'react';
import { lazy, Suspense } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * 客户端-only 的 Demo 包装组件
 * 包裹 MDX 中的 demo，避免 SSR 时加载 browser-only 模块
 */
export const ClientDemo = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserOnly fallback={<div style={{ padding: 16, color: '#999' }}>加载中...</div>}>
      {() => (
        <Suspense fallback={<div style={{ padding: 16, color: '#999' }}>加载中...</div>}>
          {children}
        </Suspense>
      )}
    </BrowserOnly>
  );
};

/**
 * 使用动态 import 避免 SSR 时加载 browser-only 模块
 */
export const createClientDemo = (importFn: () => Promise<{ default: React.ComponentType<any> }>) => {
  const LazyComponent = lazy(importFn);

  const ClientDemoWrapper = () => {
    return (
      <BrowserOnly fallback={<div style={{ padding: 16, color: '#999' }}>加载中...</div>}>
        {() => (
          <Suspense fallback={<div style={{ padding: 16, color: '#999' }}>加载中...</div>}>
            <LazyComponent />
          </Suspense>
        )}
      </BrowserOnly>
    );
  };

  ClientDemoWrapper.displayName = 'ClientDemoWrapper';
  return ClientDemoWrapper;
};
