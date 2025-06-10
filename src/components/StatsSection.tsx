
import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState({ years: 0, sales: 0, clients: 0, awards: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = {
    years: 7,
    sales: 25,
    clients: 500,
    awards: 3
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.round(targetValues.years * progress),
        sales: Math.round(targetValues.sales * progress),
        clients: Math.round(targetValues.clients * progress),
        awards: Math.round(targetValues.awards * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  const partners = [
    { 
      name: 'Cyrela', 
      logo: (
        <div className="flex flex-col items-center">
          <img 
            src="https://www.cyrela.com.br/assets/img/logo-cyrela.svg" 
            alt="Cyrela" 
            className="h-8 w-auto filter brightness-0 invert opacity-80"
          />
        </div>
      )
    },
    { 
      name: 'Felipe Botticelli', 
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-platinum-300 font-playfair font-bold text-lg mb-1">FB</span>
          <span className="text-platinum-400 text-xs">Especialista</span>
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-midnight-gradient">
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-platinum-300 mb-2">
              +{counters.years}
            </div>
            <div className="text-platinum-400 font-light">Anos de Excelência</div>
          </div>
          
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-platinum-300 mb-2">
              +{counters.sales}M
            </div>
            <div className="text-platinum-400 font-light">Milhões em Vendas</div>
          </div>
          
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-platinum-300 mb-2">
              +{counters.clients}
            </div>
            <div className="text-platinum-400 font-light">Clientes Satisfeitos</div>
          </div>
          
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-platinum-300 mb-2">
              {counters.awards}
            </div>
            <div className="text-platinum-400 font-light">Prêmios Reconhecimento</div>
          </div>
        </div>

        {/* Partners */}
        <div className="scroll-fade-in">
          <h3 className="text-center text-platinum-400 font-light mb-8 text-lg">Parceiros Exclusivos</h3>
          <div className="flex justify-center items-center gap-16">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center w-24 h-24 bg-platinum-900/20 rounded-full backdrop-blur-sm border border-platinum-300/30 hover:border-platinum-300 transition-all duration-300 hover:scale-110">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
