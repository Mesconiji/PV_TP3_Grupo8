import { useState } from 'react'
import { Box, TextField, Button, FormControlLabel, Checkbox } from '@mui/material'

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

  const { titulo, categoria, activo, descParrafo1, descParrafo2, nombreRecurso, enlaceRecurso, nombreEquipo, rolEquipo } = nuevoProyecto

  return (
    <Box component="form" onSubmit={manejarSubmit} className="formProyecto">
      <Box className="formRow">
        <TextField
          label="Título del proyecto"
          name="titulo"
          value={titulo}
          onChange={manejarCambio}
          required
          size="small"
          className="formField"
        />
        <TextField
          label="Categoría"
          name="categoria"
          value={categoria}
          onChange={manejarCambio}
          required
          size="small"
          className="formField"
        />
        <FormControlLabel
          control={<Checkbox name="activo" checked={activo} onChange={manejarCambio} />}
          label="Activo"
        />
      </Box>

      <Box className="formRow">
        <TextField
          label="Descripción (Párrafo 1)"
          name="descParrafo1"
          value={descParrafo1}
          onChange={manejarCambio}
          required
          size="small"
          className="formField"
        />
        <TextField
          label="Descripción (Párrafo 2)"
          name="descParrafo2"
          value={descParrafo2}
          onChange={manejarCambio}
          required
          size="small"
          className="formField"
        />
      </Box>

      <Box className="formRow">
        <TextField
          label="Nombre del recurso"
          name="nombreRecurso"
          value={nombreRecurso}
          onChange={manejarCambio}
          size="small"
          className="formField"
        />
        <TextField
          label="Enlace del recurso"
          name="enlaceRecurso"
          value={enlaceRecurso}
          onChange={manejarCambio}
          size="small"
          className="formField"
        />
      </Box>

      <Box className="formRow">
        <TextField
          label="Nombre del integrante"
          name="nombreEquipo"
          value={nombreEquipo}
          onChange={manejarCambio}
          size="small"
          className="formField"
        />
        <TextField
          label="Rol del integrante"
          name="rolEquipo"
          value={rolEquipo}
          onChange={manejarCambio}
          size="small"
          className="formField"
        />
      </Box>

      <Button type="submit" variant="contained" className="formSubmit">
        Agregar proyecto
      </Button>
    </Box>
  )
}

export default FormularioProyecto
