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
import AdminHome from "./Componentes/Admin/AdminHome/adminHome";
import HomeAdmin from "./Componentes/Admin/PainelAdmin/painelAdmin";
import Dizimista from "./Componentes/Dizimista/dizimista";
import Cadastrar from "./Componentes/Cadastrar/cadastrar";
import AdminDizimista from "./Componentes/Admin/AdminDizimista/adminDizimista";
import AdminCadastroUsuario from "./Componentes/Admin/AdminCadastroUsuario/adminCadastroUsuario";
import AdminCadastroAdmin from "./Componentes/Admin/AdminCadastroAdmin/adminCadastroAdmin";
import AdminClero from "./Componentes/Admin/AdminClero/adminClero";
import AdminContato from "./Componentes/Admin/AdminContato/adminContato";
import AdminComunicado from "./Componentes/Admin/AdminComunicado/adminComunicado";
import AdminServicos from "./Componentes/Admin/AdminServicos/adminServicos";
import Comunidade from "./Componentes/Comunidade/comunidade";
import AdminComunidade from "./Componentes/Admin/AdminComunidade/adminComunidade";
import ErrorPage from "./Componentes/ErrorPage/errorPage";



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
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/homeAdmin" element = {<HomeAdmin />} />
        <Route path="/dizimista" element = {<Dizimista />} />
        <Route path="/cadastrar" element = {<Cadastrar />} />
        <Route path="/comunidade" element = {<Comunidade />} />
        <Route path="/adminDizimista" element = {<AdminDizimista />} />
        <Route path="/adminCadastroUsuario" element = {<AdminCadastroUsuario />} />
        <Route path="/adminCadastroAdmin" element = {<AdminCadastroAdmin/>} />
        <Route path="/adminClero" element = {<AdminClero />} />
        <Route path="/adminContato" element = {<AdminContato/>} />
        <Route path="/adminServicos" element = {<AdminServicos/>} />
        <Route path="/adminComunicado" element = {<AdminComunicado/>} />
        <Route path="/adminComunidade" element = {<AdminComunidade/>} />
        <Route path="*" element={<ErrorPage />} /> {/* Rota de erro */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
