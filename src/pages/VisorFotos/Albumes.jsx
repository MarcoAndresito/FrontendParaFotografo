import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Albumes.module.css";

const Albumes = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [covers, setCovers] = useState({}); // clave: albumId, valor: url base64

  useEffect(() => {
    fetch("https://localhost:7062/api/Albumes")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);

        // Obtener la primera foto de cada álbum
        data.forEach((album) => {
          fetch(`https://localhost:7062/api/Albumes/${album.id}/Fotos`)
            .then((res) => res.json())
            .then((fotos) => {
              if (fotos.length > 0) {
                const foto = fotos[0];
                const imageUrl = `data:${foto.contentType};base64,${foto.imageBytes}`;
                setCovers((prev) => ({ ...prev, [album.id]: imageUrl }));
              }
            });
        });
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
            {covers[album.id] ? (
              <img src={covers[album.id]} alt={album.nombre} />
            ) : (
              <div className={styles.placeholder}>Sin imagen</div>
            )}
            <p>{album.nombre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Albumes;
