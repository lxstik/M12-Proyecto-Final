import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Grow from '@mui/material/Grow';

export default function Resultados() {
    const [checked, setChecked] = useState(false); // Estado para controlar la animación
    const sectionRef = useRef(null); // Referencia a la sección de resultados

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
        <>
            <main className="container">
                <h1 className="text-center">Resultados de la Búsqueda</h1>
                <section ref={sectionRef} className="enVenta mt-5">
                    <h1 className="text-center" style={{ marginBottom: '50px' }}>Productos Encontrados</h1>
                    <div className="row gy-5">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                            <Grow
                                key={item}
                                in={checked}
                                timeout={1000 + index * 500} // Incrementa el retraso para cada elemento
                            >
                                <div className="col-12 col-sm-6 col-md-3">
                                    <Link to="/Producto" className="text-decoration-none">
                                        <div className="card">
                                            <img
                                                src="../public/gameboy.jpg"
                                                className="card-img-top"
                                                alt={`Producto Destacado ${item}`}
                                            />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Producto {item}</h5>
                                                <h3>99.99€</h3>
                                                <p className="card-text">Descripción del producto</p>
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