import styles from "./RegisterUser.module.css";


const RegisterUser = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h2  className={styles.titulo}>REGISTRO DE USUARIO</h2>
                <label className={styles.label} htmlFor="">Nombre</label>

                <input className={styles.input} type="text" placeholder="Escriba su nombre" />

                <label className={styles.label} htmlFor="">Correo</label>

                <input className={styles.input} type="email" name="" placeholder="Escriba su correo" id="" />

                <label className={styles.label} htmlFor="">Contraseña</label>

                <input className={styles.input} type="password" name="" placeholder="Escriba su contraseña" id="" />

                <label className={styles.label} htmlFor="">Repita su contraseña</label>

                <input className={styles.input} type="password" name="" placeholder="Confirme su contraseña" id="" />

                <button className={styles.buton} type="submit">Registrarse</button>
                
            </form>
        </div>
    );
};

export default RegisterUser; 