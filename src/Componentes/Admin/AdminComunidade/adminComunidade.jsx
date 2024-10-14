import React, { useState } from "react";
import './adminComunidade.css';

function AdminComunidade() {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [comunicados, setComunicados] = useState([]);
  const [celebracoes, setCelebracoes] = useState([]);
  const [editIndexComunicado, setEditIndexComunicado] = useState(-1);
  const [editIndexCelebracao, setEditIndexCelebracao] = useState(-1);
  const [mensagemFeedback, setMensagemFeedback] = useState("");

  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");

  const cadastrarComunicado = (e) => {
    e.preventDefault();
    if (titulo && imagem && descricao) {
      const novoComunicado = { titulo, imagem, descricao };
      if (editIndexComunicado >= 0) {
        const comunicadosAtualizados = [...comunicados];
        comunicadosAtualizados[editIndexComunicado] = novoComunicado;
        setComunicados(comunicadosAtualizados);
        setMensagemFeedback("Comunicado atualizado com sucesso!");
        setEditIndexComunicado(-1);
      } else {
        setComunicados([...comunicados, novoComunicado]);
        setMensagemFeedback("Comunicado cadastrado com sucesso!");
      }
      setTitulo("");
      setImagem(null);
      setDescricao("");
    } else {
      setMensagemFeedback("Por favor, preencha todos os campos.");
    }
  };

  const editarComunicado = (index) => {
    setTitulo(comunicados[index].titulo);
    setImagem(comunicados[index].imagem);
    setDescricao(comunicados[index].descricao);
    setEditIndexComunicado(index);
  };

  const excluirComunicado = (index) => {
    if (window.confirm("Você realmente deseja excluir este comunicado?")) {
      const comunicadosAtualizados = comunicados.filter((_, i) => i !== index);
      setComunicados(comunicadosAtualizados);
      setMensagemFeedback("Comunicado excluído com sucesso!");
    }
  };

  const cadastrarCelebracao = (e) => {
    e.preventDefault();
    if (dia && horario) {
      const novaCelebracao = { dia, horario }; // Mantém o horário no formato 24h
      if (editIndexCelebracao >= 0) {
        const celebracoesAtualizadas = [...celebracoes];
        celebracoesAtualizadas[editIndexCelebracao] = novaCelebracao;
        setCelebracoes(celebracoesAtualizadas);
        setMensagemFeedback("Celebração atualizada com sucesso!");
        setEditIndexCelebracao(-1);
      } else {
        setCelebracoes([...celebracoes, novaCelebracao]);
        setMensagemFeedback("Celebração cadastrada com sucesso!");
      }
      setDia("");
      setHorario("");
    } else {
      setMensagemFeedback("Por favor, preencha todos os campos.");
    }
  };

  const editarCelebracao = (index) => {
    setDia(celebracoes[index].dia);
    setHorario(celebracoes[index].horario); // Manter o horário original
    setEditIndexCelebracao(index);
  };

  const excluirCelebracao = (index) => {
    if (window.confirm("Você realmente deseja excluir esta celebração?")) {
      const celebracoesAtualizadas = celebracoes.filter((_, i) => i !== index);
      setCelebracoes(celebracoesAtualizadas);
      setMensagemFeedback("Celebração excluída com sucesso!");
    }
  };

  return (
    <div className="AdminComunidade container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Gerenciamento da Comunidade</h1>
        </div>

        {mensagemFeedback && <p className="mensagem">{mensagemFeedback}</p>}

        {/* Formulário de Comunicados */}
        <div className="cadastroForm">
          <h2>{editIndexComunicado >= 0 ? "Editar Comunidade" : "Cadastrar "}</h2>
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
              <label htmlFor="imagem">Imagem:</label>
              <input
                type="file"
                id="imagem"
                accept="image/*"
                onChange={(e) => setImagem(e.target.files[0])}
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
              {editIndexComunicado >= 0 ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        </div>

        <div className="comunicadosCadastrados">
          <h2>Cadastros</h2>
          {comunicados.length > 0 ? (
            <ul>
              {comunicados.map((comunicado, index) => (
                <li key={index} className="comunicado">
                  <div className="comunicadoInfo">
                    <h3>{comunicado.titulo}</h3>
                    {comunicado.imagem && (
                      <img src={URL.createObjectURL(comunicado.imagem)} alt="Comunicado" />
                    )}
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

        {/* Formulário de Celebrações */}
        <div className="cadastroForm">
          <h2>{editIndexCelebracao >= 0 ? "Editar Celebração" : "Cadastrar Nova Celebração"}</h2>
          <form onSubmit={cadastrarCelebracao}>
            <div className="inputGroup">
              <label htmlFor="dia">Dia:</label>
              <input
                type="text"
                id="dia"
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="horario">Horário:</label>
              <input
                type="time"
                id="horario"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="cadastroButton">
              {editIndexCelebracao >= 0 ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        </div>

        <div className="celebracoesCadastradas">
          <h2>Celebrações Cadastradas</h2>
          {celebracoes.length > 0 ? (
            <ul>
              {celebracoes.map((celebracao, index) => (
                <li key={index} className="celebracao">
                  <div className="celebracaoInfo">
                    <p>Dia: {celebracao.dia}</p>
                    <p>Horário: {celebracao.horario}</p>
                  </div>
                  <div className="celebracaoActions">
                    <button onClick={() => editarCelebracao(index)}>Editar</button>
                    <button onClick={() => excluirCelebracao(index)}>Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma celebração cadastrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminComunidade;
