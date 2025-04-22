import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Albumes.module.css"; 

const Albumes = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      fetch("http://localhost:3000/albumes")
        .then((res) => res.json())
        .then((data) => {
          setAlbums(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al cargar los álbumes:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Cargando álbumes...</p>;