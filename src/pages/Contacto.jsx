import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Contacto.css";

function Contacto() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    plan: "",
    mensaje: "",
  });

  // Efecto para cargar datos desde la navegación
  useEffect(() => {
    if (location.state) {
      setFormData((prevState) => ({
        ...prevState,
        asunto: location.state.asunto || "",
        plan: location.state.plan || "",
      }));
    }
  }, [location.state]);

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
    let message = `*📩 Contacto desde Web Zentpiper*%0A%0A*👤 Nombre:* ${formData.nombre}%0A*✉️ Email:* ${formData.email}%0A*📝 Asunto:* ${formData.asunto}`;

    // Agregar plan si está seleccionado
    if (formData.plan) {
      message += `%0A*📋 Plan:* ${formData.plan}`;
    }

    message += `%0A*💬 Mensaje:* ${formData.mensaje}`;

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
          <p>
            988 490 319
            <br />
            945 935 080
          </p>
        </div>

        <div className="contacto-card">
          <div className="contacto-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Correo Electrónico</h3>
          <p>zentpiper@gmail.com</p>
        </div>
      </div>

      <div className="contacto-form-container" id="contacto-form-container">
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
            <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              className="select-asunto"
            >
              <option value="">Selecciona un asunto</option>
              <option value="Ver cuál sería mi plan ideal">
                Ver cuál sería mi plan ideal
              </option>
              <option value="Información extra sobre los planes">
                Información extra sobre los planes
              </option>
              <option value="Creación de página web">
                Creación de página web
              </option>
              <option value="Soporte técnico">Soporte técnico</option>
              <option value="Consulta sobre servicios adicionales">
                Consulta sobre servicios adicionales
              </option>
            </select>
          </div>

          {/* Campo Plan - Solo se muestra si el asunto es "Creación de página web" */}
          {formData.asunto === "Creación de página web" && (
            <div className="form-group">
              <label htmlFor="plan">Plan</label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="select-plan"
              >
                <option value="">Selecciona un plan</option>
                <option value="Plan Básico">
                  Plan Básico - S/ 500 (anual)
                </option>
                <option value="Plan Emprendedor">
                  Plan Emprendedor - S/ 900 (anual)
                </option>
                <option value="Plan Profesional">
                  Plan Profesional - S/ 1,500 (anual)
                </option>
                <option value="Plan Tienda Online">
                  Plan Tienda Online - S/ 2,500 (anual)
                </option>
              </select>
            </div>
          )}

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
