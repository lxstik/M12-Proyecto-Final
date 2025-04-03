import { Link } from "react-router-dom";

export default function PerfilVendedor() {
    return (
        <>
            <main className="container">
                {/* Sección de información del vendedor */}
                <section className="vendedor row align-items-center justify-content-between mt-5">
                    <div className="infoVendedor col-md-6 d-flex flex-column">
                        <div className="row mb-2">
                            <h1 className="col-12">Nombre Vendedor</h1>
                        </div>
                        <div className="row mb-2">
                            <h1 className="col-12">Ubicación</h1>
                        </div>
                        <div className="row">
                            <h1 className="col-12">Descripción</h1>
                        </div>
                    </div>
                    <div className="valoracion col-md-3 text-center">
                        <h3>Valoración:</h3>
                        <p style={{ fontSize: '30px' }}>★★★★☆</p>
                    </div>
                    <div className="foto col-md-3 text-center">
                        <img src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '150px', borderRadius: '50%' }} />
                    </div>
                </section>

                {/* Sección de productos en venta */}
                <section className="enVenta mt-5">
                    <h1 className="mb-4 text-center">En Venta</h1>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="col-12 col-sm-6 col-md-3 mb-4">
                                <Link to="/Producto" className="text-decoration-none">
                                    <div className="card h-100">
                                        <img src="../public/gameboy.jpg" className="card-img-top" alt={`Producto Destacado ${item}`} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Producto</h5>
                                            <h3 className="text-primary">99.99€</h3>
                                            <p className="card-text">Descripción del producto</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sección de valoraciones y comentarios */}
                <section className="enVenta">
                    <h1 className="text-center">Valoraciones y Comentarios</h1>
                    <div className="row comentario">
                        <div className="infoComentario col-md-4">
                            <h3>Título comentario</h3>
                            <p>Comentario</p>
                        </div>
                        <div className="valoracionComentario row col-md-8 align-items-center justify-content-center">
                            <p className="col-md-2" style={{ fontSize: '30px' }}>★★★★☆</p>
                            <img className="col-md-2" src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '30px', borderRadius: '50%' }} />
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
                            <img className="col-md-2" src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '30px', borderRadius: '50%' }} />
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
                            <img className="col-md-2" src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '30px', borderRadius: '50%' }} />
                            <p className="col-md-8">Nombre Usuario</p>
                        </div>
                    </div>
                    <Link to="/Comentario">
                        <button className="btn btn-primary">Dejar comentario</button>
                    </Link>
                </section>
            </main>
        </>
    );
}