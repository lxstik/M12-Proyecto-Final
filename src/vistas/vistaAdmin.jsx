import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const obtenerUsuarioActual = async () => {
  return {
    nombre: "Administrador",
    role: "admin", // o "user"
  };
};

export default function VistaAdmin() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Obteniendo usuario actual...");
    obtenerUsuarioActual().then((data) => {
      console.log("Usuario actual:", data);
      if (!data || data.role !== "admin") {
        navigate("/"); // Redirige a home si no es admin
      } else {
        setUsuario(data);
      }
    });
  }, [navigate]);

  if (!usuario) return <p className="text-center mt-5">Cargando panel de administración...</p>;

  return (
    <main className="container my-5">
      <h1 className="text-center fw-bold mb-4">Panel de Administración</h1>

      <div className="card shadow p-4 bg-light rounded-4 text-center">
        <p className="fw-semibold">Selecciona la opción</p>

        <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
          <button
            className="btn btn-primary px-4 py-2 rounded-3"
            onClick={() => navigate("/administrarUsuarios")}
          >
            Gestionar Usuarios
          </button>
          <button
            className="btn btn-secondary px-4 py-2 rounded-3"
            onClick={() => navigate("/administrarProductos")}
          >
            Gestionar Productos
          </button>
          <button
            className="btn btn-info px-4 py-2 rounded-3"
            onClick={() => navigate("/administrarComentarios")}
          >
            Gestionar Comentarios
          </button>
        </div>
      </div>
    </main>
  );
}
