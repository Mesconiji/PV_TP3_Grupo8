import { useState, useEffect, useRef } from 'react'
import { Box , Typography , TextField , Container } from '@mui/material'
import proyectoService from '../services/proyectoService'
import ProyectoCard from '../components/ProyectoCard'
import DetalleProyecto from './DetalleProyecto'
import FormularioProyecto from '../components/FormularioProyecto'
import RegistroActividad from '../components/RegistroActividad'

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
    <contaniner maxwidhth ="lg" >
      <thypography variant="h4" align="center" gutterBottom>
        Lista de Proyectos
      </thypography>

      {proyectoSeleccionado ? (

        <DetalleProyecto
          proyecto={proyectoSeleccionado}
          volverALista={() => setProyectoSeleccionado(null)}
        />

      ) : (
        <>
          <FormularioProyecto alAgregar={agregarNuevoProyecto} />

          <Box sx={{ marginTop: 3 }}>
            <TextField
              fullwidth
              Label="Buscar por titulo o cateogoria"
              value={busqueda}
              onChange={manejarBusqueda}  
            />
          </Box>

          <Box sx={{ marginTop: 3 , display : 'flex' , flexDirection : 'column' , gap : 1 }}>
            {proyectosFiltrados.map((proyecto) => (
              <ProyectoCard
                key={proyecto.id}
                proyecto={proyecto}
                manejarEliminar={manejarEliminar}
                manejarVerDetalle={setProyectoSeleccionado}
              />
            ))}
          </Box>
        </>
      )}

      {fechaHora && <RegistroActividad fechaHora={fechaHora} />}

    </contaniner>
  )
}

export default ListaProyectos