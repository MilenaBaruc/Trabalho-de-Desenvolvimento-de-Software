import React, { useState, useContext, Component, Children } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
//import logo from "./logo.svg";
//import "./App.css";

//import Cad from './pages/Cadastro/cad';
//import Log from './pages/Login/log';
import Home from './pages/Home/home.js';
import Config from './pages/Configuracoes/config.js';
import Materias from './pages/materias/materias.js';
import Secundaria from './pages/materias-sec/Secundaria';
import PaginaEvento from "./pages/Página de eventos/Eventos";
import PopUp from "./components/PopUp Evento/popup.js";


import { AuthProvider, AuthContext } from "./components/contexts/auth";
import { MdHome, MdPassword } from "react-icons/md";

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
                 
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Home" element={<Home/>} />
                    <Route exact path="/materias" element={<Materias/>} />
                    <Route exact path="/config" element={<Config/>} />
                    <Route exact path="/materias-s" element={<Secundaria/>} />
                    <Route exact path="/eventos" element={<PaginaEvento/>} />

                    </Routes>
                </AuthProvider>
            </Router>
        );
}

export default App;

