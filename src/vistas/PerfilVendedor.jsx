import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import supabase from '../supabaseClient';

export default function PerfilVendedor() {
    const { vendedorId } = useParams();
    const [checked, setChecked] = useState(true);
    const sectionRef = useRef(null);
    const [valoracionComentario, setValoracionComentario] = useState(0);
    const [vendedor, setVendedor] = useState(null);
    const [productos, setProductos] = useState([]);
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        async function fetchVendedor() {
            if (!vendedorId) return;

            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('id', vendedorId)
                .single();

            if (error) {
                console.error("Error al cargar vendedor:", error);
                setVendedor(null);
            } else {
                setVendedor(data);
            }
        }

        async function fetchProductos() {
            if (!vendedorId) return;

            const { data, error } = await supabase
                .from('productos')
                .select('*')
                .eq('vendedor_id', vendedorId);

            if (error) {
                console.error("Error al cargar productos del vendedor:", error);
                setProductos([]);
            } else {
                setProductos(data);
            }
        }

        async function fetchComentarios() {
            if (!vendedorId) return;

            // Paso 1: obtener IDs de los productos vendidos por este vendedor
            const { data: productosVendedor, error: errorProd } = await supabase
                .from("productos")
                .select("id")
                .eq("vendedor_id", vendedorId);

            if (errorProd || !productosVendedor || productosVendedor.length === 0) {
                setComentarios([]);
                return;
            }

            const ids = productosVendedor.map(p => p.id);

            // Paso 2: obtener los comentarios de esos productos
            const { data: comentariosData, error: errorComentarios } = await supabase
                .from("comentarios_productos")
                .select("*, usuarios(nombre, avatar)")
                .in("producto_id", ids);

            if (errorComentarios) {
                console.error("Error al cargar comentarios:", errorComentarios);
                return;
            }

            setComentarios(comentariosData || []);

            // Paso 3: calcular la media de las valoraciones
            const promedio = comentariosData.length
                ? comentariosData.reduce((acc, c) => acc + c.valoracion, 0) / comentariosData.length
                : 0;
            setValoracionComentario(promedio);
        }

        fetchVendedor();
        fetchProductos();
        fetchComentarios();
    }, [vendedorId]);

    if (!vendedor) {
        return (
            <main className="container mt-5 d-flex justify-content-center">
                <p>Cargando información del vendedor...</p>
            </main>
        );
    }

    return (
        <main className="container my-5">
            {/* Información del vendedor */}
            <section className="row g-4 align-items-center mb-5">
                <div className="col-md-4 text-center">
                    <img
                        src={vendedor.avatar && vendedor.avatar.length > 0 ? vendedor.avatar : "/icons/cuenta.png"}
                        alt="Foto de perfil"
                        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                </div>

                <div className="col-md-5">
                    <div className="mb-3">
                        <h4 className="mb-1">{vendedor.nombre || "Nombre no disponible"}</h4>
                    </div>
                    <div className="mb-3">
                        <h4 className="mb-1">{vendedor.ubicacion || "Ubicación no disponible"}</h4>
                    </div>
                    <div>
                        <h4 className="mb-1">{vendedor.descripcion || "Descripción no disponible"}</h4>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <h5>Valoración</h5>
                    <Rating name="read-only" value={valoracionComentario} readOnly />
                    <p className="text-muted mt-1">({comentarios.length} valoraciones)</p>
                </div>
            </section>

            {/* Productos en venta */}
            <section ref={sectionRef} className="mt-5">
                <h2 className="text-center mb-4">Productos en Venta</h2>
                <div className="row">
                    {productos.length > 0 ? (
                        productos.map((item) => (
                            <div key={item.id} className="col-12 col-sm-6 col-md-3 mb-4">
                                <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src={item.imagen_url && item.imagen_url.length > 0 ? item.imagen_url : "/gameboy.jpg"}
                                            className="card-img-top"
                                            alt={item.nombre || "Producto"}
                                            style={{ objectFit: 'cover', height: '180px' }}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{item.nombre || "Nombre no disponible"}</h5>
                                            <h4 className="text-primary">{item.precio ? item.precio + "€" : "Precio no disponible"}</h4>
                                            <p className="card-text">{item.descripcion || "Sin descripción"}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Este vendedor no tiene productos disponibles.</p>
                    )}
                </div>
            </section>

            {/* Comentarios */}
            <section className="mt-5">
                <h2 className="text-center mb-4">Valoraciones y Comentarios</h2>

                {comentarios.length === 0 ? (
                    <p className="text-center">Este vendedor aún no tiene valoraciones.</p>
                ) : (
                    <div className="row">
                        {comentarios.map((c) => (
                            <div key={c.id} className="col-12 col-md-6 mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <div className="d-flex align-items-center mb-3">
                                        <img
                                            src={c.usuarios?.avatar || "/icons/cuenta.png"}
                                            alt="Avatar"
                                            className="me-3"
                                            style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}
                                        />
                                        <div>
                                            <h6 className="mb-0">{c.usuarios?.nombre || "Usuario"}</h6>
                                            <Rating value={c.valoracion} readOnly size="small" />
                                        </div>
                                    </div>
                                    <h5>{c.titulo}</h5>
                                    <p className="mb-0">{c.comentario}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
