import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './dizimista.css';

function Dizimista({ usuario }) {
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState(new Date().getFullYear());
  const [valor, setValor] = useState("");
  const [pagamentos, setPagamentos] = useState([]);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mes || !valor) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const formattedValor = parseFloat(valor).toFixed(2);
    const paymentUrl = `https://www.pagamento.com/pix?mes=${mes}&ano=${ano}&valor=${formattedValor}&conta=area_pastoral`;
    setQrCodeUrl(paymentUrl);

    const novoPagamento = { mes, ano, valor: formattedValor, data: new Date(), status: "Pendente" };
    setPagamentos([...pagamentos, novoPagamento]);

    setMes("");
    setValor("");
  };

  return (
    <div className="Dizimista container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">Bem-vindo, {usuario}!</span>
          <h1 className="title">
            Sou Dizimista
            <span className="orangeDot"> . </span>
          </h1>
          <p>
            Sua contribuição é essencial para continuarmos nossa missão.
          </p>
        </div>

        <div className="dizimoForm" data-aos="fade-up">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="mes">Mês:</label>
              <select
                id="mes"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                required
              >
                <option value="">Selecione o mês</option>
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
              </select>
            </div>

            <div className="formGroup">
              <label htmlFor="ano">Ano:</label>
              <input
                type="number"
                id="ano"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="valor">Valor da Doação (R$):</label>
              <input
                type="number"
                id="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                step="0.01"
                required
              />
            </div>

            <button type="submit" className="submitBtn">Gerar QR Code</button>
          </form>
        </div>

        {qrCodeUrl && (
          <div className="qrCodeSection" data-aos="fade-up">
            <h2>Escaneie o QR Code</h2>
            <QRCodeCanvas value={qrCodeUrl} size={200} />
          </div>
        )}

        <div className="pagamentosEfetuados" data-aos="fade-up">
          <h2>Pagamentos Efetuados</h2>
          <ul>
            {pagamentos.map((pagamento, index) => (
              <li key={index} className="pagamentoItem">
                <span>{pagamento.mes} {pagamento.ano} - R$ {pagamento.valor}</span>
                <span>Status: {pagamento.status}</span>
                <span>Data do Pagamento: {pagamento.data.toLocaleDateString('pt-BR')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dizimista;
