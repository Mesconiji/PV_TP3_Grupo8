import { NavLink } from 'react-router-dom'
import { Box, Button } from '@mui/material'

// Rutas centralizadas: evita repetir JSX por cada link
const RUTAS = [
  { path: '/dashboard', label: 'Inicio',            end: true  },
  { path: '/proyectos', label: 'Explorar Tutorías', end: false },
  { path: '/perfil',    label: 'Mi Perfil',         end: false },
]

const Nav = () => (
  <Box component="nav" sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 1 }}>
    {RUTAS.map(({ path, label, end }) => (
      <NavLink key={path} to={path} end={end} style={{ textDecoration: 'none' }}>
        {({ isActive }) => (
          <Button
            variant={isActive ? 'outlined' : 'text'}
            sx={{
              color: 'white',
              borderColor: isActive ? 'rgba(255,255,255,0.7)' : 'transparent',
              fontWeight: isActive ? 700 : 400,
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' }
            }}
          >
            {label}
          </Button>
        )}
      </NavLink>
    ))}
  </Box>
)

export default Nav