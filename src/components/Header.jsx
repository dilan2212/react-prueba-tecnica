import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import logo from "../img/Isotipo-etiqueta.png"

import "./header.css"

export default function Header({user,isAuntentication,setIsAuntentication,isadministrado}) {

    const {name,rol}=user;
    const navigate = useNavigate();

    const logout=()=>{
      setIsAuntentication(false);
      navigate("/",{replace:true})
    }
  return (
    <header>
      <div className="main_logo">
        <img className="main_log_img" src={logo} alt="Quick" />
      </div>
      <div className="main_menu">
        <nav>
          <ul>
          {
            isadministrado ? <>
            <li>
              <NavLink to="/lista">Lista Olimpica</NavLink>
            </li>
            <li>
              <NavLink to="/categoria">Categoria</NavLink>
            </li>
            </>:<li>
            </li>
          }            
          </ul>
        </nav>
      </div>
      <div className="main_username">
        <p>{name}</p>
        <p>{rol}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
