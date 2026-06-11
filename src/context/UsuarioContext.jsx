/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

  const [auth, setAuth] = useState(() => {
    const authGuardado = localStorage.getItem('auth');
    if (authGuardado) {
      return JSON.parse(authGuardado); 
    }
    return { usuario: null, estaLogeado: false };
  });

   useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const defaultUsers = {
    admin: {
      password: '1234',
      usuario: {
        nombre: 'Juan Pérez',
        dni: '12345678',
        rol: 'Docente',
        institucion: 'UNJu - Facultad de Ingeniería'
      }
    },
    jose: { password: 'abcd', usuario: { nombre: 'Jose Mesconi', dni: '11111111', rol: 'Estudiante', institucion: 'Escuela de Minas' } },
    julieta: { password: 'abcd', usuario: { nombre: 'Julieta Ortega', dni: '22222222', rol: 'Estudiante', institucion: 'Escuela de Minas' } },
    leonardo: { password: 'abcd', usuario: { nombre: 'Leonardo Vargas', dni: '33333333', rol: 'Estudiante', institucion: 'Escuela de Minas' } },
    santiago: { password: 'abcd', usuario: { nombre: 'Santiago Urzagaste', dni: '44444444', rol: 'Estudiante', institucion: 'Escuela de Minas' } },
    marcos: { password: 'abcd', usuario: { nombre: 'Marcos Ovejero', dni: '55555555', rol: 'Estudiante', institucion: 'Escuela de Minas' } }
  };

  const [usuarios, setUsuarios] = useState(() => {
    const stored = localStorage.getItem('usuarios');
    return stored ? JSON.parse(stored) : defaultUsers;
  });

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const login = (credenciales) => {
    const cuenta = usuarios[credenciales.usuario];
    if (cuenta && credenciales.password === cuenta.password) {
      setAuth({ usuario: cuenta.usuario, estaLogeado: true });
      return true;
    }
    return false;
  };

  const registrar = ({ usuarioNombre, username, password, dni, institucion }) => {
    if (!username || !password || !usuarioNombre || !dni || !institucion) {
      return { success: false, message: 'Complete todos los campos' };
    }

    if (password.length < 4) {
      return { success: false, message: 'La contraseña debe tener al menos 4 caracteres' };
    }

    const dniRegex = /^\d{7,8}$/;
    if (!dniRegex.test(dni)) {
      return { success: false, message: 'DNI inválido. Debe contener 7 u 8 dígitos.' };
    }

    if (usuarios[username]) {
      return { success: false, message: 'El usuario ya existe' };
    }

    const nuevaCuenta = {
      password,
      usuario: { nombre: usuarioNombre, dni: dni, rol: 'Estudiante', institucion }
    };

    setUsuarios(prev => ({ ...prev, [username]: nuevaCuenta }));
    return { success: true };
  };

  const logout = () => {
    setAuth({ usuario: null, estaLogeado: false });
  };

  const actualizarPerfil = (nuevosDatos) => {
    setAuth({ ...auth, usuario: { ...auth.usuario, ...nuevosDatos } });
  };

  return (
    <UsuarioContext.Provider value={{ auth, login, logout, actualizarPerfil, registrar }}>
      {children}
    </UsuarioContext.Provider>
  );
};