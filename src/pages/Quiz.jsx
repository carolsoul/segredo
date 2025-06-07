// src/pages/Quiz.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Quiz.module.css';

const quizData = [
  {
    pergunta: 'Entre estas, qual é sua recordação preferida?',
    opcoes: [
      { texto: 'ver o mar juntas', mensagem: 'Apesar dos pesares e do medo do mar eu tamém gostei, vamos repetir!' },
      { texto: '1º date com macarrão congelado e vinho barato', mensagem: 'Foi aí que te ganhei, não foi?' },
      { texto: 'Airbnb no carnaval', mensagem: 'Uma lembrança caótica e perfeita. Como seria se morássemos juntas?' },
    ],
  },
  {
    pergunta: 'E qual vai ser nosso próximo date?',
    opcoes: [
      { texto: 'Cozinhar juntas', mensagem: 'Ótima ideia, vamos fazer doce ou salgado?' },
      { texto: 'Cafeteria', mensagem: 'Meu lugar favorito! Pães, bolos, doces, café e você!' },
      { texto: 'Baladinha', mensagem: 'Quem sabe Submundo 808? Vamos dando uma olhada no que tem de bom :D' },
    ],
  },
  {
    pergunta: 'Como você se sente sobre nós?',
    opcoes: [
      { texto: 'Segura', mensagem: 'Isso significa muito! Quero muita coisa com você.' },
      { texto: 'Esperançosa', mensagem: 'Ainda temos tanto por viver... Vamos pensar no presente!' },
      { texto: 'Confusa às vezes', mensagem: 'Tudo bem, também é parte do processo. Vamos conversar sobre isso?' },
    ],
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [mensagem, setMensagem] = useState('');
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [bloqueado, setBloqueado] = useState(false);
  const navigate = useNavigate();

  const perguntaAtual = quizData[index];

  const handleOpcaoClick = (opcaoIndex) => {
    if (bloqueado) return;

    const mensagemSelecionada = perguntaAtual.opcoes[opcaoIndex].mensagem;
    setRespostaSelecionada(opcaoIndex);
    setMensagem(mensagemSelecionada);
    setBloqueado(true);

    setTimeout(() => {
      setMensagem('');
      setRespostaSelecionada(null);
      setBloqueado(false);

      if (index < quizData.length - 1) {
        setIndex((prev) => prev + 1);
      }
    }, 3000);
  };

  const irParaProximaPagina = () => {
    navigate('/nervosismo');
  };

  return (
    <div className={`${styles.quizContainer} ${styles['tema' + index]}`}>

      <h2 className={styles.quizTitle}>Escolha com sabedoria...</h2>

      <p className={styles.pergunta}>{perguntaAtual.pergunta}</p>

      <div className={styles.opcoes}>

        {perguntaAtual.opcoes.map((opcao, i) => (
          <div key={i} className={styles.opcaoWrapper}>

          <button className={`${styles.quizOption} ${respostaSelecionada === i ? styles.selecionada : ''}`} onClick={() => handleOpcaoClick(i)} disabled={bloqueado && respostaSelecionada !== i}
          >
            {opcao.texto}
          </button>

           {/* Mensagem abaixo da opção selecionada */}
        {respostaSelecionada === i && mensagem && (
          <div className={styles.quizMensagem}>{mensagem}</div>
        )}
        
          </div>
        ))}
      </div>


      {index === quizData.length - 1 && !mensagem && (
        <button className={styles.btnProximo} onClick={irParaProximaPagina}>
          Próximo
        </button>
      )}
    </div>
  );
}
