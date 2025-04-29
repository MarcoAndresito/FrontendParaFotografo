import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../Components/Inputs/InputText";
import styles from "./Productos.module.css";
import { getByIdAsync, editAsync } from "./Services";

const ProductosUpd = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [producto, setProducto] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultado = await editAsync(producto);
    if (resultado) {
      navigate("/Productos");
    } else {
      // TODO: mostrar una modal indicando el error
    }
  };

  const mostrar = async () => {
    const data = await getByIdAsync(id);
    setProducto(data);
  };

  useEffect(() => {
    mostrar();
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
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
