import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const hiddenRoutes = ['/Login', '/Registro'];

    if (hiddenRoutes.includes(location.pathname)) return null;

    let usuario = null;
    try {
        usuario = JSON.parse(localStorage.getItem('usuario'));
    } catch (e) {
        usuario = null;
    }

    // Mostrar el login si no hay perfil con nombre
    const nombre = usuario?.perfil?.nombre || usuario?.auth?.login || 'Usuario';
    const avatar = usuario?.perfil?.avatar && usuario.perfil.avatar.trim() !== ''
        ? usuario.perfil.avatar
        : './public/icons/cuenta.png';

    return (
        <header className="py-4" style={{ backgroundColor: '#B0B0B0', color: '#1a1a1a', marginBottom: '170px' }}>
            <div className="container">
                <div className="row align-items-center justify-content-between py-2">
                    {/* Logo */}
                    <div className="col-3 text-center">
                        <Link to="/Home" className="text-decoration-none">
                            <img src="./public/logo.png" alt="Logo" style={{ width: '70px', borderRadius: '10px' }} />
                        </Link>
                    </div>
                    {/* Barra de búsqueda */}
                    <div className="col-6 position-relative">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Buscar..."
                            style={{
                                width: '100%',
                                height: '50px',
                                borderRadius: '30px',
                                paddingLeft: '40px',
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                fontSize: '16px',
                                paddingRight: '15px',
                            }} 
                        />
                        <i className="fas fa-search" style={{
                            position: 'absolute',
                            left: '12px', 
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#aaa',  
                        }}></i>
                    </div>
                    {/* Usuario */}
                    <div className="col-3 text-center d-flex align-items-center justify-content-center">
                        <Link to="/PerfilUsuario" className="text-decoration-none d-flex align-items-center">
                            <img 
                                src={avatar}
                                alt="Cuenta" 
                                style={{ width: '70px', marginRight: '10px', borderRadius: '50%' }} 
                            />
                            <p style={{ fontSize: '18px', marginBottom: '0', fontWeight: '600' }}>{nombre}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}