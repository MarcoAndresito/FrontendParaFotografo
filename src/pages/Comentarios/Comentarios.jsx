import React, { useState } from "react";
import "./Comentarios.css"; // No uses "styles" aquí si es un archivo .css normal
import "./ModComentarios";
import { Link } from 'react-router-dom';


    const PROHIBITED_WORDS = ['palabrota1', 'palabrota2'];
    const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
    const MAX_IMAGE_SIZE_MB = 2;
    const MAX_IMAGE_COUNT = 3;
    const COMMENT_COOLDOWN_MS = 10000;
    const existingUsers = ['@juan', '@maria', '@admin'];
    
    const Comentarios = () => {
      const [text, setText] = useState('');
      const [images, setImages] = useState([]);
      const [lastCommentTime, setLastCommentTime] = useState(0);
      const [error, setError] = useState('');
      const [lastComment, setLastComment] = useState('');
    
      const handleTextChange = (e) => {
        setText(e.target.value);
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
    
      const hasValidMentions = (text) => {
        const mentions = text.match(/@\w+/g);
        if (!mentions) return true;
        return mentions.every((m) => existingUsers.includes(m));
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
    
      const handleSubmit = () => {
        const now = Date.now();
    
        if (now - lastCommentTime < COMMENT_COOLDOWN_MS) {
          setError('Espera unos segundos antes de comentar de nuevo.');
          return;
        }
    
        if (text.trim().length < 5) {
          setError('El comentario es demasiado corto.');
          return;
        }
    
        if (text === lastComment) {
          setError('No repitas el mismo comentario.');
          return;
        }
    
        if (containsProhibitedWords(text)) {
          setError('Tu comentario contiene palabras no permitidas.');
          return;
        }
    
        if (!hasValidMentions(text)) {
          setError('Has mencionado usuarios que no existen.');
          return;
        }
    
        if (containsEmptyTags(text)) {
          setError('No se permiten etiquetas vacías.');
          return;
        }
    
        if (!isRichTextValid(text)) {
          setError('Formato de texto enriquecido inválido.');
          return;
        }
    
        // Aquí podrías agregar integración con API para moderación automática
    
        console.log('Comentario publicado:', text, images);
        setLastComment(text);
        setLastCommentTime(now);
        setText('');
        setImages([]);
        setError('');
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
          </button> <br /> <br />
          <Link to="/ModComentarios">
  <button className="mode-button">
    Moderador
  </button>
</Link>
        </div>
      );
    };
    

export default Comentarios;
