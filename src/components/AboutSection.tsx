
import React from 'react';

const AboutSection = () => {
  const specialties = [
    'Propriedades de Alto Padrão',
    'Apartamentos de Luxo'
  ];

  const awards = [
    'Campeão Vendas PG 2023',
    'Especialista Cyrella',
    'Consultor VIP Alto Padrão',
    'Especialista Consultoria Financeira Imóveis'
  ];

  return (
    <section id="about" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="scroll-fade-in">
            <div className="relative">
              <img
                src="https://instagram.fgru5-1.fna.fbcdn.net/v/t39.30808-6/460427611_18366829789105527_6550783623842648792_n.jpg?stp=dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5oZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fgru5-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QFNAixWwtJ_0xyEdYtnWaAWWuc806TRYVWYoXHYwXNA4xL0XqAqEI8D-YLl62b9ZYahlsKeMNFAu_0kG1P9S8q_&_nc_ohc=7nXw7p3bsQcQ7kNvwGEOtf5&_nc_gid=mCRoULNoNBsnHbz4JRyN7g&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzQ1ODY1MDg1MDI3NDk2NzY3NQ%3D%3D.3-ccb7-5&oh=00_AfMQzK94yzGKNMCM2js2SEskPsIqhooOZf1mQhQhnP1zMw&oe=684D7449&_nc_sid=7a9f4b"
                alt="Felipe Botticelli - Especialista em Luxo"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gold-gradient opacity-10 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                FB
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
              Com mais de 7 anos de experiência, ele estabeleceu um novo paradigma no mercado imobiliário 
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

            {/* Signature */}
            <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-500 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-charcoal-900 font-playfair text-xl font-semibold mb-1">
                    Felipe Botticelli
                  </p>
                  <p className="text-gold-600 font-medium">
                    Especialista Alto Padrão
                  </p>
                  <p className="text-charcoal-600 text-sm">
                    CRECI: 123.456-F | Cyrela Partner
                  </p>
                </div>
                <div className="text-gold-500 text-4xl font-playfair font-bold">
                  FB
                </div>
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
