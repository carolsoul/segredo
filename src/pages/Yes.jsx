import React from 'react';
import styles from '../styles/Yes.module.css';
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
    </div>
  );
}

export default Yes;
