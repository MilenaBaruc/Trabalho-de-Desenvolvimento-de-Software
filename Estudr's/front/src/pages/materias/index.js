import React, {Fragment} from "react";
import add from '../../assets/add.png';
import "./styles.css";
import Bar from '../../components/Barra lateral/index-materias.js';


//function addbtn(){
        
//}


export default function Materias(){
    return( 
    <Fragment>
            <Bar/>
        <div className="main">
            <div>
                <h1>Matérias</h1>
            </div>
                <hr/>

            <div className="divdobtn">
                <button className="btn-add" type="submit"> 
                    <img className="btn-img" src={add} alt="Botão Adicionar Matéria"/> Adicionar nova matéria</button>
            </div>

        </div>
    </Fragment>
    );
}


