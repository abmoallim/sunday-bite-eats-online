
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const CartPage = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Your Cart</h1>
        <p className="text-lg text-muted-foreground mb-6">Please sign in to view your cart and place an order.</p>
        <button 
            onClick={() => alert('Sign In/Up modal/page to be implemented.')} 
            className="bg-primary hover:bg-brand-orange-dark text-primary-foreground font-semibold py-3 px-8 rounded-lg shadow-md"
        >
            Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Your Shopping Cart</h1>
      {/* Cart items will be listed here */}
      <div className="bg-card p-8 rounded-lg shadow-md text-center">
        <p className="text-xl text-muted-foreground mb-4">Your cart is currently empty.</p>
        <Link to="/" className="text-primary hover:underline font-semibold">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
