import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

export default function AdministrarUsuarios() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const [nombreEditado, setNombreEditado] = useState("");
  const [loginEditado, setLoginEditado] = useState("");
  const [contraseñaEditada, setContraseñaEditada] = useState("");
  const [rolEditado, setRolEditado] = useState("user");
  const [avatarEditado, setAvatarEditado] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  async function cargarUsuarios() {
    const { data, error } = await supabase
      .from("usuarios")
      .select(
        `id, nombre, avatar, role, auth_id,
         user_auth:auth_id(login, contraseña)`
      );

    if (error) {
      console.error("Error cargando usuarios:", error);
      return;
    }

    const usuariosConAuth = data.map((u) => ({
      id: u.id,
      nombre: u.nombre,
      avatar: u.avatar,
      role: u.role,
      auth_id: u.auth_id,
      login: u.user_auth?.login || "",
      contraseña: u.user_auth?.contraseña || "",
    }));

    setUsuarios(usuariosConAuth);
  }

  const abrirModal = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setNombreEditado(usuario.nombre);
    setLoginEditado(usuario.login);
    setContraseñaEditada(usuario.contraseña);
    setRolEditado(usuario.role || "user");
    setAvatarEditado(usuario.avatar);
    setPreviewAvatar(usuario.avatar);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setUsuarioSeleccionado(null);
    setPreviewAvatar(null);
    setAvatarEditado(null);
  };

  const manejarCambioAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
        setAvatarEditado(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const guardarCambios = async () => {
    try {
      const { error: errorUsuario } = await supabase
        .from("usuarios")
        .update({
          nombre: nombreEditado,
          role: rolEditado,
          avatar: avatarEditado,
        })
        .eq("id", usuarioSeleccionado.id);

      const { error: errorAuth } = await supabase
        .from("user_auth")
        .update({
          login: loginEditado,
          contraseña: contraseñaEditada,
        })
        .eq("id", usuarioSeleccionado.auth_id);

      if (errorUsuario || errorAuth) throw errorUsuario || errorAuth;

      await cargarUsuarios();
      cerrarModal();
    } catch (error) {
      console.error("Error guardando cambios:", error);
    }
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm("Seguro que quieres eliminar este usuario?")) return;

    try {
      const usuario = usuarios.find((u) => u.id === id);
      if (!usuario) return;

      const { error: errorAuth } = await supabase
        .from("user_auth")
        .delete()
        .eq("id", usuario.auth_id);
      if (errorAuth) throw errorAuth;

      const { error: errorUsuario } = await supabase
        .from("usuarios")
        .delete()
        .eq("id", id);
      if (errorUsuario) throw errorUsuario;

      setUsuarios((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Error eliminando usuario:", error);
    }
  };

  return (
    <main className="container my-5">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Retroceder
      </button>

      <h2 className="mb-4">Administrar Usuarios</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Avatar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.role}</td>
              <td>
                {usuario.avatar ? (
                  <img
                    src={usuario.avatar}
                    alt="Avatar"
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                ) : (
                  "—"
                )}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => abrirModal(usuario)}
                >
                  Modificar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => eliminarUsuario(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {usuarios.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center">
                No hay usuarios
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
              <h5>Modificar Usuario ID {usuarioSeleccionado.id}</h5>

              <label className="form-label mt-2">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={nombreEditado}
                onChange={(e) => setNombreEditado(e.target.value)}
              />

              <label className="form-label mt-2">Login</label>
              <input
                type="text"
                className="form-control"
                value={loginEditado}
                onChange={(e) => setLoginEditado(e.target.value)}
              />

              <label className="form-label mt-2">Contraseña</label>
              <input
                type="password"
                className="form-control"
                value={contraseñaEditada}
                onChange={(e) => setContraseñaEditada(e.target.value)}
              />

              <label className="form-label mt-2">Rol</label>
              <select
                className="form-select"
                value={rolEditado}
                onChange={(e) => setRolEditado(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

              <label className="form-label mt-2">Avatar</label>
              <div className="mb-2">
                {previewAvatar ? (
                  <img
                    src={previewAvatar}
                    alt="Preview"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{ width: 100, height: 100, backgroundColor: "#ccc" }}
                  ></div>
                )}
              </div>
              <input type="file" accept="image/*" onChange={manejarCambioAvatar} />

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
