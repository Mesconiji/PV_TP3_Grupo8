import { useState } from 'react'

const FormularioProyecto = ({ alAgregar }) => {

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    activo: true,
    descParrafo1: '',
    descParrafo2: '',
    nombreRecurso: '',
    enlaceRecurso: '',
    nombreEquipo: '',
    rolEquipo: ''
  })

  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target

    setNuevoProyecto({
      ...nuevoProyecto,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const manejarSubmit = (evento) => {
    evento.preventDefault()
    alAgregar(nuevoProyecto)
    setNuevoProyecto({
      titulo: '',
      categoria: '',
      activo: true,
      descParrafo1: '',
      descParrafo2: '',
      nombreRecurso: '',
      enlaceRecurso: '',
      nombreEquipo: '',
      rolEquipo: ''
    })
  }

    const {
    titulo,
    categoria,
    activo,
    descParrafo1,
    descParrafo2,
    nombreRecurso,
    enlaceRecurso,
    nombreEquipo,
    rolEquipo
  } = nuevoProyecto

  return (
    <form onSubmit={manejarSubmit} className="buscador" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="text"
          name="titulo"
          placeholder="Titulo del proyecto"
          value={titulo}
          onChange={manejarCambio}
          required
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={categoria}
          onChange={manejarCambio}
          required
        />

        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input
            type="checkbox"
            name="activo"
            checked={activo}
            onChange={manejarCambio}
          />
          Activo
        </label>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          type="text"
          name="descParrafo1"
          placeholder="Descripción (Párrafo 1)"
          value={descParrafo1}
          onChange={manejarCambio}
          required
        />

        <input
          type="text"
          name="descParrafo2"
          placeholder="Descripción (Párrafo 2)"
          value={descParrafo2}
          onChange={manejarCambio}
          required
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          type="text"
          name="nombreRecurso"
          placeholder="Nombre del recurso"
          value={nombreRecurso}
          onChange={manejarCambio}
        />

        <input
          type="text"
          name="enlaceRecurso"
          placeholder="Enlace del recurso"
          value={enlaceRecurso}
          onChange={manejarCambio}
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          type="text"
          name="nombreEquipo"
          placeholder="Nombre del integrante"
          value={nombreEquipo}
          onChange={manejarCambio}
        />

        <input
          type="text"
          name="rolEquipo"
          placeholder="Rol del integrante"
          value={rolEquipo}
          onChange={manejarCambio}
        />
      </div>

      <button type="submit">
        Agregar proyecto
      </button>
    </form>
  )
}

export default FormularioProyecto
