import React, { useState } from "react";
import "./navBar.css";
import img from "../../Assets/soa jose.jpeg";

// importação de icones
import { FaHeart } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
  // função para mostrar a barra de navegação
  const [menu, setMenu] = useState("menu");
  const showNavbar = () => {
    setMenu("showNavbar menu");
  };

  // função para remover a barra de navegação

  const removeNavbar = () => {
    setMenu("menu");
  };

  // função para adicionar um fundo à barra de navegação
  const [transparente, setTransparente] = useState("navbar");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparente("navbar addBackground");
    } else {
      setTransparente("navbar");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <div className={transparente}>
      <div className="logoDiv">
        <img className="img" src={img} alt="São Jose de Anchieta" />
        <span>
          <Link to="/" className="link">
            Àrea Pastoral São José de Anchieta
          </Link>
        </span>
      </div>

      <div className={menu}>
        {/*<div className="menu"> adiciona {menu} ao menu*/}
        <ul>
          <li className="navList" onClick={removeNavbar}>
            <Link to="comunicados" className="link">
              Comunicado
            </Link>
          </li>
          <li className="navList" onClick={removeNavbar}>
            <Link to="clero" className="link">
              Clero
            </Link>
          </li>
          <li className="navList" onClick={removeNavbar}>
            <Link to="contatos" className="link">
              Contato
            </Link>
          </li>
          <li className="navList" onClick={removeNavbar}>
            <Link to="login" className="link">
              Login
            </Link>
          </li>
          <li className="navList" onClick={removeNavbar}>
            <Link to="servicos" className="link">
              Serviços
            </Link>
          </li>
          <li className="navList" onClick={removeNavbar}>
            <Link to="dizimista" className="link">
               Dizimista
            </Link>
          </li>
          <li className="navList" onClick={removeNavbar}>
            <Link to="homeAdmin" className="link">
               Painel Adm
            </Link>
          </li>
          <li className="navList liBtn" onClick={removeNavbar}>
            <button className="contactBtn btn">
              <Link to="Doar">Faça Sua Doação</Link>
                <FaHeart className="iconHeart" /> 
            </button>
          </li>
        </ul>
        {/* ícone para fechar a barra de navegação */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      {/* ícone para abrir/mostrar em dispositivos pequenos */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
}

export default Navbar;
