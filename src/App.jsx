
import './App.css';
import Admin from './Componentes/Admin/Admin';
import Clero from './Componentes/Clero/Clero';
import Comunicados from './Componentes/Comunicado/Comunicado';
import Contatos from './Componentes/Contatos/Contatos';
import Doacao from './Componentes/Doacao/Doacao';
import Footer from './Componentes/Footer/Footer';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import NavBar from './Componentes/NavBar/NavBar';
import Servicos from './Componentes/Servicos/servicos';



function App() {
  return (
    <div>

      <NavBar />    
      <Admin />
      <Login />
      <Servicos />     
      <Clero />
      <Home />
      <Contatos />
      <Doacao />
      <Comunicados/>      
      <Footer />
    </div>
  );
}

export default App;
