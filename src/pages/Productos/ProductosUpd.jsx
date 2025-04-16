import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../Components/Inputs/InputText";
import styles from "./Productos.module.css";

const ProductosUpd = () => {
  const navigate = useNavigate();
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
      return true;
    } catch (error) {
      console.log("Error : ", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultado = await guardar();
    if (resultado) {
      navigate("/Productos");
    } else {
      // TODO: mostrar una modal indicando el error
    }
  };

  useEffect(() => {
    obtenerUnProducto(id);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar el producto {id} </h1>
      {producto && (
        <>
          <InputText
            id="id"
            textLabel="Codigo"
            type="number"
            value={producto.id}
          />
          <InputText
            id="nombre"
            textLabel="Nombre"
            type="text"
            value={producto.nombre}
            onChange={(nombre) =>
              setProducto((oldData) => ({
                ...oldData,
                nombre: nombre,
              }))
            }
          />
          <InputText
            id="marca"
            textLabel="Marca"
            type="text"
            value={producto.marca}
            onChange={(marca) =>
              setProducto((oldData) => ({
                ...oldData,
                marca: marca,
              }))
            }
          />
          <InputText
            id="precio"
            textLabel="Precio"
            type="number"
            value={producto.precio}
            onChange={(precio) =>
              setProducto((oldData) => ({
                ...oldData,
                precio: precio,
              }))
            }
          />
          <InputText
            id="stock"
            textLabel="Stock"
            type="number"
            value={producto.stock}
            onChange={(stock) =>
              setProducto((oldData) => ({
                ...oldData,
                stock: stock,
              }))
            }
          />

          <div>
            <button type="submit">Guardar</button>
          </div>
        </>
      )}
    </form>
  );
};

export default ProductosUpd;
