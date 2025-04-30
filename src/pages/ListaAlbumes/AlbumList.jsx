import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './AlbumList.module.css';

const AlbumList = () => {
    const [albumes, setAlbumes] = useState([]);
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const obtenerAlbumes = () => {
        fetch("https://localhost:44302/api/Albumes", {
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

    useEffect(() => {
        obtenerAlbumes();
    }, []);

    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    return (
        <div className={styles.container}>
           <h1 className={styles.title}>------Lista de Álbumes------</h1>
            <div className={styles.buttonContainer}> {/* Nuevo contenedor para el botón */}
                <button className={styles.addButton}>Agregar nuevo álbum</button>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th className={styles.th}> ID </th>
                            <th className={styles.th}> Nombre </th>
                            <th className={styles.th}> Descripción </th>
                            <th className={styles.th}> Acciones </th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {albumes.map((album) => (
                            <tr key={album.id}>
                                <td className={styles.td}>{album.id}</td>
                                <td className={styles.td}>{album.nombre}</td>
                                <td className={styles.td}>{album.descripcion}</td>
                                <td className={styles.td}>
                                    <div className={styles.dropdown}>
                                        <button
                                            className={styles.dropdownButton}
                                            onClick={() => toggleDropdown(album.id)}
                                        >
                                            Acciones
                                        </button>
                                        {openDropdownId === album.id && (
                                            <div className={styles.dropdownContent}>
                                                <button className={styles.dropdownItem}>Subir</button>
                                                <button className={styles.dropdownItem}>Descargar</button>
                                                <button className={styles.dropdownItem}>Editar</button>
                                                <button className={styles.dropdownItem}>Eliminar</button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AlbumList;