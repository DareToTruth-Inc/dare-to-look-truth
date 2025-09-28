
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en';
  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'fr' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-white/95 shadow-md backdrop-blur-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="DareToTruth Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">
              {t('brand')}
            </span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-primary/80 hover:text-accent font-medium transition-colors">
                {t('nav.about')}
              </a>
              <a href="#careers" className="text-primary/80 hover:text-accent font-medium transition-colors">
                {t('nav.careers')}
              </a>
              <Button
                className="bg-accent hover:bg-accent/90 text-white btn-glow"
                onClick={() => scrollToSection('signup')}
              >
                {t('nav.cta')}
              </Button>
              <button
                className="ml-4 rounded-md px-3 py-2 text-sm text-primary hover:bg-accent/10"
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                {currentLang === 'en' ? 'EN' : 'FR'}
              </button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              className="text-primary p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="md:hidden bg-white mt-2 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-primary hover:text-accent font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#careers" 
                className="text-primary hover:text-accent font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.careers')}
              </a>
              <Button 
                className="bg-accent hover:bg-accent/90 text-white w-full"
                onClick={() => {
                  scrollToSection('signup');
                  setIsMenuOpen(false);
                }}
              >
                {t('nav.cta')}
              </Button>
              <button
                className="rounded-md px-3 py-2 text-sm"
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                {currentLang === 'en' ? 'English' : 'Français'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
