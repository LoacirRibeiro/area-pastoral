import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Admin from "./Componentes/Admin/Admin";
import Clero from "./Componentes/Clero/Clero";
import Comunicados from "./Componentes/Comunicado/Comunicado";
import Contatos from "./Componentes/Contatos/Contatos";
import Doacao from "./Componentes/Doacao/Doacao";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Componentes/Home/Home";
import Login from "./Componentes/Login/Login";
import Servicos from "./Componentes/Servicos/servicos";
import Navbar from "./Componentes/NavBar/NavBar";
import Cadastrar from "./Componentes/Cadastrar/Cadastrar";
import RecuperarSenha from "./Componentes/RecuperarSenha/RecuperarSenha";
import Admin from "./Componentes/Admin/Admin";
import LoginAdmin from "./Componentes/Admin/LoginAdmin/LoginAdmin";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comunicados" element={<Comunicados />} />
        <Route path="/Contatos" element={<Contatos />} />
        <Route path="/Doar" element={<Doacao />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Clero" element={<Clero />} />
        <Route path="/Sevicos" element={<Servicos />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/Admin" element = {<Admin />} />
        <Route path="/LoginAdmin" element = {<LoginAdmin />} />
       
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
