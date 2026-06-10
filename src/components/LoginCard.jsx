import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Paper, TextField, Typography, Alert } from '@mui/material'
import { useAuth } from '../hook/useAuth.jsx'

const LoginCard = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ usuario: '', password: '' })
  const [error, setError] = useState('')

  const manejarCambio = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const manejarSubmit = (event) => {
    event.preventDefault()
    setError('')

    const exito = login(form)
    if (exito) {
      navigate('/dashboard')
      return
    }

    setError('Usuario o contraseña incorrectos. Intenta nuevamente.')
  }

  return (
    <Paper elevation={6} sx={{ p: 4, minWidth: 320 }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Acceso al sistema
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingresa tu usuario y contraseña para continuar.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={manejarSubmit} noValidate>
        <TextField
          fullWidth
          required
          label="Usuario"
          name="usuario"
          value={form.usuario}
          onChange={manejarCambio}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          required
          type="password"
          label="Contraseña"
          name="password"
          value={form.password}
          onChange={manejarCambio}
          sx={{ mb: 4 }}
        />

        <Button type="submit" variant="contained" fullWidth>
          Iniciar sesión
        </Button>
      </Box>
    </Paper>
  )
}

export default LoginCard
