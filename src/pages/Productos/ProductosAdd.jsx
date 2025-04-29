import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../Components/Inputs/InputText";
import { saveAsync } from "./Services";

const ProductosAdd = () => {
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    nombre: "",
    marca: "",
    precio: 0,
    stock: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resultado = await saveAsync(producto);
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
