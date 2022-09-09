import React, { useState, Component } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
//import logo from "./logo.svg";
//import "./App.css";

import Modal from './components/Modal/Modal';
//import Cad from './pages/Cadastro/cad';
import Log from './pages/Login/log';
import Home from './pages/Home/home.js';
import Config from './pages/Configuracoes/config.js';
import Materias from './pages/materias/index.js';

import { AuthProvider} from "./components/contexts/auth";
import { MdPassword } from "react-icons/md";

function App() {


        return (
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route exact path="/" element={<Log/>} />
                        <Route exact path="/home" element={<Home/>} />
                        <Route exact path="/materias" element={<Materias/>} />
                        <Route exact path="/config" element={<Config/>} />
                    </Routes>
                </AuthProvider>
            </Router>
        );
}

export default App;

/*

*/