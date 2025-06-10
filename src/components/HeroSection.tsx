
import React from 'react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80"
          alt="Luxury Apartment Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="heading-luxury text-white mb-6 scroll-fade-in">
          Domínios de <span className="text-gold-400">Excelência</span> em São Paulo
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed scroll-fade-in font-light">
          Experiências imobiliárias exclusivas para clientes que transcendem o convencional
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-fade-in">
          <button 
            onClick={() => scrollToSection('properties')}
            className="btn-gold w-full sm:w-auto"
          >
            Descubra Empreendimentos Exclusivos
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="btn-outline-gold w-full sm:w-auto"
          >
            Tour Virtual
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-fade-in">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm font-light mb-2">Explore</span>
            <div className="w-px h-16 bg-gold-400/50 animate-pulse"></div>
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
