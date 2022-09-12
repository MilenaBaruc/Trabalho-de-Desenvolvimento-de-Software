import React, { onClick, Fragment, useState} from "react";
import { Link } from "react-router-dom"
import add from '../../assets/add.png';
import "./materias.css";
import Bar from "../../components/sidebar/sidebar.js"
import { MdAdd } from 'react-icons/md';
import PopUpmat from "../../components/PopUp Materia/popuomat.js"

export default function Materias(){

    const [isPopUpmat, setIsPopUpmat] = useState(false);

    function openPopUpmat() {
        setIsPopUpmat(true)
    }

    function closePopUpmat(){
        setIsPopUpmat(false)
    }
    
    function newMateria(){
    }
    return( 
    <Fragment>
        <div className="materias-main">
            <div>
                <h1 className="materias-h1">Matérias</h1>
            </div>
                <hr className="materias-hr"/>

            <div className="materias-divdobtn">
                <button className="materias-btn-add" type="submit" onClick={ openPopUpmat }> 
                <MdAdd size={110} color="white" className="materia-add-icon" onClick={ openPopUpmat }/> Adicionar nova matéria </button>
                <Link to="/materias-s"><button className="materias-btn-mat" type="submit">Cálculo 2</button></Link>
            </div>
        </div>
        {isPopUpmat ? <PopUpmat closePopUpmat={ closePopUpmat } /> : null}
       
        <Bar/>
    </Fragment>
    );
}


