import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

export default function AdministrarComentarios() {
  const navigate = useNavigate();

  const [comentarios, setComentarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarComentarios();
  }, []);

  async function cargarComentarios() {
    setCargando(true);
    const { data, error } = await supabase
      .from("comentarios_productos")
      .select(`
        id,
        titulo,
        valoracion,
        comentario,
        usuario:usuarios_id (nombre),
        producto:producto_id (nombre)
      `)
      .order("id", { ascending: true });

    if (error) {
      console.error("Error cargando comentarios:", error);
      alert("Error cargando comentarios");
      setCargando(false);
      return;
    }

    setComentarios(data);
    setCargando(false);
  }


  async function eliminarComentario(id) {
    const confirmar = window.confirm("Seguro que quieres eliminar este comentario?");
    if (!confirmar) return; 
    const { error } = await supabase
      .from("comentarios_productos")
      .delete()
      .eq("id", id);
    setComentarios((comentariosAnteriores) =>
      comentariosAnteriores.filter((comentario) => comentario.id !== id)
    );
  }


  return (
    <main className="container my-5">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Retroceder
      </button>

      <h2 className="mb-4">Administrar Comentarios de Productos</h2>

      {cargando ? (
        <p>Cargando comentarios...</p>
      ) : comentarios.length === 0 ? (
        <p>No hay comentarios.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Producto</th>
              <th>Título</th>
              <th>Valoración</th>
              <th>Comentario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {comentarios.map(({ id, usuario, producto, titulo, valoracion, comentario }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{usuario?.nombre || "—"}</td>
                <td>{producto?.nombre || "—"}</td>
                <td>{titulo || "—"}</td>
                <td>{valoracion}</td>
                <td style={{ maxWidth: "300px", whiteSpace: "normal", wordBreak: "break-word" }}>
                  {comentario || "—"}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => eliminarComentario(id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
