
import React from 'react';
import MenuItemCard from './MenuItemCard.jsx';

const mockMenuItems = [
  { id: 1, name: 'Spicy Orange Chicken', description: 'Crispy chicken tossed in a tangy and spicy orange sauce, served with steamed rice.', price: 15.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Sunset Pasta Delight', description: 'Creamy tomato pasta with sun-dried tomatoes, spinach, and grilled halloumi.', price: 18.50, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Volcano Veggie Burger', description: 'A fiery veggie patty with jalapenos, spicy mayo, and a toasted brioche bun.', price: 14.00, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
];

const MenuSectionPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Taste Our Best
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockMenuItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-brand-orange-light text-secondary-foreground font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSectionPreview;
