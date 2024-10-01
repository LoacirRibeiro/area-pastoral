import React, { useEffect } from "react";
import "./footer.css";
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
    <div className="footer">
      <div className="secContainer container grid">
        
        <div data-aos='fade-up'className="logoDiv">
          <div className="footerLogo">
            <img className="img" src={img} alt="" />
            <span> Área Pastoral Missionária São José de Anchieta </span>
          </div>
          <p>Nossa missão é criar um lugar para as pessoas viverem em FÉ!</p>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
          <div className="footerReact">
            <span>Feito com Amor Por</span>
            <li>Loacir & Fernado</li>
          </div>
        </div>

        <div data-aos='fade-up' className="footerLinks">
          <span className="linkTitle">Informaçoẽs Ùteis</span>
          <li>
            <a href="#">Comunicados</a>
          </li>
          <li>
            <a href="#">Clero</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </div>       
      </div>
    </div>
  );
}

export default Footer;