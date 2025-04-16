import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../Components/Inputs/InputText";

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

export default ProductosAdd;
