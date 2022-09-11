import React, { onClick, Fragment } from "react";

import "./popup.css";

export default function PopUp( {closePopUp} ){
  
    return(
      <Fragment>
      <div className="popUp-body">
        <div className="popUp-evento">
          <div className="popUp-title-area">
            <h1 className="popUp-title">Novo Evento</h1>
          </div>

          <div className="popUp-input-area">
            <div className="popUp-text-area--input">
              <label className="popUp-label" for="popUp-campotexto">Nome do Evento:</label>
              <label className="popUp-label" for="popUp-caixaselect">Matéria do Evento:</label>
              <label className="popUp-label" for="popUp-campodata">Data:</label>
            </div>

            <div className="popUp-input-container">
              <div className="popUp-title-event--area">
                <input type="text" className="popUp-campotexto" />
              </div>

              <div className="popUp-materia-evento-area">
                <select className="popUp-caixaselect">
                  
                  <option className="popUp-option">Evento sem matéria</option>
                  <option className="popUp-option">Evento sem matéria</option>
                  <option className="popUp-option">Evento sem matéria</option>
                </select>
              </div>

              <div className="popUp-data-area">
                <input type="date" className="popUp-campodata" />
              </div>
            </div>
          </div>

          <div className="popUp-btn-area">
            <button className="popUp-btn-cancel" onClick={ closePopUp }>Cancelar</button>
            <button className="popUp-btn-add" type="submit" onClick={ closePopUp }>Adicionar</button>
          </div>
        </div>
      </div>
      </Fragment>
    );
}