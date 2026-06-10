
const RegistroActividad = ({ fechaHora }) => {
    
  return (
    <div className="registro-actividad">
      <p className="registro-actividad__texto">
         Última actualización de la lista: {fechaHora}
      </p>
    </div>
  );

};

export default RegistroActividad;