import Footer from "../componentes/Footer";
import Header from "../componentes/Header";

export default function PerfilUsuario() {
    return (
        <>
            <Header />
            <main className="container">
                <section className="vendedor row align-items-center justify-content-between mt-5">
                    <div className="infoVendedor">
                        <div className="nombreUsuario row">
                            <h1>Nombre Usuario</h1>
                            <button className="btn btn-primary">Editar</button>
                        </div>
                        <div className="ubicacionUsuario row">
                            <h1>Ubicación</h1>
                            <button className="btn btn-primary">Editar</button>
                        </div>
                        <div className="descripcionUsuario row">
                            <h1>Descripción</h1>
                            <button className="btn btn-primary">Editar</button>
                        </div>
                    </div>
                    <div className="valoracion">
                        <h3>Valoración:</h3>
                        <p style={{ fontSize: '30px' }}>★★★★☆</p>
                    </div>
                    <div className="foto align-items-center justify-content-center">
                        <img src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '200px' }} />
                        <button className="btn btn-primary">Editar</button>
                    </div>
                </section>

                <section className="enVenta">
                    <h1 className="mb-3 text-center">En Venta</h1>
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
                    <button className="btn btn-primary">Nuevo Producto</button>
                </section>

                <section className="enVenta">
                    <h1 className="text-center">Valoraciones y Comentarios</h1>
                    <div className="row comentario">
                        <div className="infoComentario col-md-4">
                            <h3>Título comentario</h3>
                            <p>Comentario</p>
                        </div>
                        <div className="valoracionComentario row col-md-8 align-items-center justify-content-center">
                            <p className="col-md-2" style={{ fontSize: '30px' }}>★★★★☆</p>
                            <img className="col-md-2" src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '30px' }} />
                            <p className="col-md-8">Nombre Usuario</p>
                        </div>
                    </div>

                    <div className="row comentario">
                        <div className="infoComentario col-md-4">
                            <h3>Título comentario</h3>
                            <p>Comentario</p>
                        </div>
                        <div className="valoracionComentario row col-md-8 align-items-center justify-content-center">
                            <p className="col-md-2" style={{ fontSize: '30px' }}>★★★★☆</p>
                            <img className="col-md-2" src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '30px' }} />
                            <p className="col-md-8">Nombre Usuario</p>
                        </div>
                    </div>

                    <div className="row comentario">
                        <div className="infoComentario col-md-4">
                            <h3>Título comentario</h3>
                            <p>Comentario</p>
                        </div>
                        <div className="valoracionComentario row col-md-8 align-items-center justify-content-center">
                            <p className="col-md-2" style={{ fontSize: '30px' }}>★★★★☆</p>
                            <img className="col-md-2" src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '30px' }} />
                            <p className="col-md-8">Nombre Usuario</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}