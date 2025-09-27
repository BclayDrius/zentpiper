import React from 'react';
import './Planes.css';

function Planes() {
  return (
    <div className="planes-container">
      <h2 className="planes-title">Nuestros Planes</h2>
      
      <div className="planes-grid">
        {/* Plan Básico */}
        <div className="plan-card">
          <h3>Plan Básico</h3>
          <div className="plan-price">S/ 500 <span>(anual)</span></div>
          <div className="plan-details">
            <p>Mantenimiento: 5/ 240/año</p>
            <ul>
              <li>1 a 3 secciones</li>
              <li>Hosting + dominio-primer año</li>
              <li>Soporte email/chat básico</li>
              <li>Certificado SSL gratuito</li>
            </ul>
          </div>
          <button className="cotizar-btn">Cotizar</button>
        </div>

        {/* Plan Emprendedor */}
        <div className="plan-card">
          <h3>Plan Emprendedor</h3>
          <div className="plan-price">S/ 900 <span>(anual)</span></div>
          <div className="plan-details">
            <p>Mantenimiento: 5/ 360/año</p>
            <ul>
              <li>4 a 6 secciones</li>
              <li>Optimización SEO básica</li>
              <li>Formulario de contacto</li>
              <li>Diseño responsive completo</li>
            </ul>
          </div>
          <button className="cotizar-btn">Cotizar</button>
        </div>

        {/* Plan Profesional */}
        <div className="plan-card">
          <h3>Plan Profesional</h3>
          <div className="plan-price">S/ 1,500 <span>(anual)</span></div>
          <div className="plan-details">
            <p>Mantenimiento: 5/ 480/año</p>
            <ul>
              <li>Hasta 10 secciones personalizadas</li>
              <li>SEO local + Google Analytics</li>
              <li>Integración con redes sociales</li>
              <li>Diseño mejorado y branding</li>
            </ul>
          </div>
          <button className="cotizar-btn">Cotizar</button>
        </div>

        {/* Plan Tienda Online */}
        <div className="plan-card">
          <h3>Plan Tienda Online</h3>
          <div className="plan-price">S/ 2,500 <span>(anual)</span></div>
          <div className="plan-details">
            <p>Mantenimiento: 5/ 700/año</p>
            <ul>
              <li>Catálogo hasta 50 productos</li>
              <li>Carrito + pasarela de pago</li>
              <li>Panel de administración simple</li>
              <li>Soporte técnico prioritario</li>
            </ul>
          </div>
          <button className="cotizar-btn">Cotizar</button>
        </div>
      </div>
    </div>
  );
}

export default Planes;