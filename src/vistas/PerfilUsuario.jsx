import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import Rating from '@mui/material/Rating';
import supabase from '../supabaseClient';

export default function PerfilUsuario() {
    let usuario = null;
    try {
        usuario = JSON.parse(localStorage.getItem('usuario'));
    } catch (e) {
        usuario = null;
    }

    const initialUser = {
        nombre: usuario?.perfil?.nombre || usuario?.auth?.login || usuario?.nombre || 'Usuario',
        ubicacion: usuario?.perfil?.ubicacion || 'Ubicación',
        descripcion: usuario?.perfil?.descripcion || 'Descripción',
        foto: usuario?.perfil?.avatar && usuario.perfil.avatar.trim() !== ''
            ? usuario.perfil.avatar
            : './public/icons/cuenta.png'
    };

    const [user, setUser] = useState(initialUser);
    const [editando, setEditando] = useState({
        nombre: false,
        ubicacion: false,
        descripcion: false
    });
    const [inputs, setInputs] = useState({
        nombre: user.nombre,
        ubicacion: user.ubicacion,
        descripcion: user.descripcion
    });
    const [checked, setChecked] = useState(false);
    const sectionRef = useRef(null);
    const [value, setValue] = useState(5);
    const [valoracionMedia, setValoracionMedia] = useState(0);
    const [cantidadValoraciones, setCantidadValoraciones] = useState(0);
    const [productos, setProductos] = useState([]);
    const [productosComprados, setProductosComprados] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductos = async () => {
            if (!usuario?.id) return;

            const { data, error } = await supabase
                .from('productos')
                .select('*')
                .eq('vendedor_id', usuario.id)
                .eq('vendido', false);

            if (!error) {
                setProductos(data);
            } else {
                console.error('Error cargando productos:', error);
            }
        };
        fetchProductos();
    }, [usuario]);

    useEffect(() => {
        const fetchProductosComprados = async () => {
            if (!usuario?.id) return;
            const { data, error } = await supabase
                .from('productos')
                .select('*')
                .eq('comprado_por', usuario.id)
                .eq('vendido', true);
            if (!error) setProductosComprados(data);
            else console.error('Error cargando productos comprados:', error);
        };
        fetchProductosComprados();
    }, [usuario]);

    useEffect(() => {
    const fetchComentarios = async () => {
        if (!usuario?.id) return;

        const { data, error } = await supabase
            .from('comentarios_usuarios')
            .select(`
                id,
                titulo,
                valoracion,
                comentario,
                usuarios_id,
                usuarios (nombre, avatar)
            `)
            .eq('usuarios_id', usuario.id)
            .order('id', { ascending: false });

        if (!error) {
            setComentarios(data || []);
            const total = data.reduce((sum, c) => sum + (c.valoracion || 0), 0);
            const cantidad = data.length;
            const media = cantidad ? Math.round(total / cantidad) : 0;
            setValoracionMedia(media);
            setCantidadValoraciones(cantidad); // 👈 nuevo
        } else {
            console.error('Error cargando comentarios:', error);
        }
    };
    fetchComentarios();
}, [usuario]);



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setChecked(true),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => sectionRef.current && observer.unobserve(sectionRef.current);
    }, []);

    const actualizarUsuarioSupabase = async (campo, valor) => {
        if (!usuario?.id) return;
        await supabase
            .from('usuarios')
            .update({ [campo]: valor })
            .eq('id', usuario.id);
    };

    const handleEliminarProducto = async (productoId) => {
        if (!productoId) return;
        const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
        if (!confirmacion) return;

        const { error } = await supabase.from('productos').delete().eq('id', productoId);
        if (!error) {
            setProductos(prev => prev.filter(prod => prod.id !== productoId));
        } else {
            alert('Error al eliminar: ' + error.message);
        }
    };

    // Nueva función para eliminar comentario
    const handleEliminarComentario = async (comentarioId) => {
        if (!comentarioId) return;
        const confirmacion = window.confirm('¿Quieres eliminar este comentario?');
        if (!confirmacion) return;

        const { error } = await supabase
            .from('comentarios_usuarios')
            .delete()
            .eq('id', comentarioId);

        if (!error) {
            setComentarios(prev => prev.filter(c => c.id !== comentarioId));
        } else {
            alert('Error al eliminar comentario: ' + error.message);
        }
    };

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleGuardar = async (campo) => {
        const nuevoUsuario = { ...user, [campo]: inputs[campo] };
        setUser(nuevoUsuario);
        setEditando({ ...editando, [campo]: false });
        if (usuario) {
            usuario.perfil = { ...usuario.perfil, [campo]: inputs[campo] };
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }
        await actualizarUsuarioSupabase(campo, inputs[campo]);
    };

    const handleFotoChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = async () => {
            setUser({ ...user, foto: reader.result });
            if (usuario) {
                usuario.perfil = { ...usuario.perfil, avatar: reader.result };
                localStorage.setItem('usuario', JSON.stringify(usuario));
            }
            await supabase
                .from('usuarios')
                .update({ avatar: reader.result })
                .eq('id', usuario.id);
        };
        reader.readAsDataURL(file);
    };

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        navigate('/Login');
    };

    return (
        <main className="container my-5">
            <div className="text-end mb-3">
                <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
            </div>

            {/* Perfil */}
            <section className="row g-4 align-items-center mb-5">
                <div className="col-md-4 text-center">
                    <img
                        src={user.foto}
                        alt="Foto de perfil"
                        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <br />
                    <label className="btn btn-primary mt-3">
                        Editar Foto
                        <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleFotoChange} />
                    </label>
                </div>

                <div className="col-md-5">
                    {["nombre", "ubicacion", "descripcion"].map((campo) => (
                        <div className="mb-3 d-flex justify-content-between align-items-center" key={campo}>
                            {editando[campo] ? (
                                <>
                                    <input
                                        type="text"
                                        name={campo}
                                        value={inputs[campo]}
                                        onChange={handleInputChange}
                                        className="form-control me-2"
                                    />
                                    <button className="btn btn-success btn-sm" onClick={() => handleGuardar(campo)}>Guardar</button>
                                </>
                            ) : (
                                <>
                                    <h4 className="mb-0">{user[campo]}</h4>
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => setEditando({ ...editando, [campo]: true })}>Editar</button>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="col-md-3 text-center">
                    <h5>Valoración</h5>
                    <Rating name="read-only" value={valoracionMedia} readOnly />
                    <p className="text-muted">
                        ({cantidadValoraciones} {cantidadValoraciones === 1 ? 'valoración' : 'valoraciones'})
                    </p>

                </div>

            </section>

            {/* Productos en Venta */}
            <section ref={sectionRef} className="mt-5">
                <h2 className="text-center mb-4">Productos en Venta</h2>
                <div className="row">
                    {productos.length === 0 ? (
                        <div className="text-center text-muted mb-4">
                            <p>No tienes productos en venta.</p>
                        </div>
                    ) : (
                        productos.map((producto, index) => (
                            <Grow key={producto.id} in={checked} timeout={1000 + index * 500}>
                                <div className="col-12 col-sm-6 col-md-3 mb-4">
                                    <div className="card h-100 shadow-sm d-flex flex-column">
                                        <Link to={`/Producto/${producto.id}`} className="text-decoration-none flex-grow-1">
                                            <img src={producto.imagen_url || "./public/gameboy.jpg"} className="card-img-top" alt={producto.nombre} />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{producto.nombre}</h5>
                                                <h4 className="text-primary">{producto.precio}€</h4>
                                                <p className="card-text">{producto.descripcion}</p>
                                            </div>
                                        </Link>
                                        <button className="btn btn-danger mt-auto mx-3 mb-3" onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
                                    </div>
                                </div>
                            </Grow>
                        ))
                    )}
                </div>
                <div className="text-center mt-4">
                    <Link to="/CrearProducto">
                        <button className="btn btn-success px-4 py-2">+ Nuevo Producto</button>
                    </Link>
                </div>
            </section>

            {/* Productos Comprados */}
            <section className="mt-5">
                <h2 className="text-center mb-4">Productos Comprados</h2>
                <div className="row">
                    {productosComprados.length === 0 ? (
                        <div className="text-center text-muted mb-4">
                            <p>No has comprado ningún producto aún.</p>
                        </div>
                    ) : (
                        productosComprados.map((producto, index) => (
                            <Grow key={producto.id} in={checked} timeout={1000 + index * 500}>
                                <div className="col-12 col-sm-6 col-md-3 mb-4">
                                    <div className="card h-100 shadow-sm d-flex flex-column">
                                        <Link to={`/Producto/${producto.id}`} className="text-decoration-none flex-grow-1">
                                            <img src={producto.imagen_url || "./public/gameboy.jpg"} className="card-img-top" alt={producto.nombre} />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{producto.nombre}</h5>
                                                <h4 className="text-primary">{producto.precio}€</h4>
                                                <p className="card-text">{producto.descripcion}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </Grow>
                        ))
                    )}
                </div>
            </section>

            {/* Comentarios */}
            <section className="mt-5">
                <h2 className="text-center mb-4">Comentarios</h2>
                {comentarios.length === 0 ? (
                    <p className="text-center text-muted">No tienes comentarios aún.</p>
                ) : (
                    comentarios.map((comentario) => (
                        <div key={comentario.id} className="card mb-3 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src={comentario.usuarios?.avatar || "./public/icons/cuenta.png"}
                                        alt={comentario.usuarios?.nombre || 'Usuario'}
                                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                                        className="me-3"
                                    />
                                    <h5 className="mb-0">{comentario.usuarios?.nombre || 'Usuario'}</h5>
                                    {/* Botón eliminar solo si el comentario pertenece al usuario loggeado */}
                                    {comentario.usuarios_id === usuario?.id && (
                                        <button
                                            className="btn btn-sm btn-danger ms-auto"
                                            onClick={() => handleEliminarComentario(comentario.id)}
                                        >
                                            Eliminar
                                        </button>
                                    )}
                                </div>
                                <h6>{comentario.titulo}</h6>
                                <Rating name="read-only" value={comentario.valoracion} readOnly />
                                <p>{comentario.comentario}</p>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </main>
    );
}
