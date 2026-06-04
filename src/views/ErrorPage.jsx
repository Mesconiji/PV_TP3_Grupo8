import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const estilosContainer = {
  mt: 8,
  mb: 8,
  textAlign: 'center'
}

const estilosBox = {
  py: 4
}

const estilosTitle = {
  fontSize: '6rem',
  fontWeight: 'bold',
  color: 'error.main'
}

const estilosSubtitle = {
  mt: 2
}

const estilosDescription = {
  mb: 4,
  mt: 2
}

const estilosButton = {
  mr: 2
}

const ErrorPage = () => {

  return (
    <Container maxWidth="sm" sx={estilosContainer}>
      <Box sx={estilosBox}>
        <Typography variant="h1" component="h1" sx={estilosTitle}>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={estilosSubtitle}>
          Página no encontrada
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={estilosDescription}>
          La página que buscas no existe. Por favor, regresa al inicio o navega a través del menú.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={estilosButton}
        >
          Ir al inicio
        </Button>
      </Box>
    </Container>
  )
}

export default ErrorPage
