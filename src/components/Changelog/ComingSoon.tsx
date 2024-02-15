// ErrorComponent.jsx
import React from 'react';
import styles from './style.module.scss';

const ErrorComponent = () => (
  <div className='container margin-vert--xl'>
    <div className='row'>
      <div className={styles['coming-soon-content']}>
        <img src='../icons/empty.svg' style={{ width: "60%", height: "auto" }} alt='404' />
        <div>
          <h1>
            <div>
              Great things Coming Soon
            </div>
          </h1>
          <div>
            <p>
              Our team is working on it.
            </p>
          </div>
          <div className={styles['homeLink']}>
            <a href='/'>DronaHQ Docs Home</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorComponent;
