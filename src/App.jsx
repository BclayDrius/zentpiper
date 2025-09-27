import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Planes from './components/Planes'
import Contacto from './components/Contacto'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Layout>
  )
}

export default App
