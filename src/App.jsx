import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Planes from './components/Planes'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contacto" element={
          <div className="contacto-temp">
            <h2>Página de Contacto</h2>
            <p>En construcción...</p>
          </div>
        } />
      </Routes>
    </Layout>
  )
}

export default App
