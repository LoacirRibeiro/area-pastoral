import React, { useState } from "react";
import './adminDizimista.css';

function AdminDizimista() {
  const [searchTerm, setSearchTerm] = useState("");
  const [relatorioMes, setRelatorioMes] = useState("");
  const [relatorioAno, setRelatorioAno] = useState(new Date().getFullYear());
  const [usuarios] = useState([
    {
      nome: "João",
      pagamentos: [
        { mes: "Janeiro", ano: 2023, valor: 100, status: "PAGO", data: new Date('2023-01-15') },
        { mes: "Fevereiro", ano: 2023, valor: 150, status: "PAGO", data: new Date('2023-02-15') }
      ]
    },
    {
      nome: "Maria",
      pagamentos: [
        { mes: "Janeiro", ano: 2023, valor: 200, status: "PENDENTE", data: new Date('2023-01-20') }
      ]
    },
    {
      nome: "Carlos",
      pagamentos: [
        { mes: "Março", ano: 2023, valor: 250, status: "PAGO", data: new Date('2023-03-10') }
      ]
    }
  ]);
  const [pagamentos, setPagamentos] = useState([]);
  const [relatoriosGerados, setRelatoriosGerados] = useState([]);

  const handleSearch = () => {
    const usuarioEncontrado = usuarios.find(usuario =>
      usuario.nome.toLowerCase() === searchTerm.toLowerCase()
    );

    if (usuarioEncontrado) {
      setPagamentos(usuarioEncontrado.pagamentos);
    } else {
      alert("Usuário não encontrado!");
      setPagamentos([]);
    }
  };

  const gerarRelatorio = () => {
    const novoRelatorio = {
      mes: relatorioMes,
      ano: relatorioAno,
      pagamentos: pagamentos.filter(pagamento => pagamento.mes === relatorioMes && pagamento.ano === relatorioAno)
    };

    if (novoRelatorio.pagamentos.length > 0) {
      setRelatoriosGerados([...relatoriosGerados, novoRelatorio]);
      alert(`Relatório gerado para ${relatorioMes} ${relatorioAno}`);
    } else {
      alert("Nenhum pagamento encontrado para o mês e ano selecionados.");
    }
  };

  return (
    <div className="AdminDizimista container section">
      <div className="secContainer">
        <div className="secHeader">
          <h1>Painel Administrativo - Dizimistas</h1>
        </div>

        <div className="dizimistaSearch">
          <h2>Pesquisar Dizimistas</h2>
          <input
            type="text"
            placeholder="Nome do Dizimista"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div className="relatorioForm">
          <h2>Gerar Relatório Mensal</h2>
          <div className="formGroup">
            <label htmlFor="mes">Mês:</label>
            <select
              id="mes"
              value={relatorioMes}
              onChange={(e) => setRelatorioMes(e.target.value)}
            >
              <option value="">Selecione o mês</option>
              {["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"].map(mes => (
                <option key={mes} value={mes}>{mes}</option>
              ))}
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="ano">Ano:</label>
            <input
              type="number"
              id="ano"
              value={relatorioAno}
              onChange={(e) => setRelatorioAno(e.target.value)}
            />
          </div>
          <button onClick={gerarRelatorio}>Gerar Relatório</button>
        </div>

        <div className="pagamentosEfetuados">
          <h2>Pagamentos Efetuados</h2>
          {pagamentos.length > 0 ? (
            <ul>
              {pagamentos.map((pagamento, index) => (
                <li key={index} className="pagamentoItem">
                  <span>{pagamento.mes} {pagamento.ano} - R$ {pagamento.valor.toFixed(2)}</span>
                  <span>Status: {pagamento.status}</span>
                  <span>Data do Pagamento: {pagamento.data.toLocaleDateString('pt-BR')}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum pagamento encontrado.</p>
          )}
        </div>

        <div className="relatoriosGerados">
          <h2>Relatórios Gerados</h2>
          {relatoriosGerados.length > 0 ? (
            <ul>
              {relatoriosGerados.map((relatorio, index) => (
                <li key={index}>
                  {relatorio.mes} {relatorio.ano} - {relatorio.pagamentos.length} pagamento(s) encontrados.
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum relatório gerado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDizimista;
