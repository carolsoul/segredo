// src/pages/JogoMemoria.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/JogoMemoria.module.css';
import cardBack from '../assets/card-back.svg';
import bosqueMaia from '../assets/bosquemaia.jpg';
import maosPraia from '../assets/maos-praia.jpg';
import dateBurguer from '../assets/date-burguer.jpg';
import coringa from '../assets/coringa.jpg';
import museu from '../assets/date-museu-coreano.jpg';
import coringaAudio from '../assets/coringa.mp3'; // adicione isso quando tiver o som

const IMAGENS = [
  bosqueMaia,
  maosPraia,
  dateBurguer,
  museu,
];

const CORINGA_IMG = coringa;

function embaralharCartas() {
  const pares = [...IMAGENS, ...IMAGENS];
  const cartas = [...pares, 'CORINGA'];

  return cartas
    .map((item) => ({
      id: Math.random(),
      img: item === 'CORINGA' ? CORINGA_IMG : item,
      isFlipped: false,
      isMatched: false,
      isCoringa: item === 'CORINGA',
    }))
    .sort(() => Math.random() - 0.5);
}

function JogoMemoria() {
  const navigate = useNavigate();
  const [cartas, setCartas] = useState([]);
  const [viradas, setViradas] = useState([]);
  const [bloqueado, setBloqueado] = useState(false);
  const [audio] = useState(() => new Audio(coringaAudio));

  useEffect(() => {
    setCartas(embaralharCartas());
  }, []);

  useEffect(() => {
    if (viradas.length === 2) {
      setBloqueado(true);
      const [primeira, segunda] = viradas;

      if (primeira.img === segunda.img) {
        setCartas((cartas) =>
          cartas.map((c) =>
            c.img === primeira.img ? { ...c, isMatched: true } : c
          )
        );
        setViradas([]);
        setBloqueado(false);
      } else {
        setTimeout(() => {
          setCartas((cartas) =>
            cartas.map((c) =>
              c.id === primeira.id || c.id === segunda.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setViradas([]);
          setBloqueado(false);
        }, 1000);
      }
    }
  }, [viradas]);

  const virarCarta = (carta) => {
    if (bloqueado || carta.isFlipped || carta.isMatched) return;

    if (carta.isCoringa) {
      setBloqueado(true);

      // vira a carta coringa
      setCartas((prev) =>
        prev.map((c) =>
          c.id === carta.id ? { ...c, isFlipped: true } : c
        )
      );

      //toca o áudio
      audio.currentTime = 0;
      audio.play();

      audio.onended = () => {
        setBloqueado(false)
      }
    
      if (viradas.length === 1) {
        const [outra] = viradas;
          setCartas((cartas) =>
            cartas.map((c) =>
              c.id === outra.id ? { ...c, isFlipped: false } : c
            )
          );
          setViradas([]);
      }
    
      return;
    }
    

    const novaCarta = { ...carta, isFlipped: true };
    setCartas((prev) =>
      prev.map((c) => (c.id === carta.id ? novaCarta : c))
    );
    setViradas((prev) => [...prev, novaCarta]);
  };

  const todosEncontrados =
    cartas.length > 0 &&
    cartas.every((c) => c.isMatched || c.isCoringa);

  const irParaQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className={styles.memoriaContainer}>
      <h1 className={styles.memoTitle}>A memória está boa? <br /> Vamos testar.</h1>

      <div className={styles.grid}>
        {cartas.map((carta) => (
          <div
            key={carta.id}
            className={`${styles.card} ${carta.isFlipped || carta.isMatched ? styles.flipped : ''}`}
            onClick={() => virarCarta(carta)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={carta.img} alt="carta" />
              </div>
              <div className={styles.cardBack}>
                <img src={cardBack} alt="verso da carta" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {todosEncontrados && (
        <><p className={styles.victoryMessage}>Não é que está boa mesmo?</p>
        <button className={styles.memoNextBtn} onClick={irParaQuiz}>
          Próximo
        </button></>
      )}
    </div>
  );
}

export default JogoMemoria;
