// ChangelogCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import LeftChangelogCard from './LeftChangelogCard'; // Import the new component
import RightChangelogCard from './RightChangelogCard'; 

const ChangelogCard = ({ timestamp, tags, heading, title, descriptions, cards, isDarkTheme = false }) => {

  return (
    <div className={`${styles['changelog-card']} changelog-card ${isDarkTheme ? styles['dark-mode'] : ''}`}>
      <LeftChangelogCard timestamp={timestamp} tags={tags} isDarkTheme={isDarkTheme}/>
      <RightChangelogCard title={title} heading={heading} descriptions={descriptions} cards={cards} timestamp={timestamp} tags={tags} isDarkTheme={isDarkTheme} />
    </div>
  );
};

ChangelogCard.propTypes = {  
  timestamp: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.array),
  cards: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default ChangelogCard;
