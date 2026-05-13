const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="#">Explorar Tutorías</a></li>
        <li><a href="#">Mi Perfil</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <h1>Red de Tutorías Solidarias</h1>
      <p style={{ fontSize: '1.1rem', letterSpacing: '0.5px', opacity: 0.9 }}>
        Explora los proyectos educativos y tutorías disponibles.
      </p>
      <Nav />
    </header>
  );
};

export default Header;