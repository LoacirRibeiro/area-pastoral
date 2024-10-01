import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";

function Login() {
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
                    <div className="forgotPassword">
                        <Link to={"/RecuperarSenha"}>Esqueci a senha</Link>
                    </div>
                    <button type="submit" className="loginButton">Entrar</button>
                </form>

                {/* Adicionando o link para a página de cadastro */}
                <div className="signupLink">
                    <p>Não tem uma conta? <Link to={"/Cadastrar"}>Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;