import React, { useEffect, useState } from "react";
import "./recuperarSenha.css";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  };

  const handleRecuperarSenha = (e) => {
    e.preventDefault();

    // Validações
    if (!email || !newPassword || !confirmPassword) {
      setErrorMessage("Por favor, preencha todos os campos.");
    } else if (!validateEmail(email)) {
      setErrorMessage("Por favor, insira um email válido.");
    } else if (!validatePassword(newPassword)) {
      setErrorMessage(
        "A nova senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais."
      );
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

  // Efeito para ocultar mensagens de erro após 4 segundos
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou a mensagem mudar
    }
  }, [errorMessage]);

  // Efeito para ocultar mensagens de erro após 4 segundos
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 4000);
      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou a mensagem mudar
    }
  }, [message]);

  return (
    <div className="RecuperarSenha container">
      <div className="RecuperarSenhaContainer">
        <h1 className="title">Redefinir Senha</h1>
        {message && <p className="successMessage" > {message}</p>}
        {errorMessage && <p className="errorMessage" >{errorMessage}</p>}
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
