import { Navigate } from 'react-router-dom';

export default function RutaPrivada({ children }) {
  const usuario = localStorage.getItem('usuario');
  if (!usuario) return <Navigate to="/Login" replace />;
  return children;
}