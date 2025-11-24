import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import "./Contacto.css";

function Contacto() {
  const location = useLocation();
  const [paisSeleccionado, setPaisSeleccionado] = useState("PE");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    plan: "",
    mensaje: "",
  });

  // Contactos por país
  const contactosPorPais = {
    PE: {
      telefono: "+51 945 935 080",
      whatsapp: "51945935080",
      email: "zentpiper@gmail.com"
    },
    CL: {
      telefono: "+56 9 3660 4464", 
      whatsapp: "56936604464",
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

  // Efecto para cargar datos desde la navegación
  useEffect(() => {
    if (location.state) {
      setFormData((prevState) => ({
        ...prevState,
        asunto: location.state.asunto || "",
        plan: location.state.plan || "",
        // Agregar país y moneda si vienen del state
        ...(location.state.pais && { pais: location.state.pais }),
        ...(location.state.moneda && { moneda: location.state.moneda })
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

    const phoneNumber = contactoActual.whatsapp;

    // Crear el mensaje formateado para WhatsApp
    let message = `*📩 Contacto desde Web Zentpiper*%0A%0A*🌎 País:* ${paisSeleccionado === 'PE' ? 'Perú 🇵🇪' : 'Chile 🇨🇱'}%0A*👤 Nombre:* ${formData.nombre}%0A*✉️ Email:* ${formData.email}%0A*📝 Asunto:* ${formData.asunto}`;

    // Agregar plan si está seleccionado
    if (formData.plan) {
      message += `%0A*📋 Plan:* ${formData.plan}`;
    }

    // Agregar moneda si viene del state (desde planes/mobile)
    if (location.state?.moneda) {
      message += `%0A*💰 Moneda seleccionada:* ${location.state.moneda}`;
    }

    message += `%0A*💬 Mensaje:* ${formData.mensaje}`;

    // Crear la URL de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <SEO
        title={`Contacto | Zentpiper - Cotiza tu Proyecto en ${paisSeleccionado === 'PE' ? 'Perú' : 'Chile'}`}
        description={`¿Listo para impulsar tu negocio online? Contáctanos y recibe una cotización gratuita. Teléfono: ${contactoActual.telefono} · Email: ${contactoActual.email} · Atención en ${paisSeleccionado === 'PE' ? 'Perú' : 'Chile'}.`}
        keywords={`contacto Zentpiper, cotización sitio web, diseño web ${paisSeleccionado === 'PE' ? 'Perú' : 'Chile'}, crear página web, desarrollo web, consulta gratuita diseño web`}
        canonical="https://zentpiper.com/contacto"
      />
      
      <div className="contacto-container">
        <h1 className="contacto-title">Contáctanos</h1>

        <div className="contacto-info">
          <div className="contacto-card">
            <div className="contacto-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Teléfono</h3>
            <p>{contactoActual.telefono}</p>
            <small>{paisSeleccionado === 'PE' ? 'Perú' : 'Chile'}</small>
          </div>

          <div className="contacto-card">
            <div className="contacto-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Correo Electrónico</h3>
            <p>{contactoActual.email}</p>
          </div>
        </div>

        <div className="contacto-form-container" id="contacto-form-container">
          <h2>Envíanos un mensaje</h2>
          <div className="pais-indicator-contacto">
            Estás contactando desde: <strong>{paisSeleccionado === 'PE' ? 'Perú 🇵🇪' : 'Chile 🇨🇱'}</strong>
          </div>
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
                <option value="Página Web">Página Web</option>
                <option value="Aplicación Mobile">Aplicación Mobile</option>
                <option value="Cotizar Proyecto">Cotizar Proyecto</option>
                <option value="Soporte técnico">Soporte técnico</option>
                <option value="Otros">Otros</option>
              </select>
            </div>

            {/* Campo Plan - Solo se muestra si el asunto es "Página Web" */}
            {formData.asunto === "Página Web" && (
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
                  <option value="Plan Básico">Plan Básico</option>
                  <option value="Plan Emprendedor">Plan Emprendedor</option>
                  <option value="Plan Profesional">Plan Profesional</option>
                  <option value="Plan Tienda Online">Plan Tienda Online</option>
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
              Enviar a WhatsApp {paisSeleccionado === 'PE' ? '(Perú)' : '(Chile)'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacto;