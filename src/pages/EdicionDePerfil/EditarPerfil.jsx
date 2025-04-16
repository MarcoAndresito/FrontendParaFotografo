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

}

export default EdicionPerfil;