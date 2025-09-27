import React from 'react';
import './Contacto.css';

function Contacto() {
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
        <form className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" name="asunto" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-button">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;