import React, { useState } from "react";
import './NavBar.css'
import img from '../../Assets/soa jose.jpeg'

// importação de icones
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

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
  const[transparente, setTransparente] = useState("navbar")
  const addBg = () => {
    if (window.scrollY >= 10){
      setTransparente('navbar addBackground')
    } else{
      setTransparente("navbar");
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <div className={transparente}>
      <div className="logoDiv">
        <img className="img" src={img} alt="São Jose de Anchieta" />
        <span>Àrea Pastoral São José de Anchieta</span>
      </div>

      <div className={menu}>
        {/*<div className="menu"> adiciona {menu} ao menu*/}
        <ul>
          <li className="navList" onClick={removeNavbar}>
            Noticias
          </li>
          <li className="navList" onClick={removeNavbar}>
            Comunidade
          </li>
          <li className="navList" onClick={removeNavbar}>
            Sobre nós
          </li>
          <li className="navList" onClick={removeNavbar}>
            Doar
          </li>
        </ul>
        {/* ícone para fechar a barra de navegação */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <button className="contactBtn btn">Contato</button>

      {/* ícone para abrir/mostrar em dispositivos pequenos */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
}

export default Navbar;