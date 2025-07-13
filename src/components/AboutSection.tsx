
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
                src="https://scontent-lhr6-2.cdninstagram.com/v/t39.30808-6/460427611_18366829789105527_6550783623842648792_n.jpg?stp=c288.0.864.864a_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=r34OkpwoSTEQ7kNvwFujbr5&_nc_oc=AdmwkO5n1iUEbJ7DDmfWuL5M7VG71Z1deFyRXtO27UJ4Ofdrg6xiRBhmCerUbsgXAoY&_nc_zt=23&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_gid=URB0kle4OijykIVO3QD8DQ&oh=00_AfSrFlo-YEmeuSuVBNLUfiTGL1X7aI8ks43RGd4Zeg4-LQ&oe=687A0F09"
                alt="Felipe Botticelli - Especialista em Luxo"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gray-200 opacity-10 rounded-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                FB
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-fade-in">
            <h2 className="subheading-luxury text-midnight-900 mb-6">
              Especialista em <span className="text-gray-600">Luxo Exclusivo</span>
            </h2>
            
            <p className="text-lg text-midnight-600 mb-6 leading-relaxed">
              Felipe Botticelli é reconhecido como o especialista em propriedades de alto padrão em São Paulo. 
              Com mais de 7 anos de experiência, ele estabeleceu um novo paradigma no mercado imobiliário 
              de luxo, oferecendo um serviço incomparável e resultados excepcionais.
            </p>
            
            <p className="text-midnight-600 mb-8 leading-relaxed">
              Sua abordagem personalizada e rede de contatos exclusiva garantem acesso às propriedades 
              mais cobiçadas da cidade, sempre com o mais alto nível de discrição e profissionalismo.
            </p>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Specialties */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-midnight-900 mb-4">
                  Especialidades
                </h3>
                <ul className="space-y-2">
                  {specialties.map((specialty, index) => (
                    <li key={index} className="flex items-center text-midnight-600">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-midnight-900 mb-4">
                  Premiações
                </h3>
                <ul className="space-y-2">
                  {awards.map((award, index) => (
                    <li key={index} className="flex items-center text-midnight-600">
                      <div className="w-4 h-4 text-gray-500 mr-3">
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
            <div className="bg-secondary p-6 rounded-lg border-l-4 border-gray-500 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-midnight-900 font-playfair text-xl font-semibold mb-1">
                    Felipe Botticelli
                  </p>
                  <p className="text-slate-600 font-medium">
                    Especialista Alto Padrão
                  </p>
                  <p className="text-midnight-600 text-sm">
                    CRECI: 123.456-F | Cyrela Partner
                  </p>
                </div>
                <div className="text-gray-600 text-4xl font-playfair font-bold">
                  FB
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              Conhecer Metodologia Exclusiva
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
