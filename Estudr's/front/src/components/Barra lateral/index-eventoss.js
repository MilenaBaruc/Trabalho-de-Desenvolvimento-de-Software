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
            <div class="caixa">
                <div class="navigation">
                    <ul>
                        
                        <Link to="/home"><img class="logo" src={logo} alt="logo"></img></Link>
                        <h1>Estuder's</h1>
                        
                        <li class="list ">
                            <p>
                            <span class="icon"><Link to="/home"><AiFillHome/></Link></span>
                            <span class="title"><Link to="/home">Início</Link></span>
                            </p>
                        </li>

                        <li class="list">
                            <p>
                                <span class="icon"><Link to="/materias"><HiClipboard/></Link></span>
                                <span class="title"><Link to="/materias">Disciplinas</Link></span>
                            </p>
                        </li>
                        
                        <li class="list active">
                            <p>
                                <span class="icon"><Link to="/eventos"><BsFillCalendarCheckFill/></Link></span>
                                <span class="title"><Link to="/eventos">Tarefas e eventos</Link></span>
                            </p>
                        </li>
                        
                        <li class="list">
                            <p>        
                                <span class="icon"><Link to="/config"><RiSettings3Fill/></Link></span>
                                <span class="title"><Link to="/config">Configurações</Link></span>
                            </p>
                        </li>
                        
                        <li class="miniPerfil">
                            <img class="perfilPic" src={perfil} alt=""></img>
                            <span class="nome" id="nome">Nome</span>
                            <span class="email" id="email">email@email.com</span>
                            <a href="##">
                                <span onClick={handleLogout} class="icon-exit"><MdLogout/></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
} 