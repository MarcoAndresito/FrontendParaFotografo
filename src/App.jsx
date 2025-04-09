import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import About from "./pages/About";
import Home from "./pages/Home";
import UploadPhoto from "./pages/UploadPhoto";  // Importar UploadPhoto desde pages

import viteLogo from "/vite.svg";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/uploadphoto">Álbum</Link> {/* Enlace a la página de carga de fotos */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/uploadphoto" element={<UploadPhoto />} /> {/* Ruta correcta para UploadPhoto */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
