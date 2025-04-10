import styles from "./RegisterUser.module.css";

const RegisterUser = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h2 className={styles.titulo}>Registro de Usuario</h2>
                <input className={styles.input} type="text" placeholder="Escriba su nombre" />
                <input className={styles.input} type="email" name="" placeholder="Escriba su correo" id="" />
                <input className={styles.input} type="password" name="" placeholder="Escriba su contraseña" id="" />
                <input className={styles.input} type="password" name="" placeholder="Confirme su contraseña" id="" />
                <button className={styles.buton} type="submit">Registrarse</button>
                <button className={styles.buton} type="submit">Olvidaste tu Contraseña</button>
            </form>
        </div>
    );
};

export default RegisterUser; 