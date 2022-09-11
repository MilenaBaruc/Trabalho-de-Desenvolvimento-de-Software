import React, {Fragment} from "react";
import add from '../../assets/add.png';
import "./materias.css";
import Bar from "../../components/sidebar/sidebar.js"
import { MdAdd } from 'react-icons/md';


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
                <MdAdd size={110} color="white" className="materia-add-icon"/> Adicionar nova matéria </button>
            </div>

        </div>
        <Bar/>
    </Fragment>
    );
}


