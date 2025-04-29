import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Components/Form";
import styles from "./Productos.module.css";
import { saveAsync } from "./Services";
import { Link } from "react-router-dom";

const ProductosAdd = () => {
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    nombre: "",
    marca: "",
    precio: 0,
    stock: 0,
  });

  const handleSubmit = async () => {
    const resultado = await saveAsync(producto);
    if (resultado) {
      navigate("/Productos");
    } else {
      // TODO: mostrar una modal indicando el error
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Agregar producto </h1>
      <Link to="/Productos">Atras</Link>
      <Form
        producto={producto}
        setProducto={setProducto}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProductosAdd;
