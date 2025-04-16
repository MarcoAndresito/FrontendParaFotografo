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

}

export default EdicionPerfil;