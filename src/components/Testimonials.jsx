import React from 'react';

const testimonials = [
  {
    quote: "Я был уверен, что знаю Семиньяк. Atlas Scout открыли для меня резиденцию, где единственным звуком был океан, а не гул соседних вилл. Идеальная изоляция.",
    author: "В. М.",
    descriptor: "Инвестор"
  },
  {
    quote: "Никаких утомительных чекинов и навязчивого персонала. Мы приехали, и пространство уже было настроено под наши привычки: от температуры до винной полки.",
    author: "Анна К.",
    descriptor: "CEO"
  },
  {
    quote: "Попасть в это заведение без рекомендаций невозможно. Наш скаут просто провел нас через служебный вход, где уже ждал стол. Настоящая непубличная привилегия.",
    author: "Дмитрий Т.",
    descriptor: "Предприниматель"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-200 relative overflow-hidden">
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
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Манифест тишины</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-10 bg-base border border-dark-100 hover:border-gold/20 transition-colors duration-300">
              <div className="text-gold text-4xl font-serif leading-none mb-6">"</div>
              <p className="text-gray-300 font-light text-lg italic leading-relaxed mb-8">
                {item.quote}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-px bg-gold/50"></div>
                <div>
                  <p className="text-white font-medium">{item.author}</p>
                  <p className="text-gold text-xs tracking-wider uppercase">{item.descriptor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
