import React, { useState } from "react";
import './adminContato.css';

function AdminContato() {
  const [horario, setHorario] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [mensagemFeedback, setMensagemFeedback] = useState("");

  const cadastrarContato = (e) => {
    e.preventDefault();
    if (horario && endereco && email && telefone) {
      const novoContato = { horario, endereco, email, telefone };
      if (editIndex >= 0) {
        const contatosAtualizados = [...contatos];
        contatosAtualizados[editIndex] = novoContato;
        setContatos(contatosAtualizados);
        setMensagemFeedback("Contato atualizado com sucesso!");
        setEditIndex(-1);
      } else {
        setContatos([...contatos, novoContato]);
        setMensagemFeedback("Contato cadastrado com sucesso!");
      }
      setHorario("");
      setEndereco("");
      setEmail("");
      setTelefone("");
    } else {
      setMensagemFeedback("Por favor, preencha todos os campos.");
    }
  };

  const editarContato = (index) => {
    setHorario(contatos[index].horario);
    setEndereco(contatos[index].endereco);
    setEmail(contatos[index].email);
    setTelefone(contatos[index].telefone);
    setEditIndex(index);
  };

  const excluirContato = (index) => {
    if (window.confirm("Você realmente deseja excluir este contato?")) {
      const contatosAtualizados = contatos.filter((_, i) => i !== index);
      setContatos(contatosAtualizados);
      setMensagemFeedback("Contato excluído com sucesso!");
    }
  };

  return (
    <div className="AdminContato container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Gerenciamento de Contatos</h1>
        </div>

        {mensagemFeedback && <p className="mensagem">{mensagemFeedback}</p>}

        <div className="cadastroForm">
          <h2>{editIndex >= 0 ? "Editar Contato" : "Cadastrar Novo Contato"}</h2>
          <form onSubmit={cadastrarContato}>
            
            <div className="inputGroup">
              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="horario">Horário de Atendimento:</label>
              <input
                type="text"
                id="horario"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="cadastroButton">
              {editIndex >= 0 ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        </div>

        <div className="contatosCadastrados">
          <h2>Contatos Cadastrados</h2>
          {contatos.length > 0 ? (
            <ul>
              {contatos.map((contato, index) => (
                <li key={index} className="contato">
                  <div className="contatoInfo">
                    <h3>Horário: {contato.horario}</h3>
                    <p>Endereço: {contato.endereco}</p>
                    <p>Email: {contato.email}</p>
                    <p>Telefone: {contato.telefone}</p>
                  </div>
                  <div className="contatoActions">
                    <button onClick={() => editarContato(index)}>Editar</button>
                    <button onClick={() => excluirContato(index)}>Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum contato cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminContato;
