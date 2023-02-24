import Link from '@docusaurus/Link';
import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import { Features, Row, Text } from './Style';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'configs',
    description: (
      <>
        <b>项目通用配置库</b>
        <p>一些通用的项目配置,多项目协同开发，使代码风格一致</p>
      </>
    ),
  },
  {
    title: 'utils',
    description: (
      <>
        <b>工具库</b>
        <p>一些常用函数工具，方便开发时复用</p>
      </>
    ),
  },
  {
    title: 'components',
    description: (
      <>
        <b>组件库</b>
        <p>一些可复用组件，表单组件</p>
      </>
    ),
  },
  {
    title: 'generator',
    description: (
      <>
        <b>低代码生成器</b>
        <p>通过拖拽等方式，快速生成页面或表单</p>
      </>
    ),
  },
  {
    title: 'create',
    description: (
      <>
        <b>脚手架</b>
        <p>快速创建项目</p>
      </>
    ),
  },
];

const Feature: FC<FeatureItem> = ({ title, description }) => {
  return (
    <div className={clsx('col col--2')}>
      <Text className='text--center'>
        <Link
          className='button button--secondary button--sm'
          to={`https://dxsixpc.github.io/${title}/`}
        >
          {title}
        </Link>
        <div>{description}</div>
      </Text>
    </div>
  );
};

const HomepageFeatures: FC = () => {
  return (
    <Features>
      <div className='container'>
        <Row className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </Row>
      </div>
    </Features>
  );
};

export default HomepageFeatures;
