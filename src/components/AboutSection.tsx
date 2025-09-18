
import React from 'react';
import { Code, Gavel, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-primary/5" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{t('about.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.lead')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Camera className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 text-center">{t('about.card1Title')}</h3>
            <p className="text-muted-foreground text-center">
              {t('about.card1Body')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Code className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 text-center">{t('about.card2Title')}</h3>
            <p className="text-muted-foreground text-center">
              {t('about.card2Body')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Gavel className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 text-center">{t('about.card3Title')}</h3>
            <p className="text-muted-foreground text-center">
              {t('about.card3Body')}
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-accent p-0.5 rounded-lg max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg">
            <blockquote className="text-xl md:text-2xl italic text-primary font-medium text-center">
              "{t('about.quote')}"
            </blockquote>
            <p className="mt-4 text-right text-accent font-bold">{t('about.quoteBy')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
