import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Paper, TextField, Typography, Alert } from '@mui/material'
import { useAuth } from '../hook/useAuth.jsx'

const Login = () => {
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
    ;(async () => {
      const exito = await login(form)
      if (exito) {
        navigate('/dashboard')
        return
      }
      setError('Usuario o contraseña incorrectos. Intenta nuevamente.')
    })()
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <Paper elevation={6} sx={{ px: 4, py: 5 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Iniciar sesión
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Ingresa con tu usuario y contraseña para acceder al dashboard.
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

          <Button type="submit" variant="contained" fullWidth size="large">
            Entrar
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login
