import { useState } from 'react'

const FormularioProyecto = ({ alAgregar }) => {

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo'
  })

  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setNuevoProyecto({
      ...nuevoProyecto,
      [name]: value
    })
  }

  return (
    <form>
      <input
        type="text"
        name="titulo"
        placeholder="Título del proyecto"
        value={nuevoProyecto.titulo}
        onChange={manejarCambio}
        required
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={nuevoProyecto.categoria}
        onChange={manejarCambio}
        required
      />

      <select
        name="estado"
        value={nuevoProyecto.estado}
        onChange={manejarCambio}
      >
        <option value="Activo">Activo</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Pausado">Pausado</option>
        <option value="Finalizado">Finalizado</option>
      </select>

      <button type="button" onClick={() => alAgregar(nuevoProyecto)}>
        Agregar proyecto
      </button>
    </form>
  )
}

export default FormularioProyecto