import { Link } from "react-router-dom";


export default function Login() {
    const styles = {
        body: {
            backgroundColor: '#f4f4f9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
        },
        loginContainer: {
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
        },
    };
    
    return (
        <div style={styles.body}>
            <div style={styles.loginContainer} className="login-container">
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                </form>
                <div className="text-center mt-3">
                    <Link to="/Registro" className="text-decoration-none">¿No tienes una cuenta? Regístrate</Link>
                </div>
            </div>
        </div>
    );
}
