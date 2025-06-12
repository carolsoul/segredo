import React, { Suspense, lazy, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { motion, AnimatePresence } from "framer-motion";
import styles from '../styles/Yes.module.css';
import feliz from '../assets/happy-face.svg';
import menina1 from '../assets/menina1.png';
import menina2 from '../assets/menina2.jpg';
import menina3 from '../assets/menina3.jpg';
import menina4 from '../assets/menina4.png';
import menino1 from '../assets/menino1.png';
import menino2 from '../assets/menino2.jpg';
import menino3 from '../assets/menino3.png';

const SpotifyPlayer = lazy(() => import('../components/SpotifyPlayer.jsx'));

function Yes() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(true);

  const filhos = [menina1, menina2, menina3, menina4, menino1, menino2, menino3];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % filhos.length);
  const prev = () => setIndex((prev) => (prev - 1 + filhos.length) % filhos.length);

  return (
    <div className={styles.yesContainer}>
      {showConfetti && <Confetti width={width} height={height} />}

      <h2> 🎉🎉 Ebaaaaaaa 🎉🎉 </h2>

      <img src={feliz} alt="carinha-feliz" className={`${styles.slideInEllipticTopBack}`} />

      <div>
        <p>Me encontre no lugar que combinamos.</p>
        <p>Juro que não vai se arrepender!</p>
      </div>

      <br />
      <br />

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SpotifyPlayer />
        </Suspense>
        <p>🎶 Ouça assim que possível 🎶 </p>
      </div>

      <div className={styles.children}>
        <h2>Sei que disse para pensarmos no presente maaas...</h2>

        <p>Não aguentei e fiz nossos filhos (graças a IA hihihi)! Uma criança parecida com nós duas. Você acha que ela será desse jeito?</p>

        <div className={styles.carouselContainer}>
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img
                key={filhos[index]}
                src={filhos[index]}
                alt=""
                className={styles.filho}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          <div className={styles.buttons}>
            <button onClick={prev}>◀</button>
            <button onClick={next}>▶</button>
          </div>
        </div>

        <p>Te amo muito e te espero hoje para mais uma surpresa. Até logo!</p>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Desenvolvido por Carol</p>
      </footer>
    </div>
  );
}

export default Yes;