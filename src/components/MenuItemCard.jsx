
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react'; // Changed ShoppingCartPlus to ShoppingCart

const MenuItemCard = ({ item }) => {
  // const { addToCart } = useCart(); // Assuming a CartContext
  // const { toggleFavorite, isFavorite } = useFavorites(); // Assuming a FavoriteContext

  const handleAddToCart = () => {
    // addToCart(item);
    alert(`${item.name} added to cart (mock)!`);
  };

  const handleToggleFavorite = () => {
    // toggleFavorite(item);
    alert(`${item.name} toggled in favorites (mock)!`);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
      <img src={item.image || "https://via.placeholder.com/300x200.png?text=Delicious+Food"} alt={item.name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{item.name}</h3>
        <p className="text-muted-foreground text-sm mb-2 h-10 overflow-hidden">{item.description}</p>
        <p className="text-lg font-semibold text-primary mb-3">${item.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-brand-orange-dark text-primary-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
          >
            <ShoppingCart size={18} className="mr-2"/> Add to Cart
          </button>
          <button
            onClick={handleToggleFavorite}
            className="text-destructive hover:text-red-700 p-2 rounded-full transition-colors"
            // aria-pressed={isFavorite(item.id)}
          >
            <Heart size={22} /* fill={isFavorite(item.id) ? 'currentColor' : 'none'} */ />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
