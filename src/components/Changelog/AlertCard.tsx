// AlertCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const AlertCard = ({ card, isDarkTheme }) => {
  const cardClassName = `${styles['alert-card']} alert-card ${styles[card.class] || ''} mb-3`;

  return (
    <div className={cardClassName}>
      <div className={`${styles['alert-card-header']} alert-card-header mb-1`}>
        <img src={`../icons/${card.icon}`} className={`${styles['alert-card-icon']}`}/>
        <div className={`${styles['alert-card-title']} alert-card-title ml-2`}>{card.title}</div>
      </div>
      <div className={`${styles['alert-card-descriptions']} alert-card-descriptions`}>
        {card.descriptions && card.descriptions.map((desc, i) => (
          // Check if description is HTML content
          desc.includes('</') ? (
            <div key={i} dangerouslySetInnerHTML={{ __html: desc }} />
          ) : (
            <div key={i}>{desc}</div>
          )
        ))}
        {card.points && (
          <ul className={styles['alert-card-points']}>
            {card.points.map((point, index) => (
              point.includes('</') ? (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ) : (
                <li key={index}>{point}</li>
              )
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

AlertCard.propTypes = {
  card: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string, // Assuming color is optional
    descriptions: PropTypes.arrayOf(PropTypes.string),
    points: PropTypes.arrayOf(PropTypes.string), // Assuming points is optional
  }).isRequired,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default AlertCard;
