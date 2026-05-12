
import { useState } from 'react'
import  proyectoService  from '../services/proyectoService'

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())

  const colorEstado = (estado) => {
    if (estado === 'activo')    return 'badge badge-teal'
    if (estado === 'pausado')   return 'badge badge-amber'
    if (estado === 'finalizado') return 'badge badge-gray'
    return 'badge badge-blue'
  }

  return (
    <main>
      <h1>Proyectos Educativos</h1>

      <div className="lista">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="card">
            <h2>{proyecto.titulo}</h2>
            <p>{proyecto.categoria}</p>
            <span className={colorEstado(proyecto.estado)}>
              {proyecto.estado}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ListaProyectos