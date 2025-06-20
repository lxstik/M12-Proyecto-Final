import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './vistas/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import PerfilUsuario from './vistas/PerfilUsuario';
import CrearProducto from './vistas/CrearProducto';
import PerfilVendedor from './vistas/PerfilVendedor';
import Producto from './vistas/Producto';
import Comentario from './vistas/Comentario';
import Resultados from './vistas/Resultados';
import SobreNosotros from './vistas/SobreNosotros';
import TerminosCondiciones from './vistas/TerminosCondiciones';
import PoliticaPrivacidad from './vistas/PoliticaPrivacidad';
import CrearTicket from './vistas/CrearTicket';
import Registro from './vistas/Registro';
import Login from './vistas/Login';
import VistaAdmin from './vistas/vistaAdmin';
import RutaPrivada from './componentes/RutaPrivada';
import AdministrarProductos from './vistas/administrarProductos';
import AdministrarUsuarios from './vistas/administrarUsuarios';
import AdministrarComentarios from './vistas/administrarComentarios';


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
                <Route path="/PerfilVendedor/:vendedorId" element={<PerfilVendedor />} />
                <Route path="/CrearProducto" element={<CrearProducto />} />
                <Route path="/Producto/:id" element={<Producto />} />
                <Route path="/Comentario" element={<Comentario />} />
                <Route path="/Resultados" element={<Resultados />} />
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
                <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
                <Route path="/PoliticaPrivacidad" element={<PoliticaPrivacidad />} />
                <Route path="/CrearTicket" element={<CrearTicket />} />
                <Route path="/vistaAdmin" element={<VistaAdmin />} />
                <Route path="/administrarUsuarios" element={<AdministrarUsuarios />} />
                <Route path="/administrarProductos" element={<AdministrarProductos />} />
                <Route path="/administrarComentarios" element={<AdministrarComentarios />} />
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
