import React, { useRef, useState, useEffect,onClick, Fragment, useInsertionEffect} from "react";
import{ faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import './styles.css';
import girassol from "../../assets/girassol-cad.png"

//A senha deve conter:
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; //para cadastrar usuario, não vamos usar
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Cad = () => {
    const userRef = userRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setpwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])


	return(
	<Fragment>
        <div className="cadastro-body">
        <div className="cadastro-main">
            <div className="cadastro-bem-vindo">
                <h1 className="cadastro-h1">Bem vindo ao Estuder's!</h1>
                <p className="cadastro-textinhop">Todas as suas matérias num único lugar!</p> 
                <img className="cadastro-imagem" width="300" src={girassol}/> 
            </div>
            <div className="cadastro-right-box">

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


                <h1>Crie sua conta</h1>
                <p className="cadastro-textinho">Use seu email para se registrar!</p>

                <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />


                <input 
                    className="cadastro-input" 
                    type="text" 
                    placeholder="Nome"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)} 
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)} 
                />

                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    De 4 a 24 caracteres.<br />
                    Deve começar com uma letra.<br />
                    Letras, números, underlines e hífens são permitidos.
                </p>

                <input className="cadastro-input" type="email" placeholder="Email" />
                <input className="cadastro-input" type="password" placeholder="Senha" />
                <Link to="/" className="cadastro-link-log"><button className="cadastro-btn">Cadastrar</button></Link>
                <p className="cadastro-conta">Já possui uma conta?</p>
                <p className="cadastro-p"><Link to="/" className="cadastro-link-log">Entre por aqui!</Link></p>
            </div>
        </div>
        </div>
	</Fragment>
	);
}

export default Cad