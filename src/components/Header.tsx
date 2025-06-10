
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
                <span className="text-gold-400">BOTTICELLI</span>
                <span className="text-white ml-2">IMÓVEIS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('properties')} className="nav-link">
                Empreendimentos
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                Sobre
              </button>
              <button onClick={() => scrollToSection('journey')} className="nav-link">
                Jornada
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contato VIP
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-gold"
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
          <button onClick={() => scrollToSection('properties')} className="text-white text-xl font-playfair hover:text-gold-400 transition-colors">
            Empreendimentos
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white text-xl font-playfair hover:text-gold-400 transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollToSection('journey')} className="text-white text-xl font-playfair hover:text-gold-400 transition-colors">
            Jornada
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-white text-xl font-playfair hover:text-gold-400 transition-colors">
            Depoimentos
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-white text-xl font-playfair hover:text-gold-400 transition-colors">
            Contato VIP
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-gold mt-8"
          >
            Agendar Consultoria
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
