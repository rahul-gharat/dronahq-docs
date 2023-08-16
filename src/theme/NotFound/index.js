import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.scss';
import Light404 from '@site/static/img/light-404.png';
import Dark404 from '@site/static/img/dark-404.png';
import Link from "@docusaurus/Link";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className='container margin-vert--xl'>
          <div className='row'>
            <div className={styles['content']}>
              <ThemedImage
                sources={{
                  light: Light404,
                  dark: Dark404,
                }}
                alt='404'
              />
              <div>
                <h1>
                  <Translate id='theme.NotFound.title' description='The title of the 404 page'>
                    We have a broken link or the URL entered doesn't exist in our docs.
                  </Translate>
                </h1>
                <p>
                  <Translate id='theme.NotFound.p2' description='The 2nd paragraph of the 404 page'>
                    Our team has been notified and they're on it.
                  </Translate>
                </p>
                <div className={styles['homeLink']}>
                  <Link to={useBaseUrl("/introduction/")}>DronaHQ Docs Home</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
