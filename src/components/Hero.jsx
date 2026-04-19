import React from 'react';
import { Hotel, Car, Wifi, PlaneTakeoff } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Gradient at the bottom */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        {/* Gradient: lighter at top, very dark at bottom to make buttons pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-base"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full mt-32 md:mt-48 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white text-glow shadow-sm">
            Travel Hacks Pro
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-2xl mx-auto font-light drop-shadow-md">
            Unlock the ultimate travel experience. The best deals, curated just for you.
          </p>
        </div>
        
        {/* 4 Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <button className="group relative flex flex-col items-center justify-center p-8 bg-dark-200/80 backdrop-blur-md border border-white/10 hover:border-gold/50 hover:bg-dark-100 transition-all duration-300 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Hotel className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-medium text-lg tracking-wide">Book a Hotel</span>
          </button>

          <button className="group relative flex flex-col items-center justify-center p-8 bg-dark-200/80 backdrop-blur-md border border-white/10 hover:border-gold/50 hover:bg-dark-100 transition-all duration-300 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Car className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-medium text-lg tracking-wide">Order Transfer</span>
          </button>

          <button className="group relative flex flex-col items-center justify-center p-8 bg-dark-200/80 backdrop-blur-md border border-white/10 hover:border-gold/50 hover:bg-dark-100 transition-all duration-300 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Wifi className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-medium text-lg tracking-wide">Buy eSIM</span>
          </button>

          <button className="group relative flex flex-col items-center justify-center p-8 bg-dark-200/80 backdrop-blur-md border border-white/10 hover:border-gold/50 hover:bg-dark-100 transition-all duration-300 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <PlaneTakeoff className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-medium text-lg tracking-wide text-center">Airport Assistance</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
