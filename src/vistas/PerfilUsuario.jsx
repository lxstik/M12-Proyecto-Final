import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import Rating from '@mui/material/Rating';
import supabase from '../supabaseClient';

export default function PerfilUsuario() {
    // Obtener usuario loggeado de localStorage
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

    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    // NUEVO ESTADO: Comentarios (pero sin inputs de nuevo comentario)
    const [comentarios, setComentarios] = useState([]);

    // Obtener productos del usuario desde Supabase
    useEffect(() => {
        const fetchProductos = async () => {
            if (!usuario?.id) return;
            const { data, error } = await supabase
                .from('productos')
                .select('*')
                .eq('vendedor_id', usuario.id);
            if (!error) setProductos(data);
        };
        fetchProductos();
    }, [usuario]);

    // Obtener comentarios del usuario
    useEffect(() => {
        const fetchComentarios = async () => {
            if (!usuario?.id) return;
            // Traemos comentarios y el nombre del usuario autor (JOIN a usuarios)
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

            if (error) {
                console.error('Error al cargar comentarios:', error);
            } else {
                setComentarios(data || []);
            }
        };
        fetchComentarios();
    }, [usuario]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setChecked(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Función para actualizar usuario en Supabase
    const actualizarUsuarioSupabase = async (campo, valor) => {
      if (!usuario?.id) return;

      const { data, error } = await supabase
        .from('usuarios')
        .update({ [campo]: valor })
        .eq('id', usuario.id);

      if (error) {
        console.error('Error al actualizar usuario en Supabase:', error);
      } else {
        console.log('Usuario actualizado en Supabase:', data);
      }
    };

    // Función para eliminar producto de Supabase y estado local
    const handleEliminarProducto = async (productoId) => {
        if (!productoId) return;

        const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
        if (!confirmacion) return;

        const { error } = await supabase
            .from('productos')
            .delete()
            .eq('id', productoId);

        if (error) {
            alert('Error al eliminar el producto: ' + error.message);
            console.error(error);
            return;
        }

        setProductos((prevProductos) => prevProductos.filter(prod => prod.id !== productoId));
    };

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleGuardar = async (campo) => {
        const nuevoUsuario = { ...user, [campo]: inputs[campo] };
        setUser(nuevoUsuario);
        setEditando({ ...editando, [campo]: false });

        if (usuario) {
            if (!usuario.perfil) usuario.perfil = {};
            usuario.perfil[campo] = inputs[campo];
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }

        await actualizarUsuarioSupabase(campo, inputs[campo]);
    };

    const handleFotoChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                setUser({ ...user, foto: reader.result });
                if (usuario) {
                    if (!usuario.perfil) usuario.perfil = {};
                    usuario.perfil.avatar = reader.result;
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                }

                if (usuario?.id) {
                    const { data, error } = await supabase
                      .from('usuarios')
                      .update({ avatar: reader.result })
                      .eq('id', usuario.id);

                    if (error) {
                      console.error('Error actualizando avatar en Supabase:', error);
                    } else {
                      console.log('Avatar actualizado en Supabase:', data);
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        navigate('/Login');
    };

    return (
        <>
            <main className="container my-5">
                <div className="text-end mb-3">
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </div>

                <section className="row g-4 align-items-center mb-5">
                    <div className="col-md-4 text-center">
                        <img
                            src={user.foto ? user.foto : "./public/icons/cuenta.png"}
                            alt="Foto de perfil"
                            style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <br />
                        <label className="btn btn-primary mt-3">
                            Editar Foto
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleFotoChange}
                            />
                        </label>
                    </div>

                    <div className="col-md-5">
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            {editando.nombre ? (
                                <>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={inputs.nombre}
                                        onChange={handleInputChange}
                                        className="form-control me-2"
                                    />
                                    <button className="btn btn-success btn-sm" onClick={() => handleGuardar("nombre")}>Guardar</button>
                                </>
                            ) : (
                                <>
                                    <h4 className="mb-0">{user.nombre}</h4>
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => setEditando({ ...editando, nombre: true })}>Editar</button>
                                </>
                            )}
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            {editando.ubicacion ? (
                                <>
                                    <input
                                        type="text"
                                        name="ubicacion"
                                        value={inputs.ubicacion}
                                        onChange={handleInputChange}
                                        className="form-control me-2"
                                    />
                                    <button className="btn btn-success btn-sm" onClick={() => handleGuardar("ubicacion")}>Guardar</button>
                                </>
                            ) : (
                                <>
                                    <h4 className="mb-0">{user.ubicacion}</h4>
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => setEditando({ ...editando, ubicacion: true })}>Editar</button>
                                </>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            {editando.descripcion ? (
                                <>
                                    <input
                                        type="text"
                                        name="descripcion"
                                        value={inputs.descripcion}
                                        onChange={handleInputChange}
                                        className="form-control me-2"
                                    />
                                    <button className="btn btn-success btn-sm" onClick={() => handleGuardar("descripcion")}>Guardar</button>
                                </>
                            ) : (
                                <>
                                    <h4 className="mb-0">{user.descripcion}</h4>
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => setEditando({ ...editando, descripcion: true })}>Editar</button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <h5>Valoración</h5>
                        <Rating name="read-only" value={value} readOnly />
                    </div>
                </section>

                <section ref={sectionRef} className="mt-5">
                    <h2 className="text-center mb-4">Productos en Venta</h2>
                    <div className="row">
                        {productos.length === 0 ? (
                            <div className="text-center text-muted mb-4">
                                <p>No tienes productos en venta.</p>
                            </div>
                        ) : (
                            productos.map((producto, index) => (
                                <Grow
                                    key={producto.id || index}
                                    in={checked}
                                    timeout={1000 + index * 500}
                                >
                                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                                        <div className="card h-100 shadow-sm d-flex flex-column">
                                            <Link to={`/Producto/${producto.id}`} className="text-decoration-none flex-grow-1">
                                                <img
                                                    src={producto.imagen_url || "./public/gameboy.jpg"}
                                                    className="card-img-top"
                                                    alt={producto.nombre || `Producto ${index + 1}`}
                                                />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title">{producto.nombre || "Producto"}</h5>
                                                    <h4 className="text-primary">{producto.precio ? `${producto.precio}€` : "Precio"}</h4>
                                                    <p className="card-text">{producto.descripcion || "Descripción del producto"}</p>
                                                </div>
                                            </Link>

                                            {/* Botón Eliminar */}
                                            <button
                                                className="btn btn-danger mt-auto mx-3 mb-3"
                                                onClick={() => handleEliminarProducto(producto.id)}
                                            >
                                                Eliminar
                                            </button>
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

                {/* Comentarios y Valoraciones */}
                <section className="mt-5">
                    <h2 className="text-center mb-4">Valoraciones y Comentarios</h2>

                    {/* Aquí NO mostramos formulario para nuevo comentario */}

                    {/* Lista de comentarios */}
                    {comentarios.length === 0 ? (
                        <p className="text-center text-muted">No hay comentarios aún.</p>
                    ) : (
                        comentarios.map(({ id, titulo, comentario, valoracion, usuarios }) => (
                            <div key={id} className="border rounded p-3 mb-4">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <h5 className="mb-1">{titulo || 'Sin título'}</h5>
                                        <p className="mb-0">{comentario}</p>
                                    </div>
                                    <div className="col-md-8 d-flex align-items-center justify-content-end gap-3">
                                        <Rating name={`rating-${id}`} value={valoracion} readOnly />
                                        <img
                                            src={usuarios?.avatar || "./public/icons/cuenta.png"}
                                            alt="Perfil"
                                            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                        <p className="mb-0">{usuarios?.nombre || 'Usuario'}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </main>
        </>
    );
}
