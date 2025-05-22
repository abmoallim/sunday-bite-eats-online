
import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
              alt="Interior of Sunday Bite restaurant" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-primary mb-6">
              About <span className="font-serif text-brand-orange-dark dark:text-brand-orange-light">Sunday Bite</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Welcome to Sunday Bite, where every meal is a celebration! Founded with a passion for delicious food and warm hospitality, we strive to create memorable dining experiences for our community. Our chefs use the freshest ingredients to craft unique and flavorful dishes that cater to all tastes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're here for a quick lunch, a family dinner, or a special occasion, Sunday Bite is your go-to place for comfort food with a modern twist. Join us and taste the difference passion makes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
