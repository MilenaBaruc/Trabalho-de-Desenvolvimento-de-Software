import React, {Fragment} from "react";
import "./home.css";

import Isigaa from "../../assets/Imagens Botões Home/sigaa.png";
import Iaprender from "../../assets/Imagens Botões Home/aprender.png";
import Iteams from "../../assets/Imagens Botões Home/teams.png";
import Iemail from "../../assets/Imagens Botões Home/email.png";
import Ionedrive from "../../assets/Imagens Botões Home/onedrive.png";
import Bar from "../../components/sidebar/sidebar.js"

export default function Home(){
    return( 
    <Fragment>
          <div className="home-main">
            <div className="home-titulo-inicio">
                <h1 className="home-h1">Início</h1>
                <hr className="home-hr"/>
            </div>
            
            <div className="home-mid">
                <div className="home-tela-eventos">
                    <h2 className="home-h2">Eventos da semana</h2>
                </div>
                <div className="home-tela-materias">
                    <h2 className="home-h2">Matérias</h2>
                </div>    
            </div>
            
            <div className="home-btn">
                    <a className="home-btn-sigaa" href="https://sig.unb.br/sigaa/verTelaLogin.do"><img className="home-sigaa" src={Isigaa} href="https://sig.unb.br/sigaa/verTelaLogin.do" width= "3px" height="35px" alt="Botão Sigaa"/> Sigaa</a>
                    
                    <a className="home-btn-aprender" href="https://aprender3.unb.br/login/index.php"><img className="home-aprender" src={Iaprender} width= "3px" height="35px" alt="Botão Aprender 3"/>  
                    Aprender</a>
                    
                    <a className="home-btn-teams" href="https://www.microsoft.com/pt-br/microsoft-teams/log-in"><img className="home-teams" src={Iteams} width= "3px" height="35px" alt="Botão Teams"/> Teams</a>
                     
                    <a className="home-btn-email" href="https://outlook.office.com/mail/"><img className="home-email-img" src={Iemail} width= "35px" height="35px" alt="Botão Outlook"/> 
                    Outlook</a>
                     
                    <a className="home-btn-onedrive" href="https://onedrive.live.com/about/pt-br/signin/"><img className="home-onedrive" src={Ionedrive} width= "3px" height="35px" alt="Botão One Drive"/> OneDrive</a>
                     
            </div>
            
            <div className="home-grade">
<table border="1">
  <tr>
      <td>&nbsp;</td> <th>segunda</th> <th>terça</th> <th>quarta</th> <th>quinta</th> <th>sexta</th>
  </tr>
  <tr>
      <th>08:00</th><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
  </tr>
  <tr>
      <th>10:00</th><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
  </tr>
  <tr>
      <th>12:00</th><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
  </tr>
  <tr>
      <th>14:00</th><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
  </tr>
  <tr>
      <th>16:00</th><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
  </tr>

</table>
            </div>
          </div>
            <Bar/>
        </Fragment>
   );
}