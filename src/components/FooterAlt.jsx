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
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-brand">ZENTPIPER SOFTWARE</span>
        </div>
        <div className="footer-bottom-center">
          <a href="mailto:zentpiper@gmail.com" className="footer-logo">
            <span>zentpiper@gmail.com</span>
          </a>
        </div>
        <div className="footer-bottom-right">
          <div className="contact-info-bottom">
            <p>+51 945 935 080</p>
            <p>+51 988 490 319</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
