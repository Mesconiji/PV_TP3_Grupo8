import { useState, useEffect } from "react";
import RegistroActividad from "./RegistroActividad";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState([]);

    const [fechaHora, setFechaHora] = useState("");

    useEffect(() => {

        const ahora = new Date();

        const fechaFormateada =
            ahora.toLocaleDateString() +
            " a las " +
            ahora.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            }) +
            " hs.";

        setFechaHora(fechaFormateada);

    }, [proyectos]);

    return (

        <div>

            <h2>Lista de Proyectos</h2>

            <RegistroActividad fechaHora={fechaHora} />

        </div>

    );

};

export default ListaProyectos;
