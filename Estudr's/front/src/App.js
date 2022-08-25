import React, { Component } from 'react';
import logo from './assets/Logo Girassol.png';
import { Fragment } from 'react';
import './App.css';


import Config from './pages/Configuracoes/config.js';
import Bar from './components/Barra lateral/index.js';
import Materias from './pages/materias/index.js';
import Home from './pages/Home/home.js';

class app extends Component {
    constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    }
    callAPI() {
      fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
        .catch(err => err);
      }

    componentDidMount() {
      this.callAPI();
    }

    render() {
        return (
            <div className="App">
              <header className="App-header"> 
                <img src={ logo } className="logo" alt="logo"/>
                <h1 className="app title">Welcome to react</h1>
              </header>
              <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
      }
}

export default App;
