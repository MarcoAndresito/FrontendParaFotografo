import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import About from "./pages/About";
import Autenticacion from "./pages/Autenticacionloginsegura/Autenticacion";
import ConfigurarAlbum from "./pages/ConfigurarAlbum/ConfigurarAlbum";
import Home from "./pages/Home";
import Login from "./pages/login";
import ProductosAdd from "./pages/Productos/ProductosAdd";
import ProductosList from "./pages/Productos/ProductosList";
import ProductosUpd from "./pages/Productos/ProductosUpd";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import UploadPhoto from "./pages/UploadPhoto"; // Importar UploadPhoto desde pages

// Parametros 
import ParametrosList from "./pages/Parametros/ParametrosList";
import ParametrosAdd from "./pages/Parametros/ParametrosAdd";


import viteLogo from "/vite.svg";
import ExportarAlbum from "./pages/ExportarAlbum/ExportarAlbum";
import Coment from "./pages/Comentarios/Coment";
import Comentarios from "./pages/Comentarios/Comentarios";
import ModComentarios from "./pages/Comentarios/ModComentarios";
import Moderador from "./pages/Comentarios/Moderador";

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                <Link to="/" className="menu-inicio">Inicio</Link>
                <Link to="/about" className="menu-acerca">Acerca de</Link>
                <Link to="/login" className="menu-login">Login</Link>
                <Link to="/uploadphoto" className="menu-album">Álbum</Link>
                <Link to="/RegisterUser" className="menu-registro">Registro de usuario</Link>
                <Link to="/Autenticacion" className="menu-autenticacion">Autenticación Segura</Link>
                <Link to="/ExportarAlbum" className="menu-exportar">Exportar Album</Link>
                <Link to="/comentarios" className="menu-comentarios">Comentarios</Link>
                <Link to="/Productos" className="menu-productos">Productos</Link>
                <Link to="/Parametros" className="menu-parametros">Parametros</Link>
                <Link to="/ConfigurarAlbum" className="menu-configurar-album">Configurar Álbum</Link>
                <Link to="/Comentarios" className="menu-comentarios-duplicado">Comentarios</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="/uploadphoto" element={<UploadPhoto />} />{" "}
                {/* Ruta correcta para UploadPhoto */}
                <Route path="/RegisterUser" element={<RegisterUser />} />
                <Route path="/Autenticacion" element={<Autenticacion />} />
                <Route path="/ExportarAlbum" element={<ExportarAlbum />} /> {/* Ruta correcta para ExportarAlbum */}
                <Route path="/comentarios" element={<Coment />} />
                <Route path="/Productos" element={<ProductosList />} />
                <Route path="/Parametros" element={<ParametrosList />} />
                <Route path="/Productos/:id" element={<ProductosUpd />} />
                <Route path="/Productos/new" element={<ProductosAdd />} />
                <Route path="/Parametros/new" element={<ParametrosAdd />} />
                <Route path="/ConfigurarAlbum" element={<ConfigurarAlbum />} />
                <Route path="/Comentarios" element={<Comentarios />} />
                <Route path="/ModComentarios" element={<ModComentarios />} />
                <Route path="/Moderador" element={<Moderador />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
