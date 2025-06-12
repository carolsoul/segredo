// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import styles from '../styles/Home.module.css';

function Home() {
    const navigate = useNavigate(); // hook para navegação
  
    const irParaFaceId = () => {
      navigate('/reconhecimento-facial'); // muda de página
    };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Se prepare para a foto</h1>
      <p className={styles.homeParag}>Preciso saber se esta é a mulher certa, instruções abaixo</p>

      <img src={avatar} className={styles.avatar} alt="Avatar"/>

      <div className={styles.instructionBox}>
        <div className={styles.instructionContainer}>
            <h3>Boa iluminação</h3>
            <p>Vá para um lugar bem iluminado onde dê para ver o seu rosto.</p>
        </div>

        <div className={styles.instructionContainer}>
            <h3>Olhe para frente</h3>
            <p>Segure o celular no nível dos olhos e olhe diretamente para a câmera.</p>
        </div>

      </div>

      <button className={styles.button} onClick={irParaFaceId}>
        Começar reconhecimento facial
      </button>
    </div>
  );
}

export default Home;
