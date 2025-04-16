import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ConfigurarAlbum.module.css"; // Importa el archivo CSS

const ConfigurarAlbum = () => {
  const [albumName, setAlbumName] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [isPublic, setIsPublic] = useState(false); // Estado para público/privado
  const [photos, setPhotos] = useState([
    "https://img.freepik.com/foto-gratis/familia-pequeno-hijo-parque-otono_1157-22273.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/foto-gratis/retrato-cuerpo-entero-familia-sonriente-nino_171337-10331.jpg",
    "https://img.freepik.com/foto-gratis/familia-vista-frontal-pasando-rato-embarcadero_23-2150558016.jpg",
    "https://img.freepik.com/foto-gratis/padres-felices-hijo-naturaleza_23-2148201539.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/foto-gratis/padres-felices-hijo-naturaleza_23-2148201530.jpg?semt=ais_hybrid&w=740",
  ]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Configurar Álbum</h1>
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
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            className={styles.checkbox}
          />
          ¿Hacer el álbum público?
        </label>
      </div>
      <div className={styles.albumStatus}>
        <p>
          Estado del álbum: <strong>{isPublic ? "Público" : "Privado"}</strong>
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <h2>Fotos del Álbum</h2>
        <Carousel responsive={responsive}>
          {photos.map((photo, index) => (
            <div key={index} className={styles.carouselItem}>
              <img
                src={photo}
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
