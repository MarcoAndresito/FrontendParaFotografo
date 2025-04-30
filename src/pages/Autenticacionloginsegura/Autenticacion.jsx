// src/Login.jsx

//YANILA SOLIZ DURAN

import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Autenticacion = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });

  const [errors, setErrors] = useState({
    correo: "",
    contraseña: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validatecorreo = (correo) => {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const newErrors = {
      correo: "",
      contraseña: "",
    };

    if (!formData.correo) {
      newErrors.correo = "correo es requerido";
    } else if (!validatecorreo(formData.correo)) {
      newErrors.correo = "Ingresa un correo valido";
    }

    if (!formData.contraseña) {
      newErrors.contraseña = "contraseña es requerido";
    } else if (formData.contraseña.length < 8) {
      newErrors.contraseña = "Ingresa como minimo 8 caracteres";
    }

    console.log("formData", formData);
    console.log("newErrors", newErrors);

    setErrors(newErrors);

    if (!newErrors.correo && !newErrors.contraseña) {
      try {
        const response = await fetch("https://localhost:7062/api/Auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Inicio de sesión exitoso");
          navigate("/");
        } else {
          const errorData = await response.json();
          console.error("Error al iniciar sesión:", errorData);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("else");

      setIsSubmitting(false);
    }
  };

  const handleRegisterClick = () => {
    navigate("/RegisterUser"); // Redirige a la página de registro
  };

  const isFormValid =
    !errors.correo &&
    !errors.contraseña &&
    formData.correo &&
    formData.contraseña;
  return (
    <div className="auth-container">
      <main className="auth-content">
        <div className="phones-container">
          <img className="phones-image" src="./src/assets/auten.jpg" alt="" />
        </div>

        <div className="form-container">
          <div className="form-card">
            <div className="logo-container">
              <div className="logo-wrapper">
                <span className="logo-text">Inicio de sesion</span>
              </div>
            </div>

            <form className="form-wrapper" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="correo"
                  className={`form-input`}
                  placeholder="correo address"
                  aria-label="correo address"
                  value={formData.correo}
                  onChange={handleChange}
                />
                {errors.correo && (
                  <div className="error-message">{errors.correo}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="contraseña"
                  className={`form-input ${errors.contraseña ? "error" : ""}`}
                  placeholder="contraseña"
                  aria-label="contraseña"
                  value={formData.contraseña}
                  onChange={handleChange}
                />
                {errors.contraseña && (
                  <div className="error-message">{errors.contraseña}</div>
                )}
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting || !isFormValid}
              >
                {isSubmitting ? "Iniciando sesion..." : "Iniciar sesion"}
              </button>
            </form>
          </div>
          <div className="form-card">
            <div className="signup-link">
              ¿No tienes una cuenta?{" "}
              <button
                type="button"
                className="link-button"
                onClick={handleRegisterClick}
              >
                Regístrate
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Autenticacion;
