import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <footer className="py-4" style={{ backgroundColor: '#B0B0B0', color: '#1a1a1a', marginTop: '170px' }}>
                <div className="container">
                    <div className="row align-items-start justify-content-between">
                        <div className="col-md-4 text-center text-md-left mb-3 mb-md-0">
                            <h1 className="mb-3">Contacto</h1>
                            <Link
                                to="/CrearTicket"
                                className="text-decoration-none"
                            >
                                Crea un ticket
                            </Link>
                            <a
                                href="mailto:empresaventa@gmail.com"
                                className="text-decoration-none"
                            >
                                empresaventa@gmail.com
                            </a>
                        </div>
                        <div className="col-md-4 text-center text-md-left mb-3 mb-md-0">
                            <h1 className="mb-3">Enlaces</h1>
                            <Link
                                to="/SobreNosotros"
                                className="text-decoration-none"
                            >
                                Sobre nosotros
                            </Link>
                            <Link
                                to="/TrabajaConNosotros"
                                className="text-decoration-none"
                            >
                                Trabaja con nosotros
                            </Link>
                            <Link
                                to="/PoliticaPrivacidad"
                                className="text-decoration-none"
                            >
                                Política de privacidad
                            </Link>
                            <Link
                                to="/TerminosCondiciones"
                                className="text-decoration-none"
                            >
                                Términos y condiciones
                            </Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <h1 className="mb-3">Síguenos</h1>
                            <div className="d-flex justify-content-center">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <img src="/icons/instagram.png" alt="Instagram" className="mx-2" style={{ width: '40px' }} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <img src="/icons/facebook.png" alt="Facebook" className="mx-2" style={{ width: '40px' }} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <img src="/icons/youtube.png" alt="YouTube" className="mx-2" style={{ width: '40px' }} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <img src="/icons/twitter.png" alt="Twitter" className="mx-2" style={{ width: '40px' }} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>


        </>
    )
}