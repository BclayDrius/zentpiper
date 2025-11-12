import Header from "./Header";
import Footer from "./Footer";
import FooterAlt from "./FooterAlt";
import ScrollToTop from "./ScrollToTop";
import { useLocation } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      <main>{children}</main>
      {location.pathname === "/Contacto" ? <FooterAlt /> : <Footer />}
      <ScrollToTop />
    </div>
  );
}

export default Layout;
