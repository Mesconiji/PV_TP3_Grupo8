import { useParams, Link } from 'react-router-dom';
import proyectoService from '../services/proyectoService';


const DetalleProyecto = () => {

  const { id } = useParams();
  const listaProyectos = proyectoService.obtenerProyectos();
  const proyecto = listaProyectos.find((p) => p.id.toString() === id);

  if (!proyecto) {
    return (
      <div className="card" style={{ width: '100%', textAlign: 'center' }}>
        <h2>Proyecto no encontrado</h2>
        <Link to="/proyectos" className="btn btn--volver">Volver a la lista</Link>
      </div>
    );
  }

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

  return (
    <div className="card" style={{ width: '100%' }}>

      <Link
        to="/proyectos" 
        className="btn btn--volver"
        style={{ display: 'inline-block', marginBottom: '20px', textDecoration: 'none' }}
      >
        ← Volver a la lista
      </Link>

      <h2>{titulo}</h2>

      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>


      <div style={{ margin: '20px 0' }}>
        <p>{descripcion[0]}</p>
        <br />
        <p>{descripcion[1]}</p>
      </div>

      <h3>Recursos</h3>
      <ul>
        {recursos.map((recurso, index) => (
          <li key={index}>
            <a href={recurso.enlace} >
              {recurso.nombre}
            </a>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: '20px' }}>Equipo</h3>
      <ul>
        {equipo.map((miembro, index) => (
          <li key={index}>
            {miembro.nombre} - {miembro.rol}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default DetalleProyecto;
