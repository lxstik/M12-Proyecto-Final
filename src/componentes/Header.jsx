import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState('');

    const hiddenRoutes = ['/Login', '/Registro'];

    let usuario = null;
    try {
        usuario = JSON.parse(localStorage.getItem('usuario'));
    } catch (e) {
        usuario = null;
    }

    const nombre = usuario?.nombre || 'Usuario';
    const avatar = usuario?.avatar && usuario.avatar.trim() !== ''
        ? usuario.avatar
        : '/icons/cuenta.png';

    const realizarBusqueda = () => {
        if (busqueda.trim() !== '') {
            navigate(`/Resultados?busqueda=${encodeURIComponent(busqueda.trim())}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            realizarBusqueda();
        }
    };

    if (hiddenRoutes.includes(location.pathname)) return null;

    return (
        <header
            className="py-4"
            style={{ backgroundColor: '#B0B0B0', color: '#1a1a1a', marginBottom: '170px' }}
        >
            <div className="container">
                <div className="row align-items-center justify-content-between py-2">
                    {/* Logo */}
                    <div className="col-3 text-center">
                        <Link to="/Home" className="text-decoration-none">
                            <img src="/logo.png" alt="Logo" style={{ width: '70px', borderRadius: '10px' }} />
                        </Link>
                    </div>

                    {/* Barra de búsqueda */}
                    <div className="col-6 position-relative d-flex align-items-center">
                        <div style={{ position: 'relative', width: '100%' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar productos..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                onKeyDown={handleKeyDown}
                                style={{
                                    width: '100%',
                                    height: '48px',
                                    borderRadius: '30px',
                                    paddingLeft: '50px',
                                    paddingRight: '50px',
                                    border: '2px solid #8c8c8c',
                                    backgroundColor: '#e0e0e0',
                                    fontSize: '16px',
                                    color: '#333',
                                    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    outline: 'none',
                                }}
                                onFocus={e => {
                                    e.target.style.borderColor = '#666666';
                                    e.target.style.backgroundColor = '#f5f5f5';
                                    e.target.style.boxShadow = '0 0 8px rgba(102,102,102,0.4)';
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = '#8c8c8c';
                                    e.target.style.backgroundColor = '#e0e0e0';
                                    e.target.style.boxShadow = 'inset 0 2px 5px rgba(0,0,0,0.1)';
                                }}
                            />
                            <i
                                className="fas fa-search"
                                style={{
                                    position: 'absolute',
                                    left: '18px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#666666',
                                    fontSize: '18px',
                                }}
                            ></i>
                            <button
                                onClick={realizarBusqueda}
                                style={{
                                    position: 'absolute',
                                    right: '6px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    borderRadius: '24px',
                                    border: 'none',
                                    backgroundColor: '#999999',
                                    color: '#fff',
                                    fontWeight: '600',
                                    padding: '8px 22px',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#7a7a7a')}
                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#999999')}
                                aria-label="Buscar"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>

                    {/* Usuario */}
                    <div className="col-3 text-center d-flex align-items-center justify-content-center">
                        <Link to="/PerfilUsuario" className="text-decoration-none d-flex align-items-center">
                            <img
                                src={avatar}
                                alt="Cuenta"
                                style={{ width: '70px', marginRight: '10px', borderRadius: '50%' }}
                            />
                            <p style={{ fontSize: '18px', marginBottom: 0, fontWeight: '600' }}>{nombre}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
