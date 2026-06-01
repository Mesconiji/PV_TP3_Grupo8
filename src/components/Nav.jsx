import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard">
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/proyectos">
            Explorar Tutorías
          </NavLink>
        </li>

        <li>
          <NavLink to="/perfil">
            Mi Perfil
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav