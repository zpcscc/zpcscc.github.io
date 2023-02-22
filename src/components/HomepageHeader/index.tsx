import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import { Buttons, HeroBanner } from './Style';

const HomepageHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <HeroBanner className={clsx('hero hero--primary')}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <Buttons>
          <Link className='button button--secondary button--lg' to='/docs/note/javascript/数组'>
            快速开始 ⏱️
          </Link>
        </Buttons>
      </div>
    </HeroBanner>
  );
};

export default HomepageHeader;
