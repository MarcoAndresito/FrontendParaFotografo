import { useEffect } from "react";
import { useState } from "react";
import styles from "./Productos.module.css";
import { Link } from "react-router-dom";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = () => {
    fetch("https://localhost:7062/api/Productos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      <table className={styles.mytable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.marca}</td>
              <td>{item.precio}</td>
              <td>{item.stock}</td>
              <td>
                <Link to={`/Productos/${item.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductosList;
