import React, {Fragment} from "react";

import "./styles.css";
import perfil from '../../assets/Imagens Perfil/verde escuro.jpg'

export default function Config(){


    return(
        <Fragment>
            <div class="main" >
                <div class="perfil">
                    <img class="perfil-image" src={perfil} alt="user-icon" width="150px" height="150px"></img>
                    <h1>Nome Sobrenome</h1>
                    <h3>email@email.com</h3>
                </div>

                <div class="box">
                    <h2>Trocar de senha</h2>
                    <input class="input-box" type="password" placeholder="senha atual"></input>
                    <input class="input-box" type="password" placeholder="nova senha"></input>
                    <input class="input-box" type="password" placeholder="repita a nova senha"></input>

                    <button class="btn-save" type="submit">Salvar alterações</button>
                </div>

                <button class="btn-delete">Excluir conta</button>

            </div>
        </Fragment>
    );
}