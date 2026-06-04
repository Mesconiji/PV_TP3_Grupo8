import Nav from './Nav'
import { Box, Container, Typography } from '@mui/material'
const Header = () => {
  return (
    <Box component="header" sx={{ backgroundColor: '#2c3e50', color: 'white', py: 3, borderRadius: 0, mb: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" align="center" sx={{ fontWeight: 700 }}>
          Red de Tutorías Solidarias
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ opacity: 0.95, mb: 1 }}>
          Explora los proyectos educativos y tutorías disponibles.
        </Typography>

        <Nav />
      </Container>
    </Box>
  )
}

export default Header