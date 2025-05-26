// src/pages/JogoMemoria.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/JogoMemoria.module.css';
import cardBack from '../assets/card-back.svg';
import coringaAudio from '../assets/coringa.mp3'; // adicione isso quando tiver o som

const IMAGENS = [
  'https://img.freepik.com/fotos-gratis/cachorro-de-raca-pura-sendo-fofo-em-um-estudio_23-2149016897.jpg?t=st=1744695425~exp=1744699025~hmac=4a526269257f957e2d56d15c4d9c9d4bec8b68e346ce3877154b62292d8b5bd7&w=740',
  'https://img.freepik.com/fotos-gratis/retrato-de-cachorro-pequeno-em-estudio_23-2149016943.jpg?t=st=1744695536~exp=1744699136~hmac=c69a61880e072af7c17adfa34e95abb610975e8bee7755c7597bad2a42d249a3&w=740',
  'https://img.freepik.com/fotos-gratis/belo-retrato-de-cachorro-spaniel-de-brinquedo-ingles_23-2149152036.jpg?t=st=1744695593~exp=1744699193~hmac=85708a7c4f73188fe73dc59636877bd3bf59355e377b6215fed8249ffe8489f1&w=740',
  'https://img.freepik.com/fotos-gratis/cao-de-vista-frontal-com-a-lingua-de-fora-no-fundo-vermelho_23-2148415246.jpg?t=st=1744695622~exp=1744699222~hmac=1c80038f86f20be20a3bb9769250d5feb3eb3d88b4b0796095bfd72dbf37dbd1&w=740',
];

const CORINGA_IMG = 'https://img.freepik.com/fotos-gratis/gatinho-cinza-com-parede-monocromatica-atras-dela_23-2148955113.jpg?t=st=1744695829~exp=1744699429~hmac=f18dca18b8522f98c2599be0b585f6d26cd3a0e0fe8f45605b478c62f7f674d6&w=740';

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
