// pages/UploadPhoto.js
import React, { useState } from 'react';

function UploadPhoto() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    const imageUrls = selectedFiles.map(file => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  return (
    <div>
      <h2>Subir Fotos o Álbum</h2>
      <input 
        type="file" 
        multiple 
        onChange={handleFileChange} 
      />
      <button onClick={handleUpload}>
        Subir Imágenes
      </button>
      
      <div className="gallery">
        {images.map((imageUrl, index) => (
          <div key={index} className="image-item">
            <img src={imageUrl} alt={`img-${index}`} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadPhoto;
