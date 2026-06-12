import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Paper, TextField, Typography, Alert } from '@mui/material'
import { useAuth } from '../hook/useAuth.jsx'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ usuario: '', password: '' })
  const [error, setError] = useState('')

  const { usuario, password } = form

  const manejarCambio = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const manejarSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const exito = await login(form)
    if (exito) {
      navigate('/dashboard')
      return
    }

    setError('Usuario o contraseña incorrectos. Intenta nuevamente.')
  }

  return (
    <Container maxWidth="sm" className="loginContainer">
      <Paper elevation={6} className="loginCard">
        <Box className="loginHeader">
          <Typography variant="h4" component="h1" gutterBottom>
            Iniciar sesión
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Ingresa con tu usuario y contraseña para acceder al dashboard.
          </Typography>
        </Box>

        {error && (
          <Alert className="loginAlert" severity="error">
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={manejarSubmit} noValidate className="loginForm">
          <TextField
            className="loginField"
            fullWidth
            required
            label="Usuario"
            name="usuario"
            value={usuario}
            onChange={manejarCambio}
          />

          <TextField
            className="loginField"
            fullWidth
            required
            type="password"
            label="Contraseña"
            name="password"
            value={password}
            onChange={manejarCambio}
          />

          <Button type="submit" variant="contained" fullWidth size="large" className="loginButton">
            Entrar
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login
