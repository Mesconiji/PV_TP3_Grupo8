import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const ProyectoCard = ({ proyecto, manejarEliminar }) => {

  const { titulo, categoria, estado, id } = proyecto

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>

      <CardContent>

        <Typography variant="h5">
          {titulo}
        </Typography>

        <Typography color="text.secondary">
          {categoria}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Estado: {estado}
        </Typography>

      </CardContent>

      <CardActions>

        <Button
          component={Link}
          to={`/proyectos/${id}`}
          size="small"
        >
          Ver detalle
        </Button>

        <Button
          size="small"
          color="error"
          onClick={() => manejarEliminar(id)}
        >
          Eliminar
        </Button>

      </CardActions>

    </Card>
  )
}

export default ProyectoCard

