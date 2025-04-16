// src/Login.jsx

//YANILA SOLIZ DURAN

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
    <div className="instagram-container">
      <main className="instagram-content">
        <div className="phones-container">
          <div className="phones-image">Photography</div>
        </div>

        <div className="form-container">
          <div className="form-card">
            <div className="logo-container">
              <div className="logo-wrapper">
                <span className="logo-text">FrontEnd</span>
              </div>
            </div>

            <form className="form-wrapper" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className={`form-input`}
                  placeholder="Email address"
                  aria-label="Email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className={`form-input`}
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>
              <button type="submit" className="submit-button">
                Iniciar sesion
              </button>

            </form>
          </div>

        </div>
      </main>

    </div>
  );
};

export default Autenticacion;
