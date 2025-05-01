import styles from "../Home/styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import HeroSection from "../Home/components/HeroSection";
import FeatureGrid from "../Home/components/FeatureGrid";
import Testimonios from "../Home/components/Testimonios";
import PreguntasFrecuentes from "../Home/components/PreguntasFrecuentes";
import Footer from "../Home/components/Footer";

import GaleriaDestacada from "../Home/components/GaleriaDestacada";
import LlamadoAccion from "../Home/components/LlamadoAccion";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <header className={styles.navbar}>
        <h1 className={styles.logo}>PhotoAlbum</h1>
        <div className={styles.navButtons}>
          <button onClick={() => navigate("/Autenticacion")} className={styles.navLink}>
            Iniciar Sesión
          </button>
          <button onClick={() => navigate("/RegisterUser")} className={styles.registerButton}>
            Registrarse
          </button>
        </div>
      </header>

      <HeroSection />
      <FeatureGrid />
      {/* <GaleriaDestacada /> */}
      <div className={styles.sectionSpacing}>
        <Testimonios />
    </div>
    <div className={styles.sectionSpacing}>
        <PreguntasFrecuentes />
        </div>
      <LlamadoAccion />
      <Footer />
    </div>
  );
};

export default Home;