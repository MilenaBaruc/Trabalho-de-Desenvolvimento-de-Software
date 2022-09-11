import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {Fragment} from "react";

import { AiFillHome } from "react-icons/ai" 
import { HiClipboard } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

import { AuthContext } from '../contexts/auth';
import "./sidebar.css";
import perfil from '../../assets/ImagensPerfil/verde escuro.jpg'
import logo from '../../assets/Logo Girassol.png'

import { getUsers } from "../services/api";


export default function Bar(){
    const { logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data);
            setloading(false);
        })();       
    }, []);

    
    
    const handleLogout = () => {
        logout();
    };

    if(loading){
        return <div className="loading">Carregando...</div>;
    }

    return(
        <Fragment>
            <div className="sidebar-caixa">
                <div className="sidebar-navigation">
                    <ul className="sidebar-ul">
                        <Link to="/home"><img className="sidebar-logo" src={logo} alt="logo"></img></Link>
                        <h1 className="sidebar-h1">Estuder's</h1>
                        
                        <li className="sidebar-list-active">
                            <p className="sidebar-p">
                            <Link className="sidebar-icon" to="/home"><AiFillHome size={30}/></Link>
                            <Link className="sidebar-a" to="/home">Início</Link>
                            </p>
                        </li>

                        <li className="sidebar-list">
                            <p className="sidebar-p">
                                <Link className="sidebar-icon" to="/materias"><HiClipboard size={30}/></Link>
                                <Link className="sidebar-a" to="/materias">Disciplinas</Link>
                            </p>
                        </li>
                        
                        <li className="sidebar-list">
                            <p className="sidebar-p">
                                <Link className="sidebar-icon" to="/eventos"><BsFillCalendarCheckFill size={30}/></Link>
                                <Link className="sidebar-a" to="/eventos">Tarefas e eventos</Link>
                            </p>
                        </li>
                        
                        <li className="sidebar-list">
                            <p className="sidebar-p">        
                                <Link className="sidebar-icon" to="/config"><RiSettings3Fill size={30}/></Link>
                                <Link className="sidebar-a" to="/config">Configurações</Link>
                            </p>
                        </li>
                        
                        <li className="sidebar-miniPerfil">
                            <img className="sidebar-perfilPic" src={perfil} alt=""></img>
                            <span className="sidebar-nome" id="nome">Nome</span>
                            <span className="sidebar-email" id="email">email@email.com</span>
                            <ul className="sidebar-ul-perfil-inferior">{
                                users.map((user) => (
                                    <li key={user._id}>
                                        {user.name} - {user.email}
                                    </li>
                                ))
                            }</ul>  
                            <a href="##">
                                <span onClick={handleLogout} className="sidebar-icon-exit"><MdLogout size={20} /></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
} 