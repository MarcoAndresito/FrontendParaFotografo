import React, { useState } from "react";
import styles from "./EditarPerfil.module.css";

const EdicionPerfil = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    sitioWeb: "",
    especializacion: "",
    avatar: null,
    instagram: "",
    facebook: ""
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFormData({ ...formData, avatar: file });
    } else {
      alert("Solo se permiten imágenes JPG o PNG");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailEnUso = await verificarCorreo(formData.correo);
    if (emailEnUso) {
      setEmailError("Este correo ya está en uso");
      return;
    }
    setEmailError("");
    console.log("Perfil actualizado:", formData);
  };

  const verificarCorreo = async (correo) => {
    return false;
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.titulo}>Editar Perfil</h2>

        <input
          className={styles.input}
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

<input
          className={styles.input}
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        {emailError && <p className={styles.error}>{emailError}</p>}

        
      </form>
    </div>
    );


}

export default EdicionPerfil;