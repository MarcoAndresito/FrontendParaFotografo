import React, { useState } from "react";
import styles from "./ConfigurarAlbum.module.css";

const ConfigurarAlbum = () => {
  const [albumName, setAlbumName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...imagePreviews]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSave = () => {
    const albumData = {
      name: albumName,
      description,
      images: images.map((image) => image.file), // Solo los archivos
    };
    console.log("Album saved:", albumData);
    // Aquí puedes enviar los datos al backend
  };

  return (
    <div className={styles.container}>
      <h1>Configurar Álbum</h1>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Nombre del Álbum:
          <input
            type="text"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Descripción:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Subir Imágenes:
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            style={{ marginTop: "5px", padding: "8px", width: "100%" }}
          />
        </label>
        <div style={{ marginTop: "10px" }}>
          {images.length > 0 && (
            <ul
              style={{
                width: "100%",
                listStyle: "none",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap", // Permite que los elementos se ajusten a una nueva fila
              }}
            >
              {images.map((image, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "10px", width: "100px" }}
                >
                  <img
                    src={image.preview}
                    alt={`Preview ${index}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "10px",
                    }}
                  />
                  <button onClick={() => handleRemoveImage(index)}>
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <button onClick={handleSave}>Guardar Álbum</button>
    </div>
  );
};

export default ConfigurarAlbum;
