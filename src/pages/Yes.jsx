import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import SpotifyPlaylist from '../components/SpotifyPlaylist.jsx';
import styles from '../styles/Yes.module.css';
<<<<<<< HEAD
import feliz from '../assets/happy-face.svg';
import SpotifyPlayer from '..components/SpotifyPlayer.jsx'

function Yes() {
  return (
    <div className={styles.yesContainer}>
        <img src={feliz}  alt="carinha-feliz"/>

        <div>
          <p>Me encontre no lugar que combinamos.</p>
        <p>Juro que não vai se arrepender!</p>

        <SpotifyPlayer/>

        <p>Ouça assim que possível.</p>

        </div>
=======
import happyFace from '../assets/happy-face.svg';

function Yes() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(true);
  return (
    <div className={styles.yesContainer}>
        {showConfetti && <Confetti width={width} height={height} />}

        <h2> 🎉🎉 Ebaaaaaaa 🎉🎉 </h2>


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
>>>>>>> da3b8fa53cb3cebd4c600292dd23e20dff8bb91e
    </div>
  );
}

<<<<<<< HEAD
export default Yes;
=======
export default Yes;
>>>>>>> da3b8fa53cb3cebd4c600292dd23e20dff8bb91e
