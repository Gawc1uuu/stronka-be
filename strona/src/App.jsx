import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Roofs from './pages/Roofs';
import './App.css';
import Widening from './pages/Widening';
import Renovations from './pages/Renovations';
import Realizations from './pages/Realizations';
import Finishing from './pages/Finishing';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-montserrat bg-gray-100">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dakwerken" element={<Roofs />} />
          <Route path="/uitbreiding" element={<Widening />} />
          <Route path="/totaalrenovatie" element={<Renovations />} />
          <Route path="/interieurrenovatie" element={<Finishing />} />
          <Route path="/realisaties" element={<Realizations />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
