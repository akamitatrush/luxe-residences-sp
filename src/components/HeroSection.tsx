
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const luxuryImages = [
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
      alt: "Apartamento de Luxo - Sala de Estar"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
      alt: "Apartamento de Luxo - Cozinha Moderna"
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
      alt: "Apartamento de Luxo - Quarto Master"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
      alt: "Apartamento de Luxo - Varanda com Vista"
    },
    {
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
      alt: "Apartamento de Luxo - Banheiro Sofisticado"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel 
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-screen">
            {luxuryImages.map((image, index) => (
              <CarouselItem key={index} className="relative h-full">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white z-20" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white z-20" />
        </Carousel>
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
