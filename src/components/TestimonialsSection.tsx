
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Fernanda Lima',
      position: 'CEO - Luxury Brands',
      content: 'Felipe demonstrou um conhecimento excepcional do mercado imobiliário de luxo em São Paulo. Ele não apenas encontrou o apartamento dos meus sonhos no Jardins, mas também negociou um preço 15% abaixo do valor de mercado. Durante todo o processo, que durou 3 meses, Felipe esteve disponível 24/7, me atualizando sobre cada detalhe. Sua rede de contatos é impressionante - conseguiu agilizar a documentação e até indicou os melhores arquitetos para a reforma. Recomendo Felipe para qualquer pessoa que busca excelência no mercado de alto padrão.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Roberto Tavares',
      position: 'Diretor - Finance Corp',
      content: 'Após uma experiência frustrante com outros corretores, encontrar Felipe foi um divisor de águas. Procurava um penthouse em Moema há mais de um ano, e Felipe conseguiu acesso exclusivo a uma propriedade que nem estava no mercado ainda. O nível de discrição e profissionalismo dele é incomparável - todas as visitas foram agendadas fora do horário comercial para manter minha privacidade. Felipe também me apresentou ao melhor advogado imobiliário da cidade, garantindo que toda documentação fosse perfeita. O investimento já valorizou 22% em apenas 8 meses.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Marina Santos',
      position: 'Empresária - Tech Innovation',
      content: 'Felipe superou todas as minhas expectativas ao encontrar um apartamento triplex único na Vila Madalena. Sua abordagem consultiva foi impressionante - ele realmente entendeu meu estilo de vida e necessidades antes de me mostrar qualquer propriedade. Durante a negociação, Felipe conseguiu que o vendedor incluísse 3 vagas de garagem e fizesse todas as reformas que eu queria antes da entrega. Além disso, ele coordenou toda a mudança, desde a contratação da empresa até o agendamento com o porteiro. É difícil encontrar alguém tão dedicado e competente no mercado imobiliário.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Carlos Mendonça',
      position: 'Investidor Internacional',
      content: 'Como investidor estrangeiro, precisava de alguém que entendesse tanto o mercado local quanto as complexidades legais para não-residentes. Felipe foi muito além das suas obrigações - ele me acompanhou pessoalmente ao Banco Central para abertura de conta, me apresentou aos melhores contadores especializados em clientes internacionais, e até me ajudou com questões de câmbio. Nos últimos 2 anos, adquiri 4 propriedades através dele, todas com rentabilidade acima de 8% ao ano. Sua análise de mercado é precisa e suas indicações de bairros em ascensão foram certeiras. Felipe se tornou meu parceiro de confiança no Brasil.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-gold-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-midnight-950">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="subheading-luxury text-platinum-100 mb-6">
            Clientes <span className="text-champagne-400">Satisfeitos</span>
          </h2>
          <p className="text-xl text-platinum-300 max-w-3xl mx-auto font-light">
            Experiências que falam por si só - a excelência reconhecida pelos clientes do Felipe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="luxury-card-dark p-8 scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="text-champagne-400 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-platinum-200 mb-6 leading-relaxed italic text-lg">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-playfair font-semibold text-platinum-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-champagne-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-fade-in">
          <button className="btn-gold">
            Fale com Felipe - Ver Mais Depoimentos
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
