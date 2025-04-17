import React from 'react';
import styles from './Parametros.module.css';
import { useEffect } from "react";
import { useState } from "react";

  const ParametrosList = () => {

    const [parametros, setParametros] = useState([]);
    const obtenerProductos = () => {
      fetch("http://localhost:5188/api/Parametros", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del backend:", data);
          setParametros(data);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    };
  
    useEffect(() => {
      obtenerProductos();
    }, []);

    return (
      <div className={styles.contenedor}>
        <h2 className={styles.titulo}>Lista de Parámetros</h2>
        <table className={styles.tabla}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Servicio</th>
                <th>Clave</th>
                <th>Valor</th>
                <th>Descripción</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {parametros.length > 0 ? (
                parametros.map((parametro) => (
                <tr key={parametro.id}>
                    <td>{parametro.id}</td>
                    <td>{parametro.servicio}</td>
                    <td>{parametro.clave}</td>
                    <td>{parametro.valor}</td>
                    <td>{parametro.descripcion}</td>
                    <td className={styles.acciones}>
                        <button className={`${styles.boton} ${styles.ver}`} >Ver</button>
                        <button className={`${styles.boton} ${styles.editar}`} >Editar</button>
                        <button className={`${styles.boton} ${styles.eliminar}`}>Eliminar</button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="3"></td>
                    <td colSpan="3" className={styles.sinDatos}>
                        No hay parámetros registrados.
                    </td>
                </tr>
            )}
            </tbody>
        </table>
      </div>
    );
  };
  
export default ParametrosList;