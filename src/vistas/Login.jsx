import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

export default function Login() {
  const [login, setLogin] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  console.log('Componente Login renderizado');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handleLogin ejecutado', login, contraseña);

    // 1. Buscar usuario en user_auth
    const { data: usuarioAuth, error } = await supabase
      .from('user_auth')
      .select('id, login')
      .eq('login', login)
      .eq('contraseña', contraseña)
      .maybeSingle();

    console.log('Resultado user_auth:', usuarioAuth, error);

    if (!usuarioAuth) {
      setMensaje('Usuario o contraseña incorrectos');
      return;
    }

    // 2. Buscar usuario en la tabla usuarios usando auth_id
    const { data: usuarioPerfil, error: errorPerfil } = await supabase
      .from('usuarios')
      .select('*')
      .eq('auth_id', usuarioAuth.id)
      .maybeSingle();

    console.log('Resultado usuarios:', usuarioPerfil, errorPerfil);

    if (!usuarioPerfil) {
      setMensaje('No se encontró el perfil del usuario.');
      return;
    }

    // 3. Guardar el usuario de la tabla usuarios en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuarioPerfil));
    navigate('/Home');
  };

  return (
    <form onSubmit={handleLogin} className="container my-5" style={{maxWidth: 400}}>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        name="username"
        className="form-control my-2"
        placeholder="Usuario"
        value={login}
        onChange={e => setLogin(e.target.value)}
        required
        autoComplete="username"
      />
      <input
        type="password"
        name="current-password"
        className="form-control my-2"
        placeholder="Contraseña"
        value={contraseña}
        onChange={e => setContraseña(e.target.value)}
        required
        autoComplete="current-password"
      />
      <button className="btn btn-success w-100" type="submit">Entrar</button>
      <button
        type="button"
        className="btn btn-link w-100 mt-2"
        onClick={() => navigate('/Registro')}
      >
        ¿No tienes cuenta? Regístrate aquí
      </button>
      {mensaje && <div className="alert alert-info mt-2">{mensaje}</div>}
    </form>
  );
}