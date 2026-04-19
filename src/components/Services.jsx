import React from 'react';
import { Home, Key, Clock } from 'lucide-react';

const servicesList = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Кураторская селекция скрытых резиденций",
    description: "Объекты вне радаров масс-маркета с гарантией абсолютной визуальной и акустической изоляции. Вы не найдете их на платформах бронирования."
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "Теневой доступ к светской культуре",
    description: "Бронирования в заведениях без вывесок, вход через служебные двери и приватные визиты вне часов публичной работы."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Бесшовная архитектура пребывания",
    description: "Незаметная модерация вашего графика. Любые логистические нюансы решаются до их возникновения, чтобы вы просто наслаждались моментом."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-dark-200 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Искусство невидимого сервиса</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 border border-dark-100 hover:border-gold/30 transition-all duration-500 bg-base relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="text-gold mb-6 bg-dark-100 w-14 h-14 flex items-center justify-center rounded-sm">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-medium text-white mb-4 leading-snug">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
