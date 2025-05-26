import React from 'react';
import styles from '../styles/Yes.module.css';
import heart from '../assets/heart.svg';

function No() {
  return (
    <div className={styles.yesContainer}>
        <img src={heart}  alt="coracao-partido"/>

    </div>
  );
}

export default No;
