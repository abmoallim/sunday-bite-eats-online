
import React from 'react';
import { Button } from "@/components/ui/button.tsx";

const HomeBanner = () => {
  return (
    <div className="relative bg-brand-orange-light dark:bg-brand-orange-dark py-16 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-orange-300 to-yellow-300 blur-md opacity-70"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-red-400 to-orange-300 blur-md opacity-60"></div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-left mb-12 md:mb-0">
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-bold font-serif text-red-500 mb-2">
              <span className="inline-block transform -rotate-2">Sunday</span>
            </h1>
            <h2 className="text-5xl font-serif text-brand-orange-dark dark:text-brand-orange-light">Bite</h2>
          </div>
          <Button variant="default" size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-foreground font-bold rounded-md px-8 py-3 transform transition-transform hover:scale-105">
            JETZT BESTELLEN
          </Button>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80" 
            alt="Delicious burger" 
            className="w-full max-w-md object-contain z-10 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
