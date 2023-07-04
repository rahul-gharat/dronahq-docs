import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Image = ({src, ...restProps}) => {
  const [openModal, setOpenModal] = useState(false);
  const resolvedImage = require(`@site/static${src}`).default;
  return (
    <div className={styles["thumbnail"]}>
      <img src={resolvedImage} {...restProps} className={`${styles["main-img"]} ${restProps.className || ""}`} />
    </div>
  );
}

export default Image;
