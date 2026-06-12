
const autorizacionesService = (() => {
  const defaultUsersObj = {
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


  const objToArray = (obj) => {
    return Object.keys(obj).map((key, idx) => {
      const { password, usuario } = obj[key];
      return {
        id: idx + 1,
        nombre: usuario?.nombre || key,
        user: key,
        password,
        perfil: usuario || null
      };
    });
  };

  const loadUsuarios = () => {
    const stored = localStorage.getItem('usuarios');
    if (!stored) {
      return objToArray(defaultUsersObj);
    }

    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
      return objToArray(parsed);
    } catch {
      return objToArray(defaultUsersObj);
    }
  };


  const login = (user, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuarios = loadUsuarios();
        const encontrado = usuarios.find(({ user: u, password: p }) => u === user && p === password);
        if (encontrado) {
          resolve(encontrado.perfil || { nombre: encontrado.nombre });
        } else {
          reject(new Error('Usuario o contraseña incorrectos'));
        }
      }, 800);
    });
  };

  return { login };

})();

export default autorizacionesService;
