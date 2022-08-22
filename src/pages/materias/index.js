import React, {Fragment} from "react";

import "./styles.css";





export default function Materias(){
    return( 
    <Fragment>
        <div class="main">
            <div>
                <h1>Matérias</h1>
            </div>
                    <hr/>

            <div className="divdobtn">
                <button class="btn-add" type="submit">Adicionar nova matéria</button>
            </div>

        </div>
    </Fragment>
    );
}


