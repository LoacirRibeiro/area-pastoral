import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Admin from "./Componentes/Admin/Admin";
import Clero from "./Componentes/Clero/clero";
import Comunicados from "./Componentes/Comunicado/comunicado";
import Contatos from "./Componentes/Contatos/contatos";
import Doacao from "./Componentes/Doacao/doacao";
import Footer from "./Componentes/Footer/footer";
import Home from "./Componentes/Home/home";
import Login from "./Componentes/Login/login";
import Servicos from "./Componentes/Servicos/servicos";
import Navbar from "./Componentes/NavBar/navBar";
import RecuperarSenha from "./Componentes/RecuperarSenha/recuperarSenha";
import Admin from "./Componentes/Admin/Admin";
import HomeAdmin from "./Componentes/Admin/HomeAdmin/homeAdmin";
import Dizimista from "./Componentes/Dizimista/dizimista";
import Cadastrar from "./Componentes/Cadastrar/cadastrar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunicados" element={<Comunicados />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/doar" element={<Doacao />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clero" element={<Clero />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/recuperarSenha" element={<RecuperarSenha />} />
        <Route path="/admin" element = {<Admin />} />
        <Route path="/homeAdmin" element = {<HomeAdmin />} />
        <Route path="/dizimista" element = {<Dizimista />} />
        <Route path="/cadastrar" element = {<Cadastrar />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
