import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <>
            <main>
                <div className="container my-4" style={{ marginBottom: '200px' }}>
                    <div className="row justify-content-center text-center gy-3" style={{ marginBottom: '170px' }}>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/decoracion.png" alt="Decoración" style={{ width: '100px' }} />
                                <p>Decoración</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/comic.png" alt="Comics" style={{ width: '100px' }} />
                                <p>Comics</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/videojuegos.png" alt="Videojuegos" style={{ width: '100px' }} />
                                <p>Videojuegos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/pc.png" alt="Componentes PC" style={{ width: '100px' }} />
                                <p>Componentes PC</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/consola.png" alt="Consolas" style={{ width: '100px' }} />
                                <p>Consolas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/merch.png" alt="Merchandising" style={{ width: '100px' }} />
                                <p>Merchandising</p>
                            </Link>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center gy-3 mt-3" style={{ marginBottom: '170px' }}>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/cuenta.png" alt="Cuentas" style={{ width: '100px' }} />
                                <p>Cuentas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/perifericos.png" alt="Periféricos" style={{ width: '100px' }} />
                                <p>Periféricos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/ropa.png" alt="Ropa" style={{ width: '100px' }} />
                                <p>Ropa</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/mesa.png" alt="Juegos de mesa" style={{ width: '100px' }} />
                                <p>Juegos de mesa</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-container my-5">
                    {/* Carousel con imagenes y controles */}
                    <div
                        id="carouselExample"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        style={{ height: '800px', margin: '0px 0px 100px 0px' }} // Altura mayor
                    >
                        {/* Carousel inner con imagenes */}
                        <div className="carousel-inner" style={{ height: '100%' }}>
                            <div className="carousel-item active" style={{ height: '100%' }}>
                                <img
                                    src="../../public/banner.png"
                                    className="d-block w-100"
                                    alt="Componente 1"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="carousel-item" style={{ height: '100%' }}>
                                <img
                                    src="../../public/banner2.JPEG"
                                    className="d-block w-100"
                                    alt="Componente 2"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="carousel-item" style={{ height: '100%' }}>
                                <img
                                    src="../../public/banner3.jpeg"
                                    className="d-block w-100"
                                    alt="Componente 3"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* Controles de carousel (anterior y siguiente) */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            style={{ zIndex: '5' }}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            style={{ zIndex: '5' }}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
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