import React, { useEffect } from "react";
import "./Footer.css";
import img from '../../Assets/soa jose.jpeg'

// importação de icones

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {

  useEffect (() => {
       Aos.init({duration: 2000})
     }, [])

  return (
    <div className="Footer">
      <div className="secContainer container grid">
        
        <div data-aos='fade-up'className="logoDiv">
          <div className="footerLogo">
            <img className="img" src={img} alt="" />
            <span> Area Pastoral </span>
          </div>
          <p>Nossa visão é criar um lugar para as pessoas viverem!</p>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div data-aos='fade-up' className="footerLinks">
          <span className="linkTitle">Informação</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explorar</a>
          </li>
          <li>
            <a href="#">Viagem</a>
          </li>
          <li>
            <a href="#">Bolg</a>
          </li>
        </div>

        <div data-aos='fade-up'className="footerLinks">
          <span className="linkTitle">Links úteis</span>
          <li>
            <a href="#">Destino</a>
          </li>
          <li>
            <a href="#">Suporte</a>
          </li>
          <li>
            <a href="#">Viagens & Condições</a>
          </li>
          <li>
            <a href="#">Privacidade</a>
          </li>
        </div>

        <div data-aos='fade-up'className="footerLinks">
          <span className="linkTitle">Detalhes do contato</span>
          <span className="phone">+651 125 658 000</span>
          <span className="email">Loacirrb@gmail.com</span>
          <span className="website">www.dominio.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;