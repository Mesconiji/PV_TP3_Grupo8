import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';


const estilosNav = {
  display: 'flex',
  gap: 1, 
  justifyContent: 'center',
  marginTop: 1
};

const estilosLink = {
  textDecoration: 'none'
};

const estilosBoton = {
  color: '#000',
  borderColor: '#000', 
  '&:hover': {
    borderColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  }
};

const Nav = () => (

  <Box component="nav" sx={estilosNav}>

    <NavLink to="/dashboard" end style={estilosLink}>
      {({ isActive }) => (
        <Button
          sx={estilosBoton}
          variant={isActive ? 'outlined' : 'text'}
        >
          Inicio
        </Button>
      )}
    </NavLink>

    <NavLink to="/proyectos" style={estilosLink}>
      {({ isActive }) => (
        <Button
          sx={estilosBoton}
          variant={isActive ? 'outlined' : 'text'}
        >
          Explorar Tutorías
        </Button>
      )}
    </NavLink>

    <NavLink to="/perfil" style={estilosLink}>
      {({ isActive }) => (
        <Button
          sx={estilosBoton}
          variant={isActive ? 'outlined' : 'text'}
        >
          Mi Perfil
        </Button>
      )}
    </NavLink>

  </Box>
);

export default Nav;