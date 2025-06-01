import React, { useState } from 'react';
import maoCoracao from '../assets/mão-coração.png';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styles from '../styles/EscolhaNome.module.css';

const nomes = ['amor', 'princesa', 'meu bem', 'Isabela', 'gatinha'];

Modal.setAppElement('#root'); // Evita problemas de acessibilidade

function EscolhaNome() {
  const navigate = useNavigate();
  const [nomeSelecionado, setNomeSelecionado] = useState('');
  const [modalAberto, setModalAberto] = useState(false);

  const escolherNome = (nome) => {
    if (nome === 'Isabela') {
      setModalAberto(true);
      setNomeSelecionado(''); // reseta escolha
    } else {
      setNomeSelecionado(nome);
      localStorage.setItem('nomeEscolhido', nome);
    }
  };

  const irParaInfografico = () => {
    navigate('/infografico');
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div className={styles.escolhaNomeContainer}>
      <div className={styles.nomeTitleContainer}>
        <h1>Oi</h1>
        <h1>É a Carol.</h1>
      </div>

      <img src={maoCoracao} className={styles.maoCoracao} alt="mao-coracao" />

      <p className={styles.nomeParag}>Como quer ser chamada?</p>

      <div className={styles.nomeBtnContainer}>
        <div>
          <button onClick={() => escolherNome('amor')}>amor</button>
          <button onClick={() => escolherNome('princesa')}>princesa</button>
        </div>
        <div>
          <button onClick={() => escolherNome('meu bem')}>meu bem</button>
          <button onClick={() => escolherNome('Isabela')}>Isabela</button>
          <button onClick={() => escolherNome('gatinha')}>gatinha</button>
        </div>
      </div>

      <button className={styles.nextButton} onClick={irParaInfografico} disabled={!nomeSelecionado}>
        Próximo
      </button>

      {/* Modal de aviso */}
      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        contentLabel="Nome Indisponível"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h2>Esse nome não está disponível</h2>
        <p>Escolha outro, vai.</p>
        <button onClick={fecharModal} className={styles.modalCloseButton}>
          OK
        </button>
      </Modal>
    </div>
  );
};

export default EscolhaNome;
