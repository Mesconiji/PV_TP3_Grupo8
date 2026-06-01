import Header from './components/Header';
import ListaProyectos from './views/ListaProyectos';
import Footer from './components/Footer';
import './css/indexstyle.css';
import './css/proyectostyle.css';
import './css/detallestyle.css';


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