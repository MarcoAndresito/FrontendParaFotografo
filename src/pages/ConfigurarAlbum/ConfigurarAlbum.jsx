import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ConfigurarAlbum.module.css";

const ConfigurarAlbum = () => {
  const [albums, setAlbums] = useState([]); // Lista de álbumes
  const [albumId, setAlbumId] = useState(null); // ID del álbum seleccionado
  const [albumName, setAlbumName] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [creationDate, setCreationDate] = useState(""); // Fecha de creación
  const [photos, setPhotos] = useState([]); // Fotos del álbum
  const [loading, setLoading] = useState(true); // Indicador de carga

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  // Cargar álbumes disponibles
  const fetchAlbums = async () => {
    try {
      const response = await fetch("https://localhost:7062/api/Albumes");
      if (response.ok) {
        const data = await response.json();
        setAlbums(data);
      } else {
        console.error("Error al cargar los álbumes:", response.statusText);
        alert("Error al cargar los álbumes");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Error al conectar con el servidor");
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  // Cargar datos del álbum seleccionado
  const fetchAlbumDetails = async (id) => {
    try {
      const response = await fetch(`https://localhost:7062/api/Albumes/${id}`);
      if (response.ok) {
        const album = await response.json();
        setAlbumName(album.nombre || "");
        setAlbumDescription(album.descripcion || "");
        setOwnerName(album.usuarioId || "");
        setCreationDate(album.fechaCreacion || ""); // Fecha de creación
        setPhotos(album.fotos || []); // Fotos del álbum
      } else {
        console.error("Error al cargar los detalles del álbum:", response.statusText);
        alert("Error al cargar los detalles del álbum");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Error al conectar con el servidor");
    }
  };

  // Manejar selección de álbum
  const handleAlbumSelect = (e) => {
    const selectedId = e.target.value;
    setAlbumId(selectedId);
    if (selectedId) {
      fetchAlbumDetails(selectedId);
    } else {
      // Limpiar el formulario si no hay álbum seleccionado
      setAlbumName("");
      setAlbumDescription("");
      setOwnerName("");
      setCreationDate("");
      setPhotos([]);
    }
  };

  // Guardar cambios en el álbum
  const handleSaveChanges = async () => {
    if (!albumId) {
      alert("Por favor, selecciona un álbum para guardar los cambios.");
      return;
    }

    const updatedAlbum = {
      id: albumId,
      nombre: albumName,
      descripcion: albumDescription,
      usuarioId: ownerName,
      fechaCreacion: creationDate,
    };

    try {
      const response = await fetch(`https://localhost:7062/api/Albumes/${albumId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAlbum),
      });

      if (response.ok) {
        alert("Cambios guardados con éxito.");
      } else {
        console.error("Error al guardar los cambios:", response.statusText);
        alert("Error al guardar los cambios.");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Cargando...</p>; // Indicador de carga
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Configurar Álbum</h1>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Seleccionar Álbum:
          <select
            value={albumId || ""}
            onChange={handleAlbumSelect}
            className={styles.select}
          >
            <option value="">-- Seleccionar --</option>
            {albums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.nombre}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Nombre del Álbum:
          <input
            type="text"
            value={albumName}
            onChange={handleInputChange(setAlbumName)}
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Descripción del Álbum:
          <textarea
            value={albumDescription}
            onChange={handleInputChange(setAlbumDescription)}
            className={styles.textarea}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Nombre del Propietario:
          <input
            type="text"
            value={ownerName}
            onChange={handleInputChange(setOwnerName)}
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Fecha de Creación:
          <input
            type="date"
            value={creationDate.split("T")[0]} // Formato de fecha
            onChange={handleInputChange(setCreationDate)}
            className={styles.input}
          />
        </label>
      </div>
      <button onClick={handleSaveChanges} className={styles.button}>
        Guardar Cambios
      </button>
      <div className={styles.carouselContainer}>
        <h2>Fotos del Álbums</h2>
        <Carousel responsive={{}}>
          {photos.map((photo, index) => (
            <div key={index} className={styles.carouselItem}>
              <img
                src={`data:image/jpeg;base64,${photo.imageBytes}`} // Mostrar fotos en base64
                alt={`Foto ${index + 1}`}
                className={styles.carouselItemImg}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ConfigurarAlbum;