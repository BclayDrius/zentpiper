import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Número de WhatsApp (sin el signo + y con código de país)
    const phoneNumber = "51988490319";

    // Crear el mensaje formateado para WhatsApp
    const message = `*📩 Contacto desde Web Zentpiper*%0A%0A*👤 Nombre:* ${formData.nombre}%0A*✉️ Email:* ${formData.email}%0A*📝 Asunto:* ${formData.asunto}%0A*💬 Mensaje:* ${formData.mensaje}`;

    // Crear la URL de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contáctanos</h1>

      <div className="contacto-info">
        <div className="contacto-card">
          <div className="contacto-icon">
            <i className="fas fa-phone"></i>
          </div>
          <h3>Teléfono</h3>
          <p>988 490 319</p>
        </div>

        <div className="contacto-card">
          <div className="contacto-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Correo Electrónico</h3>
          <p>zentpiper@gmail.com</p>
        </div>
      </div>

      <div className="contacto-form-container">
        <h2>Envíanos un mensaje</h2>
        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Enviar a WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
