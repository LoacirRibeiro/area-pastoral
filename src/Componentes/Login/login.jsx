import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Credenciais fixas para teste
  const validUsername = "user123";
  const validPassword = "Senha@123";

  const validateUsername = (username) => {
    return username.length >= 3; // Mínimo de 3 caracteres
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

   
    

  const handleLogin = (e) => {
    e.preventDefault();

    // Validações
    if (!validateUsername(username)) {
      setErrorMessage("O nome de usuário deve ter pelo menos 3 caracteres.");
    } else if (!validatePassword(password)) {
      setErrorMessage(
        "Nome de usuário ou senha incorretos."
      );
    } else {
      // Teste de autenticação
      if (username === validUsername && password === validPassword) {
        console.log("Login realizado com sucesso!");
        setErrorMessage("");
        // Aqui você pode redirecionar o usuário ou atualizar o estado conforme necessário
      } else {
        setErrorMessage("Nome de usuário ou senha incorretos.");
        setSuccessMessage("");
      }

       // Limpar os campos do formulário
    setUsername("");
    setPassword("");
    }
  };

  return (
    <div className="Login container">
      <div className="loginContainer">
        <h1 className="title">Login</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="inputGroup">
            <label htmlFor="username">Nome de Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgotPassword">
            <Link to={"/RecuperarSenha"}>Esqueci a senha</Link>
          </div>
          <button type="submit" className="loginButton">
            Entrar
          </button>
        </form>

        {/* Adicionando o link para a página de cadastro */}
        <div className="signupLink">
          <p>
            Não tem uma conta? <Link to={"/Cadastrar"}>Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
