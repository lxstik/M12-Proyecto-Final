import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import Rating from '@mui/material/Rating';

export default function PerfilVendedor() {
    const [checked, setChecked] = useState(false); // Estado para controlar la animación
    const sectionRef = useRef(null); // Referencia a la sección de productos en venta
    const [valoracionComentario, setvaloracionComentario] = useState(4); // Valoración predeterminada

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setChecked(true); // Activa la animación cuando la sección es visible
                }
            },
            { threshold: 0.1 } // El 10% del elemento debe estar visible para activar
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <main className="container my-5">
            {/* Información del vendedor */}
            <section className="row g-4 align-items-center mb-5">
                <div className="col-md-4 text-center">
                    <img
                        src="../public/icons/cuenta.png"
                        alt="Foto de perfil"
                        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                </div>

                <div className="col-md-5">
                    <div className="mb-3">
                        <h4 className="mb-1">Nombre Vendedor</h4>
                    </div>
                    <div className="mb-3">
                        <h4 className="mb-1">Ubicación</h4>
                    </div>
                    <div>
                        <h4 className="mb-1">Descripción</h4>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <h5>Valoración</h5>
                    <Rating name="read-only" value={valoracionComentario} readOnly />
                </div>
            </section>

            {/* Productos en venta */}
            <section ref={sectionRef} className="mt-5">
                <h2 className="text-center mb-4">Productos en Venta</h2>
                <div className="row">
                    {[1, 2, 3, 4].map((item, index) => (
                        <Grow
                            key={item}
                            in={checked}
                            timeout={1000 + index * 500} // Incrementa el retraso para cada elemento
                        >
                            <div className="col-12 col-sm-6 col-md-3 mb-4">
                                <Link to="/Producto" className="text-decoration-none">
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src="../public/gameboy.jpg"
                                            className="card-img-top"
                                            alt={`Producto ${item}`}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Producto</h5>
                                            <h4 className="text-primary">99.99€</h4>
                                            <p className="card-text">Descripción del producto</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Grow>
                    ))}
                </div>
            </section>

            {/* Comentarios */}
            <section className="mt-5">
                <h2 className="text-center mb-4">Valoraciones y Comentarios</h2>
                {[1, 2, 3].map((item) => (
                    <div key={item} className="border rounded p-3 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h5 className="mb-1">Título comentario</h5>
                                <p className="mb-0">Comentario</p>
                            </div>
                            <div className="col-md-8 d-flex align-items-center justify-content-end gap-3">
                                <Rating name="read-only" value={valoracionComentario} readOnly />
                                <img
                                    src="../public/icons/cuenta.png"
                                    alt="Perfil"
                                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                />
                                <p className="mb-0">Nombre Usuario</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="text-center mt-4">
                    <Link to="/Comentario">
                        <button className="btn btn-primary px-4 py-2">Dejar Comentario</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}