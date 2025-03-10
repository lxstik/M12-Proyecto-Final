import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function CrearProducto() {
    return (
        <>
            <Header />
            <main className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card p-4 shadow">
                            <h3 className="text-center mb-4">Crear Producto</h3>
                            <form>
                                {/* Imagen del producto */}
                                <div className="form-group text-center">
                                    <label htmlFor="image" className="d-block mb-2">Selecciona una imagen para el producto</label>
                                    <div className="image-upload-container mb-3">
                                        <input type="file" className="form-control-file" id="image" required />
                                    </div>
                                </div>

                                {/* Titulo del producto */}
                                <div className="form-group">
                                    <label htmlFor="title">Título del Producto</label>
                                    <input type="text" className="form-control" id="title" placeholder="Nombre del producto" required />
                                </div>

                                {/* Descripción del producto */}
                                <div className="form-group">
                                    <label htmlFor="description">Descripción del Producto</label>
                                    <textarea className="form-control" id="description" rows="4" placeholder="Detalles del producto" required></textarea>
                                </div>

                                {/* Habilitar venta por envío */}
                                <div className="form-group">
                                    <label htmlFor="shipping">¿Habilitar venta por envío?</label>
                                    <select className="form-control" id="shipping" required>
                                        <option value="yes">Sí</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                {/* Etiquetas */}
                                <div className="form-group">
                                    <label htmlFor="tags">Tags</label>
                                    <div className="tags-container">
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="merch">Merch</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="pc">PC</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="comics">Comics</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="figuras">Figuras</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="perifericos">Periféricos</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="consolas">Consolas</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="ropa">Ropa</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="juegos">Juegos de mesa</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="cuentas">Cuentas</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="decoracion">Decoración</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="videojuegos">Videojuegos</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="promocion">Promoción</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="negociacion">Negociación</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="buenestado">Buen estado</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="nuevo">Nuevo</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm m-1 tag" id="oferta">Oferta 2x1</button>
                                    </div>
                                </div>

                                {/* Precio */}
                                <div className="form-group">
                                    <label htmlFor="price">Precio</label>
                                    <input type="number" className="form-control" id="price" placeholder="Precio del producto" required />
                                </div>

                                {/* Botón para subir */}
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Subir Producto</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}