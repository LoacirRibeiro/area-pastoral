import React, { useState } from "react";
import './adminServicos.css';

function AdminServicos() {
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [usuariosConfirmados, setUsuariosConfirmados] = useState("");
  const [servicos, setServicos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [mensagemFeedback, setMensagemFeedback] = useState("");

  const cadastrarServico = (e) => {
    e.preventDefault();
    if (titulo && data && descricao) {
      const novoServico = { titulo, data, descricao, usuarios: usuariosConfirmados.split(',').map(user => user.trim()) };
      if (editIndex >= 0) {
        const servicosAtualizados = [...servicos];
        servicosAtualizados[editIndex] = novoServico;
        setServicos(servicosAtualizados);
        setMensagemFeedback("Serviço atualizado com sucesso!");
        setEditIndex(-1);
      } else {
        setServicos([...servicos, novoServico]);
        setMensagemFeedback("Serviço cadastrado com sucesso!");
      }
      setTitulo("");
      setData("");
      setDescricao("");
      setUsuariosConfirmados("");
    } else {
      setMensagemFeedback("Por favor, preencha todos os campos.");
    }
  };

  const editarServico = (index) => {
    setTitulo(servicos[index].titulo);
    setData(servicos[index].data);
    setDescricao(servicos[index].descricao);
    setUsuariosConfirmados(servicos[index].usuarios.join(', '));
    setEditIndex(index);
  };

  const excluirServico = (index) => {
    if (window.confirm("Você realmente deseja excluir este serviço?")) {
      const servicosAtualizados = servicos.filter((_, i) => i !== index);
      setServicos(servicosAtualizados);
      setMensagemFeedback("Serviço excluído com sucesso!");
    }
  };

  return (
    <div className="AdminServicos container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Gerenciamento de Serviços</h1>
        </div>

        {mensagemFeedback && <p className="mensagem">{mensagemFeedback}</p>}

        <div className="cadastroForm">
          <h2>{editIndex >= 0 ? "Editar Serviço" : "Cadastrar Novo Serviço"}</h2>
          <form onSubmit={cadastrarServico}>
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
            <div className="inputGroup">
              <label htmlFor="usuarios">Usuários Confirmados (separados por vírgula):</label>
              <input
                type="text"
                id="usuarios"
                value={usuariosConfirmados}
                onChange={(e) => setUsuariosConfirmados(e.target.value)}
              />
            </div>
            <button type="submit" className="cadastroButton">
              {editIndex >= 0 ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        </div>

        <div className="servicosCadastrados">
          <h2>Serviços Cadastrados</h2>
          {servicos.length > 0 ? (
            <ul>
              {servicos.map((servico, index) => (
                <li key={index} className="servico">
                  <div className="servicoInfo">
                    <h3>{servico.titulo}</h3>
                    <p>Data: {servico.data}</p>
                    <p>Descrição: {servico.descricao}</p>
                    <p>Usuários Confirmados: {servico.usuarios.join(', ') || "Nenhum"}</p>
                  </div>
                  <div className="servicoActions">
                    <button onClick={() => editarServico(index)}>Editar</button>
                    <button onClick={() => excluirServico(index)}>Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum serviço cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminServicos;
