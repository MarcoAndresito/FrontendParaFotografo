import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import About from "./pages/About";
import Home from "./pages/Home";
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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
