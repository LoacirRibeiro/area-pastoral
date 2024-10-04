import React, { useState } from "react";
import './servicos.css';


const useAuth = () => {
    return {
        user: {
            name: "João", // Substitua isso pela lógica real de autenticação
        },
    };
};

function Servicos() {
    const { user } = useAuth(); // Obtém o usuário autenticado
    const [participacoes, setParticipacoes] = useState([]);

    const servicos = [
        {
            id: 1,
            title: "Missa de Adoração",
            date: "2 de Outubro de 2024",
            desc: "Participe da missa de adoração às 19h. Venha renovar sua fé!"
        },
        {
            id: 2,
            title: "Círculo de Oração",
            date: "5 de Outubro de 2024",
            desc: "Venha se juntar ao nosso círculo de oração às 16h. Todos são bem-vindos!"
        },
        {
            id: 3,
            title: "Voluntariado na Comunidade",
            date: "8 de Outubro de 2024",
            desc: "Ajude-nos a fazer a diferença! Inscreva-se para o dia de voluntariado."
        }
    ];

    const confirmarParticipacao = (id) => {
        if (!participacoes.some(participante => participante.id === id)) {
            setParticipacoes(prev => [...prev, { id, nome: user.name }]);
        }
    };

    return (
        <div className="servicos container section">
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
                    {servicos.map(({ id, title, date, desc }) => (
                        <div key={id} className="servico">
                            <h2 className="servicoTitle">{title}</h2>
                            <p className="servicoDate">{date}</p>
                            <p className="servicoContent">{desc}</p>
                            <button 
                                className={`confirmButton ${participacoes.some(participante => participante.id === id) ? 'confirmed' : ''}`}
                                onClick={() => confirmarParticipacao(id)}
                                disabled={participacoes.some(participante => participante.id === id)}
                            >
                                {participacoes.some(participante => participante.id === id) ? 'Participação Confirmada' : 'Confirmar Participação'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Exibir nomes dos participantes confirmados */}
                <div className="participantes">
                    <h3>Participantes Confirmados:</h3>
                    <ul>
                        {participacoes.map((participante, index) => (
                            <li key={index}>{participante.nome} - {servicos.find(servico => servico.id === participante.id)?.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Servicos;
