import React, { useState } from "react";
import './adminComunicado.css';

function AdminComunicado() {
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [comunicados, setComunicados] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [mensagemFeedback, setMensagemFeedback] = useState("");

  const cadastrarComunicado = (e) => {
    e.preventDefault();
    if (titulo && data && descricao) {
      const novoComunicado = { titulo, data, descricao };
      if (editIndex >= 0) {
        const comunicadosAtualizados = [...comunicados];
        comunicadosAtualizados[editIndex] = novoComunicado;
        setComunicados(comunicadosAtualizados);
        setMensagemFeedback("Comunicado atualizado com sucesso!");
        setEditIndex(-1);
      } else {
        setComunicados([...comunicados, novoComunicado]);
        setMensagemFeedback("Comunicado cadastrado com sucesso!");
      }
      setTitulo("");
      setData("");
      setDescricao("");
    } else {
      setMensagemFeedback("Por favor, preencha todos os campos.");
    }
  };

  const editarComunicado = (index) => {
    setTitulo(comunicados[index].titulo);
    setData(comunicados[index].data);
    setDescricao(comunicados[index].descricao);
    setEditIndex(index);
  };

  const excluirComunicado = (index) => {
    if (window.confirm("Você realmente deseja excluir este comunicado?")) {
      const comunicadosAtualizados = comunicados.filter((_, i) => i !== index);
      setComunicados(comunicadosAtualizados);
      setMensagemFeedback("Comunicado excluído com sucesso!");
    }
  };

  return (
    <div className="AdminComunicados container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Gerenciamento de Comunicados</h1>
        </div>

        {mensagemFeedback && <p className="mensagem">{mensagemFeedback}</p>}

        <div className="cadastroForm">
          <h2>{editIndex >= 0 ? "Editar Comunicado" : "Cadastrar Novo Comunicado"}</h2>
          <form onSubmit={cadastrarComunicado}>
            <div className="inputGroup">
              <label htmlFor="titulo">Título:</label>
              <input
                type="text"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="data">Data:</label>
              <input
                type="date"
                id="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
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

        <div className="comunicadosCadastrados">
          <h2>Comunicados Cadastrados</h2>
          {comunicados.length > 0 ? (
            <ul>
              {comunicados.map((comunicado, index) => (
                <li key={index} className="comunicado">
                  <div className="comunicadoInfo">
                    <h3>{comunicado.titulo}</h3>
                    <p>Data: {comunicado.data}</p>
                    <p>Descrição: {comunicado.descricao}</p>
                  </div>
                  <div className="comunicadoActions">
                    <button onClick={() => editarComunicado(index)}>Editar</button>
                    <button onClick={() => excluirComunicado(index)}>Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum comunicado cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminComunicado;
