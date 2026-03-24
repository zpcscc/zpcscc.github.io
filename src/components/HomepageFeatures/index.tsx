import Link from '@docusaurus/Link';
import React, { type FC, type JSX } from 'react';

interface FeatureItem {
  title: string;
  icon: string;
  description: JSX.Element;
  href: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'configs',
    icon: '📐',
    description: (
      <>
        <b>项目通用配置库</b>
        <p>一些通用的项目配置，多项目协同开发，使代码风格一致</p>
      </>
    ),
    href: 'https://zpcscc.top/configs/',
  },
  {
    title: 'utils',
    icon: '🧰',
    description: (
      <>
        <b>工具库</b>
        <p>一些常用函数工具，方便开发时复用</p>
      </>
    ),
    href: 'https://zpcscc.top/utils/',
  },
  {
    title: 'components',
    icon: '📦',
    description: (
      <>
        <b>通用ui组件库</b>
        <p>封装好的通用组件</p>
      </>
    ),
    href: 'https://zpcscc.top/components/',
  },
  {
    title: 'generator',
    icon: '⚡',
    description: (
      <>
        <b>低代码生成器</b>
        <p>通过拖拽等方式，快速生成页面或表单</p>
      </>
    ),
    href: 'https://zpcscc.top/generator/',
  },
  {
    title: 'create',
    icon: '🚀',
    description: (
      <>
        <b>脚手架</b>
        <p>快速创建项目</p>
      </>
    ),
    href: 'https://zpcscc.top/create/',
  },
];

const HomepageFeatures: FC = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <h2 className='animate-fade-in-up mb-2 text-center text-3xl font-bold text-slate-800'>
          项目与资源
        </h2>
        <p className='animate-fade-in-up mb-12 text-center text-base text-slate-500 delay-100'>
          个人开源项目与工具集合
        </p>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5'>
          {FeatureList.map((item) => (
            <Link
              key={item.title}
              className={`animate-fade-in-up delay-0 group block rounded-2xl border border-slate-200/80 bg-white p-7 no-underline ring-1 ring-slate-900/5 transition-all duration-150 hover:-translate-y-1 hover:border-[#7aabee] hover:shadow-2xl hover:ring-[#7aabee]/30`}
              to={item.href}
            >
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--ifm-color-primary-lightest),var(--ifm-color-primary-lighter))] text-xl'>
                {item.icon}
              </div>
              <div className='mb-1 text-base font-semibold text-slate-800'>{item.title}</div>
              <div className='text-sm leading-relaxed text-slate-500'>{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
