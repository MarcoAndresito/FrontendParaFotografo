import { Star, Quote } from "lucide-react";
import styles from "../styles/Home.module.css";

const testimonios = [
  {
    nombre: "María López",
    texto: "PhotoAlbum transformó completamente mi negocio de fotografía. ¡Súper recomendado!",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nombre: "Carlos Méndez",
    texto: "Muy fácil de usar y mis clientes están encantados con sus álbumes digitales.",
    imagen: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

const Testimonios = () => {
  return (
    <section className={styles.testimonios}>
      <h2 className={styles.seccionTitulo}><Quote size={28} /> Testimonios</h2>
      <div className={styles.testimoniosGrid}>
        {testimonios.map((t, index) => (
          <div key={index} className={styles.testimonioCard}>
            <img src={t.imagen} alt={t.nombre} className={styles.testimonioImagen} />
            <p className={styles.testimonioTexto}>“{t.texto}”</p>
            <p className={styles.testimonioNombre}>{t.nombre}</p>
            <div className={styles.testimonioEstrellas}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} color="#facc15" fill="#facc15" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
