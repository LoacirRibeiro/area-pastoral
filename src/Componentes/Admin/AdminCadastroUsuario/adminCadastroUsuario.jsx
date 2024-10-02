import React, { useState } from "react";
import './adminCadastroUsuario.css';

function AdminCadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const cadastrarUsuario = (e) => {
    e.preventDefault();
    if (nome && email && senha) {
      if (usuarioEditando) {
        const usuariosAtualizados = usuarios.map((usuario) =>
          usuario.email === usuarioEditando.email ? { nome, email, senha } : usuario
        );
        setUsuarios(usuariosAtualizados);
        setMensagem("Usuário atualizado com sucesso!");
      } else {
        const novoUsuario = { nome, email, senha };
        setUsuarios([...usuarios, novoUsuario]);
        setMensagem("Usuário cadastrado com sucesso!");
      }
      resetForm();
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  };

  const editarUsuario = (usuario) => {
    setNome(usuario.nome);
    setEmail(usuario.email);
    setSenha(usuario.senha);
    setUsuarioEditando(usuario);
  };

  const excluirUsuario = (email) => {
    const confirmar = window.confirm("Você realmente deseja excluir este usuário?");
    if (confirmar) {
      const usuariosAtualizados = usuarios.filter(usuario => usuario.email !== email);
      setUsuarios(usuariosAtualizados);
      setMensagem("Usuário excluído com sucesso!");
    }
  };

  const resetForm = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setUsuarioEditando(null);
  };

  return (
    <div className="AdminCadastroUsuario container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Cadastro de Usuários</h1>
        </div>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <div className="cadastroForm">
          <h2>{usuarioEditando ? "Editar Usuário" : "Cadastrar Novo Usuário"}</h2>
          <form onSubmit={cadastrarUsuario}>
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
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="cadastroButton">
              {usuarioEditando ? "Atualizar" : "Cadastrar"}
            </button>
            {usuarioEditando && (
              <button type="button" className="cancelButton" onClick={resetForm}>
                Cancelar
              </button>
            )}
          </form>
        </div>

        <div className="usuariosCadastrados">
          <h2>Usuários Cadastrados</h2>
          {usuarios.length > 0 ? (
            <ul>
              {usuarios.map((usuario, index) => (
                <li key={index} className="usuarioItem">
                  {usuario.nome} - {usuario.email}
                  <div className="actionButtons">
                    <button onClick={() => editarUsuario(usuario)} className="editButton">Editar</button>
                    <button onClick={() => excluirUsuario(usuario.email)} className="deleteButton">Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum usuário cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminCadastroUsuario;
