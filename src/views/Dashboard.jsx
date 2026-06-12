import { useState } from 'react'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LoginCard from '../components/LoginCard.jsx'
import { useAuth } from '../hook/useAuth.jsx'
import proyectoService from '../services/proyectoService'

const Dashboard = () => {
  const { auth } = useAuth()
  const proyectos = proyectoService.obtenerProyectos()
  const [totalProyectos] = useState(proyectos.length)
  const [proyectosActivos] = useState(
    proyectos.filter(p => p.estado === 'Activo').length
  )

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

      <Box className="dashboardGrid">
        <Box className="dashboardMetrics">
          <Box className="metricCardWrapper">
            <Card elevation={3} className="metricCard">
              <CardContent className="metricCardContent">
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Total de proyectos
                </Typography>
                <Typography variant="h3" component="p">
                  {totalProyectos}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="metricText">
                  Proyectos publicados en el sistema.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box className="metricCardWrapper">
            <Card elevation={3} className="metricCard">
              <CardContent className="metricCardContent">
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Proyectos en curso
                </Typography>
                <Typography variant="h3" component="p">
                  {proyectosActivos}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="metricText">
                  Proyectos con tutorías activas actualmente.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {auth?.estaLogeado && (
            <Box className="dashboardWelcome">
              <Card elevation={3} className="metricCard">
                <CardContent className="metricCardContent">
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
