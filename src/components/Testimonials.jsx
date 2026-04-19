import React from 'react';

const testimonials = [
  {
    quote: "I used to spend hours comparing hotel prices. Travel Hacks Pro directed me to a booking site that saved me $400 on my week in Paris. Incredible resource.",
    author: "Michael T.",
    descriptor: "Frequent Flyer"
  },
  {
    quote: "The eSIM recommendation was a lifesaver. I landed in Tokyo and had 5G immediately without dealing with the airport kiosks. Will definitely use this platform again.",
    author: "Jessica M.",
    descriptor: "Digital Nomad"
  },
  {
    quote: "Booking the airport assistance through their recommended partner made traveling with two toddlers actually manageable. Totally worth it.",
    author: "Robert & Emma",
    descriptor: "Family Travelers"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-base relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#BCA37F" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Traveler Feedback</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-10 bg-dark-200 rounded-xl border border-dark-100 hover:border-gold/20 transition-colors duration-300 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 font-light text-lg leading-relaxed mb-8 flex-grow">
                "{item.quote}"
              </p>
              <div className="mt-auto pt-6 border-t border-dark-100">
                <p className="text-white font-medium">{item.author}</p>
                <p className="text-gold text-xs tracking-wider uppercase mt-1">{item.descriptor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
