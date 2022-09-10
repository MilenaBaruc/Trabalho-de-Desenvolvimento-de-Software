import React, { onClick, Fragment} from "react";
import "./styles.css";

import { HiPencil } from 'react-icons/hi';
import { Link } from 'react-router-dom';


function buttoms(){

}

export default function Secundaria() {

    const diasAteProva = () => {
        
    };

    const botaoEditar = () => {

    };

    var line = 1;
    const addInput = () => {
        
    }

    addInput('lines');

    return(
        <Fragment>
            <secBar/>
            
            <div className="main-sec">
                <div className="title-sec">
                 <div className="titulo-inicio-sec">
                  <h1 className="sec-h1">Cálculo 2</h1>
                  <hr className="sec-hr"/>
                 </div>
                </div>
                
                <div className="top-sec">
                    <div className="box-inf-sec">
                        <div className="informacao-sec">
                            <h2 className="sec-h2">Informações</h2>
                            <a className="sec-icon-info" onClick={botaoEditar} ><HiPencil size={28}/></a>
                            <form className="sec-informacoes-basicas">
                                <label className="sec-h3" for="creditos">Créditos:</label>
                                <input className="sec-input" id="creditos" type="number"></input>
                                <label className="sec-h3" for="prof">Professora:</label>
                                <input className="sec-input" id="prof" type="text"></input>
                                <label className="sec-h3" for="dias-de-aula">Dias de aula:</label>
                                <input className="sec-input" id="dias-de-aula" type="text"></input>
                                <label className="sec-h3" for="numero-reprovações">Quantidade de reprovações:</label>
                                <input className="sec-input" id="numero-reprovações" type="number"></input>
                            </form>
                        </div>
                        <div className="nota-sec">
                        <h2 className="sec-h2">Até o momento sua nota é:</h2>
                        </div>
                    </div>
                    <div className="sec-dias-ate-prova">
                        <h2 className="sec-h2">Faltam {diasAteProva} dias até sua prova</h2>
                    </div>
                    </div>
                
                <div className="principal-sec">
                    <div className="sec-forma-de-avaliacao">
                        <h2 className="sec-h2">Forma de avaliação</h2>


                        <h2 className="sec-h2">Cálculo da nota: </h2>
                        <h3 className="sec-h2">Lista de exercícios semanais: </h3>
                    </div>
                    <div className="sec-box-principal">
                    <div className="conteudos-sec">

                    </div>
                    <div className="entregas-sec">

                    </div>
                    </div>
                </div>
            </div>
            
            
        </Fragment>
    );
}