import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Productos.module.css";

const ProductosUpd = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();

  const obtenerUnProducto = (id) => {
    const xhr = new XMLHttpRequest();
    const url = `https://localhost:7062/api/Productos/${id}`;

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          setProducto(data);
        } catch (error) {
          console.error("Error al parsear la respuesta JSON:", error);
        }
      } else {
        console.error("Error en la petición:", xhr.status, xhr.statusText);
      }
    };

    xhr.onerror = () => {
      console.error("Error de red al realizar la petición.");
    };

    xhr.send();
  };

  const guardar = async () => {
    try {
      const data = await fetch(
        `https://localhost:7062/api/Productos/${producto.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await guardar();
  };

  useEffect(() => {
    obtenerUnProducto(id);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar el producto {id} </h1>
      {producto && (
        <>
          <div>
            <label htmlFor="id" className={styles.mylabel}>
              Id
            </label>
            <input
              type="number"
              name="id"
              id="id"
              value={producto.id}
              readOnly
            />
          </div>
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

export default ProductosUpd;
