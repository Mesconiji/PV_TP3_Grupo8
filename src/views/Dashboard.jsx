import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Dashboard = () => {
  return (
    <Container maxWidth="lg" className="dashboardContainer">
      <Box className="dashboardIntro">
        <Typography variant="h4" component="h1" gutterBottom>
          Bienvenido a tu Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Aquí puedes revisar el estado general de tus tutorías y proyectos asignados.
          Usa las tarjetas para ver las métricas más importantes de un vistazo.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} className="metricCard">
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Total de proyectos
              </Typography>
              <Typography variant="h3" component="p">
                12
              </Typography>
              <Typography variant="body2" color="text.secondary" className="metricText">
                Proyectos publicados en el sistema.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3} className="metricCard">
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Proyectos en curso
              </Typography>
              <Typography variant="h3" component="p">
                5
              </Typography>
              <Typography variant="body2" color="text.secondary" className="metricText">
                Proyectos con tutorías activas actualmente.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
