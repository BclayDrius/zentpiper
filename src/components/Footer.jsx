import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mensaje.trim()) {
      alert("Por favor, escribe un mensaje antes de enviar.");
      return;
    }

    // Número de WhatsApp (sin el signo + y con código de país)
    const phoneNumber = "51981183443";

    // Crear el mensaje formateado para WhatsApp
    const message = `*💬 Mensaje desde Web Zentpiper*%0A%0A*📝 Mensaje:* ${mensaje}`;

    // Crear la URL de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");

    // Limpiar el campo después de enviar
    setMensaje("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-cta">
          <h3>Vamos comenzar un proyecto.</h3>
          <div className="footer-arrow">↗</div>
        </div>

        <div className="footer-section footer-newsletter">
          <h3>¡Coloca un mensaje para empezar la conversación!</h3>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Escribe tu mensaje aquí..."
              className="newsletter-input"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              →
            </button>
          </form>
        </div>

        <div className="footer-section footer-contact">
          <h3>Vamos a conversar.</h3>
          <div className="contact-info">
            <p>zentpiper@gmail.com</p>
            <p>Lima, Perú</p>
            <p>+51 981 183 443</p>
            <p>+51 988 490 319</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-brand">ZENTPIPER SOFTWARE</span>
          <span className="footer-menu">MENU</span>
        </div>
        <div className="footer-bottom-center">
          <div className="footer-logo">
            <span>Zentpiper</span>
          </div>
        </div>
        <div className="footer-bottom-right">
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="Behance">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
