import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import About from "./pages/About";
import Home from "./pages/Home";
import Autenticacion from "./pages/Autenticacionloginsegura/Autenticacion";

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
        <Link to="/Autenticacion">Autenticación Segura</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Autenticacion" element={<Autenticacion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
