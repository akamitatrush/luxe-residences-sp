import React from 'react';

const JourneySection = () => {
  const steps = [
    {
      number: '01',
      title: 'Análise de Necessidades',
      description: 'Consultoria personalizada para entender seus requisitos únicos e estilo de vida.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Seleção Exclusiva',
      description: 'Curadoria rigorosa de propriedades que atendem aos mais altos padrões de qualidade.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Visitas VIP',
      description: 'Tours privativos com acesso exclusivo e experiência completa da propriedade.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Finalização Elegante',
      description: 'Processo de aquisição refinado com suporte jurídico e acompanhamento total.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="journey" className="py-20 bg-midnight-950">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="subheading-luxury text-platinum-100 mb-6">
            Sua Jornada para o <span className="text-accent">Lar dos Sonhos</span>
          </h2>
          <p className="text-xl text-platinum-300 max-w-3xl mx-auto font-light">
            Um processo meticuloso e personalizado que transforma sonhos em realidade
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="scroll-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Progress Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-accent to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-full mb-6 text-black font-playfair font-bold text-xl">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-4 text-accent">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-playfair text-xl font-semibold text-platinum-100 mb-4">
                  {step.title}
                </h3>
                <p className="text-platinum-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-fade-in">
          <button className="btn-gold">
            Iniciar Jornada Exclusiva
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
