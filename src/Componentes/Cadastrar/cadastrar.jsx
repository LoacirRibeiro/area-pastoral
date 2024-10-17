import React, { useEffect, useState } from "react";
import './cadastrar.css';

function Cadastrar() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState('');
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

    const handleCadastro = (e) => {
        e.preventDefault();
        // Validações
        if (!email || !password || !confirmPassword) {
            setErrorMessage('Por favor, preencha todos os campos.');
        } else if (!validateEmail(email)) {
            setErrorMessage('Por favor, insira um email válido.');
        } else if (!validatePassword(password)) {
            setErrorMessage('A nova senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.');
        } else if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem.');
        } else {
            // Simulação de envio e redefinição de senha bem-sucedida
            setMessage('Sua senha foi cadastrada  com sucesso.');
            setErrorMessage('');

            // Limpar os campos do formulário
            setEmail('');
            setPassword('');
            setUsername('');
            setConfirmPassword('');
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
        <div className="Cadastrar container">
            <div className="cadastrarContainer">
                <h1 className="title">Cadastrar</h1>
                {message && <p className="successMessage">{message}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form onSubmit={handleCadastro}>
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
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="cadastrarButton">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastrar;