import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useAuth } from '../hook/useAuth';

const estilosNav = {
  display: 'flex',
  gap: 2,
  justifyContent: 'center',
  marginTop: 1
};

const estilosLink = {
  textDecoration: 'none',
  outline: 'none'
};

const estilosBoton = {
  color: 'white',
  borderColor: 'transparent',
  boxShadow: 'none',
  '&.MuiButton-outlined': {
    borderColor: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.08)'
    }
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.06)'
  }
};

const estilosBotonLogout = {
  color: 'white',
  backgroundColor: '#c0392b',
  marginLeft: 2,
  '&:hover': {
    backgroundColor: '#a93226'
  }
};

const Nav = () => {

  const { auth, logout } = useAuth();

  const navigate = useNavigate();

  const manejarLogout = () => {
    logout();
    navigate('/dashboard');
  };

  return (
    <Box component="nav" sx={estilosNav}>

      {/* Inicio siempre visible */}
      <NavLink to="/dashboard" end style={estilosLink}>
        {({ isActive }) => (
          <Button sx={estilosBoton} variant={isActive ? 'outlined' : 'text'}>
            Inicio
          </Button>
        )}
      </NavLink>

      <NavLink to="/proyectos" style={estilosLink}>
        {({ isActive }) => (
          <Button sx={estilosBoton} variant={isActive ? 'outlined' : 'text'}>
            Explorar Tutorías
          </Button>
        )}
      </NavLink>

      <NavLink to="/perfil" style={estilosLink}>
        {({ isActive }) => (
          <Button sx={estilosBoton} variant={isActive ? 'outlined' : 'text'}>
            Mi Perfil
          </Button>
        )}
      </NavLink>

      {auth.estaLogeado && (
        <Button
          variant="contained"
          sx={estilosBotonLogout}
          onClick={manejarLogout}
        >
          Cerrar Sesión
        </Button>
      )}

    </Box>
  );
};

export default Nav;