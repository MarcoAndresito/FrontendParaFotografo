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

}

export default EdicionPerfil;