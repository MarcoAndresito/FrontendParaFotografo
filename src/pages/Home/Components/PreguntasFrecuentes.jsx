import styles from "../styles//Home.module.css";

const PreguntasFrecuentes = () => {
  return (
    <section className={styles.seccion}>
      <h2 className={styles.titulo}>Preguntas Frecuentes</h2>
      <div className={styles.preguntaItem}>
        <h3 className={styles.pregunta}>¿Cómo creo un álbum?</h3>
        <p className={styles.respuesta}>
          Debes registrarte, iniciar sesión y seguir los pasos en la sección "Crear Álbum".
        </p>
      </div>
      <div className={styles.preguntaItem}>
        <h3 className={styles.pregunta}>¿Puedo compartir mi álbum con otros?</h3>
        <p className={styles.respuesta}>
          Sí, cada álbum tiene un enlace único que puedes compartir fácilmente.
        </p>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
