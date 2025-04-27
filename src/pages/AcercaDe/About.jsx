import "./About.css"
import misionImage from "../../assets/Acerca de.jpg"

function About() {
  return (
    <div className="app-container">
      <div className="content-section">
        <div className="text-section">
          <h2 className="section-title">Nuestra Misión</h2>
          <p className="section-text">
            En nuestra aplicación fotógrafo, nos dedicamos a brindarte una experiencia única y profesional. Con una
            sección 'acerca de' que muestra nuestras raíces, un álbum con descarga en ZIP para almacenar tus recuerdos,
            y un proceso de registro y autenticación seguro para garantizar la privacidad de tus fotografías.
          </p>
        </div>

        <div className="text-section">
          <h2 className="section-title">Nuestros Valores</h2>
          <p className="section-text">
            Nos enorgullecemos de ofrecer una plataforma dinámica que te permite no solo capturar momentos, sino también
            vender tus servicios fotográficos de manera sencilla y efectiva. ¡Con nosotros, tu pasión se convierte en
            oportunidad!
          </p>
        </div>
      </div>

      <div className="image-section">
        <img
          src={misionImage}
          alt="Tablet mostrando perfil de usuario"
          className="tablet-image"
        />
      </div>
    </div>
  )
}

export default About

