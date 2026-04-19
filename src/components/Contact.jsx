import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    dates: '',
    preferences: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert('Ваш запрос инициирован. Мы свяжемся с вами по закрытым каналам связи.');
  };

  return (
    <section id="contact" className="py-24 bg-base relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-dark-200 border border-dark-100 p-10 md:p-16 relative overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/50"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/50"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/50"></div>
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Инициировать запрос</h2>
            <p className="text-gray-400 font-light">
              Мы работаем с ограниченным количеством клиентов для сохранения эксклюзивности доступа.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold mb-3">Имя / Псевдоним</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-dark-100 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light"
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold mb-3">Канал связи</label>
                <input 
                  type="text" 
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-dark-100 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light"
                  placeholder="Telegram / WhatsApp"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold mb-3">Ориентировочные даты</label>
              <input 
                type="text" 
                name="dates"
                value={formData.dates}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-dark-100 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light"
                placeholder="Временной горизонт пребывания"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold mb-3">Особые пожелания (Опционально)</label>
              <textarea 
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                rows="3"
                className="w-full bg-transparent border-b border-dark-100 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light resize-none"
                placeholder="Специфические требования к приватности или локации"
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <button 
                type="submit" 
                className="group relative inline-flex items-center justify-center px-10 py-4 font-medium tracking-wide text-base transition-all duration-500 ease-out bg-gold rounded-none hover:bg-white overflow-hidden w-full md:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase text-sm tracking-[0.1em]">
                  Отправить запрос
                </span>
              </button>
              <p className="text-gray-500 text-xs mt-4">Мы гарантируем полную конфиденциальность переданных данных.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
