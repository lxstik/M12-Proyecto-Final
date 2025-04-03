export default function TrabajaConNosotros() {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4 shadow">
                                <h3 className="text-center mb-4">Trabaja con Nosotros</h3>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="puesto">Selecciona el puesto</label>
                                        <select className="form-control" id="puesto" required>
                                            <option value="">Seleccione una opción</option>
                                            <option value="desarrollador">Desarrollador Web</option>
                                            <option value="ventas">Administrador de Ventas</option>
                                            <option value="repartidor">Repartidor</option>
                                            <option value="moderador">Moderador</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contacto">Deja tu contacto</label>
                                        <input type="text" className="form-control" id="contacto" placeholder="Correo o número de teléfono" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="informacion">Información Adicional</label>
                                        <textarea className="form-control" id="informacion" rows="4" placeholder="Cuéntanos más sobre ti" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cv">Selecciona tu CV</label>
                                        <input type="file" className="form-control-file" id="cv" accept=".pdf,.doc,.docx" required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}