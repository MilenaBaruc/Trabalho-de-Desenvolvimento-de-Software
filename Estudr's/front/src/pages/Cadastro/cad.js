import React, { onClick, Fragment} from "react";
import './styles.css';
import girassol from "../../assets/girassol-cad.png"

export default function Cad({setLoginForm}){

	return(
	<Fragment>
        <div className="main">
            <div className="bem-vindo">
                <h1>Bem vindo ao Estuder's!</h1>
                <p className="textinhop">Todas as suas matérias num único lugar!</p> 
                <img className="imagem" width="300" src={girassol}/> 
            </div>
            <div className="right-box">
                <h1>Crie sua conta</h1>
                <p className="textinho">Use seu email para se registrar!</p>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button>Cadastrar</button>
                <p className="conta">Já possui uma conta?</p>
                <a onClick={setLoginForm}>Entre por aqui!</a>
            </div>
        </div>
	</Fragment>
	);
}