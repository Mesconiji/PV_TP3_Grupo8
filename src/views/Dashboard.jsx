import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LoginCard from '../components/LoginCard.jsx'
import { useAuth } from '../hook/useAuth.jsx'

const Dashboard = () => {
  const { auth } = useAuth()

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

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1.2fr' }, gap: 3, alignItems: 'start' }}>
        <Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 420 }}>
              <Card elevation={3} className="metricCard">
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
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
            </Box>

            <Box sx={{ width: '100%', maxWidth: 420 }}>
              <Card elevation={3} className="metricCard">
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
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
            </Box>
          </Box>

          {auth?.estaLogeado && (
            <Box sx={{ mt: 4 }}>
              <Card elevation={3} className="metricCard">
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Hola, {auth.usuario?.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ya puedes acceder a tus proyectos y tu perfil desde el menú.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}
        </Box>

        {!auth?.estaLogeado && <LoginCard />}
      </Box>
    </Container>
  )
}

export default Dashboard
