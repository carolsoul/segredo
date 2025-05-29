import React from 'react';
import styles from '../styles/No.module.css';
import heartBreak from '../assets/heart-break.svg';

function No() {
  return (
    <div className={styles.noContainer}>
        <img src={heartBreak}  alt="coracao-partido"/>
      <p>Tudo bem, aceito sua decisão, me mande uma mensagem dizendo sua resposta. :( </p>
    </div>
  );
}

export default No;
