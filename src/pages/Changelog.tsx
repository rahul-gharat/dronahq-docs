import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Chrono } from 'react-chrono';

const Changelog = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [changelogData, setChangelogData] = useState([]);

  useEffect(() => {
    fetch('/files/changelogdata.json')
      .then(response => response.json())
      .then(data => setChangelogData(data));
  }, []);

  return (
    <Layout title="Changelog">
      <main>
        {changelogData.length > 0 && <Chrono items={changelogData} mode="VERTICAL" 
        readMore={true}
        theme={{
          primary: '#32baec',
          secondary: 'white',
          cardBgColor: 'white',
          titleColor: '#32baec',
          titleColorActive: '#26bc6a',
        }} 
        fontSizes={{
          cardSubtitle: '0.85rem',
          cardText: '0.8rem',
          cardTitle: '1rem',
          title: '1rem',
        }}
        buttonTexts={{
          first: 'Jump to First',
          last: 'Jump to Last',
          next: 'Next',
          previous: 'Previous',
        }}
        classNames={{
          card: 'my-card',
          cardMedia: 'my-card-media',
          cardSubTitle: 'my-card-subtitle',
          cardText: 'my-card-text',
          cardTitle: 'my-card-title',
          controls: 'my-controls',
          title: 'my-title',
        }}
        />}
        
      </main>
    </Layout>
  );
};

export default Changelog;
