import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Albumes.module.css"; 

const Albumes = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      fetch("http://localhost:3000/albumes")
        .then((res) => res.json())
        .then((data) => {
          setAlbums(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al cargar los álbumes:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Cargando álbumes...</p>;

    return (
        <div className={styles.container}>
          <h2>Álbumes</h2>
          <div className={styles.grid}>
            {albums.map((album) => (
              <Link key={album.id} to={`/album/${album.id}`} className={styles.card}>
                <img src={album.cover} alt={album.name} />
                <p>{album.name}</p>
              </Link>
            ))}
          </div>
        </div>
      );
    };
    
    export default Albumes;