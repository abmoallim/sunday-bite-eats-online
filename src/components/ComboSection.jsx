
import React from 'react';
import ComboItemCard from './ComboItemCard.jsx';
import { Button } from "@/components/ui/button";

const mockComboItems = [
  { id: 1, name: 'Family Feast Combo', description: '2 Large Pizzas, 1 Large Fries, 4 Drinks. Perfect for a family night!', price: 35.99, image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emElMjBjb21ib3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Burger Bonanza', description: '2 Signature Burgers, 2 Regular Fries, 2 Milkshakes. Double the delight!', price: 25.50, image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyJTIwY29tYm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Solo Saver Meal', description: '1 Regular Burger, 1 Small Fries, 1 Drink. Great value for one!', price: 12.00, image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyJTIwbWVhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
];

const ComboSection = () => {
  return (
    <section className="py-16 bg-background-alt dark:bg-background"> {/* Alternate background for section variety */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Our Special Combos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockComboItems.map(combo => (
            <ComboItemCard key={combo.id} combo={combo} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="hover:bg-brand-orange-light text-secondary-foreground font-semibold shadow-md transition-transform transform hover:scale-105">
            View All Combos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;
