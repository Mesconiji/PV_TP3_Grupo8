import { createBrowserRouter } from 'react-router-dom'

import App from '../App.jsx'
import Dashboard from '../views/Dashboard.jsx'
import ListaProyectos from '../views/ListaProyectos.jsx'
import DetalleProyecto from '../views/DetalleProyecto.jsx'
import PerfilUsuario from '../views/PerfilUsuario.jsx'
import ErrorPage from '../views/ErrorPage.jsx'

import RutaPrivada from '../components/RutaPrivada.jsx' 

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'login',
        element: <div>Pantalla de Login (Componente del Integrante 3)</div> 
      },

      {
        element: <RutaPrivada />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'proyectos',
            element: <ListaProyectos />
          },
          {
            path: 'proyectos/:id',
            element: <DetalleProyecto />
          },
          {
            path: 'perfil',
            element: <PerfilUsuario />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export default routes