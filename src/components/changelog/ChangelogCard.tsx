// ChangelogCard.js
import React from 'react';
import PropTypes from 'prop-types';

const ChangelogCard = ({ version, releaseDate, descriptions, isDarkTheme = false }) => {
  const releaseDateObj = new Date(releaseDate);
  const formattedReleaseDate = releaseDateObj.toDateString();

  const renderDescriptions = () => {
    if (descriptions && Array.isArray(descriptions)) {
      return descriptions.map((item, index) => (
        <div key={index} className="changelog-category">
          <h4>{Object.keys(item)[0]}</h4>
          <ul>
            {item[Object.keys(item)[0]].map((description, i) => (
              <li key={i}>{description}</li>
            ))}
          </ul>
        </div>
      ));
    } else {
      return <div>No descriptions available</div>;
    }
  };

  return (
    <div className={`changelog-card ${isDarkTheme ? 'dark-mode' : ''}`}>
      <div className="card-title">{version}</div>
      <div className="card-subtitle">{formattedReleaseDate}</div>
      <div className="card-descriptions">{renderDescriptions()}</div>
    </div>
  );
};

ChangelogCard.propTypes = {
  version: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default ChangelogCard;
