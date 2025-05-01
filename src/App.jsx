import { BrowserRouter, NavLink, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Autenticacion from "./pages/Autenticacionloginsegura/Autenticacion";
import ConfigurarAlbum from "./pages/ConfigurarAlbum/ConfigurarAlbum";
import About from "./pages/AcercaDe/About";
import Home from "./pages/Home/Home";
import ProductosAdd from "./pages/Productos/ProductosAdd";
import ProductosList from "./pages/Productos/ProductosList";
import ProductosUpd from "./pages/Productos/ProductosUpd";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import UploadPhoto from "./pages/UploadPhoto";

// Parametros
import ParametrosList from "./pages/Parametros/ParametrosList";
import ParametrosAdd from "./pages/Parametros/ParametrosAdd";

import viteLogo from "/vite.svg";
import ExportarAlbum from "./pages/ExportarAlbum/ExportarAlbum";
import Coment from "./pages/Comentarios/Coment";
import Comentarios from "./pages/Comentarios/Comentarios";
import ModComentarios from "./pages/Comentarios/ModComentarios";
import Moderador from "./pages/Comentarios/Moderador";

import Albumes from "./pages/VisorAlbun/Albumes";
import Album from "./pages/VisorAlbun/Album";
import AlbumList from "./pages/ListaAlbumes/AlbumList"; // ¡Importación correcta!

import Precios from "./pages/Precios";
import VisorFotos from "./pages/VisorFotos/VisorFotos";

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
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Inicio
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Acerca de
                </NavLink>
                <NavLink
                    to="/uploadphoto"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Álbum
                </NavLink>
                <NavLink
                    to="/RegisterUser"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Registro de usuario
                </NavLink>
                <NavLink
                    to="/Autenticacion"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Autenticación Segura
                </NavLink>
                <NavLink
                    to="/ExportarAlbum"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Exportar Album
                </NavLink>{" "}
                <NavLink
                    to="/comentarios"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Comentarios
                </NavLink>
                <NavLink
                    to="/Productos"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Productos
                </NavLink>
                <NavLink
                    to="/Parametros"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Parametros
                </NavLink>
                <NavLink
                    to="/ConfigurarAlbum"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Configurar Álbum
                </NavLink>
                <NavLink
                    to="/Comentarios"
                    className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                    Comentarios
                </NavLink>
                <Link to="/albumes">Ver Álbumes</Link>
                <Link to="/album-list">Lista de Álbumes</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/uploadphoto" element={<UploadPhoto />} />
                <Route path="/RegisterUser" element={<RegisterUser />} />
                <Route path="/Autenticacion" element={<Autenticacion />} />
                <Route path="/ExportarAlbum" element={<ExportarAlbum />} />
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
                <Route path="/albumes" element={<Albumes />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/album-list" element={<AlbumList />} /> {/* ¡Ruta correcta! */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;