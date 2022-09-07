import React, {Fragment} from "react";
import './styles.css';
import girassol from "../../assets/girassol-cad.png"

export default function Log(){

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
                    <p class="textinho">Use seu email e senha</p>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Entrar</button>
                    <p class="conta">Não possui uma conta?</p>
                    <a href='#'>Crie uma aqui!</a>
            </div>
        </div>
	</Fragment>
	);
}