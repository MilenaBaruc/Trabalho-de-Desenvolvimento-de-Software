import React, {Fragment} from "react";
import "./styles.css";

import Isigaa from "../../assets/Imagens Botões Home/sigaa.png";
import Iaprender from "../../assets/Imagens Botões Home/aprender.png";
import Iteams from "../../assets/Imagens Botões Home/teams.png";
import Iemail from "../../assets/Imagens Botões Home/email.png";
import Ionedrive from "../../assets/Imagens Botões Home/onedrive.png";

export default function Home(){
    return( 
        <Fragment>
          <div class="main">
            <div class="titulo-inicio">
                <h1>Início</h1>
                <hr/>
            </div>
            
            <div class="mid">
                <div class="tela-eventos">
                    <h2>Eventos da semana</h2>
                </div>
                <div class="tela-materias">
                    <h2>Matérias</h2>
                </div>    
            </div>
            
            <div class="btn">
                    <a class="btn-sigaa" href="https://sig.unb.br/sigaa/verTelaLogin.do"><img class="sigaa" src={Isigaa} href="https://sig.unb.br/sigaa/verTelaLogin.do" width= "3px" height="35px" alt="Botão Sigaa"/> Sigaa</a>
                    
                    <a class="btn-aprender" href="https://aprender3.unb.br/login/index.php"><img class="aprender" src={Iaprender} width= "3px" height="35px" alt="Botão Aprender 3"/>  
                    Aprender</a>
                    
                    <a class="btn-teams" href="https://www.microsoft.com/pt-br/microsoft-teams/log-in"><img class="teams" src={Iteams} width= "3px" height="35px" alt="Botão Teams"/> Teams</a>
                     
                    <a class="btn-email" href="https://outlook.office.com/mail/"><img class="email-img" src={Iemail} width= "3px" height="35px" alt="Botão Outlook"/> 
                    Outlook</a>
                     
                    <a class="btn-onedrive" href="https://onedrive.live.com/about/pt-br/signin/"><img class="onedrive" src={Ionedrive} width= "3px" height="35px" alt="Botão One Drive"/> OneDrive</a>
                     
            </div>
            
            <div class="grade">
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
          
           
        </Fragment>
   );
}