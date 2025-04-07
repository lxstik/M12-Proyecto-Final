import { useState } from 'react';

export default function CrearProducto() {
    const [tags, setTags] = useState([]);

    // Función para manejar la selección de tags
    const handleTagClick = (tag) => {
        setTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    return (
        <main className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card p-4 shadow-sm">
                        <h3 className="text-center mb-4">Crear Producto</h3>
                        <form>
                            {/* Imagen del producto */}
                            <div className="form-group text-center mb-4">
                                <label htmlFor="image" className="d-block mb-2">Selecciona una imagen para el producto</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="image"
                                    required
                                />
                            </div>

                            {/* Título del producto */}
                            <div className="form-group mb-4">
                                <label htmlFor="title">Título del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Nombre del producto"
                                    required
                                />
                            </div>

                            {/* Descripción del producto */}
                            <div className="form-group mb-4">
                                <label htmlFor="description">Descripción del Producto</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    rows="4"
                                    placeholder="Detalles del producto"
                                    required
                                ></textarea>
                            </div>

                            {/* Habilitar venta por envío */}
                            <div className="form-group mb-4">
                                <label htmlFor="shipping">¿Habilitar venta por envío?</label>
                                <select
                                    className="form-control"
                                    id="shipping"
                                    required
                                >
                                    <option value="yes">Sí</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            {/* Etiquetas */}
                            <div className="form-group mb-4">
                                <label htmlFor="tags">Tags</label>
                                <div className="tags-container d-flex flex-wrap">
                                    {['Merch', 'PC', 'Comics', 'Figuras', 'Periféricos', 'Consolas', 'Ropa', 'Juegos de mesa', 'Cuentas', 'Decoración', 'Videojuegos', 'Promoción', 'Negociación', 'Buen estado', 'Nuevo', 'Oferta 2x1'].map((tag) => (
                                        <button
                                            type="button"
                                            key={tag}
                                            className={`btn btn-outline-secondary btn-sm m-1 tag ${tags.includes(tag) ? 'active' : ''}`}
                                            onClick={() => handleTagClick(tag)}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Precio */}
                            <div className="form-group mb-4">
                                <label htmlFor="price">Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    placeholder="Precio del producto"
                                    required
                                />
                            </div>

                            {/* Botón para subir */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary w-100">Subir Producto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
