import React, {Fragment} from "react";

import "./styles.css";
import Logo from '../../assets/Logo Girassol.png';
import Perfil from '../../assets/Imagens Perfil/verde escuro.png';

export default function Barra(){
    
    return(
        <Fragment>
            <div class="caixa">
                <div class="navigation">
                    <ul>
                        <img class="logo" src={Logo}/>
                        <h1>Estuder's</h1>
                        <li class="list active">
                            <a href="#">
                                <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                                <span class="title">Início</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="#">
                                <span class="icon"><ion-icon name="clipboard-outline"></ion-icon></span>
                                <span class="title">Disciplinas</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="#">
                                <span class="icon"><ion-icon name="calendar-outline"></ion-icon></span>
                                <span class="title">Tarefas e eventos</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="#">
                                <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                                <span class="title">Configurações</span>
                            </a>
                        </li>
                        
                        <li class="miniPerfil">
                            <img class="Perfil-Image" src={Perfil}/>
                            <span class="nome" id="nome">Nome</span>
                            <span class="email" id="email">email@email.com</span>
                            <a href="#">
                                <span class="icon-exit"><ion-icon name="log-out-outline"></ion-icon></span>
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