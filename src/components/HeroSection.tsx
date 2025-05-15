
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 urban-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-6 animate-fade-in">
          <div className="w-32 h-32 mb-4">
            <img 
              src="/lovable-uploads/76bab4a7-7d74-4235-b7dc-e1c48e8c8a78.png" 
              alt="DareToTruth Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
            <span className="block">Expose your look.</span>
            <span className="block">Get the Truth.</span>
            <span className="block text-accent">Join the movement.</span>
          </h1>
          
          <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-4">
            First Real World Social Media Ever!!
            No filters. No fakery. Just raw, anonymous truth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg btn-glow"
              size="lg"
              onClick={() => {
                const element = document.getElementById('signup');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg"
              size="lg"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <div className="relative w-full max-w-xl h-[320px] animate-float">
              <div className="absolute inset-0 bg-black/5 rounded-3xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform -rotate-2 animate-float"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="DareToTruth App Preview" 
                  className="w-[280px] h-auto rounded-3xl shadow-xl object-cover"
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
