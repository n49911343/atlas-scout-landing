import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-base flex flex-col font-sans">
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      
      <footer className="py-8 border-t border-dark-100 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Atlas Scout. Все права защищены. Строгая конфиденциальность.</p>
      </footer>
    </div>
  );
}

export default App;
