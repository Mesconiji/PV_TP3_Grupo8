/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react'
import autorizacionesService from '../services/autorizacionesService'

export const UsuarioContext = createContext(null)

export const UsuarioProvider = ({ children }) => {

  const validarCamposRequeridos = (campos) => {
    return Object.values(campos).every(valor => valor)
  }

  const validarDNI = (dni) => {
    return dni && dni.length >= 7 && dni.length <= 8 && !isNaN(parseInt(dni, 10))
  }

  const validarPassword = (password) => {
    return password && password.length >= 4
  }


  const [auth, setAuth] = useState(() => {
    const guardado = localStorage.getItem('auth')
    return guardado ? JSON.parse(guardado) : { usuario: null, estaLogeado: false }
  })

  const [usuarios, setUsuarios] = useState(() => {
    const guardado = localStorage.getItem('usuarios')
    return guardado ? JSON.parse(guardado) : {}
  })


  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth))
  }, [auth])

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }, [usuarios])


  const login = async ({ usuario, password }) => {
    try {
      const perfil = await autorizacionesService.login(usuario, password)
      const usuarioPerfil = perfil?.nombre ? perfil : perfil || null
      setAuth({ usuario: usuarioPerfil, estaLogeado: true })
      return true
    } catch {
      return false
    }
  }

  const registrar = ({ usuarioNombre, username, password, dni, institucion }) => {
    if (!validarCamposRequeridos({ usuarioNombre, username, password, dni, institucion })) {
      return { success: false, message: 'Complete todos los campos' }
    }

    if (!validarPassword(password)) {
      return { success: false, message: 'La contraseña debe tener al menos 4 caracteres' }
    }

    if (!validarDNI(dni)) {
      return { success: false, message: 'DNI inválido. Debe contener 7 u 8 dígitos.' }
    }

    if (usuarios[username]) {
      return { success: false, message: 'El usuario ya existe' }
    }

    setUsuarios(prev => ({
      ...prev,
      [username]: { password, usuario: { nombre: usuarioNombre, dni, rol: 'Estudiante', institucion } }
    }))

    return { success: true }
  }

  const logout = () => {
    setAuth({ usuario: null, estaLogeado: false })
  }

  const actualizarPerfil = (nuevosDatos) => {
    setAuth({ ...auth, usuario: { ...auth.usuario, ...nuevosDatos } })
  }

  return (
    <UsuarioContext.Provider value={{ auth, login, logout, actualizarPerfil, registrar }}>
      {children}
    </UsuarioContext.Provider>
  )
}
