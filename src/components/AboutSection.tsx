import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="subheading-luxury text-foreground mb-6">
              Conheça <span className="text-primary">Felipe Botticelli</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Especialista em imóveis de alto padrão com mais de 7 anos de experiência no mercado 
              imobiliário de São Paulo. Felipe é reconhecido por sua dedicação, profissionalismo 
              e resultados excepcionais na comercialização de propriedades exclusivas.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sua abordagem personalizada e rede de contatos exclusiva garantem acesso às 
              melhores oportunidades do mercado, sempre com transparência e excelência no atendimento.
            </p>

            {/* Especialidades e Conquistas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Especialidades */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Especialidades
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Propriedades de Alto Padrão
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Apartamentos de Luxo
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Consultoria Imobiliária
                  </li>
                </ul>
              </div>

              {/* Conquistas */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Conquistas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-4 h-4 text-primary mr-3">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Campeão Vendas PG 2023
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-4 h-4 text-primary mr-3">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Especialista Cyrella
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-4 h-4 text-primary mr-3">
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
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-card-foreground mb-1">
                    Felipe Botticelli
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    Especialista em Alto Padrão
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    CRECI: 123.456-F | Cyrela Partner
                  </p>
                </div>
                <div className="text-primary text-4xl font-playfair font-bold">
                  FB
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
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
                        <div class="w-full h-[500px] bg-muted flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span class="text-primary-foreground text-4xl font-playfair font-bold">FB</span>
                            </div>
                            <h3 class="text-xl font-playfair font-semibold text-foreground">Felipe Botticelli</h3>
                            <p class="text-muted-foreground">Especialista em Alto Padrão</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              
              {/* Badge decorativo */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                FB
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;