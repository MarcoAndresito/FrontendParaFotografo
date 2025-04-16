import React from 'react';
import styles from './Parametros.module.css';

  const ParametrosList = () => {
    
    return (
      <div className={styles.contenedor}>
        <h2 className={styles.titulo}>Lista de Parámetros</h2>
        <table className={styles.tabla}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Servicio</th>
              <th>Clave</th>
              <th>Valor</th>
              <th>Descripción</th>
              <th>Activo</th>
            </tr>
          </thead>
          <tbody>
                <tr >
                  <td>ss</td>
                  <td>ss</td>
                  <td>ss</td>
                  <td>sdasdsa</td>
                  <td>dasd</td>
                  <td>asds</td>
                </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
export default ParametrosList;