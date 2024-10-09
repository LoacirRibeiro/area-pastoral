import React, { useEffect } from "react";
import "./footer.css";
import img from "../../Assets/imgFooter.jpeg";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function scrollToTop() {
  window.scrollTo(0, 0);
}

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" className="logoDiv">
          <div className="footerLogo">
            <img className="img" src={img} alt="" />
          </div>
          <p>Nossa missão é criar um lugar para as pessoas viverem em FÉ!</p>
          <div className="socials flex">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <ImFacebook className="icon" />
            </a>
            <a
              href="https://www.instagram.com/sjanchieta_?igsh=aWs5NjhjeXo5dWx4"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="icon" />
            </a>
            <a
              href="https://wa.me/556391399447"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp className="icon" />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Menu</span>
          <li>
            <Link to="Comunidade" className="link" onClick={scrollToTop}>
              Comunidade
            </Link>
          </li>
          <li>
            <Link to="comunicados" className="link" onClick={scrollToTop}>
              Comunicado
            </Link>
          </li>
          <li>
            <Link to="clero" className="link" onClick={scrollToTop}>
              Clero
            </Link>
          </li>
          <li>
            <Link to="contatos" className="link" onClick={scrollToTop}>
              Contato
            </Link>
          </li>
          <li>
            <Link to="login" className="link" onClick={scrollToTop}>
              Login
            </Link>
          </li>
        </div>

        <div className="footerReact">
          <p>
            Copyright Comunidade São José de Anchieta - Palmas-TO ©{" "}
            {new Date().getFullYear()}. Feito com ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
