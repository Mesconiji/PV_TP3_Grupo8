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

  const login = (credenciales) => {

    if (credenciales.usuario === 'admin' && credenciales.password === '1234') {
      
      const datosUsuarioSimulado = {
        nombre: 'Juan Pérez',
        dni: '12345678',
        rol: 'Docente',
        institucion: 'UNJu - Facultad de Ingeniería'
      };

      setAuth({ usuario: datosUsuarioSimulado, estaLogeado: true });
      return true; 
    }
    
    return false;
  };

  const logout = () => {
    setAuth({ usuario: null, estaLogeado: false });
  };

  const actualizarPerfil = (nuevosDatos) => {
    setAuth({ ...auth, usuario: { ...auth.usuario, ...nuevosDatos } });
  };

  return (
    <UsuarioContext.Provider value={{ auth, login, logout, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};