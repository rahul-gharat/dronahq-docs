import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChangelogCard from '../components/Changelog';
import styles from '../components/Changelog/style.module.scss';

const AllChangelog = () => {
  const { isDarkTheme } = useDocusaurusContext();
  const [changelogData, setChangelogData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/files/changelogdata.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data);
        if (Array.isArray(data)) {
          const sortedData = data.sort((a, b) => b.timestamp - a.timestamp);
          setChangelogData(sortedData);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Layout title="Changelog">
      <div className={`${styles['changelog-main']} changelog-main m-left-right-auto nocode `} data-theme={isDarkTheme ? 'dark' : 'light'}>
        <div className={`${styles['mx-auto']} mx-auto ${styles['changelog-comp-div']} changelog-comp-div`}>
          {changelogData.map((item, index) => (
            <ChangelogCard
              key={`${item.timestamp}_${index}`}              
              timestamp={item.timestamp}
              version={item.version}
              tags={item.tags}
              heading={item.heading}
              title={item.title}
              embed={item.embed}
              descriptions={item.descriptions}
              cards={item.cards}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllChangelog;
