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


  return (
    <div className="coment-container">
        <h2 className="coment-title" >DEJA TU COMENTARIO</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Escribe algo interesante..."
        className="coment-textarea"
      
      />
    </div>
  );
};

export default COMENT;