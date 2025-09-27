import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Sitios web profesionales para tu negocio</h1>
        <p className="hero-subtitle">Diseño moderno, rápido y optimizado para que tu empresa destaque.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Ver Planes</button>
          <button className="btn btn-secondary">Habla con nosotros</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Características Destacadas</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Diseño Personalizado</h3>
            <p className="feature-description">Plantillas adaptables que representan tu marca y estilo.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">SEO Optimizado</h3>
            <p className="feature-description">Mejor visibilidad en Google para atraer más clientes.</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Hosting + Dominio</h3>
            <p className="feature-description">Todo incluido para que tu sitio esté siempre disponible.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Formularios y CTA</h3>
            <p className="feature-description">Captura leads y convierte visitantes en clientes.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">¿Listo para comenzar?</h2>
        <p className="cta-description">Contáctanos hoy mismo para una consulta gratuita</p>
        <button className="btn btn-primary">Solicitar Información</button>
      </section>
    </>
  );
}

export default Home;