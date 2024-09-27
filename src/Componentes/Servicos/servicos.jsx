import React, { useState } from "react";
import './Servicos.css';

function Servicos() {
    const [participacoes, setParticipacoes] = useState([]);

    const servicos = [
        {
            id: 1,
            title: "Missa de Adoração",
            date: "2 de Outubro de 2024",
            content: "Participe da missa de adoração às 19h. Venha renovar sua fé!"
        },
        {
            id: 2,
            title: "Círculo de Oração",
            date: "5 de Outubro de 2024",
            content: "Venha se juntar ao nosso círculo de oração às 16h. Todos são bem-vindos!"
        },
        {
            id: 3,
            title: "Voluntariado na Comunidade",
            date: "8 de Outubro de 2024",
            content: "Ajude-nos a fazer a diferença! Inscreva-se para o dia de voluntariado."
        }
    ];

    const confirmarParticipacao = (id) => {
        if (!participacoes.includes(id)) {
            setParticipacoes([...participacoes, id]);
        }
    };

    return (
        <div className="Servicos container section">
            <div className="secContainer">
                <div className="secHeader">
                    <span className="orangeText">Serviços da Igreja</span>
                    <h1 className="title">
                        Participe e Contribua
                        <span className="orangeDot">.</span>
                    </h1>
                    <p>Confira os próximos serviços e confirme sua participação.</p>
                </div>

                <div className="servicosList">
                    {servicos.map(({ id, title, date, content }) => (
                        <div key={id} className="servico">
                            <h2 className="servicoTitle">{title}</h2>
                            <p className="servicoDate">{date}</p>
                            <p className="servicoContent">{content}</p>
                            <button 
                                className={`confirmButton ${participacoes.includes(id) ? 'confirmed' : ''}`}
                                onClick={() => confirmarParticipacao(id)}
                                disabled={participacoes.includes(id)}
                            >
                                {participacoes.includes(id) ? 'Participação Confirmada' : 'Confirmar Participação'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Servicos;
