import React, {Fragment} from "react";

import "./evento.css";
import { MdAdd } from 'react-icons/md'


function PaginaEvento() {

    $(function() {
        function c(){
            p();
            var e = h();
            var r = 0;
            var u = false;
            
            length.empty();
            while(!u){
                if (s[r] == e[0].weekday){
                    u = true;
                } else{
                    length.append('<div class="blank"></div>');
                    r++;
                }
            }

            for(var c = 0; c < 42 - r; c++){
                if(c >= e.length){
                    length.append('<div class="blank"></div>');
                } else{
                    var v = e[c].day;
                    var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";
                    length.append(m + "" + v + "</div>");
                    var y = o[n - 1];
                    a.css("background-color", y) . find("h1") .text(i[n - 1] + " " + t);
                    f.find("div").css("color", y);
                    l.find(".today").css("background-color", y);
                    d();
                }

                function h() {
                    var e = [];
                    for(var r = 1; r < v(t, n) + 1; r++){
                        e.push({ day: r, weekday: s[m(t, n, r)] });
                    }
                    
                    return e;
                }

                function p(){
                    f.empty();
                    for(var e = 0; e < 7; e++){
                        f.append("<div>" + s[e].substring(0, 3) + "</div>");
                    }                    
                }

                function d(){
                    var t;
                    var n = $("calendar").css("width", e + "px");
                    n.find((t = "#calendar_weekdays, #calendar_content"))
                        .css("width", e + "px"),
                        
                }
            }
        }
    }

    return(
            <div className="evento-main">
                <div className="evento-cabecalho">
                    <h1 className="evento-h1">Eventos</h1>
                    <button className="evento-add-botao">
                        <MdAdd size={70}/>
                    </button>
                    <hr className="evento-hr"/>                     
                </div>

                <div className="evento-calendario-body">
                    <div className="evento-calendario" id="calendar">
                        <div id="calendar_header">
                            <i className="icon-chevron-left"></i>
                            <h1></h1>
                            <i className="icon-chevron-right"></i>
                        </div>
                        <div id="calendar_weekdays"></div>
                        <div id="calendar_content"></div>
                    </div>
                </div>

                <div className="eventos-do-mes-caixa">

                </div>
            </div>
    );
}

export default PaginaEvento;