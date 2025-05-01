import { useEffect, useState } from "react";
import './VisorFotos.css'; 
import Coment from "../Comentarios/Coment";

const VisorFotos = ({ albumId, fotoId }) => {
  const [fotoUrl, setFotoUrl] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const response = await fetch(`https://localhost:7062/api/Albumes/1/Fotos`);
        if (!response.ok) {
          throw new Error("No se pudo cargar la imagen");
        }

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setFotoUrl(imageUrl);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchFoto();
  }, [albumId, fotoId]);

  if (cargando) return <p className="visor-fotos-loading">Cargando imagen...</p>;
  if (error) return <p className="visor-fotos-error">Error: {error}</p>;

  return (
    <div className="visor-fotos-container fade-in">
      <h3>Foto del Álbum</h3>
      <img src={fotoUrl} alt="Foto del álbum" />
      <Coment fotoId={fotoId} />
    </div>
    
  );
};

export default VisorFotos;