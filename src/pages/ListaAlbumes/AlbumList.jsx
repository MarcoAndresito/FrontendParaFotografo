import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AlbumList.module.css"; // Asegúrate de tener este archivo CSS para estilos

const AlbumList = () => {
    const [albumes, setAlbumes] = useState([]);

    const obtenerAlbumes = () => {
        fetch("https://localhost:7062/api/Albumes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setAlbumes(data);
            })
            .catch((error) => {
                console.log("error:", error);
            });
    };

    return (
        <div>
            <h1>------Lista de Álbumes------</h1>
            <table>
                <thead>
                    <tr>
                        <th>  ID  </th>
                        <th>  Nombre  </th>
                        <th>  Descripción  </th>
                        <th>  Acciones  </th>
                    </tr>
                </thead>
                <tbody>
                    {albumes.map((album) => (
                        <tr key={album.id}>
                            <td>{album.id}</td>
                            <td>{album.nombre}</td>
                            <td>{album.descripcion}</td>
                            <td>{album.acciones}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AlbumList;