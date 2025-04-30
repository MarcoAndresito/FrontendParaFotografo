import { useNavigate } from "react-router-dom";
import "./Home.css"; // <-- Asegúrate de importar el CSS aquí

const Home = () => {
    const navigate = useNavigate();

    const handleIniciarSesion = () => {
        navigate("/Autenticacion");
    };

    const handleRegistrarse = () => {
        navigate("/RegisterUser");
    };

    return (
        <div className="home-container">
            {/* Navbar */}
            <header className="navbar">
                <h1 className="logo">PhotoAlbum</h1>
                <div className="nav-buttons">
                    <button onClick={handleIniciarSesion} className="nav-link">Iniciar Sesión</button>
                    <button onClick={handleRegistrarse} className="register-button">Registrarse</button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <img src="https://imagenes.elpais.com/resizer/v2/6SQZE6Y6GRBN5HA7GCEY5WEENE.png?auth=ce380c171cda5ebbeb04dec4ec665014bbed712361ac970b8257328f3f8b0f99&width=980" alt="Álbum de Fotos" className="hero-image"/>
                <div className="hero-text">
                    <h2>Crea, Comparte y Exporta tus Recuerdos</h2>
                    <p>Sube tus fotos favoritas y crea increíbles álbumes digitales en segundos.</p>
                    <button onClick={handleRegistrarse} className="hero-button">Crea tu primer álbum</button>
                </div>
            </section>

            {/* Features */}
            <section className="features">
                <div className="feature">
                    <img src="https://cdn-icons-png.flaticon.com/512/2921/2921820.png" alt="Subir fotos" />
                    <h3>Sube tus Fotos</h3>
                    <p>Organiza tus mejores momentos en un solo lugar.</p>
                </div>
                <div className="feature">
                    <img src="https://cdn-icons-png.flaticon.com/512/1087/1087922.png" alt="Crear álbumes" />
                    <h3>Crea Álbumes Personalizados</h3>
                    <p>Diseña álbumes únicos para cada ocasión especial.</p>
                </div>
                <div className="feature">
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png" alt="Descargar y compartir" />
                    <h3>Descarga y Comparte</h3>
                    <p>Exporta tus álbumes.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                &copy; {new Date().getFullYear()} PhotoAlbum. Todos los derechos reservados.
            </footer>
        </div>
    );
}

export default Home;
