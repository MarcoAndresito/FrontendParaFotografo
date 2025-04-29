import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Productos.module.css";
import { deleteAsync, getAllAsync } from "./Services";
import Table from "./Components/Table";

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
      <Table productos={productos} />
    </div>
  );
};

export default ProductosList;
