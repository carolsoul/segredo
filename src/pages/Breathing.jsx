import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Breathing.module.css';

function Breathing() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [step, setStep] = useState('Inspira');

  useEffect(() => {
    const nomeSalvo = localStorage.getItem('nomeEscolhido');
    setNome(nomeSalvo || '');
  }, []);

  useEffect(() => {
    let currentSecond = 0;
    let cycleCount = 0;

    const interval = setInterval(() => {
      currentSecond++;

      if (currentSecond === 1) {
        setStep('Inspira');
      } else if (currentSecond === 5) {
        setStep('Segura');
      } else if (currentSecond === 6) {
        setStep('Solta');
      } else if (currentSecond === 11) {
        cycleCount++;
        currentSecond = 0;

        if (cycleCount === 3) {
          clearInterval(interval);
          setStep('Solta'); // ou deixar o último visível
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const irParaCarta = () => {
    navigate('/carta');
  };

  return (
    <div className={styles.breathingContainer}>
      <h1 className={styles.breathingTitle}>
        Por isso, {nome && `${nome}`}, vamos respirar mais devagar.
      </h1>

      <div className={styles.ball}></div>

      <p className={styles.step}>{step}</p>

      <button className={styles.BreathingNextBtn} onClick={irParaCarta}>
        Próximo
      </button>
    </div>
  );
}

export default Breathing;
