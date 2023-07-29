import React from 'react';
import VersionedLink from './VersionedLink';

const GenerateCardGallery = props => {
  let { cards } = props;
  return (
    <div className="gallery three-row">
      {cards.map(card => {
        return (
          <VersionedLink
            to={card.link}
            className="card cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
          >
            <div className="text--truncate card-header" title={card.title}>
              <h4>{card.title}</h4>
            </div>
            <p
              className="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
              title={card.description}
            >
              {card.description}
            </p>
          </VersionedLink>
        );
      })}
    </div>
  );
};

export default GenerateCardGallery;