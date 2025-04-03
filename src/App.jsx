import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './vistas/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Chat from './vistas/Chat';
import PerfilUsuario from './vistas/PerfilUsuario';
import CrearProducto from './vistas/CrearProducto';
import PerfilVendedor from './vistas/PerfilVendedor';
import Producto from './vistas/Producto';
import Comentario from './vistas/Comentario';
import Resultados from './vistas/Resultados';
import SobreNosotros from './vistas/SobreNosotros';
import TerminosCondiciones from './vistas/TerminosCondiciones';
import PoliticaPrivacidad from './vistas/PoliticaPrivacidad';
import TrabajaConNosotros from './vistas/TrabajaConNosotros';
import CrearTicket from './vistas/CrearTicket';


function App() {
  return (
    <Router>
      <Header /> {/* El Header se renderiza en todas las vistas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
        <Route path="/PerfilVendedor" element={<PerfilVendedor />} />
        <Route path="/CrearProducto" element={<CrearProducto />} />
        <Route path='/Producto' element={<Producto />} />
        <Route path='/Chat' element={<Chat />} />
        <Route path='/Comentario' element={<Comentario />} />
        <Route path='/Resultados' element={<Resultados />} />
        <Route path='/SobreNosotros' element={<SobreNosotros />} />
        <Route path='/TerminosCondiciones' element={<TerminosCondiciones />} />
        <Route path='/PoliticaPrivacidad' element={<PoliticaPrivacidad />} />
        <Route path='/TrabajaConNosotros' element={<TrabajaConNosotros />} />
        <Route path='/CrearTicket' element={<CrearTicket />} />
      </Routes> 
      <Footer /> {/* El Footer se renderiza en todas las vistas */}
    </Router>
  );
}

export default App; 