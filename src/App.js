import React from 'react';
import logo from './assets/Logo Girassol.png';
import { Fragment } from 'react';
import './App.css';


import Config from './pages/Configuracoes/config.js';
import Bar from './components/Barra lateral/index.js';
import Materias from './pages/materias/index.js';
import Home from './pages/Home/home.js';

function App() {
  return (
    <Fragment>
      <Home/>
      <Bar/>   
    </Fragment>
  );
}

export default App;
