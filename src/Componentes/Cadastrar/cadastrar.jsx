import React, { useState } from "react";
import './cadastrar.css';

function Cadastrar() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleCadastro = (e) => {
        e.preventDefault();
        // Lógica de validação
        if (password !== confirmPassword) {
            setErrorMessage("As senhas não correspondem.");
        } else {
            // Simulação de cadastro bem-sucedido
            console.log("Cadastro realizado com sucesso!");
            // Redirecionar ou realizar outras ações necessárias
        }
    };

    return (
        <div className="Cadastrar container">
            <div className="cadastrarContainer">
                <h1 className="title">Cadastrar</h1>
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