import React, { useState } from "react";
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar lógica de autenticação
        if (username === "" || password === "") {
            setErrorMessage("Por favor, preencha todos os campos.");
        } else {
            // Simulação de login bem-sucedido
            console.log("Login realizado com sucesso!");
            // Redirecionar ou atualizar estado conforme necessário
        }
    };

    return (
        <div className="Login container">
            <div className="loginContainer">
                <h1 className="title">Login</h1>
                {errorMessage && <p className="error">{errorMessage}</p>}
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
                    <button type="submit" className="loginButton">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
