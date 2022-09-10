import React, { onClick, Fragment} from "react";
import "./styles.css";

import { HiPencil } from 'react-icons/hi';
import { Link } from 'react-router-dom';
      
      
      
      const diasAteProva = () => {
        //const date1 = getElementById()
        
    };

    var line = 1;
    const addInput = () => {
        
        var newdiv = document.createElement('div');
        newdiv.innerHTML = '['+line +']';
        newdiv.innerHTML += '<input type="text" name="text'+line +'_1" id="text'+line +'_1">';
        newdiv.innerHTML += '<input type="text" name="text'+line +'_2" id="text'+line +'_2">';
        //document.getElementById('sec-input-number-avaliações').appendChild(newdiv);
        line++;
    }


  export default function Secundaria() {
    
    const diasAteProva = () => {
        
    };

    const botaoEditar = () => {

    };

    var line = 1;
    const addInput = () => {
        var newdiv = document.createElement('div');
        newdiv.innerHTML = '['+line +']';
        newdiv.innerHTML += '<input type="text" name="text'+line +'_1" id="text'+line +'_1">';
        newdiv.innerHTML += '<input type="text" name="text'+line +'_2" id="text'+line +'_2">';
        //document.getElementById('sec-input-number-avaliações').appendChild(newdiv);
        line++;
    }

    addInput('lines');

    return(
        <Fragment>
           
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

                           <div className="sec-form">
                            <form className="sec-informacoes-basicas">
                                <label className="sec-h3" for="creditos">Créditos:</label>
                                <input className="sec-input" id="creditos" type="number"></input>
                                <br></br>

                                <label className="sec-h3" for="prof">Professora:</label>
                                <input className="sec-input" id="prof" type="text"></input><br></br>

                                <label className="sec-h3" for="dias-de-aula">Dias de aula:</label>
                                <input className="sec-input" id="dias-de-aula" type="text"></input><br></br>

                                <label className="sec-h3" for="numero-reprovações">Quantidade de reprovações:</label>
                                <input className="sec-input" id="numero-reprovações" type="number"></input>
                            </form>
                            </div> 

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
                        
                        <label className="sec-formas-de-avaliacao-label">Quantas formas de avaliação você deseja adicionar?</label>
                        <input type="number" className="sec-input" id="sec-input" ></input> <br/><br/>

                        <label className="sec-formas-de-avaliacao-label">Prova 1:</label>
                        <input type="number" className="sec-input" id="sec-input" placeholder="Nota" ></input>
                        <input type="date" className="sec-input" id="sec-date1" placeholder="" ></input> <br/><br/>

                        <label className="sec-formas-de-avaliacao-label">Prova 2:</label>
                        <input type="number" className="sec-input" id="sec-input" placeholder="Nota"></input>
                        <input type="date" className="sec-input" id="sec-date2" placeholder="" ></input> <br/><br/>

                        <label className="sec-formas-de-avaliacao-label">Prova 3:</label>
                        <input type="number" className="sec-input" id="sec-input" placeholder="Nota"></input>
                        <input type="date" className="sec-input" id="sec-date3" placeholder="" ></input> <br/><br/>

                        <h2 className="sec-h2">Cálculo da nota: </h2>
                        <h3 className="sec-h2">Lista de exercícios semanais: </h3>
                    </div>
                </div>

                <div className="entregas-sec">
                    <div className="sec-box-principal">                                   
                        <div className="conteudo-sec">
                            <div className="sec-titulo-conteudo">  
                                <h2 className="sec-h2">Conteúdos</h2>
                                <h2 className="sec-h2">Exercícios</h2>
                            </div>
                        </div>
                    </div>

                    <div className="entregas-sec">
                        <h2 className="sec-h2">Entregas</h2>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}