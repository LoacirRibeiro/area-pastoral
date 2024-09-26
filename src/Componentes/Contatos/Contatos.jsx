import React from "react";
import './Contatos.css'

function Contatos (){
    return(
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
                    <button type="submit" className="submitBtn">Enviar</button>
                </form>
            </div>
    
            <div className="contactInfo" data-aos="fade-up">
                <h2>Informações de Contato</h2>
                <p><strong>Endereço:</strong> Rua da Igreja, 123 - Cidade, Estado</p>
                <p><strong>Telefone:</strong> (00) 1234-5678</p>
                <p><strong>E-mail:</strong> contato@igreja.com</p>
                <p><strong>Horário de Atendimento:</strong> Segunda a Sexta, 9h - 17h</p>
            </div>
        </div>
    </div>
    
    )
}

export default Contatos;