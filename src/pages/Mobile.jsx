import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import "./Mobile.css";

function Mobile() {
  const navigate = useNavigate();
  const [paisSeleccionado, setPaisSeleccionado] = useState("PE");
  const [precios, setPrecios] = useState({
    android: { desarrollo: 2000, mantenimiento: 200 },
    ios: { desarrollo: 3000, mantenimiento: 200 },
    flutter: { desarrollo: 3500, mantenimiento: 200 },
    nativo: { desarrollo: 4000, mantenimiento: 200 }
  });

  // Precios por país
  const preciosPorPais = {
    PE: {
      moneda: "S/",
      android: { desarrollo: 2000, mantenimiento: 200 },
      ios: { desarrollo: 3000, mantenimiento: 200 },
      flutter: { desarrollo: 3500, mantenimiento: 200 },
      nativo: { desarrollo: 4000, mantenimiento: 200 }
    },
    CL: {
      moneda: "CLP$",
      android: { desarrollo: 560000, mantenimiento: 60000 },
      ios: { desarrollo: 840000, mantenimiento: 60000 },
      flutter: { desarrollo: 980000, mantenimiento: 120000 },
      nativo: { desarrollo: 1120000, mantenimiento: 120000 }
    }
  };

  // Escuchar cambios de país y recargar
  useEffect(() => {
    const handlePaisCambiado = (event) => {
      const { pais } = event.detail;
      
      // Recargar la página cuando cambie el país
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

  // También escuchar cambios en localStorage por si acaso
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

  const handleCotizar = (serviceName) => {
    navigate("/contacto", {
      state: {
        asunto: "Desarrollo de Aplicación Móvil",
        servicio: serviceName,
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
        title="Desarrollo Móvil | Zentpiper - Apps Nativas y Cross-Platform"
        description="Desarrollo de aplicaciones móviles nativas y cross-platform. Apps para iOS, Android, Flutter. Soluciones móviles profesionales."
        keywords="desarrollo móvil, apps iOS, apps Android, Flutter, React Native, aplicaciones nativas, desarrollo apps Perú, desarrollo apps Chile"
        canonical="https://zentpiper.com/mobile"
      />

      <div className="mobile-services-container">
        <h2 className="mobile-services-title">Servicios Móviles</h2>
        
        {/* Indicador de País Actual */}
        <div className="pais-indicator">
          Precios en {preciosPorPais[paisSeleccionado].moneda} - {paisSeleccionado === 'PE' ? 'Perú' : 'Chile'}
        </div>

        <div className="mobile-services-grid">
          {/* App Android */}
          <div className="mobile-service-card">
            <h3>App Android</h3>
            <div className="mobile-service-price">
              {formatearPrecio(precios.android.desarrollo)} <span>Desarrollo</span>
            </div>
            <div className="mobile-maintenance-price">
              {formatearPrecio(precios.android.mantenimiento)} <span>Mantenimiento Mensual</span>
            </div>
            <div className="mobile-service-details">
              <p>Desarrollo nativo con Kotlin/Java</p>
              <ul>
                <li>Publicación en Google Play Store</li>
                <li>Compatibilidad con múltiples dispositivos</li>
                <li>Integración con servicios Google</li>
                <li>UI/UX adaptativo Material Design</li>
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => handleCotizar("App Android")}
            >
              Contactar
            </button>
          </div>

          {/* App iOS */}
          <div className="mobile-service-card">
            <h3>App iOS</h3>
            <div className="mobile-service-price">
              {formatearPrecio(precios.ios.desarrollo)} <span>Desarrollo</span>
            </div>
            <div className="mobile-maintenance-price">
              {formatearPrecio(precios.ios.mantenimiento)} <span>Mantenimiento Mensual</span>
            </div>
            <div className="mobile-service-details">
              <p>Desarrollo nativo con Swift</p>
              <ul>
                <li>Publicación en App Store</li>
                <li>Optimización para iPhone y iPad</li>
                <li>Diseño siguiendo guidelines Apple</li>
                <li>Integración con iOS SDK</li>
                <li>Review y aprobación garantizada</li>
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => handleCotizar("App iOS")}
            >
              Contactar
            </button>
          </div>

          {/* App Flutter - DESTACADO */}
          <div className="mobile-service-card mobile-service-featured">
            <div className="mobile-service-badge">Más Popular</div>
            <h3>App Flutter</h3>
            <div className="mobile-service-price">
              {formatearPrecio(precios.flutter.desarrollo)} <span>Desarrollo</span>
            </div>
            <div className="mobile-maintenance-price">
              {formatearPrecio(precios.flutter.mantenimiento)} <span>Mantenimiento Mensual</span>
            </div>
            <div className="mobile-service-details">
              <p>Desarrollo cross-platform premium</p>
              <ul>
                <li>Una base de código para iOS y Android</li>
                <li>Desarrollo 50% más rápido</li>
                <li>UI consistente en ambas plataformas</li>
                <li>Alto rendimiento nativo</li>
                <li>Publicación en ambas stores</li>
                <li>Actualizaciones simultáneas</li>
              </ul>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleCotizar("App Flutter")}
            >
              Contactar
            </button>
          </div>

          {/* App Nativa (iOS + Android) */}
          <div className="mobile-service-card">
            <h3>App Nativa Full</h3>
            <div className="mobile-service-price">
              {formatearPrecio(precios.nativo.desarrollo)} <span>Desarrollo</span>
            </div>
            <div className="mobile-maintenance-price">
              {formatearPrecio(precios.nativo.mantenimiento)} <span>Mantenimiento Mensual</span>
            </div>
            <div className="mobile-service-details">
              <p>Soluciones nativas para ambas plataformas</p>
              <ul>
                <li>Desarrollo nativo separado</li>
                <li>Máximo rendimiento en cada plataforma</li>
                <li>Experiencia de usuario nativa</li>
                <li>Publicación en ambas tiendas</li>
                <li>Actualizaciones independientes</li>
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => handleCotizar("App Nativa Full")}
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;