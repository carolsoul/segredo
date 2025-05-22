// src/pages/Nervous.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Letter.module.css';

function Letter() {
    const navigate = useNavigate(); // hook para navegação

    const irParaNao = () => {
        navigate('/sim'); // muda de página
    };
    const irParaSim = () => {
        navigate('/nao'); // muda de página
    };

      return (
        <div className={styles.LetterContainer}>

            <h1 className={styles.letterTitle}>A pergunta de um milhão de dólares...</h1>

            <div className={styles.envelope}>
                <div className={styles.back}></div>
                <div className={styles.letter}>
                    <div className={styles.text}>
                        <h3>Aceita ser minha namorada?</h3>
                        <p>Oficialmente dessa vez</p>
                    </div>
                </div>

                <div className={styles.front}></div>
                <div className={styles.top}></div>
                <div className={styles.shadow}></div>
            </div>

            



            <div className={styles.btnContainer}>
                <button className={styles.noBtn} onClick={irParaSim}>Não</button>
                <button className={styles.yesBtn} onClick={irParaNao}>Sim</button>
            </div>
        </div>
      )
};

export default Letter