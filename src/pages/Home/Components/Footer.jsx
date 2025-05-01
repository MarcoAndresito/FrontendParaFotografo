import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} PhotoAlbum. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;