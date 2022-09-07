import React, {useState} from 'react'

import Cad from '../../pages/Cadastro/cad';
import Log from '../../pages/Login/log';


function Modal() {
  const [isLogin, setIsLogin] = useState(true)

  function setLoginForm(){
    setIsLogin(true)
  }

  function setRegisterForm(){
    setIsLogin(false)
  }
  
  if(isLogin){
    return (
      <Log setRegisterForm={setRegisterForm}/>
  )}
  else{
    return (
      <Cad setLoginForm={setLoginForm}/>
  )}

};

export default Modal
