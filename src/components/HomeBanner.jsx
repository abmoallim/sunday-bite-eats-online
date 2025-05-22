
import React from 'react';

const HomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-brand-orange-light via-orange-50 to-brand-orange-light dark:from-brand-orange-dark dark:via-orange-900 dark:to-brand-orange-dark py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-brand-orange-dark dark:text-brand-orange-light mb-4">
          Welcome to Sunday Bite!
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">
          Delicious food, unforgettable moments. Your favorite meals, just a click away.
        </p>
        <button className="bg-primary hover:bg-brand-orange-dark text-primary-foreground font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
