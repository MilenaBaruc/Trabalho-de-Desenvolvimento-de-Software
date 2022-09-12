import React, { useRef, useState, useEffect,onClick, Fragment, useInsertionEffect} from "react";

import { Link } from "react-router-dom";

import './styles.css';
import girassol from "../../assets/girassol-cad.png"


const Cad = () => {

    

	return(
	<Fragment>
        <div className="cadastro-body">
        <div className="cadastro-main">
            <div className="cadastro-bem-vindo">
                <h1 className="cadastro-h1">Bem vindo ao Estuder's!</h1>
                <p className="cadastro-textinhop">Todas as suas matérias num único lugar!</p> 
                <img className="cadastro-imagem" width="300" src={girassol}/> 
            </div>
            <div className="cadastro-right-box">
                <h1>Crie sua conta</h1>
                <p className="cadastro-textinho">Use seu email para se registrar!</p>

                <input 
                    className="cadastro-input" 
                    type="text" 
                    placeholder="Nome"
                    id="name"
                    required
                />
                <input className="cadastro-input" type="email" placeholder="Email" id="email" required />
                <input className="cadastro-input" type="password" placeholder="Senha" id="password" required />
                <Link to="/" className="cadastro-link-log"><button className="cadastro-btn">Cadastrar</button></Link>
                <p className="cadastro-conta">Já possui uma conta?</p>
                <p className="cadastro-p"><Link to="/" className="cadastro-link-log">Entre por aqui!</Link></p>
            </div>
        </div>
        </div>
	</Fragment>
	);
}

export default Cad