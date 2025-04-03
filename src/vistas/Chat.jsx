import { Link } from 'react-router-dom'; // Importa Link

export default function Chat() {
    return (
        <>
            <main className="container my-5" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column' }}>
                <section className="campoMensajes" style={{ backgroundColor: '#ffffff', padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {/* Información del vendedor */}
                    <section
                        className="vendedorInfo row align-items-center justify-content-between"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '10px',
                            marginBottom: '20px',
                            boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
                        }}
                    >

                        <Link to="/PerfilVendedor" className="text-decoration-none text-dark">
                            <div className="vendedor row align-items-center">
                                <img
                                    src="../public/icons/cuenta.png"
                                    alt="Foto de perfil"
                                    style={{ width: '50px', borderRadius: '50%', marginRight: '10px' }}
                                />
                                <h3>Nombre Vendedor</h3>
                            </div>
                        </Link>
                        <h3>★★★★☆</h3>
                    </section>

                    {/* Caja de mensajes */}
                    <div className="message-box" style={{ overflowY: 'auto', flexGrow: 1, paddingBottom: '60px', marginBottom: '20px' }}>
                        {/* Mensaje enviado */}
                        <div className="message-sent" style={{ marginBottom: '10px', display: 'flex' }}>
                            <p
                                className="message-text"
                                style={{
                                    backgroundColor: '#f1f1f1',
                                    color: '#333',
                                    padding: '10px',
                                    borderRadius: '20px',
                                    maxWidth: '75%',
                                    wordWrap: 'break-word',
                                    marginLeft: '10px',
                                }}
                            >
                                ¡Hola! ¿En qué puedo ayudarte con el producto?
                            </p>
                        </div>

                        {/* Mensaje recibido */}
                        <div className="message-received" style={{ marginBottom: '10px', display: 'flex' }}>
                            <p
                                className="message-text"
                                style={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '20px',
                                    maxWidth: '75%',
                                    wordWrap: 'break-word',
                                    marginRight: '10px',
                                }}
                            >
                                ¡Hola! Estoy interesado en este artículo, ¿me podrías dar más detalles?
                            </p>
                        </div>
                    </div>

                    {/* Caja de entrada para nuevos mensajes */}
                    <div
                        className="message-input"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px',
                            backgroundColor: '#f8f9fa',
                        }}
                    >
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe un mensaje..."
                            style={{
                                width: '85%',
                                padding: '10px',
                                borderRadius: '30px',
                                border: '1px solid #ddd',
                            }}
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
                            }}
                        >
                            Enviar
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
}