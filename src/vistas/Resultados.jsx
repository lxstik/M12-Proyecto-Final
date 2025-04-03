import { Link } from "react-router-dom";

export default function Resultados() {
    return (
        <>
            <main className="container">
                <h1 className="text-center">Resultados de la Búsqueda</h1>
                <section className="enVenta mt-5">
                    <h1 className="mb-4 text-center">Productos Encontrados</h1>
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="col-12 col-sm-6 col-md-3 mb-4">
                                <Link to="/Producto" className="text-decoration-none">
                                    <div className="card h-100">
                                        <img
                                            src="../public/gameboy.jpg"
                                            className="card-img-top"
                                            alt={`Producto Destacado ${item}`}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Producto {item}</h5>
                                            <h3 className="text-primary">99.99€</h3>
                                            <p className="card-text">Descripción del producto</p>
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