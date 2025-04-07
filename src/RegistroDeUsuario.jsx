import { useState } from "react";

export default function RegistroUsuario() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = (field, value) => {
    let error = "";
    if (!value) {
      error = "Campo requerido";
    } else {
      if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Correo inválido";
      }
      if ((field === "password" || field === "confirmPassword") && value.length < 6) {
        error = "Mínimo 6 caracteres";
      }
      if (field === "confirmPassword" && value !== form.password) {
        error = "Las contraseñas no coinciden";
      }
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(form).forEach((key) => validate(key, form[key]));
    if (!Object.values(newErrors).some((err) => err)) {
      setSuccess(true);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registro de Usuario</h2>
        {success && <p className="success">Registro exitoso</p>}

        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        {errors.nombre && <span className="error">{errors.nombre}</span>}

        <input type="email" name="email" placeholder="Correo" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}

        <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" value={form.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

        <button type="submit">Registrarse</button>
      </form>

      
    </div>
  );
}