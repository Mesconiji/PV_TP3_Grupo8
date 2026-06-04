import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';


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
  },
  '&:focus': {
    outline: '2px solid white',
    boxShadow: 'none'
  },
  '&.Mui-focusVisible': {
    outline: '2px solid white',
    boxShadow: 'none'
  }
};

const Nav = () => (

  <Box component="nav" sx={estilosNav}>

    <NavLink
      to="/dashboard"
      end
      style={estilosLink}
    >
      {({ isActive }) => (
        <Button
          sx={estilosBoton}
          variant={isActive ? 'outlined' : 'text'}
          onMouseDown={(e) => { e.currentTarget.style.outline = '2px solid white' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid white' }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none' }}
        >
          Inicio
        </Button>
      )}
    </NavLink>

    <NavLink
      to="/proyectos"
      style={estilosLink}
    >
      {({ isActive }) => (
        <Button
          sx={estilosBoton}
          variant={isActive ? 'outlined' : 'text'}
          onMouseDown={(e) => { e.currentTarget.style.outline = '2px solid white' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid white' }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none' }}
        >
          Explorar Tutorías
        </Button>
      )}
    </NavLink>

    <NavLink
      to="/perfil"
      style={estilosLink}
    >
      {({ isActive }) => (
        <Button
          sx={estilosBoton}
          variant={isActive ? 'outlined' : 'text'}
          onMouseDown={(e) => { e.currentTarget.style.outline = '2px solid white' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid white' }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none' }}
        >
          Mi Perfil
        </Button>
      )}
    </NavLink>

  </Box>
);

export default Nav;