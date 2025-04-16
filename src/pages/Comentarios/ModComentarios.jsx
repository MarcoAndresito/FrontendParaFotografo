import React, { useState } from "react";
import "./Comentarios.css"; 
import "./Comentarios";

const ModComentarios = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError("Todos los campos son obligatorios.");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Correo inválido.");
      } else {
        setError("Credenciales incorrectas."); // Simulado
      }
    };
  
    return (
      <div className="login-containerr">
        <h2>Eres Moderador</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  };

export default ModComentarios; 