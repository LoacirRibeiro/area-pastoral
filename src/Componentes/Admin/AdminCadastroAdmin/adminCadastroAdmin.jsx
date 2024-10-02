import React, { useState } from "react";
import './adminCadastroAdmin.css';

function AdminCadastroAdmin() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [admins, setAdmins] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [adminEditando, setAdminEditando] = useState(null);

  const cadastrarAdmin = (e) => {
    e.preventDefault();
    if (nome && email && senha) {
      if (adminEditando) {
        const adminsAtualizados = admins.map((admin) =>
          admin.email === adminEditando.email ? { nome, email, senha } : admin
        );
        setAdmins(adminsAtualizados);
        setMensagem("Administrador atualizado com sucesso!");
      } else {
        const novoAdmin = { nome, email, senha };
        setAdmins([...admins, novoAdmin]);
        setMensagem("Administrador cadastrado com sucesso!");
      }
      resetForm();
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  };

  const editarAdmin = (admin) => {
    setNome(admin.nome);
    setEmail(admin.email);
    setSenha(admin.senha);
    setAdminEditando(admin);
  };

  const excluirAdmin = (email) => {
    const confirmar = window.confirm("Você realmente deseja excluir este administrador?");
    if (confirmar) {
      const adminsAtualizados = admins.filter(admin => admin.email !== email);
      setAdmins(adminsAtualizados);
      setMensagem("Administrador excluído com sucesso!");
    }
  };

  const resetForm = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setAdminEditando(null);
  };

  return (
    <div className="AdminCadastroAdmin container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Cadastro de Administradores</h1>
        </div>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <div className="cadastroForm">
          <h2>{adminEditando ? "Editar Administrador" : "Cadastrar Novo Administrador"}</h2>
          <form onSubmit={cadastrarAdmin}>
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
              {adminEditando ? "Atualizar" : "Cadastrar"}
            </button>
            {adminEditando && (
              <button type="button" className="cancelButton" onClick={resetForm}>
                Cancelar
              </button>
            )}
          </form>
        </div>

        <div className="adminsCadastrados">
          <h2>Administradores Cadastrados</h2>
          {admins.length > 0 ? (
            <ul>
              {admins.map((admin, index) => (
                <li key={index} className="adminItem">
                  {admin.nome} - {admin.email}
                  <div className="actionButtons">
                    <button onClick={() => editarAdmin(admin)} className="editButton">Editar</button>
                    <button onClick={() => excluirAdmin(admin.email)} className="deleteButton">Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum administrador cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminCadastroAdmin;
