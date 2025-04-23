import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Album.module.css";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Album = () => {
    const { id } = useParams(); 
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:3000/fotos?albumId=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al cargar las fotos:", error);
          setLoading(false);
        });
    }, [id]);
  
    if (loading) return <p>Cargando fotos del álbum...</p>;
    if (photos.length === 0) return <p>No hay fotos en este álbum.</p>;
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className={styles.album}>
        <h2>Álbum: {id}</h2>
  
        <Slider {...settings} className={styles.slider}>
          {photos.map((photo) => (
            <div key={photo.id} onClick={() => setSelectedPhoto(photo)} className={styles.slide}>
              <img src={photo.url} alt={photo.title} className={styles.foto} />
              <p>{photo.title}</p>
            </div>
          ))}
        </Slider>
  
        {selectedPhoto && (
          <div className={styles.modal} onClick={() => setSelectedPhoto(null)}>
            <div className={styles.modalContenido} onClick={(e) => e.stopPropagation()}>
              <img src={selectedPhoto.url} alt={selectedPhoto.title} />
              <p>{selectedPhoto.title}</p>
              <button onClick={() => setSelectedPhoto(null)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Album;