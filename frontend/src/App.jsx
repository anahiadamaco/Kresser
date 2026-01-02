import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mision from './pages/Mision';
import Vision from './pages/Vision';
import Servicio1 from './pages/Servicio1';
import Servicio2 from './pages/Servicio2';
import Servicio3 from './pages/Servicio3';
import Contacto from './pages/Contacto';
import Presupuesto from './pages/Presupuesto';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/servicio1" element={<Servicio1 />} />
          <Route path="/servicio2" element={<Servicio2 />} />
          <Route path="/servicio3" element={<Servicio3 />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/presupuesto" element={<Presupuesto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
