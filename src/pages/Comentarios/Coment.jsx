// Goerge Mahonri Soto Barrientos

import React, { useState } from 'react';
import './Coment.css'; 

const PROHIBITED_WORDS = ['palabrota1', 'palabrota2'];
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
const MAX_IMAGE_SIZE_MB = 2;
const MAX_IMAGE_COUNT = 3;
const COMMENT_COOLDOWN_MS = 10000;
const MAX_TEXT_LENGTH = 500;
const existingUsers = ['@juan', '@maria', '@admin'];

const COMENT = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [lastCommentTime, setLastCommentTime] = useState(0);
  const [error, setError] = useState('');
  const [lastComment, setLastComment] = useState('');
  const [comments, setComments] = useState([]);
  

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

  const validateMentions = (text) => {
    const mentions = text.match(/@\w+/g) || [];
    return mentions.every(m => existingUsers.includes(m));
  };

  const handleSubmit = () => {
    const now = Date.now();

    if (text.trim() === '') {
      setError("El comentario no puede estar vacío.");
      return;
    }

    if (text.length > MAX_TEXT_LENGTH) {
      setError(`Máximo ${MAX_TEXT_LENGTH} caracteres permitidos.`);
      return;
    }

    if (!validateMentions(text)) {
      setError("Una o más menciones no son válidas.");
      return;
    }

    if (!isRichTextValid(text)) {
      setError("El formato enriquecido es inválido.");
      return;
    }

    if (containsProhibitedWords(text)) {
      setError("Tu comentario contiene palabras no permitidas.");
      return;
    }

    if (containsEmptyTags(text)) {
      setError("Hay etiquetas vacías en tu comentario.");
      return;
    }

    if (now - lastCommentTime < COMMENT_COOLDOWN_MS) {
      setError("Debes esperar antes de comentar nuevamente.");
      return;
    }

    if (text === lastComment) {
      setError("Este comentario ya fue enviado.");
      return;
    }

    // Comentario válido
    setLastCommentTime(now);
    setLastComment(text);
    setError('');
    alert("Comentario enviado correctamente");

    setComments(prev => [...prev, { text, images }]);

    setText('');
    setImages([]);
  };

  const handleDeleteComment = (index) => {
    setComments(prev => prev.filter((_, i) => i !== index));
  };

  const handleReportComment = (index) => {
    alert("Comentario reportado. Será revisado por un moderador.");
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
    <button onClick={handleSubmit} className="coment-button">
        Comentar
    </button>

    <div className="coment-list">
        {comments.map((coment, index) => (
          <div key={index} className="coment-item">
            <p dangerouslySetInnerHTML={{ __html: coment.text }}></p>

            {coment.images.length > 0 && (
              <div className="coment-image-preview">
                {coment.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="coment-image-thumb"
                  />
                ))}
              </div>
            )}

            <button onClick={() => handleReportComment(index)} className="coment-button-report">
               Reportar
            </button>
            <button onClick={() => handleDeleteComment(index)} className="coment-button-delete">
              Eliminar
            </button>
          </div>
        ))}
      </div>


    </div>
  );
};

export default COMENT;