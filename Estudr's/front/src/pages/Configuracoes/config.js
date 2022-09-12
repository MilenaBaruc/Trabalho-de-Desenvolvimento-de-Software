import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./config.css";
import perfil from '../../assets/ImagensPerfil/verde escuro.jpg'
import Bar from "../../components/sidebar/sidebar.js"



export default function Config(){

    return(
        <Fragment>
            <Bar/>
            <div className="config-main" >
                <div className="config-perfil">
                    <img className="config-perfil-image" src={perfil} alt="user-icon" width="200px" height="200px"></img>
                    <h1 className="config-h1">Nome Sobrenome</h1>
                    <h3 className="config-h3">email@email.com</h3>
                </div>

                <div className="config-box">
                    <h2 className="config-h2">Alterar senha</h2>
                    
                    <input className="config-input-box" type="password" placeholder="senha atual" required maxLength="8" size="8" minLength="4"></input>
                    <input className="config-input-box" type="password" placeholder="nova senha" required maxLength="8" size="8" minLength="4"></input>
                    <input className="config-input-box" type="password" placeholder="repita a nova senha" required maxLength="8" size="8" minLength="4"></input>
                
                    <button className="config-btn-save" type="submit">Salvar alterações</button>
                </div>

                <div>
                <ul className="config-message">
                        <li className="config-li">Sua senha deve conter no mínimo 4 carecteres e no máximo 8</li>
                        <li className="config-li">Para maior segurança, use números e letras</li>
                        <li className="config-li">Não compartilhe sua senha, não nos responsabilizamos por perda de conta</li>
                </ul>
                </div>

                <Link to="/"><button className="config-btn-delete">Excluir conta</button></Link>

            </div>
        </Fragment>
    );
}