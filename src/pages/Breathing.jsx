// src/pages/Breathing.jsx
// src/pages/Nervous.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Breathing.module.css';

function Breathing() {
    const navigate = useNavigate(); // hook para navegação

    const irParaCarta = () => {
      navigate('/carta'); // muda de página
  };

      return (
        <div className={styles.breathingContainer}>
            <h1 className={styles.breathingTitle}> Por isso, [nome], primeiro vamos respirar mais devagar</h1>

            <div className={styles.ball}></div>

            <button className={styles.BreathingNextBtn} onClick={irParaCarta}> Próximo </button>
        </div>
      )
};

export default Breathing
