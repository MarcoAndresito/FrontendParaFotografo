export default function RegistroUsuario() {
  return (
    <div className="container">
      <form className="form">
        <h2>Registro de Usuario</h2>

        <input type="text" name="nombre" placeholder="Nombre" />
        

        <input type="email" name="email" placeholder="Correo" />
        

        <input type="password" name="password" placeholder="Contraseña" />
        

        <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" />
        

        <button type="submit">Registrarse</button>
        
      </form>
    </div>
  );
}