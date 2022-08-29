import React, { useEffect, useState } from "react";
import { users } from "../data/dataUser";

import logo from "../img/Logo-SmartQuick-Negro.png";
import logoIdioma from "../img/logoIdioma.jpg";

import iconUser from "../img/icon-user.png";
import iconEyes from "../img/icon-eyes.png";
import lconPadlock from "../img/icon-padlock.png";

import { useNavigate } from "react-router-dom";

import "./loginView.css";

function LoginView({ user, setUser, setIsAuntentication }) {
  
  const { username, password } = user;

  const [error,setError]=useState(false);

  useEffect(() => {
    setUser({
      username: "",
      rol: "",
      name: "",
      password: "",
    });
  }, []);

  const navigate = useNavigate();

  const validarUsername = (e) => {
    e.preventDefault();

    const userSearch = users.find(
      (usu) => usu.username === user.username && usu.password === user.password
    );

    if (userSearch != null) {
      setUser({ ...userSearch });
      setIsAuntentication(true);
      setError(false);
      navigate("/main", { replace: true });
    } else {
      setError(true);
    }
  };

  const onchangeUsername = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  return (
    <div className="container_login">
      <form className="container_form">
        <div className="main_logo">
          <img className="form_log_img" src={logo} alt="Quick" />
        </div>

        <div className="form_text">
          <div className="container_ingreso">
            <p>Ingreso</p>
            <div className="container_idioma">
              <img className="form_logo_Idioma" src={logoIdioma} alt="idioma" />
              <p>Español</p>
            </div>
          </div>
          <p>Bienvenido, por favor ingresa tu cuenta de SmartControl</p>
        </div>
        <div className="container_input">
          <div className="form_icono">
            <img src={iconUser} alt="idioma"></img>
          </div>
          <input
            className="form_input"
            type="email"
            value={username}
            name="username"
            placeholder="usuario"
            onChange={onchangeUsername}
          ></input>
        </div>
        <div className="container_input">
          <div className="form_icono">
            <img src={lconPadlock} alt="idioma"></img>
          </div>
          <input
            className="form_input"
            type="password"
            value={password}
            name="password"
            placeholder="contraseña"
            onChange={onchangeUsername}
          ></input>
          <div className="form_icono olvido">
            <img src={iconEyes} alt="idioma"></img>
          </div>
        </div>

        <div className="container_ingreso">
          <div>
            <input type="checkbox" id="recordar" value="second_checkbox" />
            <label for="recordar">Recuerdame</label>
          </div>
          <p className="olvido_Contraseña">¿Olvidaste tu contraseña?</p>
        </div>
        <button className="btn_ingresar" onClick={validarUsername}>
          Ingreso
        </button>

        {error&&<p className="login_error">Usuario o contraseña incorrecta</p>}
      </form>
    </div>
  );
}

export default LoginView;
