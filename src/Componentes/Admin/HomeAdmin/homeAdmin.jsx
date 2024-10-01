import React from "react";
import { Link } from "react-router-dom";
import "./homeAdmin.css";

const items = [
    { id: 1, title: "Cadastro de Usuários", route: "/cadastro-usuarios" },
    { id: 2, title: "Cadastro de Admin", route: "/cadastro-admin" },
    { id: 3, title: "Serviços", route: "/servicos" },
    { id: 4, title: "Comunicados", route: "/comunicados" },
    { id: 5, title: "Doações", route: "/doacoes" },
    { id: 6, title: "Dizimistas", route: "/dizimistas" },
    { id: 7, title: "Clero", route: "/clero" },
    { id: 8, title: "Contato", route: "/contato" },
    { id: 9, title: "Home", route: "/home" },
];

function HomeAdmin() {
    return (
        <div className="home-admin container section">
            <div className="secContainer">
                <div className="secHeader">
                    <span className="orangeText">Bem-vindo ao Painel</span>
                    <h1 className="title">
                        Administrativo
                        <span className="orangeDot"> . </span>
                    </h1>
                    <p>
                        Gerencie as informações de nossa comunidade.
                    </p>
                </div>

                <div className="secContent grid">
                    {items.map(({ id, title, route }) => (
                        <Link to={route} key={id} className="singleListing">
                            <div className="info">
                                <scroll className="name">{title}</scroll>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;
