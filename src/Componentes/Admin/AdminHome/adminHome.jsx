import React, { useState } from "react";
import './adminHome.css';

function AdminHome() {
  const [imagem, setImagem] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [homes, setHomes] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [mensagemFeedback, setMensagemFeedback] = useState("");

  const cadastrarHome = (e) => {
    e.preventDefault();
    if (imagem && nome && descricao) {
      const novoHome = { imagem, nome, descricao };
      if (editIndex >= 0) {
        const homesAtualizados = [...homes];
        homesAtualizados[editIndex] = novoHome;
        setHomes(homesAtualizados);
        setMensagemFeedback("Home atualizado com sucesso!");
        setEditIndex(-1);
      } else {
        setHomes([...homes, novoHome]);
        setMensagemFeedback("Home cadastrado com sucesso!");
      }
      setImagem("");
      setNome("");
      setDescricao("");
    } else {
      setMensagemFeedback("Por favor, preencha todos os campos.");
    }
  };

  const editarHome = (index) => {
    setImagem(homes[index].imagem);
    setNome(homes[index].nome);
    setDescricao(homes[index].descricao);
    setEditIndex(index);
  };

  const excluirHome = (index) => {
    if (window.confirm("Você realmente deseja excluir este item?")) {
      const homesAtualizados = homes.filter((_, i) => i !== index);
      setHomes(homesAtualizados);
      setMensagemFeedback("Home excluído com sucesso!");
    }
  };

  return (
    <div className="AdminHome container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Gerenciamento de Home</h1>
        </div>

        {mensagemFeedback && <p className="mensagem">{mensagemFeedback}</p>}

        <div className="cadastroForm">
          <h2>{editIndex >= 0 ? "Editar Home" : "Cadastrar Novo Home"}</h2>
          <form onSubmit={cadastrarHome}>
            <div className="inputGroup">
              <label htmlFor="imagem">Imagem URL:</label>
              <input
                type="text"
                id="imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="descricao">Descrição:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="cadastroButton">
              {editIndex >= 0 ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        </div>

        <div className="homesCadastrados">
          <h2>Homes Cadastrados</h2>
          {homes.length > 0 ? (
            <ul>
              {homes.map((home, index) => (
                <li key={index} className="home">
                  <div className="homeInfo">
                    <img src={home.imagem} alt={home.nome} className="homeImage" />
                    <h3>{home.nome}</h3>
                    <p>Descrição: {home.descricao}</p>
                  </div>
                  <div className="homeActions">
                    <button onClick={() => editarHome(index)}>Editar</button>
                    <button onClick={() => excluirHome(index)}>Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum home cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
