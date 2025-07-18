import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="subheading-luxury text-black mb-6">
              Conheça <span className="text-gray-700">Felipe Botticelli</span>
            </h2>
            
            <p className="text-lg text-black mb-6 leading-relaxed">
              Especialista em imóveis de alto padrão com mais de 7 anos de experiência no mercado 
              imobiliário de São Paulo. Felipe é reconhecido por sua dedicação, profissionalismo 
              e resultados excepcionais na comercialização de propriedades exclusivas.
            </p>
            
            <p className="text-black mb-8 leading-relaxed">
              Sua abordagem personalizada e rede de contatos exclusiva garantem acesso às 
              melhores oportunidades do mercado, sempre com transparência e excelência no atendimento.
            </p>

            {/* Especialidades e Conquistas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Especialidades */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-black mb-4">
                  Especialidades
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-black">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                    Propriedades de Alto Padrão
                  </li>
                  <li className="flex items-center text-black">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                    Apartamentos de Luxo
                  </li>
                  <li className="flex items-center text-black">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                    Consultoria Imobiliária
                  </li>
                </ul>
              </div>

              {/* Conquistas */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-black mb-4">
                  Conquistas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-black">
                    <div className="w-4 h-4 text-gray-800 mr-3">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Campeão Vendas PG 2023
                  </li>
                  <li className="flex items-center text-black">
                    <div className="w-4 h-4 text-gray-800 mr-3">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Especialista Cyrella
                  </li>
                  <li className="flex items-center text-black">
                    <div className="w-4 h-4 text-gray-800 mr-3">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Consultor VIP Alto Padrão
                  </li>
                </ul>
              </div>
            </div>

            {/* Card do Felipe */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-black mb-1">
                    Felipe Botticelli
                  </h4>
                  <p className="text-black font-medium">
                    Especialista em Alto Padrão
                  </p>
                  <p className="text-sm text-black mt-1">
                    CRECI: 123.456-F | Cyrela Partner
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button 
              onClick={() => {
                const message = "Olá Felipe! Vi seu site e gostaria de falar sobre imóveis de alto padrão.";
                const phoneNumber = "5511999999999"; // Substitua pelo número real do Felipe
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Falar com Felipe
            </button>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-muted rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/74bfdfa8-b400-4ebd-a836-9736b3f301bb.png"
                  alt="Felipe Botticelli - Especialista em Imóveis de Luxo"
                  className="w-full h-[500px] object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-[500px] bg-gray-200 flex items-center justify-center">
                          <div class="text-center">
                            <h3 class="text-xl font-playfair font-semibold text-black">Felipe Botticelli</h3>
                            <p class="text-gray-600">Especialista em Alto Padrão</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;