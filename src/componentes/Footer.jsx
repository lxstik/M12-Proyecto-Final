import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <footer className="bg-light py-4">
                <div className="container">
                    <div className="row align-items-start justify-content-between">
                        <div className="col-md-4 text-center text-md-left mb-3 mb-md-0">
                            <h5>Contacto</h5>
                            <Link to="/CrearTicket" className="d-block">Crea un ticket</Link>
                            <a href="mailto:empresaventa@gmail.com" className="d-block">empresaventa@gmail.com</a>
                        </div>
                        <div className="col-md-4 text-center text-md-left mb-3 mb-md-0">
                            <h5>Enlaces</h5>
                            <Link to="/SobreNosotros" className="d-block">Sobre nosotros</Link>
                            <Link to="/TrabajaConNosotros" className="d-block">Trabaja con nosotros</Link>
                            <Link to="/PoliticaPrivacidad" className="d-block">Política de privacidad</Link>
                            <Link to="/TerminosCondiciones" className="d-block">Términos y condiciones</Link>
                        </div>
                        <div className="col-md-4 text-center text-md-left">
                            <h5>Síguenos</h5>
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <a href="#"><img src="./public/icons/instagram.png" alt="instagram" className="mx-2" style={{ width: '40px' }} /></a>
                                <a href="#"><img src="./public/icons/facebook.png" alt="facebook" className="mx-2" style={{ width: '40px' }} /></a>
                                <a href="#"><img src="./public/icons/youtube.png" alt="youtube" className="mx-2" style={{ width: '40px' }} /></a>
                                <a href="#"><img src="./public/icons/twitter.png" alt="twitter" className="mx-2" style={{ width: '40px' }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col text-center">
                            <p className="mb-0">&copy; 2025 Empresa de Venta. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}