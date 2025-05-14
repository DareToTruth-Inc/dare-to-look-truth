
import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const HiringSection = () => {
  return (
    <section className="py-16 md:py-24" id="careers">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">We're Hiring</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our team and help shape the future of authentic social feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Developer Position */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="bg-white p-4 rounded-lg shadow mb-5">
              <Briefcase className="h-8 w-8 text-accent mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Developers</h3>
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
              <Link to="/careers/developer">Apply Now</Link>
            </Button>
          </div>

          {/* Intern Position */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="bg-white p-4 rounded-lg shadow mb-5">
              <Briefcase className="h-8 w-8 text-accent mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Interns</h3>
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
              <Link to="/careers/intern">Apply Now</Link>
            </Button>
          </div>

          {/* Legal Position */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="bg-white p-4 rounded-lg shadow mb-5">
              <Briefcase className="h-8 w-8 text-accent mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Legal Consultants</h3>
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
              <Link to="/careers/legal">Apply Now</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-primary mb-6">
            Don't see a role that fits? We're always looking for passionate people.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 btn-glow">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
