// src/components/GaleriaDestacada.jsx
import React from 'react';
import styles from "../styles/GaleriaDestacada.module.css";

const GaleriaDestacada = () => {
  return (
    <section className={styles.galeriaContainer}>
      <h2 className={styles.titulo}>Galería Destacada</h2>
      <div className={styles.imagenesContainer}>
        <img src="https://via.placeholder.com/300" alt="Foto 1" className={styles.imagen} />
        <img src="https://via.placeholder.com/300" alt="Foto 2" className={styles.imagen} />
        <img src="https://via.placeholder.com/300" alt="Foto 3" className={styles.imagen} />
      </div>
    </section>
  );
};

export default GaleriaDestacada;
