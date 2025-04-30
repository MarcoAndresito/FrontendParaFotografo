import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './AlbumList.module.css';

const AlbumList = () => {
    const [albumes, setAlbumes] = useState([]);

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
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>------Lista de Álbumes------</h1>
        <button className={styles.addButton}>Agregar nuevo álbum</button>  
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
                  <button className={styles.actionsButton}>Subir foto</button>
                  <button className={styles.actionsButton}>Descargar álbum</button>
                  <button className={styles.actionsButton}>Editar</button>
                  <button className={styles.actionsButton}>Eliminar</button>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default AlbumList;