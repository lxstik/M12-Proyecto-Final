export default function Login() {
    return (
        <> 
            <div className="login-container">
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
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="text-center mt-3">
                    <p>Si no tienes una cuenta, <a href="#">Regístrate</a></p>
                </div>
            </div> 
        </>
    );
}