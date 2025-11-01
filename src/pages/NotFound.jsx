import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToPlanes = () => {
    navigate("/planes");
  };

  const handleGoToContacto = () => {
    navigate("/contacto");
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-icon">
          <i className="bi bi-exclamation-triangle"></i>
        </div>
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Página no encontrada</h2>
        <p className="notfound-description">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="notfound-actions">
          <button className="btn btn-primary" onClick={handleGoHome}>
            <i className="bi bi-house"></i>
            Ir al Inicio
          </button>
          <button className="btn btn-secondary" onClick={handleGoToPlanes}>
            <i className="bi bi-card-list"></i>
            Ver Planes
          </button>
          <button className="btn btn-secondary" onClick={handleGoToContacto}>
            <i className="bi bi-envelope"></i>
            Contacto
          </button>
        </div>

        <div className="notfound-help">
          <h3>¿Necesitas ayuda?</h3>
          <p>Puedes contactarnos directamente:</p>
          <div className="contact-info">
            <a href="tel:+51988490319" className="contact-link">
              <i className="bi bi-telephone"></i>
              988 490 319
            </a>
            <a href="mailto:zentpiper@gmail.com" className="contact-link">
              <i className="bi bi-envelope"></i>
              zentpiper@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
