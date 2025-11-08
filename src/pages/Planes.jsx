import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import "./Planes.css";

function Planes() {
  const navigate = useNavigate();

  const handleCotizar = (planName) => {
    navigate("/contacto", {
      state: {
        asunto: "Creación de página web",
        plan: planName,
      },
    });
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
  title="Planes y Precios | Zentpiper - Sitios Web Profesionales desde S/500"
  description="Elige el plan ideal para tu negocio. Desde sitios web básicos hasta tiendas online completas. Planes desde S/500 con dominio, hosting y optimización SEO incluidos. Diseño web profesional en Perú."
  keywords="planes Zentpiper, precios diseño web, páginas web Perú, desarrollo web, tienda online, hosting incluido, dominio gratis, diseño responsive, SEO profesional"
  canonical="https://zentpiper.com/planes"
  openGraph={{
    title: "Planes y Precios | Zentpiper - Sitios Web Profesionales desde S/500",
    description: "Descubre nuestros planes de diseño web profesional. Incluyen hosting, dominio y optimización SEO. Planes desde S/500 para negocios en todo el Perú.",
    url: "https://zentpiper.com/planes",
    type: "website",
    image: "https://zentpiper.com/og-image-planes.jpg"
  }}
  meta={[
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Zentpiper" },
    { name: "language", content: "es" },
    { name: "geo.region", content: "PE" },
    { name: "geo.placename", content: "Lima, Perú" }
  ]}
/>

      <div className="planes-container">
        <h2 className="planes-title">Nuestros Planes</h2>

        <div className="planes-grid">
          {/* Plan Básico */}
          <div className="plan-card">
            <h3>Plan Básico</h3>
            <div className="plan-price">
              S/ 500 <span>(anual)</span>
            </div>
            <div className="plan-details">
              <p>Mantenimiento: S/ 240/año</p>
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
              Cotizar
            </button>
          </div>

          {/* Plan Emprendedor - DESTACADO */}
          <div className="plan-card plan-featured">
            <div className="plan-badge">Más Popular</div>
            <h3>Plan Emprendedor</h3>
            <div className="plan-price">
              S/ 900 <span>(anual)</span>
            </div>
            <div className="plan-details">
              <p>Mantenimiento: S/ 360/año</p>
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
              Cotizar
            </button>
          </div>

          {/* Plan Profesional */}
          <div className="plan-card">
            <h3>Plan Profesional</h3>
            <div className="plan-price">
              S/ 1,500 <span>(anual)</span>
            </div>
            <div className="plan-details">
              <p>Mantenimiento: S/ 480/año</p>
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
              Cotizar
            </button>
          </div>

          {/* Plan Tienda Online */}
          <div className="plan-card">
            <h3>Plan Tienda Online</h3>
            <div className="plan-price">
              S/ 2,500 <span>(anual)</span>
            </div>
            <div className="plan-details">
              <p>Mantenimiento: S/ 700/año</p>
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
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planes;
