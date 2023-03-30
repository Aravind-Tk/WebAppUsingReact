import React, { useState } from 'react'
import Header from './Header/Header';
import FloatingInput from "../src/inputControls/floatingInput/FloatingInput"

 const Login = () => {

  const [email,setEmail] = useState("");
  
  const handleInputChange = (text) => {
    debugger;
   setEmail(text)
  
  };
  return (
    <>
    <Header/>
    <div>Login</div>
    <FloatingInput 
       type="email"
       label="E-mail"
       htmlFor="email"
       maxLength={37}
       value={email}
       handleChange={(text) => {
         handleInputChange(text);
       }}
       />
   
    <FloatingInput 
    
  class= "Password"
    
    
    
    
    />


    </>
  );
};

export default Login;