import React, { Suspense, lazy } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import styles from '../styles/Yes.module.css';
import feliz from '../assets/happy-face.svg';

const SpotifyPlayer = lazy(() => import('../components/SpotifyPlayer.jsx'));

function Yes() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(true);
  return (
    <div className={styles.yesContainer}>
        {showConfetti && <Confetti width={width} height={height} />}

        <h2> 🎉🎉 Ebaaaaaaa 🎉🎉 </h2>


        <img src={feliz} alt="carinha-feliz" className={`${styles.slideInEllipticTopBack}`} />


        <div>
          <p>Me encontre no lugar que combinamos.</p>
          <p>Juro que não vai se arrepender!</p>
        </div>

        <div>
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <SpotifyPlayer />
          <p>Ouça assim que possível.</p>
        </div>

        <footer>
          <p>&copy; {new Date().getFullYear()} Desenvolvido por Carol</p>
        </footer>
    </div>
  );
}
export default Yes;

