
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Empreendimentos', href: '#properties' },
    { name: 'Sobre', href: '#about' },
    { name: 'Jornada', href: '#journey' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato VIP', href: '#contact' }
  ];

  const resources = [
    { name: 'Tour Virtual', href: '#' },
    { name: 'Avaliação Gratuita', href: '#' },
    { name: 'Guia do Comprador', href: '#' },
    { name: 'Market Report', href: '#' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 7.896.013 6.674.072 5.454.131 4.622.333 3.897.63a5.938 5.938 0 00-2.149 1.4A5.937 5.937 0 00.33 4.445C.033 5.17-.169 6.002-.227 7.222-.287 8.444-.3 8.944-.3 12.565s.013 4.121.072 5.343c.059 1.22.261 2.052.558 2.777a5.937 5.937 0 001.4 2.149 5.935 5.935 0 002.445 1.118c.725.297 1.557.499 2.777.558 1.222.059 1.722.072 5.343.072s4.121-.013 5.343-.072c1.22-.059 2.052-.261 2.777-.558a5.937 5.937 0 002.149-1.4 5.934 5.934 0 001.118-2.445c.297-.725.499-1.557.558-2.777.059-1.222.072-1.722.072-5.343s-.013-4.121-.072-5.343c-.059-1.22-.261-2.052-.558-2.777a5.937 5.937 0 00-1.4-2.149A5.935 5.935 0 0019.46.63c-.725-.297-1.557-.499-2.777-.558C15.461.013 14.961 0 11.34 0h.677zm-.677 2.16c3.573 0 3.996.013 5.404.072 1.304.059 2.01.274 2.48.456.624.242 1.069.531 1.537.999.468.468.757.913.999 1.537.182.47.397 1.176.456 2.48.059 1.408.072 1.831.072 5.404s-.013 3.996-.072 5.404c-.059 1.304-.274 2.01-.456 2.48a4.147 4.147 0 01-.999 1.537c-.468.468-.913.757-1.537.999-.47.182-1.176.397-2.48.456-1.408.059-1.831.072-5.404.072s-3.996-.013-5.404-.072c-1.304-.059-2.01-.274-2.48-.456a4.147 4.147 0 01-1.537-.999 4.147 4.147 0 01-.999-1.537c-.182-.47-.397-1.176-.456-2.48-.059-1.408-.072-1.831-.072-5.404s.013-3.996.072-5.404c.059-1.304.274-2.01.456-2.48.242-.624.531-1.069.999-1.537a4.147 4.147 0 011.537-.999c.47-.182 1.176-.397 2.48-.456 1.408-.059 1.831-.072 5.404-.072z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="font-playfair text-2xl font-bold">
                <span className="text-accent">BOTTICELLI</span>
                <span className="text-white ml-2">IMÓVEIS</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Especialistas em propriedades de alto padrão em São Paulo. 
              Experiências imobiliárias exclusivas para clientes exigentes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-accent hover:bg-accent/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-4">
              Recursos
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-white hover:text-accent transition-colors duration-300"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-4">
              Newsletter VIP
            </h3>
            <p className="text-white/70 mb-4">
              Receba as melhores oportunidades de investimento
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-accent to-yellow-500 text-black rounded-r-lg hover:shadow-lg transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {currentYear} Botticelli Imóveis. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/50">
              <span>CRECI: 123.456-F</span>
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
