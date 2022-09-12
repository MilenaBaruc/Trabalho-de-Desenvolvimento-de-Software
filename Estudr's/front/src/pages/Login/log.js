import React, { useState, useContext, onClick, Fragment } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/contexts/auth";

import './log.css';
import girassol from "../../assets/girassol-cad.png"

export default function Log(){

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
        <div className="login-body">
            <div className="login-main">
                <div className="login-bem-vindo">
                    <h1 className="login-h1">Bem vindo ao Estuder's!</h1>
                    <p className="textinhop">Seu novo planner virtual!</p> 
                    <img className="imagem" width="300" src={girassol}/> 
                </div>
                <div className="login-box">
                    <h1 className="login-h1">Entre aqui!</h1>
                    <p className="textinho">Use seu email e senha</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input 
                            className="log-imput"
                            type="email"
                            placeholder="Email" 
                            value={email}
                            id="email" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            className="log-imput"
                            type="password" 
                            placeholder="Senha"
                            value={password}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Link to={authenticated? "/home" : "/"} className="login-btn-link"><button className="login-btn">Entrar</button></Link>

                        <p className="conta">Não possui uma conta?</p>
                        <Link to="/cadastro" className="login-link"><p  className="login-link-p">Crie uma aqui!</p></Link>
                    </form>
                </div>
            </div>
        </div>
	</Fragment>
	);
}