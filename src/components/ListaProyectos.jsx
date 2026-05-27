import { useState } from 'react'
import proyectoService from '../services/proyectoService'
import ProyectoCard from './ProyectoCard'
import DetalleProyecto from './DetalleProyecto'
import FormularioProyecto from './FormularioProyecto'

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

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
    setProyectos(proyectoService.buscarProyecto(texto))
  }

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id)
    setProyectos(proyectoService.buscarProyecto(busqueda))
  }

  // Recibe los datos desde FormularioProyecto y actualiza la lista
  const agregarNuevoProyecto = (datos) => {
    const proyecto = {
      id: Date.now(),
      titulo: datos.titulo,
      categoria: datos.categoria,
      estado: datos.estado,
      descripcion: ["Descripción pendiente.", "Falta definir detalles."],
      recursos: [{ nombre: "Documento de Inicio", enlace: "#" }],
      equipo: [{ nombre: "Tutor asignado", rol: "Coordinador" }]
    }

    proyectoService.agregarProyecto(proyecto)
    setProyectos(proyectoService.obtenerProyectos())
  }

  return (
    <main>
      <h1>Proyectos Educativos</h1>

      {/* Renderizado Condicional */}
      {proyectoSeleccionado ? (

        <DetalleProyecto
          proyecto={proyectoSeleccionado}
          volverALista={() => setProyectoSeleccionado(null)}
        />

      ) : (
        <>
          {/* Formulario y Buscador */}
          <FormularioProyecto alAgregar={agregarNuevoProyecto} />

          <div className="buscador" style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Buscar proyecto por titulo"
              value={busqueda}
              onChange={manejarBusqueda}
            />
          </div>

          {/* Refactorizacion del map con Props */}
          <div className="lista" style={{ marginTop: '20px' }}>
            {proyectos.map((proyecto) => (
              <ProyectoCard
                key={proyecto.id}
                proyecto={proyecto}
                manejarEliminar={manejarEliminar}
                manejarVerDetalle={setProyectoSeleccionado}
              />
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default ListaProyectos