import { useParams, Link } from 'react-router-dom'
import proyectoService from '../services/proyectoService'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const DetalleProyecto = () => {
  const { id } = useParams()
  const listaProyectos = proyectoService.obtenerProyectos()
  const proyecto = listaProyectos.find((p) => p.id.toString() === id)

  if (!proyecto) {
    return (
      <Paper className="detailCard detailNotFound">
        <Typography variant="h5" gutterBottom>
          Proyecto no encontrado
        </Typography>
        <Button component={Link} to="/proyectos" className="btn btn--volver detailBackButton">
          Volver a la lista
        </Button>
      </Paper>
    )
  }

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto

  return (
    <Paper className="detailCard">
      <Box className="detailHeader">
        <Button
          component={Link}
          to="/proyectos"
          className="btn btn--volver"
        >
          ← Volver a la lista
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom className="detailTitle">
        {titulo}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" className="detailMeta">
        <strong>Categoría:</strong> {categoria}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" className="detailMeta">
        <strong>Estado:</strong> {estado}
      </Typography>

      <Box className="detailDescription">
        <Typography paragraph>{descripcion[0]}</Typography>
        <Typography paragraph>{descripcion[1]}</Typography>
      </Box>

      <Typography variant="h6" className="detailSection">
        Recursos
      </Typography>
      <List className="detailList">
        {recursos.map((recurso, index) => (
          <ListItem key={index} disablePadding className="detailListItem">
            <a href={recurso.enlace} className="detailLink">
              {recurso.nombre}
            </a>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" className="detailSection">
        Equipo
      </Typography>
      <Box className="detailTeam">
        {equipo.map((miembro, index) => (
          <Typography key={index} variant="body1" className="detailTeamMember">
            {miembro.nombre} - {miembro.rol}
          </Typography>
        ))}
      </Box>
    </Paper>
  )
}

export default DetalleProyecto