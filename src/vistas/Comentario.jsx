import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function Comentario() {
    return (
        <>
            <Header />
            <main className="container">
                <section className="vendedor row align-items-center justify-content-center text-center mt-5">
                    <img src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '200px' }} />
                    <div className="infoVendedor">
                        <h3>Nombre Vendedor</h3>
                        <p style={{ fontSize: '30px' }}>★★★★☆</p>
                    </div>
                </section>
                
                <section className="productoComprado mt-4">
                    <h1>Producto Comprado</h1>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card">
                            <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Destacado 1" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Producto</h5>
                                <h3 className="text-primary">99.99€</h3>
                                <p className="card-text">Descripción del producto</p>
                            </div>
                        </div>
                    </div>
                
                    {/* Sección de comentario y valoración */}
                    <div className="mt-4 text-center">
                        <h2>Deja tu comentario</h2>
                        <div className="form-group">
                            <textarea className="form-control" rows="4" placeholder="Escribe tu comentario aquí..."></textarea>
                        </div>
                        
                        <h3>Valoración</h3>
                        <p style={{ fontSize: '30px' }}>★★★★☆</p>
                
                        <button className="btn btn-primary">Enviar</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}