import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/Infografico.module.css';
import isabela from '../assets/isabela.png';
import livro from '../assets/livro.svg';
import pintar from '../assets/pintar.svg';
import escrever from '../assets/escrever.svg';
import praia from '../assets/praia.svg';
import gatinho from '../assets/gatinho.svg';
import dislike from '../assets/dislike.svg';
import lamp from '../assets/lamp.svg';
import yakisoba from '../assets/yakisoba.svg';
import pizza from '../assets/pizza.svg';
import burguer from '../assets/burguer.svg';
import croissant from '../assets/croissant.svg';
import coffee from '../assets/coffee.svg';
import cake from '../assets/cake.svg';
import music from '../assets/music.svg';
import cabide from '../assets/cabide.svg';
import cinema from '../assets/cinema.svg';
import filme1 from '../assets/filme-1.svg';
import serie1 from '../assets/serie-1.svg';
import filme2 from '../assets/filme-2.svg';
import serie2 from '../assets/serie-2.svg';
//stickers
import sticker1 from '../assets/tape.svg'
import sticker2 from '../assets/joinha.svg'
import sticker3 from '../assets/enfeite.svg'
import sticker4 from '../assets/smiley.svg'
import sticker5 from '../assets/heart.svg'
import sticker6 from '../assets/heart-thanks.svg'
import sticker7 from '../assets/mirrorball.svg'
import sticker8 from '../assets/cat.svg'

import { style } from 'framer-motion/client';

function Infografico() {
    const navigate = useNavigate(); // hook para navegação
    const [nome, setNome] = useState('');

    useEffect(() => {
    const nomeSalvo = localStorage.getItem('nomeEscolhido');
    setNome(nomeSalvo || '');
  }, []);
          
    const irParaJogoMemoria = () => {
        navigate('/jogo-da-memoria'); // muda de página
    };

  return (
    <div className={styles.infograficoContainer}>
      <section>
      <h1 className={styles.infTitle}>Isabela de Moraes Ferreira</h1>
      <h2 className={styles.infSubtitle}>Em Infográfico</h2>

      <div className={styles.profileContainer}>

        <h2>Perfil</h2>
        <p>Data de Nascimento: 21/06/2005</p>
        <p>Cidade: Guarulhos / SP</p>
        <p>Publicitária</p>
        <p>Canceriana</p>

      </div>

      <div className={styles.infRow1}>

        <div className={styles.interestsContainer}>
          <p>Interesses</p>
          <div className={styles.icons}>
            <img src={livro} className={styles.interestsIcon} alt="livros"/>
            <img src={pintar} className={styles.interestsIcon} alt="pintar"/>
            <img src={escrever} className={styles.interestsIcon} alt="escrever"/>
            <img src={praia} className={styles.interestsIcon} alt="praia"/>
            <img src={gatinho} className={styles.interestsIcon} alt="gatinho"/>
          </div>
        </div>

        <div className={styles.eyeStatus}>
          <p>Status ocular:</p>
          <p>Cegueta funcional</p>
        </div>

      </div>

      <div className={styles.infRow2}>

        <div className={styles.tattoos}>
          <p>Total de Tattoos: 6</p>
        </div>

        <div className={styles.lifeTime}>
          <p>Médicos (eu) confirmam que viverá muitos anos felizes</p>
        </div>
      </div>

      <div className={styles.infRow3}>

        <ul className={styles.curiosity}>
        <img src={lamp} className={styles.Icon} alt="dislikes"/>
          <li>Comunicadora</li>
          <li>Tão nova e já fala inglês</li>
          <li>Fluente em Faria Limer</li>
        </ul>

        <div className={styles.dresscode}>
        <img src={cabide} className={styles.Icon} alt="cabide"/>
          <p>Corporativo</p>
          <p>Casual</p>
          <p>Femme Fatale (slk)</p>
        </div>

      </div>

      <div className={styles.infRow4}>

        <div className={styles.legs}>
          <p>Total de perna: 1Km</p>
        </div>

        <div className={styles.media}>
        <img src={cinema} className={styles.Icon} alt="cinema"/>

        <div className={styles.watched}>
        <img src={filme1} className={styles.poster} alt="eternal-sunshine-of-spotless-mind"/>
        <img src={serie1} className={styles.poster} alt="the-L-word"/>
        <img src={filme2} className={styles.poster} alt="the-perks-of-being-a-wallflower"/>
        <img src={serie2} className={styles.poster} alt="fleabag"/>
        </div>

        </div>

      </div>

      <div className={styles.infRow5}>

        <div className={styles.colors}>
          <p>Cores favoritas</p>
          <div className={styles.squares}>
            <div className={styles.green}></div>
            <div className={styles.black}></div>
            <div className={styles.white}></div>
          </div>
        </div>

        <div className={styles.food}>
          <p>Culinária</p>

          <div className={styles.culinary}>
          <img src={yakisoba} className={styles.eatIcon} alt="yakisoba"/>
          <img src={pizza} className={styles.eatIcon} alt="pizza"/>
          <img src={burguer} className={styles.eatIcon} alt="burguer"/>
          <img src={croissant} className={styles.eatIcon} alt="croissant"/>
          <img src={coffee} className={styles.eatIcon} alt="coffee"/>
          <img src={cake} className={styles.eatIcon} alt="cake"/>
          </div>

        </div>

      </div>

      <div className={styles.genre}>
        <img src={music} className={styles.Icon} alt="nota-musical"/>
        <p>Rock</p>
        <p>Funk</p>
        <p>Pop</p>
        <p>Jazz</p>
        </div>

      <div className={styles.infRow6}>

        <div className={styles.feet}>
          <p>Tamanho do pé: 37</p>
        </div>

        <div className={styles.dislikes}>
          <div className={styles.dislikesText}>
            <p>Palhaços</p>
            <p>Cócegas</p>
            <p>Capitalismo</p>
          </div>
          <img src={dislike} className={styles.Icon} alt="dislikes"/>
        </div>
      </div>

      <img src={isabela} className={styles.isabela} alt="minha-mulher"/>

      <div className={styles.text1}>
        <p>
          E aí, <b>{nome && `${nome}`}</b>, acertei alguma coisa? Pensei que acharia interessante um infográfico desse com informações que sei sobre você, espero que tenha gostado! <br></br><br></br> Quero que saiba que no meu cérebro há uma parte designada apenas para a sua pessoa e isto compõe apenas algumas das milhares de informações que, ao longo desses quase 10 anos (onde 7 deles te desejei de longe), consegui observar e guardar com carinho na minha cabeça. <br></br><br></br> Mas isso não é tudo! Se rolar a página mais pra baixo vai achar um mural e nele contém coisas que quero que saiba, dê uma olhada!
          </p>
      </div>
      </section>
  
      <div className={styles.muralGrid}>

        <div className='card'>
          <div className='sticker-card'>
            <img src={sticker1} alt="Sticker 1" className={`${styles.sticker} ${styles.sticker1}`} />
          </div>

          <div className={styles.red1}>
          <p>Seu sorriso e olhos iluminam os meus dias.</p>
        </div>

        </div>

        <div className='card'>
          <div className='sticker-card'>
            <img src={sticker2} alt="Sticker 2" className={`${styles.sticker} ${styles.sticker2}`} />
          </div>
          
          <div className={styles.pink1}>
            <p>Sua inteligência me deixa orgulhosa.</p>
          </div>
        </div>

        <div className='card'>
          <div className='sticker-card'>
            
          </div>

          <div className={styles.green1}>
            <p>Seu senso de humor é bobo e contagiante!</p>
          </div>
        </div>

        <div className='card'>
          <div className='sticker-card'>
            <img src={sticker3} alt="Sticker 3" className={`${styles.sticker} ${styles.sticker3}`} />
          </div>

          <div className={styles.green2}>
            <p>Me encanta a forma como você enxerga o mundo.</p>
          </div>
        </div>

        <div className='card'>
          <div className='sticker-card'>
            <img src={sticker4} alt="Sticker 4" className={`${styles.sticker} ${styles.sticker4}`} />
          </div>

          <div className={styles.red2}>
            <p>Não há palavras que façam justiça aos seus cachos.</p>
          </div>

        </div>

        <div className='card'>
          <div className='sticker-card'>
            <img src={sticker5} alt="Sticker 5" className={`${styles.sticker} ${styles.sticker5}`} />
          </div>

          <div className={styles.pink2}>
            <p>Seu foco no trabalho me excita...</p>
          </div>
        </div>

        <div className='card'>
          <div className='sticker-card'>
            <img src={sticker6} alt="Sticker 6" className={`${styles.sticker} ${styles.sticker6}`} />
            
            <img src={sticker8} alt="Sticker 8" className={`${styles.sticker} ${styles.sticker8}`} />
          </div>

          <div className={styles.pink3}>
            <p>O jeito que você fala me deixa boba.</p>
          </div>

        </div>

        <div className='card'>
          <div className='sticker-card'>
            <img src={sticker7} alt="Sticker 7" className={`${styles.sticker} ${styles.sticker7}`} />
          </div>

          <div className={styles.green3}>
            <p>Fico muito feliz de ter te conhecido. </p>
          </div>
        </div>

        <div className='card'>

          <div className='sticker-card'>
          </div>

          <div className={styles.red3}>
            <p>A dedicação com seu futuro também me estimula!</p>
          </div>
        </div>

      </div>


      <button className={styles.infNextButton} onClick={irParaJogoMemoria}>
        Próximo
      </button>
    </div>
  );
}

export default Infografico;