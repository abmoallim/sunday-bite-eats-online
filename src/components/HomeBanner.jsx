
import React from 'react';
import { Button } from "@/components/ui/button.tsx";

const HomeBanner = () => {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 py-20 md:py-28 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-bold font-serif text-primary mb-2 inline-block transform -rotate-2">
              Sunday
            </h1>
            <h2 className="text-5xl md:text-6xl font-sans font-medium text-foreground/80 dark:text-foreground/70">
              Bite
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
            Discover a delightful fusion of traditional flavors and contemporary cuisine. Your new favorite meal awaits.
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-10 py-3 text-lg transform transition-transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Order Today
          </Button>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80" 
            alt="Artistically plated fine dining dish" 
            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-xl shadow-2xl aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
