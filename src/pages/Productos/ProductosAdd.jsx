import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Productos.module.css";

const ProductosAdd = () => {
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    nombre: "",
    marca: "",
    precio: 0,
    stock: 0,
  });

  const guardar = async () => {
    try {
      const data = await fetch("https://localhost:7062/api/Productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      const json = await data.json();
      console.log(json);
      return true;
    } catch (error) {
      console.log("Error : ", error);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resultado = await guardar();
    if (resultado) {
      navigate("/Productos");
    } else {
      // TODO: mostrar una modal indicando el error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Agregar producto </h1>
      {producto && (
        <>
          <div>
            <label htmlFor="nombre" className={styles.mylabel}>
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={producto.nombre}
              onChange={(e) => {
                setProducto((oldData) => {
                  return {
                    ...oldData,
                    nombre: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="marca" className={styles.mylabel}>
              Marca
            </label>
            <input
              type="text"
              name="marca"
              id="marca"
              value={producto.marca}
              onChange={(e) => {
                setProducto((oldData) => {
                  return {
                    ...oldData,
                    marca: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="precio" className={styles.mylabel}>
              Precio
            </label>
            <input
              type="number"
              name="precio"
              id="precio"
              value={producto.precio}
              onChange={(e) => {
                setProducto((oldData) => {
                  return {
                    ...oldData,
                    precio: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="stock" className={styles.mylabel}>
              Stock
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              value={producto.stock}
              onChange={(e) => {
                setProducto((oldData) => {
                  return {
                    ...oldData,
                    stock: e.target.value,
                  };
                });
              }}
            />

            <div>
              <button type="submit">Guardar</button>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default ProductosAdd;
