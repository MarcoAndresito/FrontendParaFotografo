import React, { useState, useRef } from 'react';

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

  const handleUpload = async () => { // Declara handleUpload como async
    if (selectedFiles.length === 0) {
      showNotification("Selecciona al menos una imagen", "error");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      selectedFiles.forEach(fileObj => {
        formData.append('imageFile', fileObj.file); // Usa el nombre 'imageFile' que espera tu backend
      });

      // AbortController para cancelar la subida
      uploadController.current = new AbortController();
      const signal = uploadController.current.signal;

      const response = await fetch('http://localhost:5018/api/upload/uploadFoto', { // Usa la ruta correcta
        method: 'POST',
        body: formData,
        signal: signal, // Pasa la señal al fetch
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Respuesta del servidor:", data); // Agrega esto para ver la respuesta del servidor

      if (data && data.images && Array.isArray(data.images)) {
        setImages(prevImages => [...prevImages, ...data.images]);
        showNotification("Imágenes subidas correctamente", "success");
      } else if (data && data.imageUrl) {
        setImages(prevImages => [...prevImages, data.imageUrl]);
        showNotification("Imagen subida correctamente", "success");
      }
       else {
        showNotification("No se recibieron las URLs de las imágenes", "error");
      }

      setSelectedFiles([]);
      setUploading(false);
      setUploadProgress(0);


    } catch (error) {
      if (error.name === 'AbortError') {
        showNotification("Subida cancelada", "info");
      } else {
        console.error("Error al subir imágenes:", error);
        showNotification(`Error al subir imágenes: ${error.message}`, "error");
      }
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleCancelUpload = () => {
    if (uploadController.current) {
      uploadController.current.abort(); // Cancela la petición fetch
    }
    setUploading(false);
    setUploadProgress(0);
    setSelectedFiles([]); // Limpia los archivos seleccionados
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000); // Oculta la notificación después de 5 segundos
  };

  const handleDeleteImage = (imageUrl) => {
    setImages(prevImages => prevImages.filter(img => img !== imageUrl));
  };

  return (
    <div className="upload-container">
      <h1>Subir Fotos</h1>

      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current.click()}
      >
        <p>Arrastra y suelta imágenes aquí o haz clic para seleccionar archivos</p>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }} // Oculta el input real
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
        <button onClick={handleUpload} disabled={uploading}>Subir Imágenes</button>
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


