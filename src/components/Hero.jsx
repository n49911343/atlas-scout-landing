import React from 'react';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/90 to-base"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <div className="inline-flex items-center space-x-2 border border-gold/30 rounded-full px-4 py-1.5 mb-8 bg-dark-200/50 backdrop-blur-sm">
          <Shield className="w-4 h-4 text-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">Закрытый доступ</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          Откройте для себя <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold text-glow">
            скрытый Семиньяк
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Устали от шумных туристических маршрутов и псевдопремиума? 
          Мы предоставляем закрытый доступ к локациям, которых нет в путеводителях. 
          Абсолютная приватность. Статусная эксклюзивность.
        </p>
        
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white transition-all duration-500 ease-out bg-transparent border border-gold/50 rounded-none hover:bg-gold hover:text-base overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-none opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="relative z-10 flex items-center gap-2 uppercase text-sm tracking-[0.1em]">
            Инициировать запрос
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
