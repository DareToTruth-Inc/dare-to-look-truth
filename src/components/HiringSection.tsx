
import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HiringSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-16 md:py-24" id="careers">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${encodeURI('/images/intern.png')})` }}
          aria-hidden="true"
        />
      </div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/60 -z-10" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0EA5E9]">{t('careers.title')}</h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            {t('careers.lead')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Developer Position */}
          <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="bg-white p-4 rounded-lg shadow mb-5">
              <Briefcase className="h-8 w-8 text-accent mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{t('careers.developers')}</h3>
            <p className="text-muted-foreground mb-4">
              Frontend, Backend, and Mobile engineers needed to build our revolutionary platform.
            </p>
            <ul className="text-sm text-primary/80 space-y-2 mb-6">
              <li>• React Native expertise</li>
              <li>• Location-based services</li>
              <li>• Social app experience</li>
              <li>• Security & privacy focus</li>
            </ul>
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <Link to="/careers/developer">{t('careers.apply')}</Link>
            </Button>
          </div>

          {/* Intern Position */}
          <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="bg-white p-4 rounded-lg shadow mb-5">
              <Briefcase className="h-8 w-8 text-accent mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{t('careers.interns')}</h3>
            <p className="text-muted-foreground mb-4">
              Gain real-world experience in product development, marketing, and user research.
            </p>
            <ul className="text-sm text-primary/80 space-y-2 mb-6">
              <li>• User growth strategies</li>
              <li>• Content creation</li>
              <li>• Community building</li>
              <li>• Gen Z market insights</li>
            </ul>
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <Link to="/careers/intern">{t('careers.apply')}</Link>
            </Button>
          </div>

          {/* Legal Position */}
          <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="bg-white p-4 rounded-lg shadow mb-5">
              <Briefcase className="h-8 w-8 text-accent mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{t('careers.legal')}</h3>
            <p className="text-muted-foreground mb-4">
              Help us navigate privacy laws, terms of service, and content moderation policies.
            </p>
            <ul className="text-sm text-primary/80 space-y-2 mb-6">
              <li>• Privacy & data protection</li>
              <li>• User consent frameworks</li>
              <li>• Content policy expertise</li>
              <li>• International compliance</li>
            </ul>
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <Link to="/careers/legal">{t('careers.apply')}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-white mb-6">
            {t('careers.ctaLine')}
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 btn-glow">
            {t('careers.contactUs')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
