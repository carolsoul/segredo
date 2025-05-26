import React, {useState} from 'react';
import maoCoracao from '../assets/mão-coração.png';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/EscolhaNome.module.css';

const nomes = ['amor', 'princesa', 'meu bem', 'Isabela', 'gatinha'];

function EscolhaNome() {
    const navigate = useNavigate(); // hook para navegação
    const [nomeSelecionado, setNomeSelecionado] = useState('');
    
    const escolherNome = (nome) => {
      setNomeSelecionado(nome)
      localStorage.setItem('nomeEscolhido', nome)
    };
      
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
        <button onClick={() => escolherNome('amor')}>amor</button>
          <button onClick={() => escolherNome('princesa')}>princesa</button>
        </div>

        <div>
          <button onClick={() => escolherNome('meu bem')}>meu bem</button>
          <button onClick={() => escolherNome('Isabela')}>Isabela</button>
          <button onClick={() => escolherNome('gatinha')}>gatinha</button>
        </div>
      
      </div>

      <button className={styles.nextButton} onClick={irParaInfografico} disabled={!nomeSelecionado}>Próximo</button>
    </div>
  );
}

export default EscolhaNome;