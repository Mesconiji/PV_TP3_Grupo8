import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Paper, TextField, Typography, Alert } from '@mui/material'
import { useAuth } from '../hook/useAuth.jsx'

const LoginCard = () => {
  const { login, registrar } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ usuario: '', password: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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

  const [showRegister, setShowRegister] = useState(false)
  const [regForm, setRegForm] = useState({ username: '', password: '', nombre: '', dni: '', institucion: 'Escuela de Minas' })
  const manejarCambioReg = (e) => {
    const { name, value } = e.target
    setRegForm(prev => ({ ...prev, [name]: value }))
  }

  const manejarRegistro = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    const errors = []
    if (!regForm.nombre) errors.push('Complete el nombre')
    if (!regForm.username) errors.push('Complete el usuario')
    if (!regForm.password) errors.push('Complete la contraseña')
    if (!regForm.dni) errors.push('Complete el DNI')
    if (!regForm.institucion) errors.push('Complete la institución')

    if (regForm.password && regForm.password.length < 4) errors.push('La contraseña debe tener al menos 4 caracteres')

    const dniRegex = /^\d{7,8}$/
    if (regForm.dni && !dniRegex.test(regForm.dni)) errors.push('DNI inválido. Debe contener 7 u 8 dígitos')

    if (errors.length > 0) {
      setError(errors.join('. '))
      return
    }

    const resultado = registrar ? registrar({ usuarioNombre: regForm.nombre, username: regForm.username, password: regForm.password, dni: regForm.dni, institucion: regForm.institucion }) : null
    if (resultado && resultado.success) {
      setSuccess('Se registró correctamente')
      setError('')
      // limpiar formulario mínimo
      setRegForm({ username: '', password: '', nombre: '', dni: '', institucion: 'Escuela de Minas' })
      // intentar loguear automáticamente tras breve retraso
      setTimeout(() => {
        const exito = login({ usuario: regForm.username, password: regForm.password })
        if (exito) navigate('/dashboard')
      }, 800)
      return
    }
    setError(resultado ? resultado.message : 'Error al registrar')
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

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {success}
        </Alert>
      )}

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

        <Button sx={{ mt: 1 }} variant="outlined" fullWidth onClick={() => { setShowRegister(prev => !prev); setError(''); setSuccess(''); }}>
          {showRegister ? 'Cerrar registro' : 'Registrarse'}
        </Button>
      </Box>

      {showRegister && (
        <Box component="form" onSubmit={manejarRegistro} noValidate sx={{ mt: 2 }}>
          <TextField fullWidth required label="Nombre" name="nombre" value={regForm.nombre} onChange={manejarCambioReg} sx={{ mb: 1 }} />
          <TextField fullWidth required label="Usuario (username)" name="username" value={regForm.username} onChange={manejarCambioReg} sx={{ mb: 1 }} />
          <TextField fullWidth required label="Contraseña" name="password" type="password" value={regForm.password} onChange={manejarCambioReg} sx={{ mb: 1 }} />
          <TextField fullWidth label="DNI" name="dni" value={regForm.dni} onChange={manejarCambioReg} sx={{ mb: 1 }} />
          <TextField fullWidth label="Institución" name="institucion" value={regForm.institucion} onChange={manejarCambioReg} sx={{ mb: 1 }} />
          <Button type="submit" variant="contained" fullWidth>
            Guardar y entrar
          </Button>
        </Box>
      )}
    </Paper>
  )
}

export default LoginCard
