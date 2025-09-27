import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Layout({ children }) {
  return (
    <div className="app-container">
      {/* Header with Logo */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="ZENTPIPER SOFTWARE" />
          <div className="logo-text">
            <div className="logo-title">ZENTPIPER</div>
            <div className="logo-subtitle">SOFTWARE</div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>INICIO</NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>CONTACTO</NavLink>
          <NavLink to="/planes" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>PLANES</NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Transformamos ideas en sitios web funcionales y atractivos, optimizados para tu negocio</h3>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/planes">Planes</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contáctanos</h4>
            <p>zentpiper@gmail.com</p>
            <p>+51 945 935 080</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Zentpiper. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;