import { Link } from "react-router-dom";

export default function CrearTicket() {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4 shadow">
                                <h3 className="text-center mb-4">Crear un Ticket</h3>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="titulo">Título</label>
                                        <input type="text" className="form-control" id="titulo" placeholder="Ingrese el título" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descripcion">Descripción</label>
                                        <textarea className="form-control" id="descripcion" rows="4" placeholder="Ingrese la descripción" required></textarea>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/Home">
                                            <button type="submit" className="btn btn-primary">Enviar</button>
                                        </Link>
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