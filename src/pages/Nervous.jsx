// src/pages/Nervous.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Nervous.module.css';

function Nervous() {
    const navigate = useNavigate(); // hook para navegação
      
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/respiracao-guiada'); 
        }, 6000)

        return () => clearTimeout(timer);
    }, [navigate])
      return (
        <div className={styles.nervousContainer}>
            <p>Está preparada? Eu não estou.</p>
        </div>
      )
};

export default Nervous