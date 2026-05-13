import './css/indexstyle.css';
import './css/proyectostyle.css';
import './css/detallestyle.css';
import './css/perfilstyle.css';

import Header from './components/Header';
//import Nav from './components/Nav';
import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Nav /> */}
      <ListaProyectos />
      <Footer />
    </>
  );
};

export default App;