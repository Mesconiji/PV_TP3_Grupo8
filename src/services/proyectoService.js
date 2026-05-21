const proyectoService = (() => {

    let proyectos = [

        {
            id: 1,
            titulo: "Tutoría de Álgebra",
            categoria: "Matemática",
            estado: "Activo",
            visible: true,
            descripcion: [
                "Tutorías grupales de Álgebra para primer año. Se trabajan matrices, sistemas de ecuaciones y espacios vectoriales con ejercicios prácticos.",
                "Las sesiones son dos veces por semana. Se reparten guías de ejercicios y se hacen consultas antes de cada parcial."
            ],
            recursos: [
                { nombre: "Guía de ejercicios PDF", enlace: "https://drive.google.com/guia-algebra.pdf" },
                { nombre: "Repositorio GitHub", enlace: "https://github.com/tutores/algebra" },
                { nombre: "Carpeta Drive", enlace: "https://drive.google.com/folder/algebra" }
            ],
            equipo: [
                { nombre: "Lucía Fernández", rol: "Tutora principal" },
                { nombre: "Martín Gómez", rol: "Tutor de apoyo" },
                { nombre: "Valentina Ríos", rol: "Coordinadora" }
            ]
        },

        {
            id: 2,
            titulo: "Apoyo en Inglés Técnico",
            categoria: "Idiomas",
            estado: "Activo",
            visible: true,
            descripcion: [
                "Clases de inglés enfocadas en documentación técnica, manuales y bibliografía académica para carreras de informática.",
                "Se trabaja con textos reales del área IT y se practican entrevistas laborales en inglés."
            ],
            recursos: [
                { nombre: "Material de lectura PDF", enlace: "https://drive.google.com/ingles-tecnico.pdf" },
                { nombre: "Repositorio GitHub", enlace: "https://github.com/tutores/ingles-tecnico" },
                { nombre: "Carpeta Drive", enlace: "https://drive.google.com/folder/ingles" }
            ],
            equipo: [
                { nombre: "Carolina Sosa", rol: "Profesora de inglés" },
                { nombre: "Diego Herrera", rol: "Tutor técnico" }
            ]
        },

        {
            id: 3,
            titulo: "Proyecto Física I",
            categoria: "Física",
            estado: "Pendiente",
            visible: true,
            descripcion: [
                "Acompañamiento en Física I: cinemática, dinámica, trabajo y energía. Se resuelven ejercicios de parciales anteriores en grupo.",
                "Hay sesiones de consulta abiertas antes de cada evaluación y explicaciones en pizarrón."
            ],
            recursos: [
                { nombre: "Ejercicios resueltos PDF", enlace: "https://drive.google.com/fisica1.pdf" },
                { nombre: "Repositorio GitHub", enlace: "https://github.com/tutores/fisica1" },
                { nombre: "Carpeta Drive", enlace: "https://drive.google.com/folder/fisica" }
            ],
            equipo: [
                { nombre: "Andrés Molina", rol: "Tutor principal" },
                { nombre: "Florencia Castro", rol: "Tutora de apoyo" },
                { nombre: "Ignacio Paz", rol: "Coordinador de horarios" }
            ]
        },

        {
            id: 4,
            titulo: "Laboratorio de Programación",
            categoria: "Informática",
            estado: "Finalizado",
            visible: true,
            descripcion: [
                "Práctica de programación en Python y JavaScript para estudiantes de primer año. Se resolvían ejercicios semanales y proyectos grupales.",
                "El laboratorio cerró al finalizar el cuatrimestre. Todos los materiales siguen disponibles en el repositorio."
            ],
            recursos: [
                { nombre: "Apuntes y ejercicios PDF", enlace: "https://drive.google.com/lab-prog.pdf" },
                { nombre: "Repositorio GitHub", enlace: "https://github.com/tutores/lab-programacion" },
                { nombre: "Carpeta Drive", enlace: "https://drive.google.com/folder/laboratorio" }
            ],
            equipo: [
                { nombre: "Sebastián Ávila", rol: "Instructor principal" },
                { nombre: "Camila Torres", rol: "Instructora de apoyo" }
            ]
        },

        {
            id: 5,
            titulo: "Red de Tutorías Solidarias",
            categoria: "Educación",
            estado: "Activo",
            visible: true,
            descripcion: [
                "Conecta estudiantes avanzados con compañeros que necesitan ayuda en matemática, física, programación e idiomas. Es gratuito y voluntario.",
                "Se gestiona por una plataforma donde podés buscar tutor por materia y horario disponible."
            ],
            recursos: [
                { nombre: "Reglamento PDF", enlace: "https://drive.google.com/red-tutorias.pdf" },
                { nombre: "Repositorio GitHub", enlace: "https://github.com/tutores/red-solidaria" },
                { nombre: "Carpeta Drive", enlace: "https://drive.google.com/folder/red" }
            ],
            equipo: [
                { nombre: "Ramiro Juárez", rol: "Coordinador general" },
                { nombre: "Natalia Benítez", rol: "Gestión de voluntarios" },
                { nombre: "Pablo Quiroga", rol: "Soporte técnico" }
            ]
        }

    ];

    const obtenerProyectos = () => {
        return [...proyectos];
    };

    const obtenerProyectosActivos = () => {
        return proyectos.filter(proyecto => proyecto.visible === true);
    };

    const agregarProyecto = (nuevoProyecto) => {
        proyectos.push(nuevoProyecto);
    };

    const eliminarProyecto = (id) => {
        const proyecto = proyectos.find(p => p.id === id);
        if (proyecto) {
            proyecto.visible = false;
        }
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
        obtenerProyectosActivos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };

})();

export default proyectoService;