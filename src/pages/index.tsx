import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import poster from '@site/static/img/dronahq-drag-drop-builder.png';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div style={{ display: `flex`, flexDirection: `column`, placeItems: `center` }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className={styles.links}>
          {/* <div className={styles.links}>
            <Link className="button button--secondary button--lg" to="/docs/introduction">
              Docs
            </Link>
          </div>
          <div className={styles.links}>
            <Link className="button button--secondary button--lg" to="/blog/">
              Blog
            </Link>
          </div> */}
          <div className={styles.links}>
            <Link className="button button--secondary button--lg" to="https://www.dronahq.com/signup/">
              Try for free
            </Link>
          </div>
          <div className={styles.links}>
            <Link className="button button--secondary button--lg" to="https://www.dronahq.com/request-a-demo/">
              Schedule a demo
            </Link>
          </div>
        </div>
        <img src={poster} alt="DronaHQ Drag-Drop Builder image" />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
