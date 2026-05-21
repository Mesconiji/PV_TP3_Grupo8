import { useState } from 'react'
import proyectoService from '../services/proyectoService'
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo'
  })

  const { titulo, categoria, estado } = nuevoProyecto;

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
      titulo,
      categoria,
      estado,
      descripcion: ["Descripción pendiente.", "Falta definir detalles."],
      recursos: [{ nombre: "Documento de Inicio", enlace: "#" }],
      equipo: [{ nombre: "Tutor asignado", rol: "Coordinador" }]
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
      
      {/* Renderizado Condicional */}
      {proyectoSeleccionado ? (
        
        <DetalleProyecto 
          proyecto={proyectoSeleccionado} 
          volverALista={() => setProyectoSeleccionado(null)} 
        />
        
      ) : (
        <>
          {/* EL FORMULARIO VISIBLE EN PANTALLA */}
          <form onSubmit={manejarAgregar} className="buscador" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <input name="titulo" value={titulo} onChange={manejarCambio} placeholder="Título del proyecto" required />
            <input name="categoria" value={categoria} onChange={manejarCambio} placeholder="Categoría" required />
            <select name="estado" value={estado} onChange={manejarCambio}>
              <option value="Activo">Activo</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Finalizado">Finalizado</option>
            </select>
            <button type="submit">Agregar Proyecto</button>
          </form>

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
  );
}

export default ListaProyectos;