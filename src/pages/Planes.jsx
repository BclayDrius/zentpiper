import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import "./Planes.css";

function Planes() {
  const navigate = useNavigate();
  const [paisSeleccionado, setPaisSeleccionado] = useState("PE");
  const [precios, setPrecios] = useState({
    basico: { desarrollo: 500, mantenimiento: 240 },
    emprendedor: { desarrollo: 900, mantenimiento: 360 },
    profesional: { desarrollo: 1500, mantenimiento: 480 },
    tienda: { desarrollo: 2500, mantenimiento: 700 }
  });

  // Precios por país
  const preciosPorPais = {
    PE: {
      moneda: "S/",
      basico: { desarrollo: 500, mantenimiento: 240 },
      emprendedor: { desarrollo: 900, mantenimiento: 360 },
      profesional: { desarrollo: 1500, mantenimiento: 480 },
      tienda: { desarrollo: 2500, mantenimiento: 700 }
    },
    CL: {
      moneda: "CLP$",
      basico: { desarrollo: 150000, mantenimiento: 70000 }, // Aprox conversión
      emprendedor: { desarrollo: 260000, mantenimiento: 110000 },
      profesional: { desarrollo: 450000, mantenimiento: 145000 },
      tienda: { desarrollo: 715000, mantenimiento: 210000 }
    }
  };

  // Escuchar cambios de país y recargar
  useEffect(() => {
    const handlePaisCambiado = (event) => {
      const { pais } = event.detail;
      window.location.reload();
    };

    // Cargar país inicial desde localStorage
    const paisGuardado = localStorage.getItem('paisSeleccionado') || 'PE';
    setPaisSeleccionado(paisGuardado);
    setPrecios(preciosPorPais[paisGuardado]);

    window.addEventListener('paisCambiado', handlePaisCambiado);
    
    return () => {
      window.removeEventListener('paisCambiado', handlePaisCambiado);
    };
  }, []);

  // También escuchar cambios en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const paisGuardado = localStorage.getItem('paisSeleccionado') || 'PE';
      if (paisGuardado !== paisSeleccionado) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [paisSeleccionado]);

  const handleCotizar = (planName) => {
    navigate("/contacto", {
      state: {
        asunto: "Creación de página web",
        plan: planName,
        pais: paisSeleccionado,
        moneda: preciosPorPais[paisSeleccionado].moneda
      },
    });
    
    setTimeout(() => {
      const formElement = document.getElementById("contacto-form-container");
      if (formElement) {
        formElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  const formatearPrecio = (precio) => {
    const moneda = preciosPorPais[paisSeleccionado].moneda;
    if (paisSeleccionado === 'CL') {
      return `${moneda} ${precio.toLocaleString('es-CL')}`;
    } else {
      return `${moneda} ${precio.toLocaleString('es-PE')}`;
    }
  };

  return (
    <>
      <SEO
        title="Planes y Precios | Zentpiper - Sitios Web Profesionales"
        description="Elige tu plan ideal de diseño web profesional. Todos incluyen hosting, dominio y optimización SEO. Planes para negocios, emprendedores y tiendas online."
        keywords="planes diseño web, precios páginas web, desarrollo web profesional, hosting y dominio, SEO Perú, SEO Chile, crear sitio web"
        canonical="https://zentpiper.com/planes"
      />

      <div className="planes-container">
        <h2 className="planes-title">Nuestros Planes</h2>
        
        {/* Indicador de País Actual */}
        

        <div className="planes-grid">
          {/* Plan Básico */}
          <div className="plan-card">
            <h3>Plan Básico</h3>
            <div className="plan-price">
              {formatearPrecio(precios.basico.desarrollo)} <span>(anual)</span>
            </div>
            <div className="plan-maintenance">
              Mantenimiento: {formatearPrecio(precios.basico.mantenimiento)}/año
            </div>
            <div className="plan-details">
              <ul>
                <li>Visualización web del local</li>
                <li>1 a 3 secciones</li>
                <li>Hosting + dominio</li>
                <li>Soporte email/chat básico</li>
                <li>Certificado SSL gratuito</li>
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => handleCotizar("Plan Básico")}
            >
              Contactar
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleCotizar("Plan Básico")}
            >
              Demo
            </button>
          </div>

          {/* Plan Emprendedor - DESTACADO */}
          <div className="plan-card plan-featured">
            <div className="plan-badge">Más Popular</div>
            <h3>Plan Emprendedor</h3>
            <div className="plan-price">
              {formatearPrecio(precios.emprendedor.desarrollo)} <span>(anual)</span>
            </div>
            <div className="plan-maintenance">
              Mantenimiento: {formatearPrecio(precios.emprendedor.mantenimiento)}/año
            </div>
            <div className="plan-details">
              <ul>
                <li>Catálogo hasta 50 productos</li>
                <li>4 a 6 secciones</li>
                <li>Optimización SEO básica</li>
                <li>Formulario de contacto</li>
                <li>Diseño responsive completo</li>
              </ul>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleCotizar("Plan Emprendedor")}
            >
              Contactar
            </button>
          </div>

          {/* Plan Profesional */}
          <div className="plan-card">
            <h3>Plan Profesional</h3>
            <div className="plan-price">
              {formatearPrecio(precios.profesional.desarrollo)} <span>(anual)</span>
            </div>
            <div className="plan-maintenance">
              Mantenimiento: {formatearPrecio(precios.profesional.mantenimiento)}/año
            </div>
            <div className="plan-details">
              <ul>
                <li>Hasta 10 secciones personalizadas</li>
                <li>Datos de los usuarios</li>
                <li>SEO local + Google Analytics</li>
                <li>Integración con redes sociales</li>
                <li>Diseño mejorado y branding</li>
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => handleCotizar("Plan Profesional")}
            >
              Contactar
            </button>
          </div>

          {/* Plan Tienda Online */}
          <div className="plan-card">
            <h3>Plan Tienda Online</h3>
            <div className="plan-price">
              {formatearPrecio(precios.tienda.desarrollo)} <span>(anual)</span>
            </div>
            <div className="plan-maintenance">
              Mantenimiento: {formatearPrecio(precios.tienda.mantenimiento)}/año
            </div>
            <div className="plan-details">
              <ul>
                <li>Catálogos personalizados</li>
                <li>Seguimiento digital al cliente</li>
                <li>Carrito + pasarela de pago</li>
                <li>Panel de administración simple</li>
                <li>Soporte técnico prioritario</li>
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => handleCotizar("Plan Tienda Online")}
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planes;