import { useState, useEffect } from "react";
import "./FooterAlt.css";

function FooterAlt() {
  const [mensaje, setMensaje] = useState("");
  const [paisSeleccionado, setPaisSeleccionado] = useState("PE");

  // Números de WhatsApp por país
  const contactosPorPais = {
    PE: {
      telefono: "+51 945 935 080",
      whatsapp: "51945935080", // Número para WhatsApp (sin +)
      email: "zentpiper@gmail.com"
    },
    CL: {
      telefono: "+56 9 3660 4464",
      whatsapp: "56936604464", // Número para WhatsApp (sin +)
      email: "zentpiper@gmail.com"
    }
  };

  // Escuchar cambios de país
  useEffect(() => {
    const handlePaisCambiado = (event) => {
      const { pais } = event.detail;
      setPaisSeleccionado(pais);
    };

    // Cargar país inicial desde localStorage
    const paisGuardado = localStorage.getItem('paisSeleccionado') || 'PE';
    setPaisSeleccionado(paisGuardado);

    window.addEventListener('paisCambiado', handlePaisCambiado);
    
    return () => {
      window.removeEventListener('paisCambiado', handlePaisCambiado);
    };
  }, []);

  const contactoActual = contactosPorPais[paisSeleccionado];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mensaje.trim()) {
      alert("Por favor, escribe un mensaje antes de enviar.");
      return;
    }

    const phoneNumber = contactoActual.whatsapp;
    const message = `*💬 Mensaje desde Web Zentpiper*%0A%0A*🌎 País:* ${paisSeleccionado === 'PE' ? 'Perú' : 'Chile'}%0A*📝 Mensaje:* ${mensaje}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
    setMensaje("");
  };

  return (
    <footer className="footer">
      <div className="footer-content"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-brand">ZENTPIPER SOFTWARE</span>
        </div>
        <div className="footer-bottom-center">
          <a href={`mailto:${contactoActual.email}`} className="footer-logo">
            <span>{contactoActual.email}</span>
          </a>
        </div>
        <div className="footer-bottom-right">
          <div className="contact-info-bottom">
            <p>{contactoActual.telefono}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterAlt;
