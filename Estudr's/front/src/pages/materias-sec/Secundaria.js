import React, { onClick, Fragment} from "react";
import "./styles.css";

import { HiPencil } from 'react-icons/hi';
import { Link } from 'react-router-dom';
      
import Bar from "../../components/sidebar/sidebar";
      
      
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
           <Bar/>
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
                                <label className="sec-h3-infs" for="creditos">Créditos:</label>
                                <br></br>

                                <label className="sec-h3-infs" for="prof">Professora:</label>
                                <br></br>

                                <label className="sec-h3-infs" for="dias-de-aula">Dias de aula:</label>
                                <br></br>

                                <label className="sec-h3-infs" for="numero-reprovações">Quantidade de reprovações:</label>
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
                       <div className="sec-titulos-avaliacao">
                      
                        <h2 className="sec-h2">Forma de avaliação</h2>
                        <h2 className="sec-h2">Cálculo da nota: </h2>
                       </div>
                        
                        <div className="sec-box-lista-prova">
                        </div>
                        <a className="sec-icon-principal" onClick={botaoEditar} ><HiPencil size={28}/></a>
                    </div>

                 <div className="entregas-sec-tudo">
                      
                      <div className="sec-box-principal">                                   
                        
                            <div className="sec-titulo-conteudo">  
                                <h2 className="sec-h2">Conteúdos</h2>
                                <h2 className="sec-h2">Exercícios</h2>
                                <a className="sec-icon-conteudo" onClick={botaoEditar} ><HiPencil size={28}/></a>
                            </div>

                           <div className="entregas-sec">
                        <h2 className="sec-h2">Entregas</h2>
                        <a className="sec-icon-entrega" onClick={botaoEditar} ><HiPencil size={28}/></a>
                           </div>
                      </div>

                 </div>

                 </div>
             </div>

        </Fragment>
    );
}