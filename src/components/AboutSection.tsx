import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">About DareToTruth</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is to create a more authentic and transparent social media experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Why DareToTruth?</h3>
            <p className="text-lg text-muted-foreground">
              In a world of filters and facades, DareToTruth offers a refreshing alternative. We believe in the power of unfiltered honesty and genuine connection.
            </p>
            <ul className="list-disc pl-5 mt-4 text-muted-foreground">
              <li>No filters or editing</li>
              <li>Anonymous posting for honest feedback</li>
              <li>Real-time ratings from people nearby</li>
              <li>A community built on authenticity</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground">
              We envision a social media landscape where people can freely express themselves without fear of judgment or the pressure to conform.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Join us in our journey to revolutionize social media and create a more truthful online world.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">Launching July 2025</h3>
          <p className="text-lg text-muted-foreground">
            Get ready for a new era of social connection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
