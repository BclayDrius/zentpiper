import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
