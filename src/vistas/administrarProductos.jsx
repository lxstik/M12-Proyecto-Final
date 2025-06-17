import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

export default function AdministrarProductos() {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const [nombreEditado, setNombreEditado] = useState("");
  const [descripcionEditada, setDescripcionEditada] = useState("");
  const [precioEditado, setPrecioEditado] = useState("");
  const [imagenEditada, setImagenEditada] = useState(null);
  const [previewImagen, setPreviewImagen] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    const { data, error } = await supabase
      .from("productos")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error cargando productos:", error);
      return;
    }
    setProductos(data);
  }

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setNombreEditado(producto.nombre);
    setDescripcionEditada(producto.descripcion || "");
    setPrecioEditado(producto.precio);
    setImagenEditada(producto.imagen_url || null);
    setPreviewImagen(producto.imagen_url || null);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setProductoSeleccionado(null);
    setImagenEditada(null);
    setPreviewImagen(null);
  };

  const manejarCambioImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImagen(reader.result); 
        setImagenEditada(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const guardarCambios = async () => {
    try {
      const { error } = await supabase
        .from("productos")
        .update({
          nombre: nombreEditado,
          descripcion: descripcionEditada,
          precio: parseFloat(precioEditado),
          imagen_url: imagenEditada,
        })
        .eq("id", productoSeleccionado.id);

      if (error) {
        console.error("Error actualizando producto:", error);
        alert("Error actualizando producto");
        return;
      }

      await cargarProductos();
      cerrarModal();
    } catch (error) {
      console.error("Error guardando cambios:", error);
    }
  };

  const eliminarProducto = async (id) => {
    if (!window.confirm("Seguro que quieres eliminar este producto?")) return;

    const { error } = await supabase.from("productos").delete().eq("id", id);

    if (error) {
      console.error("Error eliminando producto:", error);
      alert("Error eliminando producto");
      return;
    }

    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <main className="container my-5">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Retroceder
      </button>

      <h2 className="mb-4">Administrar Productos</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio (€)</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio.toFixed(2)}</td>
              <td>
                {producto.imagen_url ? (
                  <img
                    src={producto.imagen_url}
                    alt="Foto"
                    style={{ width: 40, height: 40, objectFit: "cover" }}
                  />
                ) : (
                  "—"
                )}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => abrirModal(producto)}
                >
                  Modificar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {productos.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center">
                No hay productos
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {mostrarModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content p-3">
              <h5>Modificar Producto ID {productoSeleccionado.id}</h5>

              <label className="form-label mt-2">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={nombreEditado}
                onChange={(e) => setNombreEditado(e.target.value)}
              />

              <label className="form-label mt-2">Descripción</label>
              <textarea
                className="form-control"
                rows={3}
                value={descripcionEditada}
                onChange={(e) => setDescripcionEditada(e.target.value)}
              />

              <label className="form-label mt-2">Precio (€)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                className="form-control"
                value={precioEditado}
                onChange={(e) => setPrecioEditado(e.target.value)}
              />

              <label className="form-label mt-2">Foto</label>
              <div className="mb-2">
                {previewImagen ? (
                  <img
                    src={previewImagen}
                    alt="Preview"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{ width: 100, height: 100, backgroundColor: "#ccc" }}
                  />
                )}
              </div>
              <input type="file" accept="image/*" onChange={manejarCambioImagen} />

              <div className="mt-4 d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={cerrarModal}>
                  Cancelar
                </button>
                <button className="btn btn-success" onClick={guardarCambios}>
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
