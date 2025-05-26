import React from 'react';
import styles from '../styles/No.module.css';
import heart from '../assets/heart.svg';

function No() {
  return (
    <div className={styles.noContainer}>
        <img src={heart}  alt="coracao-partido"/>
      <p>Tudo bem, aceito sua decisão, me mande uma mensagem dizendo sua resposta. :( </p>
    </div>
  );
}

export default No;
