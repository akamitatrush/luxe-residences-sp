
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
          <span className="text-gold-400 font-playfair font-bold text-xl mb-1">CYRELA</span>
          <span className="text-gold-400/70 text-xs">Brazil Realty</span>
        </div>
      )
    },
    { name: 'JHSF', logo: <span className="text-gold-400 font-playfair font-bold text-xl">JHSF</span> },
    { name: 'Trisul', logo: <span className="text-gold-400 font-playfair font-bold text-xl">TRISUL</span> },
    { name: 'A.Yoshii', logo: <span className="text-gold-400 font-playfair font-bold text-lg">A.YOSHII</span> },
    { name: 'Even', logo: <span className="text-gold-400 font-playfair font-bold text-xl">EVEN</span> }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-gradient">
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-gold-400 mb-2">
              +{counters.years}
            </div>
            <div className="text-white/80 font-light">Anos de Excelência</div>
          </div>
          
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-gold-400 mb-2">
              +{counters.sales}M
            </div>
            <div className="text-white/80 font-light">Milhões em Vendas</div>
          </div>
          
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-gold-400 mb-2">
              +{counters.clients}
            </div>
            <div className="text-white/80 font-light">Clientes Satisfeitos</div>
          </div>
          
          <div className="text-center scroll-fade-in">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-gold-400 mb-2">
              {counters.awards}
            </div>
            <div className="text-white/80 font-light">Prêmios Reconhecimento</div>
          </div>
        </div>

        {/* Partners */}
        <div className="scroll-fade-in">
          <h3 className="text-center text-white/60 font-light mb-8 text-lg">Parceiros Exclusivos</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-gold-400/30 hover:border-gold-400 transition-all duration-300 hover:scale-110">
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
