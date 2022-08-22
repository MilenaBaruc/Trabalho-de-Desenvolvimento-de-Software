import logo from './assets/Logo Girassol.png';
import React, { Fragment } from 'react';
import './App.css';

import Config from './pages/Configuracoes';
import Bar from './components/Barra lateral';
import Materias from './pages/materias';

function App() {
  return (
    <Fragment>
    <Bar/>
    <Materias/>
    </Fragment>
  );
}

export default App;
