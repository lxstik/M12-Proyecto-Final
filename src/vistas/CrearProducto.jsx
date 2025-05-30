import { useState } from 'react';
import supabase from '../supabaseClient';

export default function CrearProducto() {
    const [tags, setTags] = useState([]);
    const [imagen, setImagen] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [estadoCondiciones, setEstadoCondiciones] = useState('Nuevo');
    const [mensaje, setMensaje] = useState('');

    const condiciones = ['Nuevo', 'ComoNuevo', 'CondicionesAceptables', 'Malo'];

    const handleTagClick = (tag) => {
        setTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagen(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let usuario = null;
        try {
            usuario = JSON.parse(localStorage.getItem('usuario'));
        } catch (e) {
            usuario = null;
        }

        // Asegúrate de que este id existe en la tabla usuarios
        const vendedor_id =
            usuario?.id ||
            usuario?.perfil?.id ||
            usuario?.perfil?.usuario_id ||
            usuario?.auth?.id ||
            usuario?.auth?.user_id;

        if (!vendedor_id) {
            setMensaje('No se ha encontrado el usuario loggeado.');
            return;
        }

        // Debug: muestra el id que se va a usar
        // console.log('vendedor_id:', vendedor_id);
        console.log('vendedor_id:', vendedor_id);
        // Insertar en Supabase
        const { error } = await supabase.from('productos').insert([{
            descripcion: descripcion,
            tags: tags,
            precio: parseFloat(precio),
            estado_condiciones: estadoCondiciones,
            vendedor_id: vendedor_id,
            imagen_url: imagen
        }]);

        if (error) {
            setMensaje('Error al crear el producto: ' + error.message);
            return;
        }

        setMensaje('¡Producto creado correctamente!');
        setTitulo('');
        setDescripcion('');
        setPrecio('');
        setEstadoCondiciones('Nuevo');
        setTags([]);
        setImagen(null);
    };

    return (
        <main className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card p-4 shadow-sm">
                        <h3 className="text-center mb-4">Crear Producto</h3>
                        <form onSubmit={handleSubmit}>
                            {/* Imagen del producto */}
                            <div className="form-group text-center mb-4">
                                <label htmlFor="image" className="d-block mb-2">Selecciona una imagen para el producto</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="image"
                                    accept="image/*"
                                    onChange={handleImagenChange}
                                    required
                                />
                                {imagen && (
                                    <img src={imagen} alt="preview" style={{ maxWidth: 200, marginTop: 10 }} />
                                )}
                            </div>

                            {/* Título del producto */}
                            <div className="form-group mb-4">
                                <label htmlFor="title">Título del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Nombre del producto"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
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
                                    value={descripcion}
                                    onChange={e => setDescripcion(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* Estado condiciones */}
                            <div className="form-group mb-4">
                                <label htmlFor="estadoCondiciones">Condiciones</label>
                                <select
                                    className="form-control"
                                    id="estadoCondiciones"
                                    value={estadoCondiciones}
                                    onChange={e => setEstadoCondiciones(e.target.value)}
                                    required
                                >
                                    {condiciones.map((op) => (
                                        <option key={op} value={op}>{op}</option>
                                    ))}
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
                                    value={precio}
                                    onChange={e => setPrecio(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Botón para subir */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary w-100">Subir Producto</button>
                            </div>
                            {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}