import React from "react";
import './comunicado.css';

function Comunicado() {
    const comunicados = [
        {
            id: 1,
            title: "Reunião de Pais e Responsáveis",
            date: "25 de Setembro de 2024",
            content: "Convidamos todos os pais e responsáveis para uma reunião no próximo sábado, às 15h, na sala comunitária."
        },
        {
            id: 2,
            title: "Campanha do Agasalho",
            date: "30 de Setembro de 2024",
            content: "Estamos coletando roupas e agasalhos para a campanha deste inverno. As doações podem ser deixadas na igreja até o dia 15 de Outubro."
        },
        {
            id: 3,
            title: "Celebração de Aniversário da Comunidade",
            date: "10 de Outubro de 2024",
            content: "Venha celebrar conosco o aniversário da nossa comunidade! Haverá missa, festa e confraternização."
        }
    ];

    return (
        <div className="Comunicados container section">
            <div className="secContainer">
                <div className="secHeader">
                    <span className="orangeText">Comunicados</span>
                    <h1 className="title">
                        Fique por Dentro das Novidades
                        <span className="orangeDot">.</span>
                    </h1>
                    <p>Confira os últimos comunicados e informações importantes para nossa comunidade.</p>
                </div>

                <div className="comunicadosList">
                    {comunicados.map(({ id, title, date, content }) => (
                        <div key={id} className="comunicado">
                            <h2 className="comunicadoTitle">{title}</h2>
                            <p className="comunicadoDate">{date}</p>
                            <p className="comunicadoContent">{content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Comunicado;
