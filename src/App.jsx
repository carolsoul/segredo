// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FaceId from './pages/FaceId'
import EscolhaNome from './pages/EscolhaNome'
import Infografico from './pages/Infografico'
import JogoMemoria from './pages/JogoMemoria'
import Quiz from './pages/Quiz'
import Nervous from './pages/Nervous'
import Breathing from './pages/Breathing'
import Letter from './pages/Letter'
import No from './pages/No'
import Yes from './pages/Yes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reconhecimento-facial" element={<FaceId />} />
        <Route path="/escolha-de-nome" element={<EscolhaNome />} />
        <Route path="/infografico" element={<Infografico />} />
        <Route path="/jogo-da-memoria" element={<JogoMemoria />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/nervosismo" element={<Nervous />} />
        <Route path="/respiracao-guiada" element={<Breathing />} />
        <Route path="/carta" element={<Letter />} />
        <Route path="/nao" element={<No />} />
        <Route path="/sim" element={<Yes />} />
      </Routes>
    </Router>
  );
}

export default App;
