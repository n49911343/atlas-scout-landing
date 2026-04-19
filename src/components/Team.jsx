import React from 'react';

const teamMembers = [
  {
    name: "Александр Р.",
    role: "Архитектор изоляции",
    specialty: "Поиск скрытых резиденций",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Изучает ландшафт Семиньяка для поиска объектов, невидимых для масс-маркета. Гарантирует отсутствие визуального шума."
  },
  {
    name: "Елена В.",
    role: "Теневой дипломат",
    specialty: "Закрытый нетворкинг и доступ",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Владеет ключами от заведений без вывесок. Организует столы в местах, где брони расписаны на месяцы вперед."
  },
  {
    name: "Марк С.",
    role: "Режиссер времени",
    specialty: "Бесшовная логистика",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Модерирует каждый шаг вашего пребывания, оставаясь полностью незаметным. Предвосхищает желания до их озвучивания."
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-base">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Ваш закрытый круг</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Atlas Scout — это не консьерж-сервис. Это команда узкопрофильных специалистов, 
              каждый из которых обладает монопольным доступом в своей нише.
            </p>
          </div>
          <div className="h-0.5 w-24 bg-gold mb-2 hidden md:block"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <div className="absolute inset-0 bg-base/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-base to-transparent z-20">
                  <p className="text-gold text-xs uppercase tracking-widest font-medium mb-1">{member.role}</p>
                  <h3 className="text-2xl text-white font-serif">{member.name}</h3>
                </div>
              </div>
              <div>
                <p className="text-white/80 font-medium mb-2">{member.specialty}</p>
                <p className="text-gray-400 font-light text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
