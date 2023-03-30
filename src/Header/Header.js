import React from 'react'
 import './Header.css';
 import { useNavigate } from "react-router-dom";
 import { useState } from "react";

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const redirect = (path) =>{ navigate(path)};

    function handleClick() {
        setIsOpen(!isOpen);
      }
    

  return (
    <>
        <div className = "header">
           { props.page ? <img className = "homeLogo" src ="https://res.cloudinary.com/dk1pp33c7/image/upload/v1680191132/g_knh1uo.png" alt="Home"/>  :
                 <div className = 'backButton' onClick={() => redirect(-1)}>&#8592; Back</div>
            }

            { props.page ? <div></div>:
                  <div> Logo </div>
            }
           
            <button id="hamburger-btn" onClick={handleClick}>&#9776; Menu </button>
            <nav id="menu" className={isOpen ? 'show' : ''}>
                
            <div className="options">
           <div id='login' onClick={() => redirect("/login")}> Login </div>
           <div id='users' onClick={() => redirect("/users")}> Users </div>     
        </div>
            </nav>
            
            
            
        </div>


    </>
  )
}

export default Header