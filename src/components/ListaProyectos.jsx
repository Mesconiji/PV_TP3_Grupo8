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
    estado: 'Activo',
    descParrafo1: '',
    descParrafo2: ''
  })

  // REQUISITO PARTE 2: Desestructuración 
  const { titulo, categoria, estado, descParrafo1, descParrafo2 } = nuevoProyecto;

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
      descripcion: [descParrafo1, descParrafo2],
      recursos: [{ nombre: "Documento de Inicio", enlace: "#" }], // Valor genérico devuelto
      equipo: [{ nombre: "Tutor asignado", rol: "Coordinador" }]  // Valor genérico devuelto
    }

    proyectoService.agregarProyecto(proyecto)
    const proyectosActualizados = proyectoService.buscarProyecto(busqueda)
    setProyectos(proyectosActualizados)

    setNuevoProyecto({
      titulo: '',
      categoria: '',
      estado: 'Activo',
      descParrafo1: '',
      descParrafo2: ''
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
          <form onSubmit={manejarAgregar} className="buscador" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="titulo" value={titulo} onChange={manejarCambio} placeholder="Título del proyecto" required />
              <input name="categoria" value={categoria} onChange={manejarCambio} placeholder="Categoría" required />
              <select name="estado" value={estado} onChange={manejarCambio}>
                <option value="Activo">Activo</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Finalizado">Finalizado</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="descParrafo1" value={descParrafo1} onChange={manejarCambio} placeholder="Descripción (Párrafo 1)" required />
              <input name="descParrafo2" value={descParrafo2} onChange={manejarCambio} placeholder="Descripción (Párrafo 2)" required />
            </div>

            <button type="submit" style={{ alignSelf: 'flex-start' }}>AGREGAR</button>
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