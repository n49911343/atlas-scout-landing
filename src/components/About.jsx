import React from 'react';
import { Compass, Star, Map } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-base relative" id="about">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <Compass className="w-12 h-12 text-gold mx-auto mb-8 opacity-80" />
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">Curated Travel Excellence</h2>
        
        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12">
          Planning a trip shouldn't feel like a second job. We are a premier recommendation platform dedicated to gathering the most interesting, reliable, and cost-effective travel offers in one place. 
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
          <div className="p-6 border-l border-gold/30">
            <Star className="w-6 h-6 text-gold mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Handpicked Deals</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We sift through thousands of offers to bring you only the top-rated experiences and accommodations.</p>
          </div>
          
          <div className="p-6 border-l border-gold/30">
            <Map className="w-6 h-6 text-gold mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Seamless Journeys</h3>
            <p className="text-gray-400 text-sm leading-relaxed">From stepping off the plane to arriving at your hotel, we recommend services that make travel effortless.</p>
          </div>
          
          <div className="p-6 border-l border-gold/30">
            <Compass className="w-6 h-6 text-gold mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Trusted Partners</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We only collaborate with verified global providers ensuring your safety and comfort anywhere in the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
