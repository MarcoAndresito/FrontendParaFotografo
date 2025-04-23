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

import Albumes from "./pages/VisorAlbun/Albumes";
import Album from "./pages/VisorAlbun/Album";

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
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/login">Login</Link>
        <Link to="/uploadphoto">Álbum</Link>{" "}
        {/* Enlace a la página de carga de fotos */}
        <Link to="/RegisterUser">Registro de usuario</Link>
        <Link to="/Autenticacion">Autenticación Segura</Link>
        <Link to="/ExportarAlbum">Exportar Album</Link> {/* Enlace a la página de carga de fotos */}
        <Link to="/comentarios">Comentarios</Link>
        <Link to="/Productos">Productos</Link>
        <Link to="/Parametros">Parametros</Link>
        <Link to="/ConfigurarAlbum">Configurar Álbum</Link>
        <Link to="/Comentarios">Comentarios</Link>

        <Link to="/albumes">Ver Álbumes</Link>
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
        <Route path="/albumes" element={<Albumes />} />
        <Route path="/album/:id" element={<Album />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
