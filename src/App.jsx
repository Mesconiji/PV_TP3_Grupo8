import './css/indexstyle.css';
import './css/proyectostyle.css';
import './css/detallestyle.css';
import './css/perfilstyle.css';

import Header from './components/Header';
import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header /> 
      <ListaProyectos />
      <Footer />
    </>
  );
};

export default App;