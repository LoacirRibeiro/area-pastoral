
import './App.css';
import Clero from './Componentes/Clero/Clero';
import Comunicados from './Componentes/Comunicado/Comunicado';

import Contatos from './Componentes/Contatos/Contatos';
import Doacao from './Componentes/Doacao/Doacao';
import Footer from './Componentes/Footer/Footer';
import Home from './Componentes/Home/Home';
import NavBar from './Componentes/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
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
