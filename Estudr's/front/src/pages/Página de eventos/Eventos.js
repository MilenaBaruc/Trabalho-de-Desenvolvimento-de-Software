import React, { useState, onClick } from "react";

import { MdAdd } from 'react-icons/md';
import { AuthContext } from '../../components/contexts/auth';

import Calendar from 'react-calendar'
import PopUp from "../../components/PopUp Evento/popup.js";
import Bar from "../../components/sidebar/sidebar"

import "./evento.css";
import "../../components/PopUp Evento/popup.js";
function PaginaEvento() {


    const [isPopUpOpen, setPopUpOpen] = useState(false);

    function openPopUp(){
        setPopUpOpen(true)
    }

    function closePopUp(){
        setPopUpOpen(false)
    }

    function abrirEvento(){

    }

    function ProximosEventos(){

    }
    

    return(
        
            <div className="evento-main">
                <div className="evento-cabecalho">
                    <h1 className="evento-h1">Eventos</h1>
                    <button className="evento-add-botao" onClick={openPopUp}>
                        <MdAdd size={70} className="evento-add-icon"/>
                    </button>                    
                </div>
                <hr className="evento-hr"/> 

                <div className="evento-calendario">
                    <Calendar onClickDay={abrirEvento}/>
                </div>

                <div className="eventos-do-mes-caixa-listagem">
                    <p className="evento-proximos-titulo">Eventos do Mês</p>
                    <hr className="evento-proximos-hr"/>
                    <form className="evento-proximos">
                        {ProximosEventos}
                    </form>

                </div>

                {isPopUpOpen ? <PopUp closePopUp={closePopUp}/> : null}
                <Bar/>
            </div>
    );
}

export default PaginaEvento;