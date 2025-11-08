import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleVerPlanes = () => {
    navigate("/planes");
  };

  const handleHablarConNosotros = () => {
    navigate("/contacto");
  };

  const handleSolicitarInformacion = () => {
    navigate("/contacto");
    // Hacer scroll al formulario después de navegar
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

  return (
    <>
      <SEO
  title="Zentpiper - Sitios Web Profesionales en Perú | Diseño Web, Hosting y SEO"
  description="Creamos sitios web profesionales, rápidos y optimizados para SEO. Incluye hosting, dominio y diseño responsive. Planes desde S/500 para tu negocio en Perú."
  keywords="diseño web Perú, desarrollo web profesional, páginas web optimizadas, SEO, hosting, dominio, diseño responsive, tiendas online, Zentpiper"
  canonical="https://zentpiper.com/"
/>
      {/* Hero Section */}
      <section className="hero-section">
        <h1
          className="hero-title"
          data-text="Sitios web profesionales para tu negocio"
        >
          Sitios web profesionales para tu negocio
        </h1>
        <p className="hero-subtitle">
          Diseño moderno, rápido y optimizado para que tu empresa destaque.
        </p>
        <div className="cta-buttons">
          <button
            className="btn btn-primary btn-hero"
            onClick={handleVerPlanes}
          >
            <span>Ver Planes</span>
            <i className="arrow">→</i>
          </button>
          <button
            className="btn btn-secondary btn-hero"
            onClick={handleHablarConNosotros}
          >
            <span>Habla con nosotros</span>
            <i className="arrow">💬</i>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-header">
          <h2 className="section-title" data-text="¿Por qué elegir Zentpiper?">
            ¿Por qué elegir Zentpiper?
          </h2>
          <p className="section-subtitle">
            Transformamos tu visión en una presencia digital poderosa que
            impulsa tu negocio
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-palette"></i>
            </div>
            <h3 className="feature-title">Diseño Personalizado</h3>
            <p className="feature-description">
              Creamos sitios únicos que reflejan la identidad de tu marca con
              diseños modernos y atractivos.
            </p>
            <div className="feature-highlight">100% Personalizado</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
            <h3 className="feature-title">SEO Optimizado</h3>
            <p className="feature-description">
              Posicionamiento en Google desde el día uno. Tu sitio será
              encontrado por tus clientes potenciales.
            </p>
            <div className="feature-highlight">Más Visibilidad</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-globe"></i>
            </div>
            <h3 className="feature-title">Hosting + Dominio</h3>
            <p className="feature-description">
              Incluimos hosting premium y dominio por un año completo. Tu sitio
              estará siempre online y seguro.
            </p>
            <div className="feature-highlight">Todo Incluido</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-phone"></i>
            </div>
            <h3 className="feature-title">Diseño Responsive</h3>
            <p className="feature-description">
              Perfecto en móviles, tablets y computadoras. Tu sitio se ve
              increíble en cualquier dispositivo.
            </p>
            <div className="feature-highlight">Multi-dispositivo</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-lightning-charge"></i>
            </div>
            <h3 className="feature-title">Carga Ultra Rápida</h3>
            <p className="feature-description">
              Sitios optimizados para velocidad. Tus visitantes no esperarán y
              Google te premiará en rankings.
            </p>
            <div className="feature-highlight">Súper Rápido</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3 className="feature-title">Seguridad SSL</h3>
            <p className="feature-description">
              Certificado SSL gratuito incluido. Protege los datos de tus
              clientes y mejora tu credibilidad.
            </p>
            <div className="feature-highlight">100% Seguro</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-graph-up"></i>
            </div>
            <h3 className="feature-title">Analytics Integrado</h3>
            <p className="feature-description">
              Google Analytics configurado para que sepas exactamente cómo
              funciona tu sitio y tus visitantes.
            </p>
            <div className="feature-highlight">Datos Reales</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-envelope-at"></i>
            </div>
            <h3 className="feature-title">Formularios de Contacto</h3>
            <p className="feature-description">
              Captura leads efectivamente con formularios optimizados que
              convierten visitantes en clientes.
            </p>
            <div className="feature-highlight">Más Conversiones</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="triangle-pattern">
          {Array.from({ length: 36 }, (_, i) => (
            <div key={i} className="triangle"></div>
          ))}
        </div>
        <h2 className="cta-title" data-text="¿Listo para comenzar?">
          ¿Listo para comenzar?
        </h2>
        <p className="cta-description">
          Contáctanos hoy mismo para una consulta gratuita
        </p>
        <button
          className="btn btn-primary btn-cta"
          onClick={handleSolicitarInformacion}
        >
          <span>Solicitar Información</span>
          <i className="arrow">✨</i>
        </button>
      </section>
    </>
  );
}

export default Home;
