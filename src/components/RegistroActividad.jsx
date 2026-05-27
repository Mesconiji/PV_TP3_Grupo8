
const RegistroActividad = ({ fechaHora }) => {
    
  return (
    <div 
      style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px', 
        textAlign: 'center', 
        border: '1px solid #ced4da',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
    >
      <p style={{ margin: 0, fontWeight: '600', color: '#2c3e50', fontSize: '1.1rem' }}>
         Última actualización de la lista: {fechaHora}
      </p>
    </div>
  );
};

export default RegistroActividad;