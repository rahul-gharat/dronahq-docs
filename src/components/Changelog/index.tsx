// ChangelogCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import LeftChangelogCard from './LeftChangelogCard'; // Import the new component
import RightChangelogCard from './RightChangelogCard'; 

const ChangelogCard = ({ timestamp, tags, heading, title, embed, descriptions, cards, isDarkTheme = false }) => {

  return (
    <div className={`${styles['changelog-card']} changelog-card ${isDarkTheme ? styles['dark-mode'] : ''}`}>
      <LeftChangelogCard timestamp={timestamp} tags={tags} isDarkTheme={isDarkTheme}/>
      <RightChangelogCard title={title} heading={heading} descriptions={descriptions} cards={cards} timestamp={timestamp} tags={tags} embed={embed} isDarkTheme={isDarkTheme} />
    </div>
  );
};

ChangelogCard.propTypes = {  
  timestamp: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  embed: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.array),
  cards: PropTypes.arrayOf(PropTypes.object),
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default ChangelogCard;
