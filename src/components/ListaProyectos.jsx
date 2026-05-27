import { useState, useEffect, useRef } from 'react'
import proyectoService from '../services/proyectoService'
import ProyectoCard from './ProyectoCard'
import DetalleProyecto from './DetalleProyecto'
import FormularioProyecto from './FormularioProyecto'
import RegistroActividad from './RegistroActividad'

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
  const [fechaHora, setFechaHora] = useState(null)

  const esMontajeInicial = useRef(true)

  useEffect(() => {

    if (esMontajeInicial.current) {
      esMontajeInicial.current = false
      return
    }

    const ahora = new Date()

    const fechaFormateada =
      ahora.toLocaleDateString('es-AR') +
      " a las " +
      ahora.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }) +
      " hs."

    setFechaHora(fechaFormateada)

  }, [proyectos])

  const manejarBusqueda = (evento) => {
    const texto = evento.target.value
    setBusqueda(texto)
    setProyectosFiltrados(proyectoService.buscarProyecto(texto))
  }

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id)
    const listaActualizada = proyectoService.obtenerProyectos()
    setProyectos(listaActualizada)
    setProyectosFiltrados(
      busqueda
        ? proyectoService.buscarProyecto(busqueda)
        : listaActualizada
    )
  }

  const agregarNuevoProyecto = (datos) => {
    const proyecto = {
      id: Date.now(),
      titulo: datos.titulo,
      categoria: datos.categoria,
      estado: datos.activo ? 'Activo' : 'Inactivo',
      descripcion: [
        datos.descParrafo1 || 'Descripción pendiente.',
        datos.descParrafo2 || 'Falta definir detalles.'
      ],
      recursos: datos.nombreRecurso ? [{ nombre: datos.nombreRecurso, enlace: '#' }] : [{ nombre: 'Documento de Inicio', enlace: '#' }],
      equipo: datos.nombreEquipo ? [{ nombre: datos.nombreEquipo, rol: datos.rolEquipo || 'Miembro' }] : [{ nombre: 'Tutor asignado', rol: 'Coordinador' }]
    }

    proyectoService.agregarProyecto(proyecto)
    const listaActualizada = proyectoService.obtenerProyectos()
    setProyectos(listaActualizada)
    setProyectosFiltrados(
      busqueda
        ? proyectoService.buscarProyecto(busqueda)
        : listaActualizada
    )
  }

  return (
    <main>
      <h1>Proyectos Educativos</h1>

      {fechaHora && <RegistroActividad fechaHora={fechaHora} />}

      {proyectoSeleccionado ? (

        <DetalleProyecto
          proyecto={proyectoSeleccionado}
          volverALista={() => setProyectoSeleccionado(null)}
        />

      ) : (
        <>
          <FormularioProyecto alAgregar={agregarNuevoProyecto} />

          <div className="buscador" style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Buscar proyecto por titulo"
              value={busqueda}
              onChange={manejarBusqueda}
            />
          </div>

          <div className="lista" style={{ marginTop: '20px' }}>
            {proyectosFiltrados.map((proyecto) => (
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