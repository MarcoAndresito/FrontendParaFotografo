import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Components/Form";
import styles from "./Productos.module.css";
import { editAsync, getByIdAsync } from "./Services";
import { Link } from "react-router-dom";

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
    <div className={styles.container}>
      <h1 className={styles.title}>Editar el producto {id} </h1>
      <Link to="/Productos">Atras</Link>
      <Form
        producto={producto}
        setProducto={setProducto}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProductosUpd;
