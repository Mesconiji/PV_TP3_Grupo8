import { createBrowserRouter } from 'react-router-dom'

import App from '../App.jsx'
import Dashboard from '../views/Dashboard.jsx'
import ListaProyectos from '../views/ListaProyectos.jsx'
import DetalleProyecto from '../views/DetalleProyecto.jsx'
import PerfilUsuario from '../views/PerfilUsuario.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
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
])

export default routes