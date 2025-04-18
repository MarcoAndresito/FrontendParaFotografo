import React, { useState } from "react";
import "./ModComentarios";
import './Moderador.css'; // Importa tu archivo de estilos CSS para el moderador

const Moderador = () => {
  return (
    <div className="moderador-container">
      <header className="moderador-header">
        <h1>Panel de Moderación</h1>
        {/* Puedes añadir aquí información del moderador o controles de perfil */}
      </header>

      <main className="moderador-content">
        <section className="moderador-section">
          <h2>Verificar Normas del Grupo</h2>
          <div className="normas-lista">
            <ul>
              <li>No publiques contenido ofensivo o discriminatorio.</li>
              <li>Respeta las opiniones de los demás miembros.</li>
              <li>No hagas spam ni promociones no autorizadas.</li>
              <li>Mantén las discusiones dentro del tema del grupo.</li>
              <li>Reporta cualquier contenido que viole las normas.</li>
              {/* Añade aquí todas las normas de tu grupo */}
            </ul>
          </div>
        </section>

        <section className="moderador-section">
          <h2>Gestionar Miembros</h2>
          <div className="miembros-gestion">
            {/* Aquí podrías tener una lista de miembros y opciones para eliminarlos */}
            <p>Lista de miembros (funcionalidad a implementar).</p>
            <button className="moderador-button">Eliminar Miembro (Ejemplo)</button>
            <button className="moderador-button">Añadir Miembro (Ejemplo)</button>
          </div>
        </section>

        <section className="moderador-section">
          <h2>Gestionar Publicaciones</h2>
          <div className="publicaciones-gestion">
            {/* Aquí podrías listar publicaciones pendientes y existentes con opciones para aprobar, rechazar y eliminar */}
            <p>Publicaciones pendientes y existentes (funcionalidad a implementar).</p>
            <button className="moderador-button aprobar">Aprobar Publicación (Ejemplo)</button>
            <button className="moderador-button rechazar">Rechazar Publicación (Ejemplo)</button>
            <button className="moderador-button eliminar">Eliminar Publicación (Ejemplo)</button>
          </div>
        </section>

        <section className="moderador-section">
          <h2>Gestionar Comentarios</h2>
          <div className="comentarios-gestion">
            {/* Aquí podrías listar comentarios con la opción de eliminarlos */}
            <p>Lista de comentarios (funcionalidad a implementar).</p>
            <button className="moderador-button eliminar">Eliminar Comentario (Ejemplo)</button>
          </div>
        </section>

        <section className="moderador-section">
          <h2>Gestionar Bloqueos</h2>
          <div className="bloqueos-gestion">
            {/* Aquí podrías listar usuarios bloqueados y tener la opción de bloquear/desbloquear */}
            <p>Lista de usuarios bloqueados (funcionalidad a implementar).</p>
            <button className="moderador-button bloquear">Bloquear Usuario (Ejemplo)</button>
            <button className="moderador-button desbloquear">Desbloquear Usuario (Ejemplo)</button>
          </div>
        </section>

        <section className="moderador-section">
          <h2>Gestionar Publicaciones Fijadas</h2>
          <div className="fijados-gestion">
            {/* Aquí podrías listar publicaciones fijadas y tener la opción de fijar/desfijar */}
            <p>Lista de publicaciones fijadas (funcionalidad a implementar).</p>
            <button className="moderador-button fijar">Fijar Publicación (Ejemplo)</button>
            <button className="moderador-button desfijar">Desfijar Publicación (Ejemplo)</button>
          </div>
        </section>
      </main>
    </div>
  );
};


export default Moderador; 