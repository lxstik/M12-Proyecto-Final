import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import supabase from '../supabaseClient';

export default function Home() {
    // Estados y referencias para cada sección
    const [checkedDestacados, setCheckedDestacados] = useState(false);
    const [checkedParaTi, setCheckedParaTi] = useState(false);
    const [checkedOfertas, setCheckedOfertas] = useState(false);

    const [productos, setProductos] = useState([]);

    const refDestacados = useRef(null);
    const refParaTi = useRef(null);
    const refOfertas = useRef(null);

    // Función para configurar el observer
    const setupObserver = (ref, setChecked) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setChecked(true); // Activa la animación cuando la sección es visible
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    };

    // Configurar observers para cada sección
    useEffect(() => setupObserver(refDestacados, setCheckedDestacados), []);
    useEffect(() => setupObserver(refParaTi, setCheckedParaTi), []);
    useEffect(() => setupObserver(refOfertas, setCheckedOfertas), []);

    // Traer productos de Supabase
    useEffect(() => {
        const fetchProductos = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select('*')
                .limit(20);

            // Debug: muestra los productos y errores en consola
            console.log('PRODUCTOS:', data, 'ERROR:', error);

            if (!error) setProductos(data);
        };
        fetchProductos();
    }, []);

    // Filtrar productos destacados, normales y ofertas
    const destacados = productos.filter(p => p.estado === 'Destacado').slice(0, 4);
    const normales = productos.filter(p => p.estado === 'Normal').slice(0, 4);
    const ofertas = productos.filter(p => Number(p.precio) < 80).slice(0, 4);

    return (
        <>
            <main>
                <div className="container my-4" style={{ marginBottom: '200px' }}>
                    <div className="row justify-content-center text-center gy-3" style={{ marginBottom: '170px' }}>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/decoracion.png" alt="Decoración" style={{ width: '100px' }} />
                                <p>Decoración</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/comic.png" alt="Comics" style={{ width: '100px' }} />
                                <p>Comics</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/videojuegos.png" alt="Videojuegos" style={{ width: '100px' }} />
                                <p>Videojuegos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/pc.png" alt="Componentes PC" style={{ width: '100px' }} />
                                <p>Componentes PC</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/consola.png" alt="Consolas" style={{ width: '100px' }} />
                                <p>Consolas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/merch.png" alt="Merchandising" style={{ width: '100px' }} />
                                <p>Merchandising</p>
                            </Link>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center gy-3 mt-3" style={{ marginBottom: '170px' }}>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/cuenta.png" alt="Cuentas" style={{ width: '100px' }} />
                                <p>Cuentas</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/perifericos.png" alt="Periféricos" style={{ width: '100px' }} />
                                <p>Periféricos</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/ropa.png" alt="Ropa" style={{ width: '100px' }} />
                                <p>Ropa</p>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                            <Link to="/Resultados" className="text-decoration-none">
                                <img src="../public/icons/mesa.png" alt="Juegos de mesa" style={{ width: '100px' }} />
                                <p>Juegos de mesa</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-container my-5">
                    {/* Carousel con imagenes y controles */}
                    <div
                        id="carouselExample"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        style={{ height: '800px', margin: '0px 0px 100px 0px' }}
                    >
                        <div className="carousel-inner" style={{ height: '100%' }}>
                            <div className="carousel-item active" style={{ height: '100%' }}>
                                <img
                                    src="../../public/banner.png"
                                    className="d-block w-100"
                                    alt="Componente 1"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="carousel-item" style={{ height: '100%' }}>
                                <img
                                    src="../../public/banner2.jpeg"
                                    className="d-block w-100"
                                    alt="Componente 2"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="carousel-item" style={{ height: '100%' }}>
                                <img
                                    src="../../public/banner3.jpeg"
                                    className="d-block w-100"
                                    alt="Componente 3"
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
                                <Grow
                                    key={item.id}
                                    in={checkedDestacados}
                                    timeout={1000 + index * 500}
                                >
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                                            <div className="card shadow-sm border-0">
                                                <img
                                                    src={item.imagen || "../public/gameboy.jpg"}
                                                    className="card-img-top rounded-top"
                                                    alt={`Producto Destacado ${item.id}`}
                                                />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title fw-bold text-dark">{item.nombre || 'Producto'}</h5>
                                                    <h3 className="fw-bold">{item.precio}€</h3>
                                                    <p className="card-text text-muted">{item.descripcion || 'Descripción del producto'}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Grow>
                            ))}
                        </div>
                    </section>
                </Box>

                {/* Sección Para Ti */}
                <section ref={refParaTi} className="destacados container my-4">
                    <h1 className="mb-3 text-center text-uppercase fw-bold sectionText">Para ti</h1>
                    <div className="row g-4">
                        {normales.map((item, index) => (
                            <Grow
                                key={item.id}
                                in={checkedParaTi}
                                timeout={1000 + index * 500}
                            >
                                <div className="col-12 col-sm-6 col-md-3">
                                    <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                                        <div className="card shadow-sm border-0">
                                            <img
                                                src={item.imagen || "../public/gameboy.jpg"}
                                                className="card-img-top rounded-top"
                                                alt={`Producto ${item.id}`}
                                            />
                                            <div className="card-body text-center">
                                                <h5 className="card-title fw-bold text-dark">{item.nombre || 'Producto'}</h5>
                                                <h3 className="fw-bold">{item.precio}€</h3>
                                                <p className="card-text text-muted">{item.descripcion || 'Descripción del producto'}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Grow>
                        ))}
                    </div>
                </section>

                {/* Sección Ofertas */}
                <section ref={refOfertas} className="destacados container my-4">
                    <h1 className="mb-3 text-center text-uppercase fw-bold sectionText">Ofertas</h1>
                    <div className="row g-4">
                        {ofertas.map((item, index) => (
                            <Grow
                                key={item.id}
                                in={checkedOfertas}
                                timeout={1000 + index * 500}
                            >
                                <div className="col-12 col-sm-6 col-md-3">
                                    <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                                        <div className="card shadow-sm border-0">
                                            <img
                                                src={item.imagen || "../public/gameboy.jpg"}
                                                className="card-img-top rounded-top"
                                                alt={`Oferta ${item.id}`}
                                            />
                                            <div className="card-body text-center">
                                                <h5 className="card-title fw-bold text-dark">{item.nombre || 'Producto'}</h5>
                                                <h3 className="fw-bold">{item.precio}€</h3>
                                                <p className="card-text text-muted">{item.descripcion || 'Descripción del producto'}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Grow>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}