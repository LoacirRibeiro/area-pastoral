// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.css'; 

function ErrorPage() {
  return (
    <div className="error-container">
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/" className="home-link">Voltar para a Página Inicial</Link>
    </div>
  );
}

export default ErrorPage;
