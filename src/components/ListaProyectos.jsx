import { useState } from 'react'
import proyectoService from '../services/proyectoService'

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo'
  })

  const colorEstado = (estado) => {
    if (estado === 'Activo') return 'badge badge-teal'
    if (estado === 'Pausado') return 'badge badge-amber'
    if (estado === 'Finalizado') return 'badge badge-gray'
    if (estado === 'Pendiente') return 'badge badge-blue'

    return 'badge badge-blue'
  }

  const manejarBusqueda = (evento) => {
    const texto = evento.target.value

    setBusqueda(texto)

    const proyectosFiltrados = proyectoService.buscarProyecto(texto)

    setProyectos(proyectosFiltrados)
  }

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id)

    const proyectosActualizados = proyectoService.buscarProyecto(busqueda)

    setProyectos(proyectosActualizados)
  }

  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setNuevoProyecto({
      ...nuevoProyecto,
      [name]: value
    })
  }

  const manejarAgregar = (evento) => {
    evento.preventDefault()

    const proyecto = {
      id: Date.now(),
      titulo: nuevoProyecto.titulo,
      categoria: nuevoProyecto.categoria,
      estado: nuevoProyecto.estado
    }

    proyectoService.agregarProyecto(proyecto)

    const proyectosActualizados = proyectoService.buscarProyecto(busqueda)

    setProyectos(proyectosActualizados)

    setNuevoProyecto({
      titulo: '',
      categoria: '',
      estado: 'Activo'
    })
  }

  return (
    <main>
      <h1>Proyectos Educativos</h1>

      <form onSubmit={manejarAgregar}>
        <input
          type="text"
          name="titulo"
          placeholder="Titulo del proyecto"
          value={nuevoProyecto.titulo}
          onChange={manejarCambio}
          required
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
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

        <button type="submit">
          Agregar proyecto
        </button>
      </form>

      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar proyecto por titulo"
          value={busqueda}
          onChange={manejarBusqueda}
        />
      </div>

      <div className="lista">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="card">
            <h2>{proyecto.titulo}</h2>
            <p>{proyecto.categoria}</p>

            <span className={colorEstado(proyecto.estado)}>
              {proyecto.estado}
            </span>

            <div>
              <button onClick={() => manejarEliminar(proyecto.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ListaProyectos