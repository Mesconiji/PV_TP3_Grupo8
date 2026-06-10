import { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useAuth } from '../hook/useAuth.jsx'

const PerfilUsuario = () => {
  const { auth, actualizarPerfil } = useAuth()
  const usuario = auth?.usuario || {}

  const [enEdicion, setEnEdicion] = useState(false)
  const [nombre, setNombre] = useState(usuario.nombre || '')
  const [rol, setRol] = useState(usuario.rol || '')
  const [institucion, setInstitucion] = useState(usuario.institucion || '')

  const handleGuardar = () => {
    actualizarPerfil({ nombre, rol, institucion })
    setEnEdicion(false)
  }

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
            <ListItem disablePadding sx={{ mb: 1 }}>
              {enEdicion ? (
                <TextField
                  label="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  fullWidth
                  size="small"
                />
              ) : (
                <ListItemText primary="Nombre" secondary={usuario.nombre || 'No definido'} />
              )}
            </ListItem>

            <ListItem disablePadding sx={{ mb: 1 }}>
              {enEdicion ? (
                <TextField
                  label="Rol"
                  value={rol}
                  onChange={(e) => setRol(e.target.value)}
                  fullWidth
                  size="small"
                />
              ) : (
                <ListItemText primary="Rol" secondary={usuario.rol || 'No definido'} />
              )}
            </ListItem>

            <ListItem disablePadding sx={{ mb: 1 }}>
              {enEdicion ? (
                <TextField
                  label="Institución"
                  value={institucion}
                  onChange={(e) => setInstitucion(e.target.value)}
                  fullWidth
                  size="small"
                />
              ) : (
                <ListItemText primary="Institución" secondary={usuario.institucion || 'No definida'} />
              )}
            </ListItem>
          </List>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
            {enEdicion ? (
              <>
                <Button variant="outlined" onClick={() => setEnEdicion(false)}>
                  Cancelar
                </Button>
                <Button variant="contained" onClick={handleGuardar}>
                  Guardar
                </Button>
              </>
            ) : (
              <Button variant="contained" onClick={() => setEnEdicion(true)}>
                Editar Perfil
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default PerfilUsuario
