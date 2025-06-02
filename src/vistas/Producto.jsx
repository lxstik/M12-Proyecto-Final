import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import supabase from '../supabaseClient';

export default function Producto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [similares, setSimilares] = useState([]);
  const [valorProducto, setValorProducto] = useState(3);
  const [user, setUser] = useState(null);
  const [vendedor, setVendedor] = useState(null);

  useEffect(() => {
    const usuarioLocal = JSON.parse(localStorage.getItem('usuario'));
    setUser(usuarioLocal || null);
  }, []);

  useEffect(() => {
    async function fetchProducto() {
      if (!id) return;
      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('id', id)
        .single();

      if (!error && data) {
        setProducto(data);

        const { data: vendedorData, error: vendedorError } = await supabase
          .from('usuarios')
          .select('nombre, avatar, id')
          .eq('id', data.vendedor_id)
          .single();

        setVendedor(vendedorError ? null : vendedorData);
      } else {
        console.error("Error cargando producto:", error);
      }
    }
    fetchProducto();
  }, [id]);

  useEffect(() => {
    async function fetchSimilares() {
      if (!producto?.tags || producto.tags.length === 0) return;

      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .neq('id', id)
        .eq('vendido', false)
        .overlaps('tags', producto.tags)
        .limit(4);

      if (!error) {
        setSimilares(data);
      } else {
        console.error("Error obteniendo productos similares:", error);
      }
    }
    fetchSimilares();
  }, [producto, id]);

  if (!producto || user === null) {
    return (
      <main className="container mt-5 d-flex justify-content-center">
        <p>Cargando producto...</p>
      </main>
    );
  }

  const handleVendedorClick = () => {
    if (user && user.id === producto.vendedor_id) {
      navigate('/PerfilUsuario');
    } else {
      navigate(`/PerfilVendedor/${producto.vendedor_id}`);
    }
  };

  return (
    <>
      <main>
        <div className="container mt-5 d-flex justify-content-center">
          <div className="card shadow-lg" style={{ width: '800px', borderRadius: '15px', overflow: 'hidden' }}>
            <img
              src={producto.imagen_url || "../public/gameboy.jpg"}
              className="card-img-top"
              alt={producto.nombre || "Producto"}
            />
            <div className="card-body text-center">
              <h3 className="card-title font-weight-bold">{producto.nombre}</h3>
              <p className="card-text text-muted">{producto.descripcion}</p>

              <p className="card-text font-weight-bold text-primary" style={{ cursor: 'pointer' }} onClick={handleVendedorClick}>
                Vendedor: {user && user.id === producto.vendedor_id ? "Tú" : (vendedor?.nombre || `Usuario ${producto.vendedor_id}`)}
              </p>

              <Rating name="read-only" value={valorProducto} readOnly />

              <div className="mt-3">
                <p className="card-text"><strong>Precio:</strong> {producto.precio ? `${producto.precio}€` : "No disponible"}</p>
                <p className="card-text"><strong>Condición:</strong> {producto.estado_condiciones || "Desconocida"}</p>
                <p className="card-text">
                  <strong>Destacado:</strong>{" "}
                  {producto.destacado ? (
                    <span className="badge bg-warning text-dark">Sí</span>
                  ) : (
                    <span className="badge bg-light text-dark">No</span>
                  )}
                </p>
                {producto.vendido && (
                  <p className="card-text text-danger"><strong>Este producto ya ha sido vendido.</strong></p>
                )}
              </div>

              <div className="mt-3">
                {producto.tags?.map((tag, i) => (
                  <span key={i} className="badge bg-secondary me-1">{tag}</span>
                ))}
              </div>

              {/* Mostrar botón Comprar solo si el producto no está vendido, el usuario está cargado y no es el vendedor */}
              {user && !producto.vendido && user.id !== producto.vendedor_id && (
                <div className="mt-4">
                  <button
                    className="btn btn-primary w-100 py-3"
                    onClick={async () => {
                      const { error: updateError } = await supabase
                        .from('productos')
                        .update({ vendido: true, comprado_por: user.id })
                        .eq('id', producto.id);

                      if (updateError) {
                        console.error("Error actualizando producto:", updateError);
                        alert("Error al completar la compra.");
                        return;
                      }

                      const { error: insertError } = await supabase
                        .from('ventas')
                        .insert([{ producto_id: producto.id, comprador_id: user.id }]);

                      if (insertError) {
                        console.error("Error registrando la venta:", insertError);
                        alert("Error al registrar la compra.");
                        return;
                      }

                      navigate('/Comentario', {
                        state: { producto, vendedor }
                      });
                    }}
                  >
                    Comprar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mostrar sección Similares sólo si el producto NO está vendido */}
        {!producto.vendido && (
          <section className="destacados container my-4">
            <h1 className="mb-3 text-center text-uppercase fw-bold text-primary">Similares</h1>
            <div className="row g-4">
              {similares.length > 0 ? (
                similares.map((item) => (
                  <div key={item.id} className="col-12 col-sm-6 col-md-3">
                    <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                      <div className="card shadow-sm border-0">
                        <img
                          src={item.imagen_url || "../public/gameboy.jpg"}
                          className="card-img-top rounded-top"
                          alt={item.nombre}
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title fw-bold text-dark">{item.nombre}</h5>
                          <h3 className="text-primary fw-bold">{item.precio}€</h3>
                          <p className="card-text text-muted">{item.descripcion}</p>
                          {item.destacado && <span className="badge bg-warning text-dark">Destacado</span>}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center">No se encontraron productos similares.</p>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
