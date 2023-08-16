import React from 'react';
// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import poster from '@site/static/img/dronahq-drag-drop-builder.png';
// import VersionedLink from '@site/src/components/VersionedLink';
// import styles from './index.module.scss';

import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero', styles.heroBanner)}>
//       <div className="container">
//         <div style={{ display: `flex`, flexDirection: `column`, placeItems: `center` }}>
//           <h1 className="hero__title">{siteConfig.title}</h1>
//           <p className="hero__subtitle">{siteConfig.tagline}</p>
//         </div>
//         <div className={styles.links}>
//           {/* <VersionedLink className="button button--primary button--lg" to="/index">
//             Hasura Docs
//           </VersionedLink>
//           <div className={styles.links}>
//             <Link className="button button--secondary button--lg" to="/wiki/">
//               Docs Wiki
//             </Link>
//           </div> */}
//           <VersionedLink className="button button--primary button--lg" to="https://www.dronahq.com/signup/">
//             Try for free
//           </VersionedLink>
//           <div className={styles.links}>
//             <Link className="button button--secondary button--lg" to="https://www.dronahq.com/request-a-demo/">
//               Schedule a demo
//             </Link>
//           </div>
//           <div className={styles.links}>
//             <Link className="button button--success button--lg" to="/wiki">
//               Docs Style Guide
//             </Link>
//           </div>
//         </div>
//         <img src={poster} alt="DronaHQ Drag-Drop Builder image" />
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {

  return <Redirect to={useBaseUrl("/")} />;
  
  // const { siteConfig } = useDocusaurusContext();
  // return (
  //   <Layout
  //     title={siteConfig.title}
  //     description="Low code toolkit for developers to quickly build internal tools, digital journeys, operational apps on top of any data source or APIs."
  //   >
  //     <HomepageHeader />
  //     <main></main>
  //   </Layout>
  // );
}
