import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChangelogCard from '../components/changelog/ChangelogCard';
import fuzzysort from 'fuzzysort';

const Changelog2 = () => {
  const { isDarkTheme } = useDocusaurusContext();
  const [changelogData, setChangelogData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/files/changelogdata2.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data);
        // Check if data is an array before setting state
        if (Array.isArray(data)) {
          setChangelogData(data);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter and sort the changelog items based on the search query
  const filteredChangelog = searchQuery
    ? changelogData
        .filter(item => fuzzysort.single(searchQuery, item.version))
        .sort((a, b) => b.release_date - a.release_date)
    : changelogData;

  return (
    <Layout title="Changelog">
      <div className='changelog-main m-left-right-auto'>  
        <section className="dhq variant--Section topvidsec" ><header className="dhq_header"><h1 className="dhq_Maintitle centerAlign">World’s fastest growing teams build internal apps on DronaHQ</h1></header><div className="dhq_midbody centerAlign"><p>DronaHQ customers are building internal tools at the speed of sound! These tools are helping every team move towards their goals in the most innovative and frictionless manner.</p></div><div className="dhq_ctaContainer d-flex justifyCenter buttnarea"><a className="CtaButton boldCTA variant--Link CtaButton--arrow" href="https://www.dronahq.com/request-a-demo/">Book a Demo﻿ <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10.471" viewBox="0 0 11.968 10.471"> <g id="Group_14" data-name="Group 14" transform="translate(-1603.274 -4411.436)"> <path id="Path_14886" className="HoverArrow_linePath" data-name="Path 14886" d="M1573.563,4416.874h11.225" transform="translate(29.711 -0.152)" fill="none" stroke="#26bc6a" stroke-linecap="round" stroke-width="1.5"></path> <path id="Path_14887" className="HoverArrow_linePath" data-name="Path 14887" d="M1608.71,4413.137l4.529,4.528-4.529,4.528" transform="translate(1.503 -0.994)" fill="none" stroke="#26bc6a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path> </g> </svg> </a><a className="CtaButton btn2new boldCTA variant--Link CtaButton--arrow" href="https://www.dronahq.com/signup/">Start Free Trial﻿ <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10.471" viewBox="0 0 11.968 10.471"> <g id="Group_14" data-name="Group 14" transform="translate(-1603.274 -4411.436)"> <path id="Path_14886" className="HoverArrow_linePath" data-name="Path 14886" d="M1573.563,4416.874h11.225" transform="translate(29.711 -0.152)" fill="none" stroke="#26bc6a" stroke-linecap="round" stroke-width="1.5"></path> <path id="Path_14887" className="HoverArrow_linePath" data-name="Path 14887" d="M1608.71,4413.137l4.529,4.528-4.529,4.528" transform="translate(1.503 -0.994)" fill="none" stroke="#26bc6a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path> </g> </svg> </a></div></section>
        <div className="DocSearch-Form">
          <label className="DocSearch-MagnifierLabel" id="docsearch-label">
              <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
                  <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
          </label>
          <input className="changelog-search-input"  placeholder="Search Changelog" type="search" onChange={e => setSearchQuery(e.target.value)}/>
        </div>

        {filteredChangelog.length === 0 && (
          <div>No results found.</div>
        )}

        <div className='mx-auto changelog-comp-div'>        
          {filteredChangelog.map((item, index) => (
            <ChangelogCard
              key={`${item.release_date}_${index}`} // Ensure a unique key
              version={item.version}
              releaseDate={item.release_date}
              types={item.types}
              descriptions={item.descriptions}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </div>
      </div> 
    </Layout>
  );
};

export default Changelog2;
