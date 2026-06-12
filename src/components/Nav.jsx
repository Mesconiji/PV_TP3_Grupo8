import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useAuth } from '../hook/useAuth';

const Nav = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const manejarLogout = () => {
    logout();
    navigate('/dashboard');
  };

  return (
    <Box component="nav" className="navBar">

      <NavLink to="/dashboard" end className="navLink">
        {({ isActive }) => (
          <Button className="navButton" variant={isActive ? 'outlined' : 'text'}>
            Inicio
          </Button>
        )}
      </NavLink>

      <NavLink to="/proyectos" className="navLink">
        {({ isActive }) => (
          <Button className="navButton" variant={isActive ? 'outlined' : 'text'}>
            Explorar Tutorías
          </Button>
        )}
      </NavLink>

      <NavLink to="/perfil" className="navLink">
        {({ isActive }) => (
          <Button className="navButton" variant={isActive ? 'outlined' : 'text'}>
            Mi Perfil
          </Button>
        )}
      </NavLink>

      {auth.estaLogeado && (
        <Button
          variant="contained"
          className="navButton navButtonLogout"
          onClick={manejarLogout}
        >
          Cerrar Sesión
        </Button>
      )}

    </Box>
  );
};

export default Nav;