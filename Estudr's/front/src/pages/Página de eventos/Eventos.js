import React, {Fragment} from "react";

import "./evento.css";
import { MdAdd } from 'react-icons/md'

import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css';
import "../../components/PopUp Evento/popup";


function PaginaEvento() {

    function abrirEvento(){

    }

    function ProximosEventos(){

    }
    

    return(
            <div className="evento-main">
                <div className="evento-cabecalho">
                    <h1 className="evento-h1">Eventos</h1>
                    <button className="evento-add-botao">
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
            </div>
    );
}

export default PaginaEvento;