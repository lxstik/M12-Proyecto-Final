import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="container my-4">
                    <div className="row justify-content-center text-center gy-3">
                        <div className="col-6 col-sm-4 col-md-2">
                            <img src="../public/icons/decoracion.png" alt="Decoración" style={{ width: '75px' }} />
                            <p>Decoración</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <img src="../public/icons/comic.png" alt="Comics" style={{ width: '75px' }} />
                            <p>Comics</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <img src="../public/icons/videojuegos.png" alt="Videojuegos" style={{ width: '75px' }} />
                            <p>Videojuegos</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <img src="../public/icons/pc.png" alt="Componentes PC" style={{ width: '75px' }} />
                            <p>Componentes PC</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <img src="../public/icons/consola.png" alt="Consolas" style={{ width: '75px' }} />
                            <p>Consolas</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <img src="../public/icons/merch.png" alt="Merchandising" style={{ width: '75px' }} />
                            <p>Merchandising</p>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center gy-3 mt-3">
                        <div className="col-6 col-sm-4 col-md-3">
                            <img src="../public/icons/cuenta.png" alt="Cuentas" style={{ width: '75px' }} />
                            <p>Cuentas</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <img src="../public/icons/perifericos.png" alt="Periféricos" style={{ width: '75px' }} />
                            <p>Periféricos</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <img src="../public/icons/ropa.png" alt="Ropa" style={{ width: '75px' }} />
                            <p>Ropa</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <img src="../public/icons/mesa.png" alt="Juegos de mesa" style={{ width: '75px' }} />
                            <p>Juegos de mesa</p>
                        </div>
                    </div>
                </div>

                <div className="carousel my-4 row align-items-center">
                    {/* Previous Button */}
                    <button className="btn btn-primary col-2 col-md-1 d-flex justify-content-center align-items-center">
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    {/* Title in the Center */}
                    <h1 className="col-8 col-md-10 text-center" style={{ fontSize: '50px' }}>Componentes de ordenadores <br />de todo tipo</h1>
                    {/* Next Button */}
                    <button className="btn btn-primary col-2 col-md-1 d-flex justify-content-center align-items-center">
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>

                <section className="destacados container my-4">
                    <h1 className="mb-3">Destacados</h1>
                    <div className="row">
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
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Destacado 2" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-primary">99.99€</h3>
                                    <p className="card-text">Descripción del producto</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Destacado 3" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-primary">99.99€</h3>
                                    <p className="card-text">Descripción del producto</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Destacado 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-primary">99.99€</h3>
                                    <p className="card-text">Descripción del producto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="parati container my-4">
                    <h1 className="mb-3">Para Ti</h1>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Para Ti 1" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-primary">99.99€</h3>
                                    <p className="card-text">Descripción del producto</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Para Ti 2" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-primary">99.99€</h3>
                                    <p className="card-text">Descripción del producto</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Para Ti 3" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-primary">99.99€</h3>
                                    <p className="card-text">Descripción del producto</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Para Ti 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-primary">99.99€</h3>
                                    <p className="card-text">Descripción del producto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ofertas container my-4">
                    <h1 className="mb-3">Ofertas</h1>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Oferta 1" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-danger">79.99€</h3>
                                    <p className="card-text">Descripción del producto con descuento.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Oferta 2" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-danger">79.99€</h3>
                                    <p className="card-text">Descripción del producto con descuento.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Oferta 3" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-danger">79.99€</h3>
                                    <p className="card-text">Descripción del producto con descuento.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <img src="../public/gameboy.jpg" className="card-img-top" alt="Producto Oferta 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Producto</h5>
                                    <h3 className="text-danger">79.99€</h3>
                                    <p className="card-text">Descripción del producto con descuento.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}