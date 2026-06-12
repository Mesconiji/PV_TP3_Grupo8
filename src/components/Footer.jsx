import { Box, Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" className="footerText">
          Analista Programador Universitario - Programación Visual - Grupo 8
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer