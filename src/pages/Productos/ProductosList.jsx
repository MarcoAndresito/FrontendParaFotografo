import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Productos.module.css";
import { deleteAsync, getAllAsync } from "./Services";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  const handleDelete = async (id) => {
    await deleteAsync(id);
    mostrar();
  };

  const mostrar = async () => {
    const data = await getAllAsync();
    setProductos(data);
  };

  useEffect(() => {
    mostrar();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de productos</h1>
      <Link to="/Productos/new" className={styles.addButton}>
        Agregar nuevo producto
      </Link>
      <table className={styles.table}>
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
                <div className={styles.actions}>
                  <Link
                    to={`/Productos/${item.id}`}
                    className={styles.editButton}
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className={styles.deleteButton}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductosList;
