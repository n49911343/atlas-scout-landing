import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Legal from './components/Legal';

const LandingPage = () => (
  <div className="flex flex-col min-h-screen">
    <Hero />
    <About />
    <Team />
    <Testimonials />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<Legal />} />
          <Route path="/terms-of-service" element={<Legal />} />
          <Route path="/cookie-policy" element={<Legal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
