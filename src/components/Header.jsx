import Nav from './Nav'
import { Box, Container, Typography } from '@mui/material'
const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#2c3e50',
        color: 'white',
        py: { xs: 2, sm: 3, md: 4 },
        borderRadius: 0,
        mb: { xs: 1, md: 2 }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: 700, fontSize: { xs: '1.25rem', sm: '1.6rem', md: '2rem' } }}
        >
          Red de Tutorías Solidarias
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ opacity: 0.95, mb: 1, fontSize: { xs: '0.85rem', sm: '1rem' } }}
        >
          Explora los proyectos educativos y tutorías disponibles.
        </Typography>

        <Nav />
      </Container>
    </Box>
  )
}

export default Header