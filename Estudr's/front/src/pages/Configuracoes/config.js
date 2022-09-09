import React, {Fragment} from "react";

import "./styles.css";
import perfil from '../../assets/ImagensPerfil/verde escuro.jpg'
import Bar from '../../components/Barra lateral/index-config.js';


export default function Config(){

    return(
        <Fragment>
            <Bar/>
            <div class="main" >
                <div class="perfil">
                    <img class="perfil-image" src={perfil} alt="user-icon" width="224px" height="224px"></img>
                    <h1>Nome Sobrenome</h1>
                    <h3>email@email.com</h3>
                </div>

                <div class="box">
                    <h2>Alterar senha</h2>
                    
                    <input class="input-box" type="password" placeholder="senha atual" required maxLength="8" size="8" minLength="4"></input>
                    <input class="input-box" type="password" placeholder="nova senha" required maxLength="8" size="8" minLength="4"></input>
                    <input class="input-box" type="password" placeholder="repita a nova senha" required maxLength="8" size="8" minLength="4"></input>
                
                    <button class="btn-save" type="submit">Salvar alterações</button>
                </div>

                <div>
                <ul className="message">
                        <li>Sua senha deve conter no mínimo 4 carecteres e no máximo 8</li>
                        <li>Para maior segurança, use números e letras</li>
                        <li>Não compartilhe sua senha, não nos responsabilizamos por perda de conta</li>
                </ul>
                </div>

                <button class="btn-delete">Excluir conta</button>

            </div>
        </Fragment>
    );
}