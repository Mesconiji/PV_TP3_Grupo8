import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'

const PerfilUsuario = () => {
  return (
    <Container maxWidth="sm" className="profileContainer">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="profileIntro">
            <Typography variant="h4" component="h1" gutterBottom>
              Perfil de Usuario
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Información del alumno o docente organizada de manera clara y elegante.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="profilePaper">
            <List>
              <ListItem disablePadding>
                <ListItemText
                  primary="Nombre"
                  secondary="María González"
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary="Rol"
                  secondary="Docente de Matemáticas"
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary="Institución"
                  secondary="Escuela Secundaria Nº 8"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PerfilUsuario
