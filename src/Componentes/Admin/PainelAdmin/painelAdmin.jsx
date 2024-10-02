import React from "react";
import { Link } from "react-router-dom";
import "./painelAdmin.css";

const items = [
  { id: 1, title: "Cadastro de Usuários", route: "/adminCadastroUsuario" },
  { id: 2, title: "Cadastro de Admin", route: "/adminCadastroUsuario" },
  { id: 3, title: "Serviços", route: "/adminServicos" },
  { id: 4, title: "Comunicados", route: "/adminComunicado" },
  { id: 5, title: "Admin Dizimistas", route: "/adminDizimista" },
  { id: 6, title: "Clero", route: "/adminClero" },
  { id: 7, title: "Contato", route: "/adminContato" },
  { id: 8, title: "Home", route: "/adminHome" },
];

function PainelAdmin() {
  return (
    <div className="home-admin container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">Bem-vindo ao Painel</span>
          <h1 className="title">
            Administrativo
            <span className="orangeDot"> . </span>
          </h1>
          <p>Gerencie as informações de nossa comunidade.</p>
        </div>

        <div className="secContent grid">
          {items.map(({ id, title, route }) => (
            <Link to={route} key={id} className="singleListing">
              <div className="info">
                <span className="name">{title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PainelAdmin;
