import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

export default function Registro() {
  const [login, setLogin] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (contraseña !== confirmar) {
      setMensaje('Las contraseñas no coinciden');
      return;
    }

    // 1. Verifica si el usuario ya existe en user_auth
    const { data: existente } = await supabase
      .from('user_auth')
      .select('id')
      .eq('login', login)
      .maybeSingle();

    if (existente) {
      setMensaje('El usuario ya existe');
      return;
    }

    // 2. Crea el usuario en user_auth
    const { error } = await supabase
      .from('user_auth')
      .insert([{ login, contraseña }]);

    if (error) {
      setMensaje('Error al registrar usuario');
    } else {
      setMensaje('¡Registro exitoso! Ahora puedes iniciar sesión.');
      setLogin('');
      setContraseña('');
      setConfirmar('');
    }
  };

  return (
    <form onSubmit={handleRegister} className="container my-5" style={{maxWidth: 400}}>
      <h2>Registro</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Usuario"
        value={login}
        onChange={e => setLogin(e.target.value)}
        required
        autoComplete="username"
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Contraseña"
        value={contraseña}
        onChange={e => setContraseña(e.target.value)}
        required
        autoComplete="new-password"
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Confirmar contraseña"
        value={confirmar}
        onChange={e => setConfirmar(e.target.value)}
        required
        autoComplete="new-password"
      />
      <button className="btn btn-primary w-100" type="submit">Registrarse</button>
      <button
        type="button"
        className="btn btn-link w-100 mt-2"
        onClick={() => navigate('/Login')}
      >
        ¿Ya tienes cuenta? Inicia sesión aquí
      </button>
      {mensaje && <div className="alert alert-info mt-2">{mensaje}</div>}
    </form>
  );
}