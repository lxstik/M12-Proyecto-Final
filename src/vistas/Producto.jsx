import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

export default function Producto() {
    return (
        <>
            <Header />
            <main>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="card shadow-lg" style={{ width: '800px', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="https://via.placeholder.com/800x400" className="card-img-top" alt="Producto" />
                        <div className="card-body text-center">
                            <h3 className="card-title font-weight-bold">Nombre del Producto</h3>
                            <p className="card-text text-muted">Descripción detallada del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                            <p className="card-text font-weight-bold">Vendedor: <span className="text-primary">Juan Pérez</span></p>
                            <p className="card-text">Valoración: ⭐⭐⭐⭐☆ (4/5)</p>

                            {/* Estado del producto, precio y peso */}
                            <div className="mt-3">
                                <p className="card-text"><strong>Precio:</strong> $199.99</p>
                                <p className="card-text"><strong>Peso:</strong> 1.5 kg</p>
                            </div>

                            {/* Tags del producto */}
                            <div className="mt-3">
                                <span className="badge badge-secondary">Tecnología</span>
                                <span className="badge badge-secondary">Electrónica</span>
                                <span className="badge badge-secondary">Gadgets</span>
                            </div>

                            <div className="d-flex justify-content-between mt-3">
                                <button className="btn btn-primary flex-fill mx-2 py-3">Comprar</button>
                                <button className="btn btn-success flex-fill mx-2 py-3">Chatear</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de productos similares */}
                <div className="container mt-5">
                    <h3 className="mb-4 text-center">Productos Similares</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="Similar 1" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto 1</h5>
                                    <p className="card-text">$99.99</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="Similar 2" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto 2</h5>
                                    <p className="card-text">$89.99</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="Similar 3" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto 3</h5>
                                    <p className="card-text">$79.99</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="Similar 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto 4</h5>
                                    <p className="card-text">$69.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}