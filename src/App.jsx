import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
import Registro from './vistas/Registro';
import Login from './vistas/Login';
import RutaPrivada from './componentes/RutaPrivada';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route
          path="/*"
          element={
            <RutaPrivada>
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
                {/* Cambié esta ruta para que reciba el parámetro vendedorId */}
                <Route path="/PerfilVendedor/:vendedorId" element={<PerfilVendedor />} />
                <Route path="/CrearProducto" element={<CrearProducto />} />
                <Route path="/Producto/:id" element={<Producto />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/Comentario" element={<Comentario />} />
                <Route path="/Resultados" element={<Resultados />} />
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
                <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
                <Route path="/PoliticaPrivacidad" element={<PoliticaPrivacidad />} />
                <Route path="/TrabajaConNosotros" element={<TrabajaConNosotros />} />
                <Route path="/CrearTicket" element={<CrearTicket />} />
              </Routes>
            </RutaPrivada>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
