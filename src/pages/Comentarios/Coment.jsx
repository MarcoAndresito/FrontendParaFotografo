// Goerge Mahonri Soto Barrientos

import React, { useState, useEffect } from "react";
import "./Coment.css";

const PROHIBITED_WORDS = ["palabrota1", "palabrota2"];
const MAX_TEXT_LENGTH = 500;

const ComentariosComponent = ({ fotoId }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [likedComments, setLikedComments] = useState([]);
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
      const response = await fetch(`https://localhost:7062/api/Albumes/1/Fotos${id}/comentarios`);
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

  const handleLikeComment = async (commentId) => {
    setLikedComments((prev) => [...prev, commentId]);

    try {
      const response = await fetch(
        `TU_API_URL/api/comentarios/${commentId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchComments(fotoId);
    } catch (error) {
      setLikedComments((prev) => prev.filter((id) => id !== commentId));
      console.error("Error al dar like:", error);
      setError("No se pudo registrar tu 'Me gusta'");
    }
  };

  const handleReplyToComment = (commentId) => {
    if (replyingTo === commentId) {
      setReplyingTo(null);
      setReplyText("");
    } else {
      setReplyingTo(commentId);
      setReplyText("");
    }
  };

  const submitReply = async (parentCommentId) => {
    if (replyText.trim() === "") {
      setError("El texto de la respuesta no puede estar vacío");
      return;
    }

    if (replyText.length > MAX_TEXT_LENGTH) {
      setError(`Máximo ${MAX_TEXT_LENGTH} caracteres permitidos.`);
      return;
    }

    if (containsProhibitedWords(replyText)) {
      setError("Tu respuesta contiene palabras no permitidas.");
      return;
    }

    setSubmittingComment(true);
    try {
      const response = await fetch(
        `TU_API_URL/api/comentarios/${parentCommentId}/respuestas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ texto: replyText }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setReplyingTo(null);
      setReplyText("");
      setError("");

      fetchComments(fotoId);
    } catch (error) {
      console.error("Error al responder:", error);
      setError("No se pudo enviar tu respuesta");
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleReportComment = async (commentId) => {
    if (
      window.confirm("¿Estás seguro de que quieres reportar este comentario?")
    ) {
      try {
        const response = await fetch(
          `TU_API_URL/api/comentarios/${commentId}/reportar`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        alert("Comentario reportado correctamente");
        fetchComments(fotoId);
      } catch (error) {
        console.error("Error al reportar:", error);
        setError("No se pudo reportar el comentario");
      }
    }
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
                <button
                  onClick={() => handleLikeComment(comentario.id)}
                  className={
                    likedComments.includes(comentario.id) ? "liked-button" : ""
                  }
                >
                  {likedComments.includes(comentario.id)
                    ? "Me gusta ✓"
                    : "Me gusta"}
                </button>
                <button
                  onClick={() => handleReplyToComment(comentario.id)}
                  className={
                    replyingTo === comentario.id ? "active-button" : ""
                  }
                >
                  {replyingTo === comentario.id ? "Cancelar" : "Responder"}
                </button>
                <button onClick={() => handleReportComment(comentario.id)}>
                  Reportar
                </button>
              </div>

              {replyingTo === comentario.id && (
                <div className="reply-form">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Escribe tu respuesta..."
                    className="coment-textarea"
                  />
                  <div className="reply-actions">
                    <button
                      onClick={() => submitReply(comentario.id)}
                      className="coment-button"
                      disabled={submittingComment || replyText.trim() === ""}
                    >
                      {submittingComment ? "Enviando..." : "Enviar respuesta"}
                    </button>
                  </div>
                </div>
              )}

              {comentario.respuestas && comentario.respuestas.length > 0 && (
                <div className="replies-container">
                  {comentario.respuestas.map((respuesta) => (
                    <div key={respuesta.id} className="reply-item">
                      <div className="coment-header">
                        <img
                          src="avatar.jpg"
                          alt="Avatar"
                          className="coment-avatar"
                          style={{ width: "24px", height: "24px" }}
                        />
                        <div className="coment-content">
                          <span className="coment-author">Usuario</span>
                          <p className="coment-text">{respuesta.texto}</p>
                          {respuesta.fechaCreacion && (
                            <small>
                              {new Date(
                                respuesta.fechaCreacion
                              ).toLocaleTimeString()}{" "}
                              -
                              {new Date(
                                respuesta.fechaCreacion
                              ).toLocaleDateString()}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
