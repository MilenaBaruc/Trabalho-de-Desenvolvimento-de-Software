import React, {Fragment} from "react";
import add from '../../assets/add.png';
import "./materias.css";
import Bar from "../../components/sidebar/sidebar.js"


//function addbtn(){
        
//}


export default function Materias(){
    return( 
    <Fragment>
        <div className="materias-main">
            <div>
                <h1 className="materias-h1">Matérias</h1>
            </div>
                <hr className="materias-hr"/>

            <div className="materias-divdobtn">
                <button className="materias-btn-add" type="submit"> 
                    <img className="materias-btn-img" src={add} alt="Botão Adicionar Matéria"/> Adicionar nova matéria</button>
            </div>

        </div>
        <Bar/>
    </Fragment>
    );
}


