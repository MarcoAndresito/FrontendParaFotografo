// src/components/LlamadoAccion.jsx
import React from 'react';
import styles from "../styles/LlamadoAccion.module.css";

const LlamadoAccion = () => {
  return (
    <section className={styles.llamadoAccionContainer}>
      <h2 className={styles.titulo}>¿Estás listo para crear tu álbum?</h2>
      <p className={styles.descripcion}>Sube tus fotos favoritas y crea un álbum único para tus recuerdos.</p>
      <button className={styles.ctaButton}>Crear Álbum</button>
    </section>
  );
};

export default LlamadoAccion;
