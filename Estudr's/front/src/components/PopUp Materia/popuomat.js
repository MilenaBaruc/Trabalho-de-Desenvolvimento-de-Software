import React, { onClick, Fragment } from "react";

import "./popupmat.css";

export default function PopUpmat( { closePopUpmat } ){
    function newMateria(){
        const div = document.createElement('div')
        div.append(div)
    }
    
  
    return(
        <Fragment>
            <div className="mat-popUp-body">
                <div className="mat-popUp-evento">
                    <div className="mat-popUp-title-area">
                        <h1 className="mat-popUp-title">Nova matéria</h1>
                    </div>

                    <div className="mat-popUp-input-area">
                        <div className="mat-popUp-text-area--input">
                            <label className="mat-popUp-label" for="popUp-campotexto">Nome da matéria:</label>
                        </div>

                    <div className="mat-popUp-input-container">
                        <div className="mat-popUp-title-event--area">
                            <input type="text" className="mat-popUp-campotexto" />
                        </div>
                    </div>
                    </div>

                <div className="mat-popUp-btn-area">
                    <button className="mat-popUp-btn-cancel" onClick={ closePopUpmat }>Cancelar</button>
                    <button className="mat-popUp-btn-add" type="submit" onClick= { closePopUpma, newMateria }>Adicionar</button>
                </div>
                </div>
            </div>
      </Fragment>
    );
}