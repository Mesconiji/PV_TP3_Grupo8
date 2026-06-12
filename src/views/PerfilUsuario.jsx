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

  const campos = [
    { key: 'nombre', label: 'Nombre', value: nombre, setter: setNombre, fallback: 'No definido', editable: true },
    { key: 'rol', label: 'Rol', value: rol, setter: setRol, fallback: 'No definido', editable: true },
    { key: 'dni', label: 'DNI', value: usuario.dni || 'No definido', editable: false },
    { key: 'institucion', label: 'Institución', value: institucion, setter: setInstitucion, fallback: 'No definida', editable: true }
  ]

  return (
    <Container maxWidth="lg" className="profileContainer">
      <Box className="profileHeader">
        <Typography variant="h4" component="h1" gutterBottom>
          Perfil de Usuario
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Información del alumno o docente organizada de manera clara y elegante.
        </Typography>
      </Box>

      <Box className="profileCenter">
        <Paper elevation={3} className="profilePaper">
          <List>
            {campos.map(({ key, label, value, setter, fallback, editable }) => (
              <ListItem key={key} disablePadding className="profileField">
                {enEdicion && editable ? (
                  <TextField
                    label={label}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    fullWidth
                    size="small"
                  />
                ) : (
                  <ListItemText primary={label} secondary={value || fallback} />
                )}
              </ListItem>
            ))}
          </List>

          <Box className="profileActions">
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
