import React from 'react';
import maoCoracao from '../assets/mão-coração.png';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/EscolhaNome.module.css';

function EscolhaNome() {
    const navigate = useNavigate(); // hook para navegação
      
    const irParaInfografico = () => {
        navigate('/infografico'); // muda de página
    };
        
  return (
    <div className={styles.escolhaNomeContainer}>
      <div className={styles.nomeTitleContainer}>
      <h1>Oi</h1>
      <h1>É a Carol.</h1>
      </div>

      <img src={maoCoracao} className={styles.maoCoracao} alt="mao-coracao"/>

      <p className={styles.nomeParag}>Como quer ser chamada?</p>

      <div className={styles.nomeBtnContainer}>
        <div>
        <button>amor</button>
        <button>princesa</button>
        </div>

        <div>
        <button>meu bem</button>
        <button>Isabela</button>
        <button>gatinha</button>
        </div>
      
      </div>

      <button className={styles.nextButton} onClick={irParaInfografico}>Próximo</button>
    </div>
  );
}

export default EscolhaNome;