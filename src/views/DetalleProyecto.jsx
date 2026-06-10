import { useParams, Link } from 'react-router-dom';
import proyectoService from '../services/proyectoService';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const DetalleProyecto = () => {
  const { id } = useParams();
  const listaProyectos = proyectoService.obtenerProyectos();
  const proyecto = listaProyectos.find((p) => p.id.toString() === id);

  if (!proyecto) {
    return (
      <Paper className="card" sx={{ width: '100%', textAlign: 'center', p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Proyecto no encontrado
        </Typography>
        <Button component={Link} to="/proyectos" className="btn btn--volver" sx={{ mt: 2 }}>
          Volver a la lista
        </Button>
      </Paper>
    );
  }

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

  return (
    <Paper className="card" sx={{ width: '100%', p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Button
          component={Link}
          to="/proyectos"
          className="btn btn--volver"
          sx={{ display: 'inline-block', textDecoration: 'none' }}
        >
          ← Volver a la lista
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom align="center">
        {titulo}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary">
        <strong>Categoría:</strong> {categoria}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        <strong>Estado:</strong> {estado}
      </Typography>

      <Box sx={{ my: 2 }}>
        <Typography paragraph>{descripcion[0]}</Typography>
        <Typography paragraph>{descripcion[1]}</Typography>
      </Box>

      <Typography variant="h6" sx={{ mt: 2 }} align="center">
        Recursos
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {recursos.map((recurso, index) => (
          <ListItem key={index} disablePadding sx={{ justifyContent: 'center' }}>
            <a
              href={recurso.enlace}
              style={{ color: 'var(--color-secundario)', textDecoration: 'none' }}
            >
              {recurso.nombre}
            </a>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" sx={{ mt: 2 }} align="center">
        Equipo
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mt: 1 }}>
        {equipo.map((miembro, index) => (
          <Typography key={index} variant="body1" align="center">
            {miembro.nombre} - {miembro.rol}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default DetalleProyecto;