import React, { useState } from "react";
import './LoginAdmin.css'; // Certifique-se de criar este arquivo CSS
import { Link } from "react-router-dom";

function LoginAdmin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Lógica de autenticação
        if (username === "" || password === "") {
            setErrorMessage("Por favor, preencha todos os campos.");
        } else {
            // Simulação de login bem-sucedido
            console.log("Login admin realizado com sucesso!");
            // Redirecionar ou atualizar estado conforme necessário
        }
    };

    return (
        <div className="LoginAdmin container">
            <div className="loginContainer">
                <h1 className="title">Login Admin</h1>
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
                {/* Link para a página de recuperação de senha */}
                <div className="forgotPassword">
                    <Link to={"/RecuperarSenha"}>Esqueci a senha</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
