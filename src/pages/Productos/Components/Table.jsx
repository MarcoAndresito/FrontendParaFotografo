import styles from "../Productos.module.css";
import { Link } from "react-router-dom";

const Table = ({ productos }) => {
  return (
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
  );
};

export default Table;
