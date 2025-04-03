export default function Registro() {
    const styles = {
        body: {
            backgroundColor: '#f4f4f9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
        },
        registerContainer: {
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
            <div style={styles.registerContainer} className="register-container">
                <h2 className="text-center mb-4">Crear Cuenta</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre Completo</label>
                        <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre completo" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirmar Contraseña</label>
                        <input type="password" className="form-control" id="confirm-password" placeholder="Confirma tu contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                </form>
                <div className="text-center mt-3">
                    <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
                </div>
            </div>
        </div>
    );
}