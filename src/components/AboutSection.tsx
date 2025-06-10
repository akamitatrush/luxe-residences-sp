
import React from 'react';

const AboutSection = () => {
  const specialties = [
    'Propriedades de Alto Padrão',
    'Apartamentos de Luxo'
  ];

  const awards = [
    'Melhor Corretor Luxury 2023',
    'Top Sales International',
    'Excellence in Service',
    'Luxury Real Estate Leader'
  ];

  return (
    <section id="about" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="scroll-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Felipe Botticelli - Especialista em Luxo"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gold-gradient opacity-10 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                RM
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-fade-in">
            <h2 className="subheading-luxury text-charcoal-900 mb-6">
              Especialista em <span className="text-gold-500">Luxo Exclusivo</span>
            </h2>
            
            <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
              Felipe Botticelli é reconhecido como o especialista em propriedades de alto padrão em São Paulo. 
              Com mais de 10 anos de experiência, ele estabeleceu um novo paradigma no mercado imobiliário 
              de luxo, oferecendo um serviço incomparável e resultados excepcionais.
            </p>
            
            <p className="text-charcoal-600 mb-8 leading-relaxed">
              Sua abordagem personalizada e rede de contatos exclusiva garantem acesso às propriedades 
              mais cobiçadas da cidade, sempre com o mais alto nível de discrição e profissionalismo.
            </p>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Specialties */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal-900 mb-4">
                  Especialidades
                </h3>
                <ul className="space-y-2">
                  {specialties.map((specialty, index) => (
                    <li key={index} className="flex items-center text-charcoal-600">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal-900 mb-4">
                  Premiações
                </h3>
                <ul className="space-y-2">
                  {awards.map((award, index) => (
                    <li key={index} className="flex items-center text-charcoal-600">
                      <div className="w-4 h-4 text-gold-500 mr-3">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <button className="btn-gold">
              Conhecer Metodologia Exclusiva
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
