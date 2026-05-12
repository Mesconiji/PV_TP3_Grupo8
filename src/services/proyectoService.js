const proyectoService = (() => {

    let proyectos = [

        {
            id: 1,
            titulo: "Tutoría de Álgebra",
            categoria: "Matemática",
            estado: "Activo"
        },

        {
            id: 2,
            titulo: "Apoyo en Inglés Técnico",
            categoria: "Idiomas",
            estado: "Activo"
        },

        {
            id: 3,
            titulo: "Proyecto Física I",
            categoria: "Física",
            estado: "Pendiente"
        },

        {
            id: 4,
            titulo: "Laboratorio de Programación",
            categoria: "Informática",
            estado: "Finalizado"
        },

        {
            id: 5,
            titulo: "Red de Tutorías Solidarias",
            categoria: "Educación",
            estado: "Activo"
        }

    ];

    const obtenerProyectos = () => {

        return [...proyectos];

    };

    const agregarProyecto = (nuevoProyecto) => {

        proyectos.push(nuevoProyecto);

    };

    const eliminarProyecto = (id) => {

        proyectos = proyectos.filter(
            proyecto => proyecto.id !== id
        );

    };

    const buscarProyecto = (texto) => {

        return proyectos.filter(
            proyecto =>
                proyecto.titulo
                    .toLowerCase()
                    .includes(texto.toLowerCase())
        );

    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };

})();

export default proyectoService;