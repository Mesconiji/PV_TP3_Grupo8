import Alert from '@mui/material/Alert';

const RegistroActividad = ({ fechaHora }) => {
    
  return (
      <Alert severity="info" icon={false} sx={{ marginTop: 2 }}>
         Última actualización de la lista: {fechaHora}
      </Alert>
  );
};

export default RegistroActividad;