import styles from "../Productos.module.css";
import InputText from "../../../Components/Inputs/InputText";

const Form = ({ onSubmit, producto, setProducto }) => {
  const handleSubmitAsync = async (event) => {
    event.preventDefault();
    await onSubmit();
  };

  return (
    <form onSubmit={handleSubmitAsync}>
      {producto && (
        <>
          {producto.id > 0 && (
            <InputText
              id="id"
              textLabel="Codigo"
              type="number"
              value={producto.id}
            />
          )}
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
            <button type="submit" className={styles.btn}>
              Guardar
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
