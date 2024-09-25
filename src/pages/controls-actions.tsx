import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChangelogCard from '../components/Changelog';
import ComingSoon from '../components/Changelog/ComingSoon';
import styles from '../components/Changelog/style.module.scss';

const SelfChangelog = () => {
  const { isDarkTheme } = useDocusaurusContext();
  const [changelogData, setChangelogData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch('/files/controls-actions.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('File not found or other fetch error');
        }
        return response.text();
      })
      .then(data => {
        // Check if data is not empty before parsing
        if (data.trim() !== '') {
          const jsonData = JSON.parse(data);
          const filteredData = jsonData.filter(item => item.tags && (item.tags.includes("Control") || item.tags.includes("Action")));
          if (Array.isArray(filteredData)) {
            const sortedData = filteredData.sort((a, b) => b.timestamp - a.timestamp);
            setChangelogData(sortedData);
          } else {
            console.error('Invalid data structure. Expected an array.');
          }
        } else {
          console.error('Fetched data is empty.');
        }
        // Data has been fetched, set dataFetched to true
        setDataFetched(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setFetchError(true);
      });
  }, []);

  useEffect(() => {
    // Access the changelog-main div
    const changelogMainDiv = document.querySelector('.changelog-main');

    const updateTheme = () => {
      const htmlTheme = document.querySelector('html').getAttribute('data-theme');
      // Set the data-theme attribute of changelog-main based on the htmlTheme
      if (changelogMainDiv && htmlTheme) {
        changelogMainDiv.setAttribute('data-theme', htmlTheme);
      }
    };

    // Use MutationObserver to watch for changes in attributes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.querySelector('html'), { attributes: true });

    // Initial update when the component mounts
    updateTheme();

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout title="Changelog">
      <div className={`${styles['changelog-main']} changelog-main m-left-right-auto nocode `} data-theme={!isDarkTheme ? '' : 'dark'}>
        <div className={`${styles['mx-auto']} mx-auto ${styles['changelog-comp-div']} changelog-comp-div`}>
          {/* Check if there was an error during fetch */}
          {fetchError ? (
            <ComingSoon />
          ) : (
            // Continue with the rest of the rendering logic
            dataFetched ? (
              changelogData.length > 0 ? (
                <>
                  <div className={`${styles['header']}`}>
                    <h1 className={`${styles['title']}`}>Changelog</h1>
                    <div className='d-flex align-center f-wrap'>
                      <div className={`${styles['description']}`}>Keep up with the latest changes to </div>
                      <div className={`${styles['product-tag']} hq-tags border green d-flex align-center pointer justify-center`}>Controls and Actions</div>
                    </div>
                  </div>
                  {changelogData.map((item, index) => (
                    <ChangelogCard
                      key={`${item.timestamp}_${index}`}              
                      timestamp={item.timestamp}
                      tags={item.tags}
                      heading={item.heading}
                      title={item.title}
                      embed={item.embed}
                      descriptions={item.descriptions}
                      cards={item.cards}
                      isDarkTheme={isDarkTheme}
                    />
                  ))}
                </>
              ) : (
                <ComingSoon />
              )
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SelfChangelog;
