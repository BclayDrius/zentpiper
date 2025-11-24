import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import "./Proyecto.css";

function Proyecto() {
  const navigate = useNavigate();

  const handleCotizar = (servicio) => {
    navigate("/contacto", {
      state: {
        asunto: `Cotización - ${servicio}`,
        servicio: servicio,
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

  const tecnologias = [
    {
      nombre: "Python",
      descripcion: "Desarrollo backend robusto para aplicaciones web, análisis de datos, inteligencia artificial y automatización de procesos.",
      uso: "Backend, Data Science, IA, Automatización",
      
    },
    {
      nombre: "Swift",
      descripcion: "Desarrollo nativo para iOS y macOS con máximo rendimiento y experiencia de usuario fluida.",
      uso: "Apps iOS/macOS, Aplicaciones nativas",
     
    },
    {
      nombre: "JavaScript",
      descripcion: "Desarrollo full-stack para aplicaciones web modernas, interactivas y de alto rendimiento.",
      uso: "Frontend, Backend, Aplicaciones web",
      
    },
    {
      nombre: "Java",
      descripcion: "Aplicaciones empresariales escalables, sistemas Android y soluciones corporativas robustas.",
      uso: "Enterprise, Android, Sistemas corporativos",
      
    },
    {
      nombre: "Kotlin",
      descripcion: "Desarrollo moderno para Android con código más limpio, seguro y productivo.",
      uso: "Apps Android, Desarrollo móvil",
      
    },
    {
      nombre: "C++",
      descripcion: "Aplicaciones de alto rendimiento, sistemas embebidos y software que requiere máxima eficiencia.",
      uso: "Alto rendimiento, Sistemas, Juegos",
      
    },
    
    {
       nombre: "Flutter",
       descripcion: "Desarrollo cross-platform de alta calidad para iOS y Android desde una única base de código, con rendimiento nativo y diseño consistente.",
        uso: "Apps multiplataforma, MVP rápidos, UI/UX consistentes",
  
    },

];

  const areasEspecializacion = [
    {
      titulo: "Sistemas Corporativos",
      descripcion: "Desarrollamos soluciones empresariales completas para administración, finanzas, recursos humanos y gestión de procesos.",
      proyectos: ["ERP", "CRM", "Sistemas de gestión"],
      icono: "🏢"
    },
    {
      titulo: "Puntos de Venta",
      descripcion: "Sistemas POS integrales para restaurantes, retail y comercios con control de inventario y facturación electrónica.",
      proyectos: ["POS Restaurantes", "Retail", "E-commerce"],
      icono: "💳"
    },
    {
      titulo: "Aplicaciones Móviles",
      descripcion: "Apps nativas e híbridas para iOS y Android con diseño intuitivo y máximo rendimiento.",
      proyectos: ["Apps nativas", "Cross-platform", "Progressive Web Apps"],
      icono: "📲"
    },
    {
      titulo: "Optimización y Analytics",
      descripcion: "Sistemas de análisis de datos, dashboards interactivos y herramientas para toma de decisiones basada en datos.",
      proyectos: ["Dashboards", "Business Intelligence", "Reportes automáticos"],
      icono: "📈"
    },
    {
      titulo: "Automatización",
      descripcion: "Soluciones que automatizan procesos repetitivos, aumentando la eficiencia y reduciendo errores.",
      proyectos: ["RPA", "Workflows", "Integraciones"],
      icono: "🤖"
    },
    {
      titulo: "Chatbots & IA",
      descripcion: "Asistentes virtuales inteligentes y sistemas de chat automatizados para atención al cliente 24/7.",
      proyectos: ["Chatbots", "Asistentes virtuales", "Sistemas de soporte"],
      icono: "💬"
    }
  ];

  return (
    <>
      <SEO
        title="Proyectos y Tecnologías | Zentpiper - Desarrollo de Software Personalizado"
        description="Conoce nuestras tecnologías y áreas de especialización. Desarrollamos sistemas personalizados en Python, Swift, JavaScript, Java y más para tu empresa."
        keywords="desarrollo software Python, apps iOS Swift, JavaScript React, Java enterprise, Kotlin Android, sistemas corporativos, puntos de venta, chatbots"
        canonical="https://zentpiper.com/proyecto"
      />

      {/* Hero Section */}
      <section className="proyecto-hero">
        <div className="proyecto-hero-content">
          <h1 className="proyecto-hero-title">
            Tecnologías y <span className="accent-text">Soluciones</span>
          </h1>
          <p className="proyecto-hero-subtitle">
            Utilizamos las mejores tecnologías para desarrollar soluciones 
            personalizadas que impulsan tu negocio al siguiente nivel.
          </p>
          <button
            className="btn btn-primary btn-cotizar"
            onClick={() => handleCotizar("Proyecto Personalizado")}
          >
            <span>¡Cotiza Ya!</span>
            
          </button>
        </div>
      </section>

      {/* Tecnologías Section */}
      <section className="tecnologias-section">
        <div className="container">
          <h2 className="section-title">Tecnologías que Dominamos</h2>
          <p className="section-subtitle">
            Utilizamos las herramientas más modernas y eficientes para cada proyecto
          </p>
          
          <div className="tecnologias-grid">
            {tecnologias.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icono}</div>
                <h3 className="tech-name">{tech.nombre}</h3>
                <p className="tech-desc">{tech.descripcion}</p>
                <div className="tech-uso">
                  <strong>Uso principal:</strong> {tech.uso}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Especialización */}
      <section className="especializacion-section">
        <div className="container">
          <h2 className="section-title">Áreas de Especialización</h2>
          <p className="section-subtitle">
            Desarrollamos soluciones para diversas industrias y necesidades empresariales
          </p>
          
          <div className="especializacion-grid">
            {areasEspecializacion.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-icon">{area.icono}</div>
                <h3 className="area-title">{area.titulo}</h3>
                <p className="area-desc">{area.descripcion}</p>
                <div className="area-proyectos">
                  {area.proyectos.map((proyecto, idx) => (
                    <span key={idx} className="proyecto-tag">{proyecto}</span>
                  ))}
                </div>
                <button
                  className="btn btn-secondary btn-area"
                  onClick={() => handleCotizar(area.titulo)}
                >
                  Cotizar Proyecto
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="proyecto-cta">
        <div className="container">
          <h2 className="cta-title">¿Tienes un proyecto en mente?</h2>
          <p className="cta-subtitle">
            Cuéntanos tu idea y la convertimos en una solución real
          </p>
          <button
            className="btn btn-primary btn-cta-large"
            onClick={() => handleCotizar("Consulta de Proyecto")}
          >
            <span>¡Cotiza Tu Proyecto Ahora!</span>
           
          </button>
        </div>
      </section>
    </>
  );
}

export default Proyecto;