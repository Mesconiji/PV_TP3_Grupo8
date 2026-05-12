import { useState } from 'react'
import proyectoService from '../services/proyectoService'

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')

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

  return (
    <main>
      <h1>Proyectos Educativos</h1>

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