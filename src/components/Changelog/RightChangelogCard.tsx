// RightChangelogCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import AlertCard from './AlertCard'; // Import the new component

const RightChangelogCard = ({ title, heading, descriptions, cards,isDarkTheme=false }) => {

  const renderDescriptions = () => {
    if (descriptions && Array.isArray(descriptions)) {
      return descriptions.map((desc, index) => (
        <div key={index} className={`${styles['changelog-category']} changelog-category`}>
          <ul className={styles['changelog-category-list']}>
            {Array.isArray(desc) ? (
              desc.map((description, i) => (
                <li key={i} className={styles['changelog-category-item']}>{description}</li>
              ))
            ) : (
              <li className={styles['changelog-category-item']}>{desc}</li>
            )}
          </ul>
        </div>
      ));
    }
  };

  const renderCards = () => {
    if (cards && Array.isArray(cards)) {
      return cards.map((card, index) => {
        return <AlertCard key={index} card={card} isDarkTheme={isDarkTheme} />
      });
    } else {
      return null;
    }
  };

  return (
    <div className={`${styles['right-changelogcard']} right-changelogcard mb-5 pt-4 ${isDarkTheme ? styles['dark-mode'] : ''}`}>
      <div className={`${styles['changelogcard-title']} changelogcard-title`}>{title}</div>
      <div className={`${styles['changelogcard-heading']} changelogcard-heading mt-2`}>{heading}</div>
      <div className={`${styles['card-descriptions']} card-descriptions mt-2`}>{renderDescriptions()}</div>
      <div className={`${styles['cards-alert']} cards-alert mt-2`}>{renderCards()}</div>
    </div>
  );
};

RightChangelogCard.propTypes = {
  version: PropTypes.string,
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.array),
  cards: PropTypes.arrayOf(PropTypes.object),
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default RightChangelogCard;
