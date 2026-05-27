const DetalleProyecto = ({ proyecto, volverALista }) => {


  if (!proyecto) {
    return null;
  }

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

  return (
    <div className="card" style={{ width: '100%' }}>

      <button
        className="btn btn--volver"
        onClick={volverALista}
      >
        ← Volver a la lista
      </button>

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
            <a href={recurso.enlace} target="_blank" rel="noreferrer">
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
