import React from "react";
import "./contatos.css";

import { MdLocationPin } from "react-icons/md";
// import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";

function Contatos() {
  return (
    <div className="Contact container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">Entre em Contato</span>
          <h1 data-aos="fade-up" className="title">
            Fale Conosco
            <span data-aos="fade-up" className="orangeDot">
              {" "}
              .{" "}
            </span>
          </h1>
          <p data-aos="fade-up">
            Estamos aqui para ouvir você e ajudá-lo em sua jornada de fé.
          </p>
        </div>

        <div className="contactForm" data-aos="fade-up">
          <form>
            <div className="formGroup">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submitBtn">
              Enviar
            </button>
          </form>
        </div>

        <div className="contactInfo" data-aos="fade-up">           
          <div className="title">
           <h2>Informações de Contatos</h2>
          </div>
          <div className="divContato">
          <div className="contato">
            <div>
              <MdLocationPin className="icons" />
            </div>
            <div className="nomeContato">Endereço:</div>
            <div>
              <span>Quadra 4, rua SH 3, Lote 26 - Jardim Santa Helena</span>
            </div>
          </div>

          {/* <div className="contato">
            <div>
              <a href="mailto:areamissionariasaojose@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                <MdOutlineMailOutline className="icons" />
              </a>
            </div>
            <div className="nomeContato">Email:</div>
            <div>
              <span className="macarrao">areamissionariasaojose@gmail.com</span>
            </div>
          </div> */}

          <div className="contato">
            <div>
              <a
                href="https://wa.me/556391399447"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineWhatsapp className="icons" />
              </a>
            </div>
            <div className="nomeContato">WhatsApp:</div>
            <div>
              <span>(63) 9 9139-9447</span>
            </div>
          </div>

          <div className="contato">
            <div>
              <a
                href="https://www.instagram.com/sjanchieta_?igsh=aWs5NjhjeXo5dWx4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuInstagram className="icons" />
              </a>
            </div>
            <div className="nomeContato">Instagram:</div>
            <div>
              <span>www.instagram.com/ sjanchieta</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contatos;
