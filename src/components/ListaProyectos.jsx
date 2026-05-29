import { useState, useEffect, useRef } from 'react'
import proyectoService from '../services/proyectoService'
import ProyectoCard from './ProyectoCard'
import DetalleProyecto from './DetalleProyecto'
import FormularioProyecto from './FormularioProyecto'
import RegistroActividad from './RegistroActividad'

const ListaProyectos = () => {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
  const [fechaHora, setFechaHora] = useState(null)

  const esMontajeInicial = useRef(proyectos)

  useEffect(() => {

    if (esMontajeInicial.current === proyectos) {
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
    const {
      titulo,
      categoria,
      activo,
      descParrafo1,
      descParrafo2,
      nombreRecurso,
      nombreEquipo,
      rolEquipo
    } = datos

    const proyecto = {
      id: Date.now(),
      titulo,
      categoria,
      estado: activo ? 'Activo' : 'Inactivo',
      descripcion: [
        descParrafo1 || 'Descripción pendiente.',
        descParrafo2 || 'Falta definir detalles.'
      ],
      recursos: nombreRecurso ? [{ nombre: nombreRecurso, enlace: '#' }] : [{ nombre: 'Documento de Inicio', enlace: '#' }],
      equipo: nombreEquipo ? [{ nombre: nombreEquipo, rol: rolEquipo || 'Miembro' }] : [{ nombre: 'Tutor asignado', rol: 'Coordinador' }]
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

      {fechaHora && <RegistroActividad fechaHora={fechaHora} />}

    </main>
  )
}

export default ListaProyectos