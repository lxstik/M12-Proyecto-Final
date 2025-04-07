export default function TrabajaConNosotros() {
    return (
        <main className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card p-5 shadow-lg rounded-4 bg-light">
                            <h2 className="text-center mb-4 fw-bold">Trabaja con Nosotros</h2>
                            <p className="text-center text-muted mb-4">
                                Estamos en busca de personas apasionadas, creativas y con ganas de crecer.
                                Completa el formulario y nuestro equipo se pondrá en contacto contigo.
                            </p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="puesto" className="form-label">Puesto deseado</label>
                                    <select className="form-select" id="puesto" required>
                                        <option value="">Selecciona una opción</option>
                                        <option value="desarrollador">Desarrollador Web</option>
                                        <option value="ventas">Administrador de Ventas</option>
                                        <option value="repartidor">Repartidor</option>
                                        <option value="moderador">Moderador</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="contacto" className="form-label">Tu contacto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contacto"
                                        placeholder="Correo electrónico o teléfono"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="informacion" className="form-label">Información adicional</label>
                                    <textarea
                                        className="form-control"
                                        id="informacion"
                                        rows="4"
                                        placeholder="Cuéntanos por qué eres ideal para el puesto"
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="cv" className="form-label">Adjunta tu CV (PDF o DOC)</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="cv"
                                        accept=".pdf,.doc,.docx"
                                        required
                                    />
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary px-4 py-2 rounded-3">
                                        Enviar Solicitud
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
