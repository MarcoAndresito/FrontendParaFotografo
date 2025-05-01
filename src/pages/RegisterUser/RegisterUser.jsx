import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterUser.module.css";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Correo: "",
    Contraseña: "",
    ConfirmarContraseña: ""
  });
  const navigate = useNavigate(); // Obtén la función navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Contraseña !== formData.ConfirmarContraseña) {
        showModal("Las contraseñas no coinciden", "error");
      return;
    }

    try {
      const response = await fetch("https://localhost:7062/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Nombre: formData.Nombre,
          Correo: formData.Correo,
          Contraseña: formData.Contraseña
        })
      });

      const data = await response.json();

      if (response.ok) {
        showModal("Usuario registrado correctamente", "registroExitoso");
        console.log(data);
        // limpiar formulario
        setFormData({
          Nombre: "",
          Correo: "",
          Contraseña: "",
          ConfirmarContraseña: ""
        });
        
      } else {
        showModal("Error al registrar: " + (data?.message || data), "error");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error al conectar con el servidor", "error");
    }
  };

  const [modal, setModal] = useState({
    visible: false,
    message: "",
    type: "error", "error": "registroExitoso"
  });
  const showModal = (message, type = "info") => {
    setModal({
      visible: true,
      message,
      type
    });
  };



  
  

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.titulo}>REGISTRO DE USUARIO</h2>

        <label className={styles.label}>Nombre</label>
        <input
          className={styles.input}
          type="text"
          name="Nombre"
          value={formData.Nombre}
          onChange={handleChange}
          placeholder="Escriba su nombre"
          required
        />

        <label className={styles.label}>Correo</label>
        <input
          className={styles.input}
          type="email"
          name="Correo"
          value={formData.Correo}
          onChange={handleChange}
          placeholder="Escriba su correo"
          required
        />

        <label className={styles.label}>Contraseña</label>
        <input
          className={styles.input}
          type="password"
          name="Contraseña"
          value={formData.Contraseña}
          onChange={handleChange}
          placeholder="Escriba su contraseña"
          required
        />

        <label className={styles.label}>Repita su contraseña</label>
        <input
          className={styles.input}
          type="password"
          name="ConfirmarContraseña"
          value={formData.ConfirmarContraseña}
          onChange={handleChange}
          placeholder="Confirme su contraseña"
          required
        />

        <button className={styles.buton} type="submit">
          Registrarse
        </button>
      </form>

         {modal.visible && (
            <div className={styles.modalOverlay}>
            <div className={`${styles.modal} ${styles[modal.type]}`}>
                <p>{modal.message}</p>
                <button className={styles.btn} onClick={() => navigate("/autenticacion")}>
                Cerrar
                </button>
            </div>
            </div>
        )}
  
    </div>
  );
};

export default RegisterUser;