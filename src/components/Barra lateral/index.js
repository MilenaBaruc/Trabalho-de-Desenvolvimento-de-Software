import React from 'react';
import {Fragment} from "react";
import { AiFillHome } from "react-icons/ai" 
import { HiClipboard } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

import "./styles.css";
import perfil from '../../assets/ImagensPerfil/verde escuro.jpg'
import logo from '../../assets/Logo Girassol.png'


export default function Bar(){


    return(
        <Fragment>
            <div class="caixa">
        <div class="navigation">
            <ul>
                <img class="logo" src={logo} alt="logo"></img>
                <h1>Estuder's</h1>
                <li class="list active">
                    <a href="../../pages/home/index.js">
                       
                        <span class="icon"><AiFillHome/></span>
                        <span class="title">Início</span>
                    </a>
                </li>
                <li class="list">
                    <a href="../pages/materias/index.js">
                        
                        <span class="icon"><HiClipboard/></span>
                        <span class="title">Disciplinas</span>
                    </a>
                </li>
                <li class="list">
                    <a href="##">
                       
                        <span class="icon"><BsFillCalendarCheckFill/></span>
                        <span class="title">Tarefas e eventos</span>
                    </a>
                </li>
                <li class="list">
                    <a href="../pages/materias/index.js">
                        
                        <span class="icon"><RiSettings3Fill/></span>
                        <span class="title">Configurações</span>
                    </a>
                </li>
                
                <li class="miniPerfil">
                    <img class="perfilPic" src={perfil} alt=""></img>
                    <span class="nome" id="nome">Nome</span>
                    <span class="email" id="email">email@email.com</span>
                    <a href="##">
                        
                        <span class="icon-exit"><MdLogout/></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </Fragment>
    );
} 