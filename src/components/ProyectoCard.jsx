// src/components/ProyectoCard.jsx

const ProyectoCard = ({ proyecto, manejarEliminar, manejarVerDetalle }) => {
  // Desestructuración del objeto proyecto
  const { titulo, categoria, estado, id } = proyecto;

  // El badge cambia de clase según el estado del proyecto
  const badgeClase = estado === "Activo" ? "badge-teal" : "badge-gray";

  return (
    <div className="card">
      <h2 className="card__titulo">{titulo}</h2>
      <p className="card__categoria">{categoria}</p>

      <span className={`badge ${badgeClase}`}>{estado}</span>

      <div className="card__acciones">
        <button
          className="btn btn--detalle"
          onClick={() => manejarVerDetalle(proyecto)}
        >
          Ver detalle
        </button>
        <button
          className="btn btn--eliminar"
          onClick={() => manejarEliminar(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProyectoCard;