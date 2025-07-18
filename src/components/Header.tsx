import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationLinks = [
    { name: 'Início', href: '/', type: 'route' },
    { name: 'Propriedades', href: '/propriedades', type: 'route' },
    { name: 'Sobre', href: '#about', type: 'scroll' },
    { name: 'Jornada', href: '#journey', type: 'scroll' },
    { name: 'Depoimentos', href: '#testimonials', type: 'scroll' },
    { name: 'Contato', href: '#contact', type: 'scroll' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (link: { name: string; href: string; type: string }) => {
    if (link.type === 'route') {
      navigate(link.href);
      // Se for para a home, fazer scroll para o topo
      if (link.href === '/') {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else if (link.type === 'scroll') {
      if (location.pathname === '/propriedades') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="font-playfair text-2xl font-bold">
                <span className="text-gray-300">BOTTICELLI</span>
                <span className="text-white ml-2">IMÓVEIS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <button key={index} onClick={() => handleNavigation(link)} className="nav-link">
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => handleNavigation({ name: 'Contato', href: '#contact', type: 'scroll' })}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Agendar Consultoria
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={toggleMobileMenu}
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-charcoal-950/95 backdrop-blur-md"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
          {navigationLinks.map((link, index) => (
            <button key={index} onClick={() => handleNavigation(link)} className="text-white text-xl font-playfair hover:text-gray-300 transition-colors">
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavigation({ name: 'Contato', href: '#contact', type: 'scroll' })}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 mt-8"
          >
            Agendar Consultoria
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
