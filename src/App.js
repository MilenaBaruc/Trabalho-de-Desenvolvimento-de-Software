import logo from './assets/Logo Girassol.png';
import React, { Fragment } from 'react';
import './App.css';

import Config from './components/Configuracoes';
import Bar from './components/Barra lateral';

function App() {
  return (
    <Fragment>
    <Bar/>
    <Config/>
    </Fragment>
  );
}

export default App;
