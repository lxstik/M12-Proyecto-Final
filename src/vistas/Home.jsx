import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import supabase from '../supabaseClient';

export default function Home() {
    const [checkedDestacados, setCheckedDestacados] = useState(false);
    const [checkedParaTi, setCheckedParaTi] = useState(false);
    const [checkedRecientes, setCheckedRecientes] = useState(false);

    const [productos, setProductos] = useState([]);
    const [ventas, setVentas] = useState([]);

    const refDestacados = useRef(null);
    const refParaTi = useRef(null);
    const refRecientes = useRef(null);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setCheckedDestacados(true);
            },
            { threshold: 0.1 }
        );
        if (refDestacados.current) observer.observe(refDestacados.current);
        return () => {
            if (refDestacados.current) observer.unobserve(refDestacados.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setCheckedParaTi(true);
            },
            { threshold: 0.1 }
        );
        if (refParaTi.current) observer.observe(refParaTi.current);
        return () => {
            if (refParaTi.current) observer.unobserve(refParaTi.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setCheckedRecientes(true);
            },
            { threshold: 0.1 }
        );
        if (refRecientes.current) observer.observe(refRecientes.current);
        return () => {
            if (refRecientes.current) observer.unobserve(refRecientes.current);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const { data: productosData, error: productosError } = await supabase
                .from('productos')
                .select('*')
                .limit(50);

            const { data: ventasData, error: ventasError } = await supabase
                .from('ventas')
                .select('producto_id');

            if (productosError) console.error('Error fetching productos:', productosError);
            if (ventasError) console.error('Error fetching ventas:', ventasError);

            if (productosData && ventasData) {
                setProductos(productosData);
                setVentas(ventasData);
            }
        };
        fetchData();
    }, []);

    const vendidosIds = ventas.map(v => v.producto_id);
    const productosDisponibles = productos.filter(p => !vendidosIds.includes(p.id));

    const destacados = productosDisponibles.filter(p => p.destacado === true);
    const normales = productosDisponibles.filter(p => !p.destacado);

    const comprarProducto = async (productoId) => {
        if (!user) {
            alert('Debes iniciar sesión para comprar.');
            return;
        }

        if (!window.confirm('¿Estás seguro que quieres comprar este producto?')) return;

        const { data, error } = await supabase
            .from('ventas')
            .insert([{ producto_id: productoId, comprador_id: user.id }]);

        if (error) {
            alert('Error al realizar la compra. Intenta de nuevo.');
            console.error(error);
        } else {
            alert('Compra realizada con éxito!');
            setVentas(prev => [...prev, { producto_id: productoId }]);
        }
    };

    return (
        <>
            <main>
                <div className="container my-4" style={{ marginBottom: '200px' }}>
                    <div className="row justify-content-center text-center gy-3" style={{ marginBottom: '170px' }}>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados?tag=decoracion" className="text-decoration-none">
                                <img src="/decoracion.png" alt="Decoración" style={{ width: '100px' }} />
                                <p>Decoración</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados?tag=comics" className="text-decoration-none">
                                <img src="/comic.png" alt="Comics" style={{ width: '100px' }} />
                                <p>Comics</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados?tag=videojuegos" className="text-decoration-none">
                                <img src="/videojuegos.png" alt="Videojuegos" style={{ width: '100px' }} />
                                <p>Videojuegos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados?tag=componentespc" className="text-decoration-none">
                                <img src="/pc.png" alt="Componentes PC" style={{ width: '100px' }} />
                                <p>Componentes PC</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados?tag=consolas" className="text-decoration-none">
                                <img src="/consola.png" alt="Consolas" style={{ width: '100px' }} />
                                <p>Consolas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados?tag=merchandising" className="text-decoration-none">
                                <img src="/merch.png" alt="Merchandising" style={{ width: '100px' }} />
                                <p>Merchandising</p>
                            </Link>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center gy-3 mt-3" style={{ marginBottom: '170px' }}>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados?tag=cuentas" className="text-decoration-none">
                                <img src="/cuenta.png" alt="Cuentas" style={{ width: '100px' }} />
                                <p>Cuentas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados?tag=perifericos" className="text-decoration-none">
                                <img src="/perifericos.png" alt="Periféricos" style={{ width: '100px' }} />
                                <p>Periféricos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados?tag=ropa" className="text-decoration-none">
                                <img src="/ropa.png" alt="Ropa" style={{ width: '100px' }} />
                                <p>Ropa</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados?tag=juegosdemesa" className="text-decoration-none">
                                <img src="/mesa.png" alt="Juegos de mesa" style={{ width: '100px' }} />
                                <p>Juegos de mesa</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Carousel */}
                <div className="carousel-container my-5">
                    <div
                        id="carouselExample"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        style={{ height: '800px', margin: '0 0 100px 0' }}
                    >
                        <div className="carousel-inner" style={{ height: '100%' }}>
                            <div className="carousel-item active" style={{ height: '100%' }}>
                                <img
                                    src="/banner.png"
                                    className="d-block w-100"
                                    alt="Banner 1"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="carousel-item" style={{ height: '100%' }}>
                                <img
                                    src="/banner2.jpeg"
                                    className="d-block w-100"
                                    alt="Banner 2"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="carousel-item" style={{ height: '100%' }}>
                                <img
                                    src="/banner3.jpeg"
                                    className="d-block w-100"
                                    alt="Banner 3"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            style={{ zIndex: '5' }}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            style={{ zIndex: '5' }}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Sección Destacados */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <section ref={refDestacados} className="destacados container my-4">
                        <h1 className="mb-3 text-center text-uppercase fw-bold sectionText">Destacados</h1>
                        <div className="row g-4">
                            {destacados.map((item, index) => (
                                <Grow key={item.id} in={checkedDestacados} timeout={1000 + index * 500}>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="card shadow-sm border-0">
                                            <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                                                <img
                                                    src={item.imagen_url || "/gameboy.jpg"}
                                                    className="card-img-top rounded-top"
                                                    alt={`Producto Destacado ${item.id}`}
                                                />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title fw-bold text-dark">{item.nombre || 'Producto'}</h5>
                                                    <h3 className="fw-bold">{item.precio}€</h3>
                                                    <p className="card-text text-muted">{item.descripcion || 'Descripción del producto'}</p>
                                                </div>
                                            </Link>
                                            {user && user.id !== item.vendedor_id && (
                                                <button
                                                    onClick={() => comprarProducto(item.id)}
                                                    className="btn btn-primary w-100 mb-2"
                                                >
                                                    Comprar
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </Grow>
                            ))}
                        </div>
                    </section>
                </Box>

                {/* Sección Recientes */}
                <section ref={refRecientes} className="container my-4">
                    <h1 className="mb-3 text-center text-uppercase fw-bold sectionText">Recientes Productos</h1>
                    <div className="row g-4">
                        {normales.map((item, index) => (
                            <Grow key={item.id} in={checkedRecientes} timeout={1000 + index * 500}>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card shadow-sm border-0">
                                        <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                                            <img
                                                src={item.imagen_url || "/gameboy.jpg"}
                                                className="card-img-top rounded-top"
                                                alt={`Producto Reciente ${item.id}`}
                                            />
                                            <div className="card-body text-center">
                                                <h5 className="card-title fw-bold text-dark">{item.nombre || 'Producto'}</h5>
                                                <h3 className="fw-bold">{item.precio}€</h3>
                                                <p className="card-text text-muted">{item.descripcion || 'Descripción del producto'}</p>
                                            </div>
                                        </Link>
                                        {user && user.id !== item.vendedor_id && (
                                            <button
                                                onClick={() => comprarProducto(item.id)}
                                                className="btn btn-primary w-100 mb-2"
                                            >
                                                Comprar
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </Grow>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}