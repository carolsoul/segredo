import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import SpotifyPlaylist from '../components/SpotifyPlaylist.jsx';
import styles from '../styles/Yes.module.css';
import happyFace from '../assets/happy-face.svg';

function Yes() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(true);
  return (
    <div className={styles.yesContainer}>
        {showConfetti && <Confetti width={width} height={height} />}

        <img src={happyFace} alt="carinha-feliz" className={`${styles.slideInEllipticTopBack}`} />


        <div>
          <p>Me encontre no lugar que combinamos.</p>
          <p>Juro que não vai se arrepender!</p>
        </div>

        <div>
          <SpotifyPlaylist />
          <p>Ouça assim que possível.</p>
        </div>

        <footer>
          <p>&copy; {new Date().getFullYear()} Desenvolvido por Carol</p>
        </footer>
    </div>
  );
}

export default Yes;