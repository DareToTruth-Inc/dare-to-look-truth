
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HiringSection from '@/components/HiringSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <HiringSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
