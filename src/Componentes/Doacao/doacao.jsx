import React from "react";
import './doacao.css';

function Doacao() {
    return (
        <div className="Donation container section">
            <div className="secContainer">
                <div className="secHeader">
                    <span className="orangeText">Faça a Diferença</span>
                    <h1 className="title">
                        Contribua com Nossa Comunidade
                        <span className="orangeDot">.</span>
                    </h1>
                    <p>
                        Sua doação ajuda a manter nossos ministérios e a apoiar nossa missão.
                    </p>
                </div>

                <div className="donationForm" data-aos="fade-up">
                    <h2>Faça uma Doação via PIX</h2>
                    <p>Utilize a chave abaixo para enviar sua contribuição:</p>
                    <div className="pixKey">
                        <strong>Chave PIX:</strong> comunidade@exemplo.com
                    </div>
                    <p>Obrigado por sua generosidade!</p>
                </div>

                <div className="donationInfo" data-aos="fade-up">
                    <h2>Outras Formas de Contribuir</h2>
                    <p>Você também pode ajudar através de:</p>
                    <ul>
                        <li>Doações em alimentos</li>
                        <li>Voluntariado em eventos</li>
                        <li>Distribuição de roupas</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Doacao;
