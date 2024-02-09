// LeftChangelogCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import Tags from './Tags';

const LeftChangelogCard = ({ timestamp, tags,isDarkTheme = false  }) => {
  const timestampObj = new Date(timestamp);
  const formattedTimestamp = timestampObj.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className={`${styles['left-changelogcard']} ${styles['br-right']} left-changelogcard pt-4 ${isDarkTheme ? styles['dark-mode'] : ''}`}>
      <div className={`${styles['stickycard']} stickycard  ${styles['after']}`}>
        <div className={`${styles['changelogcard-date']} changelogcard-date hq-modal-title`}>{formattedTimestamp}</div>
        <Tags tags={tags} />
      </div>
    </div>
  );
};

LeftChangelogCard.propTypes = {
  timestamp: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default LeftChangelogCard;
