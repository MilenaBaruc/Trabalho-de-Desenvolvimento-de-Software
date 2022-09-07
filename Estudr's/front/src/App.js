import React, { Component } from "react";
//import logo from "./logo.svg";
//import "./App.css";

import LoginCadastro from './pages/LogCad/index.js';
//import Config from './pages/Configuracoes/config.js';
//import Materias from './pages/materias/index.js';
import Cad from './pages/Cadastro/cad';
import Log from './pages/Login/log'
import Home from './pages/Home/home.js';
import Bar from './components/Barra lateral/index.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:3333/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <Log/>
        );
    }
}

export default App;