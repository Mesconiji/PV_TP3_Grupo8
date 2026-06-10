import {useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import { useAuth } from '../hook/useAuth.jsx'

const PerfilUsuario = () => {
  return (
    <Container maxWidth="lg" className="profileContainer">
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Perfil de Usuario
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Información del alumno o docente organizada de manera clara y elegante.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={3} className="profilePaper" sx={{ width: '100%', maxWidth: 420, p: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="Nombre" secondary="María González" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Rol" secondary="Docente de Matemáticas" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Institución" secondary="Escuela Secundaria Nº 8" />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  )
}

export default PerfilUsuario
