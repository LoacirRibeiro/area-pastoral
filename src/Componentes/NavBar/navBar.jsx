import React, { useState, useEffect } from "react";
import "./navBar.css";
import img from "../../Assets/logo.jpeg";
import { FaHeart } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("menu");
  const [transparente, setTransparente] = useState("navbar");

  const showNavbar = () => {
    setMenu("showNavbar menu");
  };

  const removeNavbar = () => {
    setMenu("menu");
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparente("navbar addBackground");
    } else {
      setTransparente("navbar");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addBg);
    return () => {
      window.removeEventListener("scroll", addBg);
    };
  }, []);

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
        <ul>
          <li className="navList" onClick={removeNavbar}>
            <Link to="comunicados" className="link">
              Comunicado
            </Link>
          </li>
          <li className="navList" onClick={removeNavbar}>
            <Link to="comunidade" className="link">
              Comunidade
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
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        <div className="botaoDOAR">
          <button className="contactBtn btn" onClick={removeNavbar}>
            <Link to="Doar">Faça Sua Doação</Link>
            <FaHeart className="iconHeart" />
          </button>
        </div>
      </div>

      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
}

export default Navbar;
