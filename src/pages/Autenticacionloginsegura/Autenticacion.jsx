// src/Login.jsx

//YANILA SOLIZ DURAN

import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";


const Autenticacion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate(); // Inicializa useNavigate

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newErrors = {
      email: "",
      password: "",
    }

    if (!formData.email) {
      newErrors.email = "Email es requerido"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ingresa un correo valido"
    }

    if (!formData.password) {
      newErrors.password = "Password es requerido"
    } else if (formData.password.length < 6) {
      newErrors.password = "Ingresa como minimo 6 caracteres"
    }

    setErrors(newErrors)


    if (!newErrors.email && !newErrors.password) {
      try {
        const response = await fetch("https://localhost:7062/api/Auth/login", { // Llama a API del backend
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Inicio de sesión exitoso");
          navigate("/"); // Redirige a la página de inicio
          // Aquí puedes guardar el token de sesión si tu backend lo devuelve
        } else {
          const errorData = await response.json();
          console.error("Error al iniciar sesión:", errorData);
          // Aquí muestra un mensaje de error al usuario
        }
      } catch (error) {
        console.error("Error de conexión:", error);
        // Aquí podrías muestra un mensaje de error de conexión
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false)
    }
  };

  const handleRegisterClick = () => {
    navigate("/RegisterUser"); // Redirige a la página de registro
  };
  

  const isFormValid = !errors.email && !errors.password && formData.email && formData.password
  return (
    <div className="instagram-container">
      <main className="instagram-content">
        <div className="phones-container">
          <img className="phones-image" src="./src/assets/banner.jpg" alt="" />
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
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="Email address"
                  aria-label="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              <div className="form-group">
              <input
                  type="password"
                  name="password"
                  className={`form-input ${errors.password ? "error" : ""}`}
                  placeholder="Password"
                  aria-label="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting || !isFormValid}>
                {isSubmitting ? "Iniciando sesion..." : "Iniciar sesion"}
              </button>

            </form>
          </div>
          <div className="form-card">
            <div className="signup-link">
              ¿No tienes una cuenta?{" "}
              <button type="button" className="link-button" onClick={handleRegisterClick}>
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
