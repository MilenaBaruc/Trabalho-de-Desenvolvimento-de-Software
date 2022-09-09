import React, { useState, useContext, Component, Children } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
//import logo from "./logo.svg";
//import "./App.css";

import Modal from './components/Modal/Modal';
//import Cad from './pages/Cadastro/cad';
import Log from './pages/Login/log';
import Home from './pages/Home/home.js';
import Config from './pages/Configuracoes/config.js';
import Materias from './pages/materias/index.js';

import { AuthProvider, AuthContext } from "./components/contexts/auth";
import { MdPassword } from "react-icons/md";

function App() {

    const Private = ({ children }) => {
        const{ authenticated, loading } = useContext(AuthContext);

        if(loading){
           return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to="/" />;
        }

        return children;
    }

        return (
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route exact path="/" element={<Log/>} />
                        <Route exact path="/home" element={<Private><Home/></Private>} />
                        <Route exact path="/materias" element={<Private><Materias/></Private>} />
                        <Route exact path="/config" element={<Private><Config/></Private>} />
                    </Routes>
                </AuthProvider>
            </Router>
        );
}

export default App;

/*

*/