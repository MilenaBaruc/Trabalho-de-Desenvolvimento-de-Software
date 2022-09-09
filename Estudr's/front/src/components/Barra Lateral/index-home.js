import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import {Fragment} from "react";

import { AiFillHome } from "react-icons/ai" 
import { HiClipboard } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

import { AuthContext } from '../contexts/auth';
import "./styles.css";
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
                    <ul>
                        
                        <Link to="/home"><img className="sidebar-logo" src={logo} alt="logo"></img></Link>
                        <h1>Estuder's</h1>
                        
                        <li className="sidebar-list active">
                            <p>
                            <span className="sidebar-icon"><Link to="/home"><AiFillHome/></Link></span>
                            <span className="sidebar-title"><Link to="/home">Início</Link></span>
                            </p>
                        </li>

                        <li className="sidebar-list">
                            <p>
                                <span className="sidebar-icon"><Link to="/materias"><HiClipboard/></Link></span>
                                <span className="sidebar-title"><Link to="/materias">Disciplinas</Link></span>
                            </p>
                        </li>
                        
                        <li className="sidebar-list">
                            <p>
                                <span className="sidebar-icon"><Link to="/eventos"><BsFillCalendarCheckFill/></Link></span>
                                <span className="sidebar-title"><Link to="/eventos">Tarefas e eventos</Link></span>
                            </p>
                        </li>
                        
                        <li className="sidebar-list">
                            <p>        
                                <span className="sidebar-icon"><Link to="/config"><RiSettings3Fill/></Link></span>
                                <span className="sidebar-title"><Link to="/config">Configurações</Link></span>
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