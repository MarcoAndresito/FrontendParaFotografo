import React from 'react';
import styles from './Parametros.module.css';
import { useEffect } from "react";
import { useState } from "react";

  const ParametrosList = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalTipo, setModalTipo] = useState("");
    const [parametroSeleccionado, setParametroSeleccionado] = useState(null);
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
    
    const handleMostrar = (parametro) => {
        setParametroSeleccionado(parametro);
        setModalTipo("ver");
        setModalVisible(true);
    };

    const handleEditar = (parametro) => {
        setParametroSeleccionado(parametro);
        setModalTipo("editar");
        setModalVisible(true);
    };

    const confirmarEdicion = () => {
        fetch(`http://localhost:5188/api/Parametros/${parametroSeleccionado.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parametroSeleccionado),
        })
          .then((response) => {
            if (!response.ok) throw new Error("No se pudo actualizar el parámetro.");
            return response.json();
          })
          .then(() => {
            alert("Parámetro actualizado correctamente.");
            setModalVisible(false);
            obtenerProductos();
          })
          .catch((error) => {
            console.error(error);
            alert("Error al actualizar el parámetro.");
          });
      };
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
                        <button className={`${styles.boton} ${styles.ver}`} onClick={() => handleMostrar(parametro)} >Ver</button>
                        <button className={`${styles.boton} ${styles.editar}`} onClick={() => handleEditar(parametro)}>Editar</button>
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
        {modalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>{modalTipo === "ver" ? "Detalles del Parámetro" : modalTipo === "editar" ? "Editar Parámetro" : "Eliminar Parámetro"}</h3>
            {modalTipo === "ver" && (
                <div>
                    <p><strong>Servicio:</strong> {parametroSeleccionado.servicio}</p>
                    <p><strong>Clave:</strong> {parametroSeleccionado.clave}</p>
                    <p><strong>Valor:</strong> {parametroSeleccionado.valor}</p>
                    <p><strong>Descripción:</strong> {parametroSeleccionado.descripcion}</p>
                    <button onClick={() => setModalVisible(false)}>Cerrar</button>
                </div>
            )}
            {modalTipo === "editar" && (
                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    confirmarEdicion();
                    }}
                >
                    <div>
                        <label>ID (no editable):</label>
                        <input type="text" value={parametroSeleccionado.id} disabled />
                    </div>
                    <div>
                    <label>Servicio:</label>
                    <input
                        type="text"
                        value={parametroSeleccionado.servicio}
                        onChange={(e) =>
                        setParametroSeleccionado({
                            ...parametroSeleccionado,
                            servicio: e.target.value,
                        })
                        }
                    />
                    </div>

                    <div>
                    <label>Clave:</label>
                    <input
                        type="text"
                        value={parametroSeleccionado.clave}
                        onChange={(e) =>
                        setParametroSeleccionado({
                            ...parametroSeleccionado,
                            clave: e.target.value,
                        })
                        }
                    />
                    </div>

                    <div>
                    <label>Valor:</label>
                    <input
                        type="text"
                        value={parametroSeleccionado.valor}
                        onChange={(e) =>
                        setParametroSeleccionado({
                            ...parametroSeleccionado,
                            valor: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div>
                    <label>Descripción:</label>
                    <textarea
                        rows="3"
                        value={parametroSeleccionado.descripcion}
                        onChange={(e) =>
                        setParametroSeleccionado({
                            ...parametroSeleccionado,
                            descripcion: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className={styles.modalBotones}>
                    <button type="submit">Guardar</button>
                    <button className = {styles.eliminar} type="button" onClick={() => setModalVisible(false)} >
                        Cancelar
                    </button>
                    </div>
                </form>
                )}
          </div>
        </div>
      )}
      </div>
    );
  };
export default ParametrosList;