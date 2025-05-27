import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Chat() {
        const [valoracionVendedor, setvaloracionVendedor] = React.useState(4);
    return (
        <>
            <main className="container my-5" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column' }}>
                <section className="campoMensajes bg-white p-4 flex-grow-1 d-flex flex-column overflow-hidden">
                    {/* Información del vendedor */}
                    <section className="vendedorInfo row align-items-center justify-content-between mb-3 p-3 bg-light rounded shadow-sm">
                        <Link to="/PerfilVendedor" className="vendedor-link d-flex align-items-center">
                            <div className="vendedor d-flex align-items-center">
                                <img
                                    src="../public/icons/cuenta.png"
                                    alt="Foto de perfil del vendedor"
                                    style={{ width: '50px', borderRadius: '50%', marginRight: '15px' }}
                                />
                                <h3 className="mb-0">Nombre Vendedor</h3>
                            </div>
                        </Link>
                        <Rating name="read-only" value={valoracionVendedor} readOnly />
                    </section>

                    {/* Caja de mensajes */}
                    <div className="message-box flex-grow-1 mb-3 overflow-y-auto" style={{ paddingBottom: '60px' }}>
                        {/* Mensaje enviado (alineado a la derecha) */}
                        <div className="message-sent mb-3 d-flex justify-content-end">
                            <p className="message-text bg-light text-dark p-3 rounded-pill" style={{ maxWidth: '75%', wordWrap: 'break-word', marginLeft: '10px' }}>
                                ¡Hola! Estoy interesado en este artículo, ¿me podrías dar más detalles?
                            </p>
                        </div>

                        {/* Mensaje recibido (alineado a la izquierda) */}
                        <div className="message-received mb-3 d-flex">
                            <p className="message-text bg-primary text-white p-3 rounded-pill" style={{ maxWidth: '75%', wordWrap: 'break-word', marginRight: '10px' }}>
                                ¡Hola! ¿En qué puedo ayudarte con el producto?
                            </p>
                        </div>
                    </div>

                    {/* Caja de entrada para nuevos mensajes */}
                    <div className="message-input d-flex justify-content-between p-3 bg-light">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe un mensaje..."
                            style={{ width: '85%', padding: '10px', borderRadius: '30px', border: '1px solid #ddd' }}
                            aria-label="Escribe tu mensaje"
                        />
                        <button
                            className="btn btn-primary"
                            style={{
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                        >
                            Enviar
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
}
