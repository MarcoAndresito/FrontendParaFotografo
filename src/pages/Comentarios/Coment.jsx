// Goerge Mahonri Soto Barrientos

import React, { useState, useEffect } from "react";
import "./Coment.css";

const PROHIBITED_WORDS = ["palabrota1", "palabrota2"];
const MAX_TEXT_LENGTH = 500;

const ComentariosComponent = ({ fotoId }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [loadingComments, setLoadingComments] = useState(false);
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    if (fotoId) {
      fetchComments(fotoId);
    }
  }, [fotoId]);

  const fetchComments = async (id) => {
    setLoadingComments(true);
    try {
      const response = await fetch(`TU_API_URL/api/fotos/${id}/comentarios`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
     setComments(data);
    } catch (error) {
      setError("Error al cargar los comentarios.");
      console.error("Error fetching comments:", error);
    } finally {
      setLoadingComments(false);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setError(""); 
  };

  const containsProhibitedWords = (text) => {
    return PROHIBITED_WORDS.some((word) => text.toLowerCase().includes(word));
  };

  const handleSubmit = async () => {
    if (text.length > MAX_TEXT_LENGTH) {
      setError(`Máximo ${MAX_TEXT_LENGTH} caracteres permitidos.`);
      return;
    }

    if (containsProhibitedWords(text)) {
      setError("Tu comentario contiene palabras no permitidas.");
      return;
    }

    setSubmittingComment(true);
    try {
      const response = await fetch(
        `TU_API_URL/api/fotos/${fotoId}/comentarios`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ texto: text }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchComments(fotoId);
      setText(""); 
      setError("");
    } catch (error) {
      setError("Error al guardar el comentario.");
      console.error("Error submitting comment:", error);
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleLikeComment = (commentId) => {
    console.log(`Me gusta en el comentario con ID: ${commentId}`);
  };

  const handleReplyToComment = (commentId) => {
    console.log(`Responder al comentario con ID: ${commentId}`);
  };

  const handleReportComment = (commentId) => {
    console.log(`Reportar el comentario con ID: ${commentId}`);
  };

  return (
    <div className="coment-container">
      <h2 className="coment-title">COMENTARIOS</h2>

      {loadingComments ? (
        <p>Cargando comentarios...</p>
      ) : error ? (
        <div className="coment-error">{error}</div>
      ) : (
        <div className="coment-list">
          {comments.map((comentario) => (
            <div key={comentario.id} className="coment-item">
              <div className="coment-header">
                <img src="avatar.jpg" alt="Avatar" className="coment-avatar" />
                <div className="coment-content">
                  <span className="coment-author">Usuario</span>{" "}
                  {/* Aquí podrías mostrar el nombre del usuario */}
                  <p className="coment-text">{comentario.texto}</p>{" "}
                  {/* Ajusta el nombre del campo según tu backend */}
                  {comentario.fechaCreacion && (
                    <button>
                      {new Date(comentario.fechaCreacion).toLocaleTimeString()}{" "}
                      -{" "}
                      {new Date(comentario.fechaCreacion).toLocaleDateString()}
                    </button>
                  )}
                </div>
              </div>
              <div className="coment-actions">
                <button onClick={() => handleLikeComment(comentario.id)}>
                  Me gusta
                </button>
                <button onClick={() => handleReplyToComment(comentario.id)}>
                  Responder
                </button>
                <button onClick={() => handleReportComment(comentario.id)}>
                  Reportar
                </button>
              </div>
            </div>
          ))}
          {comments.length === 0 && <p>No hay comentarios para esta foto.</p>}
        </div>
      )}

      <h2 className="coment-title">DEJA TU COMENTARIO</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Escribe tu comentario..."
        className="coment-textarea"
      />
      {error && <div className="coment-error">{error}</div>}
      <button
        onClick={handleSubmit}
        className="coment-button"
        disabled={submittingComment || text.length === 0}
      >
        {submittingComment ? "Enviando..." : "Comentar"}
      </button>
    </div>
  );
};

export default ComentariosComponent;
