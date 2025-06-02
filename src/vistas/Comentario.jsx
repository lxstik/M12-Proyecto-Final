import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import supabase from "../supabaseClient";

export default function Comentario() {
  const location = useLocation();
  const navigate = useNavigate();
  const { producto, vendedor } = location.state || {};

  const [user, setUser] = useState(null);
  const [valoracion, setValoracion] = useState(3);
  const [comentario, setComentario] = useState("");
  const [titulo, setTitulo] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioLocal) {
      setUser(usuarioLocal);
    } else {
      navigate("/Login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !producto) return;

    const { error } = await supabase
      .from("comentarios_productos")
      .insert([
        {
          usuarios_id: user.id,
          producto_id: producto.id,
          titulo: titulo.trim(),
          valoracion,
          comentario: comentario.trim(),
        },
      ]);

    if (error) {
      console.error("Error al enviar comentario:", error);
      alert("No se pudo guardar tu comentario.");
    } else {
      setEnviado(true);
    }
  };

  if (!producto) {
    return (
      <main className="container mt-5">
        <h3>Error: No se encontró el producto.</h3>
      </main>
    );
  }

  if (enviado) {
    return (
      <main className="container mt-5 text-center">
        <h2 className="text-success">¡Gracias por tu comentario!</h2>
        <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </main>
    );
  }

  return (
    <main className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4">Valora tu experiencia</h2>

        <div className="mb-3 text-center">
          <p><strong>Producto:</strong> {producto.nombre}</p>
          <p><strong>Vendedor:</strong> {vendedor?.nombre || "Usuario"}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label"><strong>Título del comentario:</strong></label>
            <input
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Breve resumen"
              required
            />
          </div>

          <div className="mb-3 text-center">
            <label className="form-label d-block mb-2"><strong>Valoración:</strong></label>
            <Rating
              name="valoracion"
              value={valoracion}
              onChange={(e, newValue) => setValoracion(newValue)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label"><strong>Comentario:</strong></label>
            <textarea
              className="form-control"
              rows="4"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Escribe tu opinión..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100 py-2">
            Enviar Comentario
          </button>
        </form>
      </div>
    </main>
  );
}
