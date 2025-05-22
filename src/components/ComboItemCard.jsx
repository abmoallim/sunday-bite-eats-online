
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Using shadcn Button

const ComboItemCard = ({ combo }) => {
  // Mock handlers, to be replaced with context functionality later
  const handleAddToCart = () => {
    alert(`${combo.name} added to cart (mock)!`);
  };

  const handleToggleFavorite = () => {
    alert(`${combo.name} toggled in favorites (mock)!`);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
      <img src={combo.image || "https://via.placeholder.com/300x200.png?text=Combo+Deal"} alt={combo.name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{combo.name}</h3>
        <p className="text-muted-foreground text-sm mb-2 h-10 overflow-hidden">{combo.description}</p>
        <p className="text-lg font-semibold text-primary mb-3">${combo.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Button
            onClick={handleAddToCart}
            variant="default" // Using shadcn Button variant
            size="sm" // Using shadcn Button size
            className="bg-primary hover:bg-brand-orange-dark text-primary-foreground flex items-center transition-colors"
          >
            <ShoppingCart size={18} className="mr-2"/> Add to Cart
          </Button>
          <Button
            onClick={handleToggleFavorite}
            variant="ghost" // Using shadcn Button variant
            size="icon" // Using shadcn Button size for icon buttons
            className="text-destructive hover:text-red-700"
            aria-label="Toggle Favorite"
          >
            <Heart size={22} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComboItemCard;
