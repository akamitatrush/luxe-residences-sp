
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preference: 'whatsapp',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsLoading(false);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      preference: 'whatsapp',
      message: ''
    });
  };

  const contactChannels = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      ),
      title: 'Felipe - Telefone Direto',
      info: '(11) 99111-2222',
      action: 'tel:+5511991112222',
      highlight: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Felipe - Email Executivo',
      info: 'felipe@cyrela.com',
      action: 'mailto:felipe@cyrela.com',
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687"/>
        </svg>
      ),
      title: 'Felipe - WhatsApp VIP',
      info: 'Atendimento Imediato',
      action: 'https://wa.me/5511991112222',
      highlight: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="subheading-luxury text-charcoal-900 mb-6">
            Fale com <span className="text-gray-600">Felipe</span> - Seu Corretor Especialista
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto font-light">
            Conecte-se com Felipe e inicie sua jornada rumo à propriedade dos seus sonhos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="scroll-fade-in">
            <div className="luxury-card p-8">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal-900 mb-6">
                Solicitar Consultoria VIP com Felipe
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-charcoal-700 font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-charcoal-700 font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal-700 font-medium mb-2">
                    Preferência de Contato
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preference"
                        value="whatsapp"
                        checked={formData.preference === 'whatsapp'}
                        onChange={handleInputChange}
                        className="mr-2 text-gray-600"
                      />
                      WhatsApp
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preference"
                        value="phone"
                        checked={formData.preference === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-gray-600"
                      />
                      Telefone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preference"
                        value="email"
                        checked={formData.preference === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-gray-600"
                      />
                      Email
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal-700 font-medium mb-2">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Conte-nos sobre suas preferências e necessidades..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 w-full ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    'Solicitar Consultoria VIP'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="scroll-fade-in">
            {/* Felipe's Profile Card */}
            <div className="luxury-card p-8 mb-8 bg-gradient-to-br from-secondary to-muted">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-playfair text-2xl font-bold">F</span>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-charcoal-900">Felipe</h3>
                <p className="text-slate-600 font-semibold">Corretor Especialista em Luxo</p>
                <p className="text-sm text-charcoal-600 mt-2">Especialista em imóveis de alto padrão em São Paulo</p>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="space-y-4">
              {contactChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.action}
                  className={`luxury-card p-6 flex items-center hover:scale-105 transition-all duration-300 block ${
                    channel.highlight ? 'ring-2 ring-gray-400 bg-gradient-to-r from-secondary to-muted' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 ${
                    channel.highlight ? 'bg-whatsapp' : 'bg-gray-600'
                  }`}>
                    {channel.icon}
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-charcoal-900">
                      {channel.title}
                    </h4>
                    <p className="text-charcoal-600">{channel.info}</p>
                    {channel.highlight && (
                      <p className="text-xs text-slate-600 font-semibold">Contato Prioritário</p>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Visit Scheduling Card */}
            <div className="luxury-card p-6 mt-8">
              <h4 className="font-playfair text-xl font-semibold text-charcoal-900 mb-4">
                Agendar Visita VIP com Felipe
              </h4>
              <p className="text-charcoal-600 mb-4">
                Visitas exclusivas com Felipe para conhecer as propriedades selecionadas especialmente para você.
              </p>
              <button className="border-2 border-gray-600 text-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300 w-full">
                Solicitar Agendamento com Felipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
