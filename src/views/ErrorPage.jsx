import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Container maxWidth="sm" className="errorContainer">
      <Box className="errorBox">
        <Typography variant="h1" component="h1" className="errorTitle">
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom className="errorSubtitle">
          Página no encontrada
        </Typography>
        <Typography variant="body1" color="text.secondary" className="errorDescription">
          La página que buscas no existe. Por favor, regresa al inicio o navega a través del menú.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary" className="errorButton">
          Ir al inicio
        </Button>
      </Box>
    </Container>
  )
}

export default ErrorPage
