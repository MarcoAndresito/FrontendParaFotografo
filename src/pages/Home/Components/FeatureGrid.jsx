import styles from "../styles/Home.module.css";

const FeatureGrid = () => {
    return (
      <section className={styles.features}>
        <div className={styles.feature}>
          <img src="https://cdn-icons-png.flaticon.com/512/2921/2921820.png" alt="Subir fotos" />
          <h3>Sube tus Fotos</h3>
          <p>Organiza tus mejores momentos en un solo lugar.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://cdn-icons-png.flaticon.com/512/1087/1087922.png" alt="Crear álbumes" />
          <h3>Crea Álbumes Personalizados</h3>
          <p>Diseña álbumes únicos para cada ocasión especial.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png" alt="Descargar y compartir" />
          <h3>Descarga y Comparte</h3>
          <p>Exporta tus álbumes.</p>
        </div>
      </section>
    );
  };
  
  export default FeatureGrid;