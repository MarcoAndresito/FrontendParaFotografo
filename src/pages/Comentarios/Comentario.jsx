import React, { useState } from 'react';


const PROHIBITED_WORDS = ['palabrota1', 'palabrota2'];
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
const MAX_IMAGE_SIZE_MB = 2;
const MAX_IMAGE_COUNT = 3;
const COMMENT_COOLDOWN_MS = 10000;
const existingUsers = ['@juan', '@maria', '@admin'];

const COMENT = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [lastCommentTime, setLastCommentTime] = useState(0);
  const [error, setError] = useState('');
  const [lastComment, setLastComment] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    setError(''); // Limpiar el error al escribir
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > MAX_IMAGE_COUNT) {
      setError(`Máximo ${MAX_IMAGE_COUNT} imágenes permitidas.`);
      return;
    }

    for (let file of files) {
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        setError('Solo se permiten imágenes JPG, PNG y GIF.');
        return;
      }
      if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
        setError(`El tamaño máximo por imagen es ${MAX_IMAGE_SIZE_MB}MB.`);
        return;
      }
    }

    setImages((prev) => [...prev, ...files]);
    setError('');
  };

  const containsProhibitedWords = (text) => {
    return PROHIBITED_WORDS.some((word) =>
      text.toLowerCase().includes(word)
    );
  };

  const containsEmptyTags = (text) => {
    return /<[^/>]*><\/[^>]*>/.test(text);
  };

  const isRichTextValid = (text) => {
    const richTextPattern = /<b>|<i>|<a href="[^"]+">.*?<\/a>/;
    return richTextPattern.test(text) || text === '';
  };



  return (
    <div className="coment-container">
        <h2 className="coment-title" >DEJA TU COMENTARIO</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Escribe algo interesante..."
        className="coment-textarea"
      />

       <input
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.gif"
        onChange={handleImageUpload}
        className="coment-file-input"
      />

      {images.length > 0 && (
        <div className="coment-image-preview">
          {images.map((img, idx) => (
            <div key={idx} className="coment-image-box">
              <img src={URL.createObjectURL(img)} alt="preview" />
            </div>
          ))}
        </div>
      )}
    {error && <div className="coment-error">{error}</div>}
    <button className="coment-button">
        Comentar
    </button>


    </div>
  );
};

export default COMENT;