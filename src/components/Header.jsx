import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar/ocultar header basado en dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`header ${
        isHeaderVisible ? "header-visible" : "header-hidden"
      }`}
    >
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} className="logo" alt="ZENTPIPER SOFTWARE" />
          <div className="logo-text">
            <div className="logo-title">ZENTPIPER</div>
            <div className="logo-subtitle">SOFTWARE</div>
          </div>
        </div>

        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            INICIO
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            CONTACTO
          </NavLink>
          <NavLink
            to="/planes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            PLANES
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
