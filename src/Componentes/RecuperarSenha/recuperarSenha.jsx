import React, { useState } from "react";
import "./recuperarSenha.css";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRecuperarSenha = (e) => {
    e.preventDefault();
    // Validações simples
    if (!email || !newPassword || !confirmPassword) {
      setErrorMessage("Por favor, preencha todos os campos.");
    } else if (newPassword !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
    } else {
      // Simulação de envio e redefinição de senha bem-sucedida
      setMessage("Sua senha foi redefinida com sucesso.");
      setErrorMessage("");

      // Limpar os campos do formulário
      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="RecuperarSenha container">
      <div className="RecuperarSenhaContainer">
        <h1 className="title">Redefinir Senha</h1>
        {message && <p className="successMessage">{message}</p>}
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <form onSubmit={handleRecuperarSenha}>
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
            <label htmlFor="newPassword">Nova Senha:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="confirmPassword">Confirmar Nova Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="resetButton">
            Redefinir Senha
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecuperarSenha;
