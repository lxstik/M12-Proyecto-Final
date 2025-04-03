import { Link } from "react-router-dom";

export default function Producto() {
    return (
        <>
            <main>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="card shadow-lg" style={{ width: '800px', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto" />
                        <div className="card-body text-center">
                            <h3 className="card-title font-weight-bold">Nombre del Producto</h3>
                            <p className="card-text text-muted">Descripción detallada del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                            <Link to="/PerfilVendedor" className="text-decoration-none">
                            <p className="card-text font-weight-bold">Vendedor: <span className="text-primary">Juan Pérez</span></p>
                            </Link>
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
                                <Link to="/Home">
                                    <button className="btn btn-primary flex-fill mx-2 py-3">Comprar</button>
                                </Link>
                                <Link to="/Chat">
                                    <button className="btn btn-success flex-fill mx-2 py-3">Chatear</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de productos similares */}
                <section className="destacados container my-4">
                    <h1 className="mb-3 text-center text-uppercase fw-bold text-primary">Similares</h1>
                    <div className="row g-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="col-12 col-sm-6 col-md-3">
                                <Link to="/Producto" className="text-decoration-none">
                                    <div className="card shadow-sm border-0">
                                        <img
                                            src="../public/gameboy.jpg"
                                            className="card-img-top rounded-top"
                                            alt={`Producto Destacado ${item}`}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title fw-bold text-dark">Producto</h5>
                                            <h3 className="text-primary fw-bold">99.99€</h3>
                                            <p className="card-text text-muted">Descripción del producto</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}