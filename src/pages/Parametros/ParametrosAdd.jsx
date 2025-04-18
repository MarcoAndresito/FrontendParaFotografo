import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Parametros.module.css';

const ParametrosAdd = () => {
  const [parametro, setParametro] = useState({
    servicio: '',
    clave: '',
    valor: '',
    descripcion: '',
    activo: true
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setParametro({
      ...parametro,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');

    try {
      const response = await fetch('http://localhost:5188/api/Parametros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametro)
      });

      if (!response.ok) {
        throw new Error('Error al guardar el parámetro.');
      }

      setMensaje('Parámetro guardado exitosamente.');
      setTimeout(() => navigate('/Parametros'), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.formularioContainer}>
      <h2 className={styles.tituloAdd}>Agregar Nuevo Parámetro</h2>
      {mensaje && <div className={styles.mensajeExito}>{mensaje}</div>}
      {error && <div className={styles.mensajeError}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.formulario}>
        <label>
          Servicio:
          <input type="text" name="servicio" value={parametro.servicio} onChange={handleChange} required />
        </label>

        <label>
          Clave:
          <input type="text" name="clave" value={parametro.clave} onChange={handleChange} required />
        </label>

        <label>
          Valor:
          <input type="text" name="valor" value={parametro.valor} onChange={handleChange} required />
        </label>

        <label>
          Descripción:
          <textarea name="descripcion" value={parametro.descripcion} onChange={handleChange} required />
        </label>

        <label>
          Activo:
          <input type="checkbox" name="activo" checked={parametro.activo} onChange={handleChange} />
        </label>

        <button type="submit" className={styles.botonGuardar}>Guardar</button>
      </form>
    </div>
  );
};

export default ParametrosAdd;
