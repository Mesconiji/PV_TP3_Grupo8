import { Card, CardHeader, CardContent, CardActions, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ProyectoCard = ({ proyecto, manejarEliminar }) => {
  const { titulo, categoria, estado, id } = proyecto

  return (
    <Card variant="outlined" className="card proyecto-card">
      <CardHeader
        title={titulo}
        subheader={categoria}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
      />

      <CardContent sx={{ display: 'flex', justifyContent: 'center', pb: 1 }}>
        <span className={`badge ${estado === 'Activo' ? 'badge-teal' : 'badge-gray'}`}>
          {estado}
        </span>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', gap: 2, pb: 2 }}>
        <Button
          component={Link}
          to={`/proyectos/${id}`}
          size="small"
          className="btn btn--detalle"
          sx={{ textTransform: 'none', padding: '6px 12px', fontSize: '0.9rem' }}
        >
          Ver detalle
        </Button>

        <Button
          className="btn btn--eliminar"
          size="small"
          onClick={() => manejarEliminar(id)}
          sx={{ textTransform: 'none', padding: '6px 12px', fontSize: '0.9rem' }}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProyectoCard