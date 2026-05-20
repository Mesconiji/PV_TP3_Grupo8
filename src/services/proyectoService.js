const proyectoService = (() => {

    let proyectos = [
        {
            id: 1,
            titulo: "Tutoría de Álgebra",
            categoria: "Matemática",
            estado: "Activo",
            descripcion: [
                "Este proyecto busca nivelar a los estudiantes de primer año en los conceptos fundamentales del álgebra lineal.",
                "Se realizarán encuentros presenciales con prácticas intensivas para los exámenes."
            ],
            recursos: [
                { nombre: "Guía Práctica N1 (PDF)", enlace: "#" },
                { nombre: "Carpeta de Drive", enlace: "#" }
            ],
            equipo: [
                { nombre: "Juan Pérez", rol: "Tutor Principal" },
                { nombre: "María Gómez", rol: "Ayudante" }
            ]
        },

        {
            id: 2,
            titulo: "Apoyo en Inglés Técnico",
            categoria: "Idiomas",
            estado: "Activo",
            descripcion: [
                "Clases conversacionales orientadas a la lectura de documentación técnica informática.",
                "Se analizarán textos reales de tecnologías como React y Node.js."
            ],
            recursos: [
                { nombre: "Diccionario Técnico (PDF)", enlace: "#" }
            ],
            equipo: [
                { nombre: "Ana López", rol: "Tutora" }
            ]
        },

        {
            id: 3,
            titulo: "Proyecto Física I",
            categoria: "Física",
            estado: "Pendiente",
            descripcion: [
                "Resolución de problemas de cinemática y dinámica.",
                "Uso de simuladores interactivos para comprender los fenómenos físicos."
            ],
            recursos: [
                { nombre: "Simulador Web", enlace: "#" },
                { nombre: "Formulario (PDF)", enlace: "#" }
            ],
            equipo: [
                { nombre: "Carlos Ruiz", rol: "Coordinador" }
            ]
        },

        {
            id: 4,
            titulo: "Laboratorio de Programación",
            categoria: "Informática",
            estado: "Finalizado",
            descripcion: [
                "Desarrollo de aplicaciones web estáticas utilizando HTML, CSS y JavaScript básico.",
                "Proyecto final integrador con presentación grupal."
            ],
            recursos: [
                { nombre: "Repositorio GitHub", enlace: "#" }
            ],
            equipo: [
                { nombre: "Equipo Docente", rol: "Supervisores" }
            ]
        },

        {
            id: 5,
            titulo: "Red de Tutorías Solidarias",
            categoria: "Educación",
            estado: "Activo",
            descripcion: [
                "Plataforma central para organizar y distribuir los horarios de todas las tutorías.",
                "Mantenimiento del sistema y alta de nuevos usuarios."
            ],
            recursos: [
                { nombre: "Manual de Usuario", enlace: "#" }
            ],
            equipo: [
                { nombre: "Grupo 8", rol: "Desarrolladores" }
            ]
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