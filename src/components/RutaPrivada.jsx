import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RutaPrivada = () => {
  const { auth } = useAuth();

  return auth.estaLogeado ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RutaPrivada;