// EmbedComponent.js
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";

const EmbedComponent = ({ embed, title }) => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setShowControls(true);
    } else {
      video.pause();
    }
  };

  if (embed) {
    if (embed.endsWith('.mp4') || embed.endsWith('.webm') || embed.endsWith('.ogg')) {
      return (
        <video
          ref={videoRef}
          className={`${styles['embed-video']} ${showControls ? styles['show-controls'] : ''}`}
          onClick={togglePlayPause}
        >
          <source src={embed} type="video/mp4" />
        </video>
      );
    } else if (embed.endsWith('.png') || embed.endsWith('.jpg') || embed.endsWith('.jpeg') || embed.endsWith('.gif')) {
      return <img src={embed} alt={title} className={styles['embed-image']} />;
    } else if (embed.startsWith('http')) {
      return (
        <div>
          {embed.endsWith('.png') || embed.endsWith('.jpg') || embed.endsWith('.jpeg') || embed.endsWith('.gif') ? (
            <img src={embed} alt={title} className={styles['embed-image']} />
          ) : (
            <video
              ref={videoRef}
              className={`${styles['embed-video']} ${showControls ? styles['show-controls'] : ''}`}
              onClick={togglePlayPause}
              src={embed}
            ></video>
          )}
        </div>
      );
    }
  }
  return null;
};

EmbedComponent.propTypes = {
  embed: PropTypes.string,
  title: PropTypes.string,
};

export default EmbedComponent;
