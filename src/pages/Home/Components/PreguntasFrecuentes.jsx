import { HelpCircle } from "lucide-react";
import styles from "../styles/Home.module.css";

const preguntas = [
  {
    pregunta: "¿Qué es PhotoAlbum?",
    respuesta: "Es una plataforma web para crear, compartir y exportar álbumes fotográficos de manera profesional.",
  },
  {
    pregunta: "¿Necesito ser fotógrafo profesional?",
    respuesta: "No, cualquier persona puede usar PhotoAlbum. Está diseñado para ser intuitivo y amigable.",
  },
  {
    pregunta: "¿Puedo exportar mis álbumes en PDF?",
    respuesta: "¡Sí! La plataforma permite exportar álbumes completos en formato PDF listo para imprimir o compartir.",
  },
];

const PreguntasFrecuentes = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.seccionTitulo}><HelpCircle size={28} /> Preguntas Frecuentes</h2>
      <div className={styles.faqGrid}>
        {preguntas.map((item, i) => (
          <div key={i} className={styles.faqItem}>
            <h3 className={styles.faqPregunta}>{item.pregunta}</h3>
            <p className={styles.faqRespuesta}>{item.respuesta}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
