// src/Login.jsx

//YANILA SOLIZ DURAN

import { useState } from "react";
import "./styles.css";

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


  const handleSubmit = (e) => {
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
      console.log("Form submitted:", formData)
      
      setTimeout(() => {
        setIsSubmitting(false)
      }, 1000)
    } else {
      setIsSubmitting(false)
    }
  }

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

        </div>
      </main>

    </div>
  );
};

export default Autenticacion;
