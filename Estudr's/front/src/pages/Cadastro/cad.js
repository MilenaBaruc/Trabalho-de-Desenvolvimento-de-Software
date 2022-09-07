import React, { onClick, Fragment} from "react";
import './styles.css';
import girassol from "../../assets/girassol-cad.png"

export default function Cad({setLoginForm}){

	return(
	<Fragment>
        <div class="main">
            <div class="bem-vindo">
                <h1>Bem vindo ao Estuder's!</h1>
                <p class="textinhop">Todas as suas matérias num único lugar!</p> 
                <img class="imagem" width="300" src={girassol}/> 
            </div>
            <div className="right-box">
                <h1>Crie sua conta</h1>
                    <p class="textinho">Use seu email para se registrar!</p>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button>Cadastrar</button>
                    <p class="conta">Já possui uma conta?</p>
                    <a onClick={setLoginForm}>Entre por aqui!</a>
            </div>
        </div>
	</Fragment>
	);
}