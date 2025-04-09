import style from "./Login.module.css"

const Login = () => {
    return (
        <div>
            <h1 className={style.titulo}>login</h1>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
        </div>
    );
}

export default Login;
