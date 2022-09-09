import React, { useState, useContext, onClick, Fragment } from "react";
import { AuthContext } from "../../components/contexts/auth";

import './log.css';
import girassol from "../../assets/girassol-cad.png"
import setRegisterForm from '../../components/Modal/Modal';

export default function Log({setRegisterForm}){

    const { authenticated, login } = useContext(AuthContext);

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email, password});

        login(email, password);
    };

	return(
	<Fragment>
        <div class="main">
            <div class="bem-vindo">
                <h1>Bem vindo ao Estuder's!</h1>
                <p class="textinhop">Seu novo planner virtual!</p> 
                <img class="imagem" width="300" src={girassol}/> 
            </div>
            <div class="right-box">
                <h1>Entre aqui!</h1>
                <p>{String(authenticated)}</p>
                    <p class="textinho">Use seu email e senha</p>
                    <form class="form" onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button>Entrar</button>
                        <p class="conta">Não possui uma conta?</p>
                        <a onClick={setRegisterForm}>Crie uma aqui!</a>
                    </form>
            </div>
        </div>
	</Fragment>
	);
}