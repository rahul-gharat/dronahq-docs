// AlertCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';


const AlertCard = ({ card, type, isDarkTheme }) => {
  // Function to render HTML content or regular text
  const renderDesc = (content, index) => {
    return /<[a-z][\s\S]*>/i.test(content) ? (
      <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
    ) : (
      <div key={index}>{content}</div>
    );
  };

  const renderPoint = (content, index) => {
    return /<[a-z][\s\S]*>/i.test(content) ? (
      <li key={index} dangerouslySetInnerHTML={{ __html: content }} />
    ) : (
      <li key={index}>{content}</li>
    );
  };

  // Define the base class
  let colorclass = card.class || 'blue';
  let cardClassName = `${styles['alert-card']} ${styles[colorclass]} alert-card mb-3`;
  card.icon = card.icon || 'cloud-hover.svg';

  // Customize based on the type prop
  switch (card.type) {
    case 'added':
      cardClassName = `${styles['alert-card']} ${styles.green} alert-card mb-3`;
      card.icon = 'added.svg';
      break;
    case 'improved':
      cardClassName = `${styles['alert-card']} ${styles.yellow} alert-card mb-3`;
      card.icon = 'improved.svg';
      break;
    case 'deprecated':
      cardClassName = `${styles['alert-card']} ${styles.orange} alert-card mb-3`;
      card.icon = 'deprecated.svg';
      break;
    case 'removed':
      cardClassName = `${styles['alert-card']} ${styles.red} alert-card mb-3`;
      card.icon = 'removed.svg';
      break;
    case 'fixed':
      cardClassName = `${styles['alert-card']} ${styles.purple} alert-card mb-3`;
      card.icon = 'fixed.svg';
      break;
    case 'security':
      cardClassName = `${styles['alert-card']} ${styles.blue} alert-card mb-3`;
      card.icon = 'security.svg';
      break;
    default:
      cardClassName = `${styles['alert-card']} ${styles[colorclass]} || 'blue' alert-card mb-3`;
  }

  return (
    <div className={cardClassName}>
      <div className={`${styles['alert-card-header']} alert-card-header mb-1`}>
        <img src={`../icons/${card.icon}`} className={`${styles['alert-card-icon']}`} alt={card.title} />
        <div className={`${styles['alert-card-title']} alert-card-title ml-2`}>{card.title}</div>
      </div>
      <div className={`${styles['alert-card-descriptions']} alert-card-descriptions`}>
        {card.descriptions && card.descriptions.map((desc, i) => (
          renderDesc(desc, i)
        ))}
        {card.points && (
          <ul className={styles['alert-card-points']}>
            {card.points.map((point, index) => (
              renderPoint(point, index)
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

AlertCard.propTypes = {
  card: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    class: PropTypes.string, // Assuming color is optional
    descriptions: PropTypes.arrayOf(PropTypes.string),
    points: PropTypes.arrayOf(PropTypes.string), // Assuming points is optional
  }).isRequired,
  type: PropTypes.string,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default AlertCard;

