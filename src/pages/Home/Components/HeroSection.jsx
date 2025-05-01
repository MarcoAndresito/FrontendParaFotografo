import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <img
        src="https://imagenes.elpais.com/resizer/v2/6SQZE6Y6GRBN5HA7GCEY5WEENE.png?auth=ce380c171cda5ebbeb04dec4ec665014bbed712361ac970b8257328f3f8b0f99&width=980"
        alt="Álbum de Fotos"
        className={styles.heroImage}
      />
      <div className={styles.heroText}>
        <h2>Crea, Comparte y Exporta tus Recuerdos</h2>
        <p>Sube tus fotos favoritas y crea increíbles álbumes digitales en segundos.</p>
        <button onClick={() => navigate("/RegisterUser")} className={styles.heroButton}>
          Crea tu primer álbum
        </button>
      </div>
    </section>
  );
};

export default HeroSection;