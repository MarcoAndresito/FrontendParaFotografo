import styles from "../styles//Home.module.css";


const Testimonios = () => {
  return (
    <section className={styles.seccion}>
      <h2 className={styles.titulo}>Testimonios</h2>
      <div className={styles.testimoniosContainer}>
        <div className={styles.testimonioCard}>
          <p className={styles.testimonioTexto}>
            "PhotoAlbum me ayudó a organizar mi portafolio fotográfico de una forma muy profesional."
          </p>
          <p className={styles.testimonioAutor}>— Juan Pérez</p>
        </div>
        <div className={styles.testimonioCard}>
          <p className={styles.testimonioTexto}>
            "Es la mejor herramienta para fotógrafos que quieren mostrar su trabajo de manera elegante."
          </p>
          <p className={styles.testimonioAutor}>— Ana Torres</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
