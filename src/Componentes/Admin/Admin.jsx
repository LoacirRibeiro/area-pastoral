import React, { useState } from "react";
import './Admin.css';

function Admin() {
    // Estados para cada seção
    const [servicosTitle, setServicosTitle] = useState("");
    const [servicosText, setServicosText] = useState("");
    const [servicosList, setServicosList] = useState([]);

    const [cleroTitle, setCleroTitle] = useState("");
    const [cleroText, setCleroText] = useState("");
    const [cleroImage, setCleroImage] = useState(null);
    const [cleroList, setCleroList] = useState([]);

    const [homeImage, setHomeImage] = useState(null);
    const [homeTitle, setHomeTitle] = useState("");
    const [homeText, setHomeText] = useState("");

    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [horario, setHorario] = useState("");

    const [pixKey, setPixKey] = useState("");

    const [comunicadoTitle, setComunicadoTitle] = useState("");
    const [comunicadoText, setComunicadoText] = useState("");
    const [comunicadoList, setComunicadoList] = useState([]);

    const handleSubmitServicos = (e) => {
        e.preventDefault();
        setServicosList([...servicosList, { title: servicosTitle, text: servicosText }]);
        setServicosTitle("");
        setServicosText("");
    };

    const handleDeleteServico = (index) => {
        const newList = servicosList.filter((_, i) => i !== index);
        setServicosList(newList);
    };

    const handleSubmitClero = (e) => {
        e.preventDefault();
        setCleroList([...cleroList, { title: cleroTitle, text: cleroText, image: cleroImage }]);
        setCleroTitle("");
        setCleroText("");
        setCleroImage(null);
    };

    const handleDeleteClero = (index) => {
        const newList = cleroList.filter((_, i) => i !== index);
        setCleroList(newList);
    };

    const handleSubmitComunicado = (e) => {
        e.preventDefault();
        setComunicadoList([...comunicadoList, { title: comunicadoTitle, text: comunicadoText }]);
        setComunicadoTitle("");
        setComunicadoText("");
    };

    const handleDeleteComunicado = (index) => {
        const newList = comunicadoList.filter((_, i) => i !== index);
        setComunicadoList(newList);
    };

    return (
        <div className="AdminPage container">
            <h1 className="title">Administração</h1>

            {/* Serviços */}
            <form onSubmit={handleSubmitServicos}>
                <div className="section">
                    <h2>Serviços</h2>
                    <input
                        type="text"
                        value={servicosTitle}
                        onChange={(e) => setServicosTitle(e.target.value)}
                        placeholder="Título dos Serviços"
                        required
                    />
                    <textarea
                        value={servicosText}
                        onChange={(e) => setServicosText(e.target.value)}
                        placeholder="Descrição dos Serviços"
                        required
                    />
                    <button type="submit">Adicionar Serviço</button>
                </div>
            </form>
            <ul>
                {servicosList.map((servico, index) => (
                    <li key={index}>
                        <strong>{servico.title}</strong>: {servico.text}
                        <button onClick={() => handleDeleteServico(index)}>Excluir</button>
                    </li>
                ))}
            </ul>

            {/* Clero */}
            <form onSubmit={handleSubmitClero}>
                <div className="section">
                    <h2>Clero</h2>
                    <input
                        type="text"
                        value={cleroTitle}
                        onChange={(e) => setCleroTitle(e.target.value)}
                        placeholder="Título do Clero"
                        required
                    />
                    <input
                        type="file"
                        onChange={(e) => setCleroImage(e.target.files[0])}
                    />
                    <textarea
                        value={cleroText}
                        onChange={(e) => setCleroText(e.target.value)}
                        placeholder="Descrição do Clero"
                        required
                    />
                    <button type="submit">Adicionar Clero</button>
                </div>
            </form>
            <ul>
                {cleroList.map((clero, index) => (
                    <li key={index}>
                        <strong>{clero.title}</strong>: {clero.text}
                        {clero.image && <span> (Imagem adicionada)</span>}
                        <button onClick={() => handleDeleteClero(index)}>Excluir</button>
                    </li>
                ))}
            </ul>

            {/* Home */}
            <div className="section">
                <h2>Home</h2>
                <input
                    type="file"
                    onChange={(e) => setHomeImage(e.target.files[0])}
                />
                <input
                    type="text"
                    value={homeTitle}
                    onChange={(e) => setHomeTitle(e.target.value)}
                    placeholder="Título da Home"
                />
                <textarea
                    value={homeText}
                    onChange={(e) => setHomeText(e.target.value)}
                    placeholder="Texto da Home"
                />
            </div>

            {/* Contato */}
            <div className="section">
                <h2>Contato</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    placeholder="Endereço"
                />
                <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Telefone"
                />
                <input
                    type="text"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    placeholder="Horário de Atendimento"
                />
            </div>

            {/* Doações */}
            <div className="section">
                <h2>Doações</h2>
                <input
                    type="text"
                    value={pixKey}
                    onChange={(e) => setPixKey(e.target.value)}
                    placeholder="Chave PIX"
                />
            </div>

            {/* Comunicados */}
            <form onSubmit={handleSubmitComunicado}>
                <div className="section">
                    <h2>Comunicados</h2>
                    <input
                        type="text"
                        value={comunicadoTitle}
                        onChange={(e) => setComunicadoTitle(e.target.value)}
                        placeholder="Título do Comunicado"
                        required
                    />
                    <textarea
                        value={comunicadoText}
                        onChange={(e) => setComunicadoText(e.target.value)}
                        placeholder="Texto do Comunicado"
                        required
                    />
                    <button type="submit">Adicionar Comunicado</button>
                </div>
            </form>
            <ul>
                {comunicadoList.map((comunicado, index) => (
                    <li key={index}>
                        <strong>{comunicado.title}</strong>: {comunicado.text}
                        <button onClick={() => handleDeleteComunicado(index)}>Excluir</button>
                    </li>
                ))}
            </ul>

            <button type="button" className="saveButton">Salvar Alterações</button>
        </div>
    );
}

export default Admin;
