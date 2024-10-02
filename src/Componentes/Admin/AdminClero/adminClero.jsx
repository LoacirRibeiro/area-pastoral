import React, { useState } from "react";
import './adminClero.css';

function AdminClero() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [itens, setItens] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [mensagem, setMensagem] = useState("");

  const cadastrarItem = (e) => {
    e.preventDefault();
    if (titulo && descricao && imagem) {
      const novoItem = { titulo, descricao, imagem };
      if (editIndex >= 0) {
        const itensAtualizados = [...itens];
        itensAtualizados[editIndex] = novoItem;
        setItens(itensAtualizados);
        setMensagem("Item atualizado com sucesso!");
        setEditIndex(-1);
      } else {
        setItens([...itens, novoItem]);
        setMensagem("Item cadastrado com sucesso!");
      }
      setTitulo("");
      setDescricao("");
      setImagem("");
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  };

  const editarItem = (index) => {
    setTitulo(itens[index].titulo);
    setDescricao(itens[index].descricao);
    setImagem(itens[index].imagem);
    setEditIndex(index);
  };

  const excluirItem = (index) => {
    if (window.confirm("Você realmente deseja excluir este item?")) {
      const itensAtualizados = itens.filter((_, i) => i !== index);
      setItens(itensAtualizados);
      setMensagem("Item excluído com sucesso!");
    }
  };

  return (
    <div className="AdminGerenciamento container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Gerenciamento de Itens</h1>
        </div>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <div className="cadastroForm">
          <h2>{editIndex >= 0 ? "Editar Item" : "Cadastrar Novo Item"}</h2>
          <form onSubmit={cadastrarItem}>
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
              <label htmlFor="descricao">Descrição:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="imagem">URL da Imagem:</label>
              <input
                type="text"
                id="imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="cadastroButton">
              {editIndex >= 0 ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        </div>

        <div className="itensCadastrados">
          <h2>Itens Cadastrados</h2>
          {itens.length > 0 ? (
            <ul>
              {itens.map((item, index) => (
                <li key={index} className="item">
                  <img src={item.imagem} alt={item.titulo} className="itemImage" />
                  <div className="itemInfo">
                    <h3>{item.titulo}</h3>
                    <p>{item.descricao}</p>
                  </div>
                  <div className="itemActions">
                    <button onClick={() => editarItem(index)}>Editar</button>
                    <button onClick={() => excluirItem(index)}>Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum item cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminClero;
