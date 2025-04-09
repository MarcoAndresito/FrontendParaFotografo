// src/Login.jsx
import { useState } from "react";
import "./styles.css";

const Autenticacion = () => {
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
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Autenticacion;
