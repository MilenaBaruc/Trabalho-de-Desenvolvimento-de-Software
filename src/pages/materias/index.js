import React, {Fragment} from "react";
import add from '../../assets/add.png';
import "./styles.css";

function addbtn(){
        
}


export default function Materias(){
    return( 
    <Fragment>
        <div class="main">
            <div>
                <h1>Matérias</h1>
            </div>
                <hr/>

            <div className="divdobtn">
                <button class="btn-add" type="submit"> 
                    <img class="btn-img" src={add}/> Adicionar nova matéria</button>
            </div>

        </div>
    </Fragment>
    );
}


