import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { type FC } from 'react';

const HomepageHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className='animate-shift-bg relative overflow-hidden bg-[linear-gradient(-45deg,#e8eeff,#f0f4ff,#e0e8ff,#f5f0ff,#e8eeff)] bg-[length:400%_400%] px-0 py-24 text-center'>
      {/* 背景装饰光晕 */}
      <div className='animate-blob pointer-events-none absolute -top-25 -right-25 h-100 w-100 rounded-full bg-[var(--ifm-color-primary-lightest)] opacity-35 blur-3xl' />
      <div className='animate-blob pointer-events-none absolute -bottom-20 -left-15 h-75 w-75 rounded-full bg-[var(--ifm-color-primary-lighter)] opacity-35 blur-3xl [animation-delay:-3s]' />
      <div className='animate-blob pointer-events-none absolute top-1/2 left-1/2 h-50 w-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ifm-color-primary)] opacity-10 blur-3xl [animation-delay:-5s]' />

      <div className='container relative z-1'>
        <h1 className='animate-fade-in-up m-0 bg-[linear-gradient(135deg,var(--ifm-color-primary-darkest),var(--ifm-color-primary))] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent'>
          {siteConfig.title}
        </h1>
        <p className='animate-fade-in-up mt-3 text-lg text-slate-500 delay-150'>
          {siteConfig.tagline}
        </p>
        <div className='animate-fade-in-up mt-8 flex items-center justify-center gap-4 delay-300'>
          <Link
            className='inline-flex items-center gap-2 rounded-lg bg-[#3b7ddd] px-8 py-3 text-base font-semibold text-white no-underline shadow-lg transition-colors duration-150 hover:bg-[#1e4e8e] hover:shadow-xl hover:text-white'
            to='/docs/web/javascript/intro'
          >
            📘 开始阅读
          </Link>
          <Link
            className='inline-flex items-center gap-2 rounded-lg border border-[#7aabee] px-8 py-3 text-base font-semibold text-[#3b7ddd] no-underline transition-all duration-150 hover:border-[#3b7ddd] hover:bg-[#a8cbf5] hover:text-[#2d6bc4]'
            to='/docs/tools/git/基础介绍'
          >
            🔧 开发工具
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
