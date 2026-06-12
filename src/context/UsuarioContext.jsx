/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import autorizacionesService from '../services/autorizacionesService';


export const UsuarioContext = createContext(null);

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


  const [usuarios, setUsuarios] = useState(() => {
    const stored = localStorage.getItem('usuarios');
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const login = async ({ usuario, password }) => {
    try {
      const perfil = await autorizacionesService.login(usuario, password);
      const usuarioPerfil = perfil && perfil.nombre ? perfil : perfil || null;
      setAuth({ usuario: usuarioPerfil, estaLogeado: true });
      return true;
    } catch {
      return false;
    }
  };

  const registrar = ({ usuarioNombre, username, password, dni, institucion }) => {
    if (!username || !password || !usuarioNombre || !dni || !institucion) {
      return { success: false, message: 'Complete todos los campos' };
    }

    if (password.length < 4) {
      return { success: false, message: 'La contraseña debe tener al menos 4 caracteres' };
    }

    if (!dni || dni.length < 7 || dni.length > 8 || isNaN(parseInt(dni, 10))) {
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