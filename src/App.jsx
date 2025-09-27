import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Contacto from "./pages/Contacto";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Layout>
  );
}

export default App;
