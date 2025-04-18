import React, { useState } from "react";
import "./Moderador.css"; // Asegúrate de tener este archivo CSS
import { useNavigate } from 'react-router-dom';

const ModComentarios = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "paul123" && password === "1234") {
      navigate("/Moderador");
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div className="login-containerr">
      <h2>Eres Moderador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Cambiado a text para el nombre de usuario
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default ModComentarios;