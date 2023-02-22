import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HomepageFeatures, HomepageHeader } from '@site/src/components';
import Layout from '@theme/Layout';
import type { FC } from 'react';
import React from 'react';

const Home: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
