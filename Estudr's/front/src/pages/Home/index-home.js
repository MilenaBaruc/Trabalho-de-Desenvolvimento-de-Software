import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Fragment} from "react";

import { AiFillHome } from "react-icons/ai" 
import { HiClipboard } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

import { AuthContext } from '../../components/contexts/auth';
import "./sidebar-home.css";
import perfil from '../../assets/ImagensPerfil/verde escuro.jpg'
import logo from '../../assets/Logo Girassol.png'


export default function Bar(){
    const { logout } = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    };

    return(
        <Fragment>
            <div className="sidebar-caixa">
                <div className="sidebar-navigation">
                    <ul className="sidebar-ul">
                        
                        <Link to="/home"><img className="sidebar-logo" src={logo} alt="logo"></img></Link>
                        <h1 className="sidebar-h1">Estuder's</h1>
                        
                        <li className="sidebar-list">
                            <p className="sidebar-p">
                            <Link className="sidebar-icon" to="/home"><AiFillHome/></Link>
                            <Link className="sidebar-a" to="/home">Início</Link>
                            </p>
                        </li>

                        <li className="sidebar-list">
                            <p className="sidebar-p">
                                <Link className="sidebar-icon" to="/materias"><HiClipboard/></Link>
                                <Link className="sidebar-a" to="/materias">Disciplinas</Link>
                            </p>
                        </li>
                        
                        <li className="sidebar-list">
                            <p className="sidebar-p">
                                <Link className="sidebar-icon" to="/eventos"><BsFillCalendarCheckFill/></Link>
                                <Link className="sidebar-a" to="/eventos">Tarefas e eventos</Link>
                            </p>
                        </li>
                        
                        <li className="sidebar-list">
                            <p className="sidebar-p">        
                                <Link className="sidebar-icon" to="/config"><RiSettings3Fill/></Link>
                                <Link className="sidebar-a" to="/config">Configurações</Link>
                            </p>
                        </li>
                        
                        <li className="sidebar-miniPerfil">
                            <img className="sidebar-perfilPic" src={perfil} alt=""></img>
                            <span className="sidebar-nome" id="nome">Nome</span>
                            <span className="sidebar-email" id="email">email@email.com</span>
                            <a href="##">
                                <span onClick={handleLogout} className="sidebar-icon-exit"><MdLogout/></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
} 