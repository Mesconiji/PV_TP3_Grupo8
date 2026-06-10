import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RutaPrivada = ({ children }) => {
  const { estaLogeado } = useAuth();

  if (!estaLogeado) return <Navigate to="/" replace />;
  
  return children;
};

export default RutaPrivada;