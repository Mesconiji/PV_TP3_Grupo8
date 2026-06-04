import { Box, Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2c3e50',
        color: 'white',
        py: { xs: 1.5, sm: 2 },
        mt: 3,
        borderRadius: 0
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ opacity: 0.95, fontSize: { xs: '0.75rem', sm: '0.9rem' } }}>
          Analista Programador Universitario - Programación Visual - Grupo 8
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer