import React from 'react'
import './Home.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from '../Header/Header';



function Home() {
    const navigate = useNavigate();
    const redirect = (path) =>{ navigate(path)};

    const [Name,setName] = useState("RAhul")

    const updateName = (e) =>{
        setName(e.target.value)
    } 
  
    return (

    <>
    <Header page = 'Home' />
        
    </>
  )
}

export default Home


