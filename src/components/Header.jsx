import Nav from './Nav'
import { Box, Container, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box component="header" className="header">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" className="headerTitle">
          Red de Tutorías Solidarias
        </Typography>
        <Typography variant="subtitle1" className="headerSubtitle">
          Explora los proyectos educativos y tutorías disponibles.
        </Typography>
        <Nav />
      </Container>
    </Box>
  )
}

export default Header