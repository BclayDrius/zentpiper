import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Portafolio from "./pages/Portafolio";
import Mobile from "./pages/Mobile";
import Proyecto from "./pages/Proyecto";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/proyecto" element={<Proyecto />} />
      </Routes>
    </Layout>
  );
}

export default App;
