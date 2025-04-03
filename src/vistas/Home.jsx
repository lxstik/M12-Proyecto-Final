import { Link } from 'react-router-dom'; // Importa Link

export default function Home() {
    return (
        <>
            <main>
            <div className="container my-4">
                    <div className="row justify-content-center text-center gy-3">
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/decoracion.png" alt="Decoración" style={{ width: '75px' }} />
                                <p>Decoración</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/comic.png" alt="Comics" style={{ width: '75px' }} />
                                <p>Comics</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/videojuegos.png" alt="Videojuegos" style={{ width: '75px' }} />
                                <p>Videojuegos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/pc.png" alt="Componentes PC" style={{ width: '75px' }} />
                                <p>Componentes PC</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/consola.png" alt="Consolas" style={{ width: '75px' }} />
                                <p>Consolas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/merch.png" alt="Merchandising" style={{ width: '75px' }} />
                                <p>Merchandising</p>
                            </Link>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center gy-3 mt-3">
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/cuenta.png" alt="Cuentas" style={{ width: '75px' }} />
                                <p>Cuentas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/perifericos.png" alt="Periféricos" style={{ width: '75px' }} />
                                <p>Periféricos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/ropa.png" alt="Ropa" style={{ width: '75px' }} />
                                <p>Ropa</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/mesa.png" alt="Juegos de mesa" style={{ width: '75px' }} />
                                <p>Juegos de mesa</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel my-4 d-flex align-items-center justify-content-between">
                    {/* Botón Anterior */}
                    <button className="btn btn-primary d-flex justify-content-center align-items-center">
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    {/* Título en el Centro */}
                    <h1 className="text-center mx-auto" style={{ fontSize: '50px', color: '#333' }}>
                        Componentes de ordenadores <br /> de todo tipo
                    </h1>
                    {/* Botón Siguiente */}
                    <button className="btn btn-primary d-flex justify-content-center align-items-center">
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>

                <section className="destacados container my-4">
                    <h1 className="mb-3 text-center text-uppercase fw-bold text-primary">Destacados</h1>
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

                <section className="destacados container my-4">
                    <h1 className="mb-3 text-center text-uppercase fw-bold text-primary">Para ti</h1>
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

                <section className="destacados container my-4">
                    <h1 className="mb-3 text-center text-uppercase fw-bold text-primary">Ofertas</h1>
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
                                            <h3 className="text-primary fw-bold">79.99€</h3>
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