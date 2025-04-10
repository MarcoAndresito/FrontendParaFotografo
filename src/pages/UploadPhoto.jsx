// src/pages/UploadPhoto.jsx
import React, { useState, useRef } from 'react';
import '../App.css';

function UploadPhoto() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [notification, setNotification] = useState(null);
  const fileInputRef = useRef(null);
  const uploadController = useRef(null);

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const previewFiles = fileArray.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Date.now() + Math.random()
    }));
    setSelectedFiles(prev => [...prev, ...previewFiles]);
  };

  const handleFileChange = (e) => handleFiles(e.target.files);
  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };
  const handleDragOver = (e) => e.preventDefault();

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      showNotification("Selecciona al menos una imagen", "error");
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    let progress = 0;

    uploadController.current = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(uploadController.current);
        const newImages = selectedFiles.map(f => f.preview);
        setImages(prev => [...prev, ...newImages]);
        setSelectedFiles([]);
        setUploading(false);
        showNotification("¡Imágenes subidas exitosamente!", "success");
      }
    }, 200);
  };

  const handleCancelUpload = () => {
    if (uploadController.current) {
      clearInterval(uploadController.current);
      setUploading(false);
      setUploadProgress(0);
      showNotification("Subida cancelada", "error");
    }
  };

  const handleDeleteImage = (imageUrl) => {
    setImages(prev => prev.filter(img => img !== imageUrl));
    showNotification("Imagen eliminada", "success");
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="upload-photo-container">
      <h2>Subir Fotos o Álbum</h2>

      <div
        className="drop-zone"
        onClick={() => fileInputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Arrastra y suelta imágenes aquí o haz clic para seleccionar
        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          hidden
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className="gallery">
          {selectedFiles.map((file, index) => (
            <div key={file.id} className="image-item">
              <img src={file.preview} alt={`preview-${index}`} />
            </div>
          ))}
        </div>
      )}

      {!uploading ? (
        <button onClick={handleUpload}>Subir Imágenes</button>
      ) : (
        <div className="upload-progress">
          <p>Subiendo... {uploadProgress}%</p>
          <progress value={uploadProgress} max="100" />
          <button onClick={handleCancelUpload} className="cancel-btn">
            Cancelar Subida
          </button>
        </div>
      )}

      {images.length > 0 && (
        <>
          <h2>Álbum</h2>
          <div className="gallery">
            {images.map((imageUrl, index) => (
              <div key={index} className="image-item">
                <img src={imageUrl} alt={`img-${index}`} />
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteImage(imageUrl)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default UploadPhoto;
