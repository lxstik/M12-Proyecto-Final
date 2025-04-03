import { Link } from 'react-router-dom'; // Importa Link

export default function PerfilUsuario() {
    return (
        <>
            <main className="container">
                {/* Sección de información del usuario */}
                <section className="vendedor row align-items-center justify-content-between mt-5">
                    <div className="infoVendedor col-md-6 d-flex flex-column">
                        <div className="row mb-2">
                            <h1 className="col-8">Nombre Usuario</h1>
                            <button className="btn btn-primary col-4">Editar</button>
                        </div>
                        <div className="row mb-2">
                            <h1 className="col-8">Ubicación</h1>
                            <button className="btn btn-primary col-4">Editar</button>
                        </div>
                        <div className="row">
                            <h1 className="col-8">Descripción</h1>
                            <button className="btn btn-primary col-4">Editar</button>
                        </div>
                    </div>
                    <div className="valoracion col-md-3 text-center">
                        <h3>Valoración:</h3>
                        <p style={{ fontSize: '30px' }}>★★★★☆</p>
                    </div>
                    <div className="foto col-md-3 text-center">
                        <img src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '150px', borderRadius: '50%' }} />
                        <button className="btn btn-primary mt-2">Editar</button>
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
                    <div className="text-center mt-4">
                        <Link to="/CrearProducto">
                            <button className="btn btn-primary">Nuevo Producto</button>
                        </Link>
                    </div>
                </section>

                {/* Sección de valoraciones y comentarios */}
                <section className="comentarios mt-5">
                    <h1 className="text-center mb-4">Valoraciones y Comentarios</h1>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="row comentario mb-4">
                            <div className="infoComentario col-md-4">
                                <h3>Título comentario</h3>
                                <p>Comentario</p>
                            </div>
                            <div className="valoracionComentario row col-md-8 align-items-center justify-content-center">
                                <p className="col-md-2 text-center" style={{ fontSize: '30px' }}>★★★★☆</p>
                                <img className="col-md-2" src="../public/icons/cuenta.png" alt="Foto de perfil" style={{ width: '30px', borderRadius: '50%' }} />
                                <p className="col-md-8">Nombre Usuario</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}