
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Background image path from public/images
  const heroBg = encodeURI('/images/Social.png');

  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 -z-20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-slate-900/70 -z-10" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-6 animate-fade-in">
          <div className="w-32 h-32 mb-4 animate-float border-4 border-[#0EA5E9] rounded-none">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="DareToTruth Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white animate-fade-in" style={{animationDelay: "0.2s"}}>
            <span className="block">{t('hero.line1')}</span>
            <span className="block">{t('hero.line2')}</span>
            <span className="block text-accent">{t('hero.line3')}</span>
          </h1>
          
          <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            {t('hero.tagline')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg btn-glow"
              size="lg"
              onClick={() => scrollToSection('signup')}
            >
              {t('nav.cta')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg"
              size="lg"
              onClick={() => scrollToSection('about')}
            >
              {t('nav.about')}
            </Button>
          </div>
          
          <div className="mt-6 flex items-center justify-center animate-fade-in" style={{animationDelay: "0.8s"}}>
            <div className="relative w-full max-w-xl h-[320px] animate-float">
              <div className="absolute inset-0 bg-black/5 rounded-3xl transform rotate-2 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform -rotate-2 animate-float"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="DareToTruth App Preview" 
                  className="w-[280px] h-auto rounded-3xl shadow-xl object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
