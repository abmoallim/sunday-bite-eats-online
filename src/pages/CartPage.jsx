
import React from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { Navigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"; // Ensure this path is correct
import { Button } from '@/components/ui/button.jsx';

const CartPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [showLoginPrompt, setShowLoginPrompt] = React.useState(false);

  // This effect will run once when the component mounts or when `user` changes.
  React.useEffect(() => {
    if (!user && !sessionStorage.getItem('loginPromptShown')) {
      toast({
        title: 'Authentication Required',
        description: 'Please sign in to view your cart and proceed to checkout.',
        variant: 'default', // Or 'destructive' if preferred
      });
      // Mark that the prompt has been shown for this session to avoid repetition on quick re-renders.
      sessionStorage.setItem('loginPromptShown', 'true');
      setShowLoginPrompt(true); // Set state to potentially show a message on page or trigger modal
    } else if (user) {
      sessionStorage.removeItem('loginPromptShown'); // Clear flag if user logs in
      setShowLoginPrompt(false);
    }
  }, [user, toast]);

  if (!user) {
    // Instead of immediate redirect, show a message or rely on Navbar's Sign In
    // Or, you could redirect: return <Navigate to="/" replace />;
    // For now, let's show a message and encourage using the Navbar Sign In
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Your Cart is Empty (or you're not signed in!)</h1>
        <p className="text-muted-foreground mb-6">
          Please sign in to view items you've added to your cart.
        </p>
        <p className="text-muted-foreground">
          Use the "Sign In" button in the navigation bar.
        </p>
        {/* Optionally, you could have a button here to open the AuthModal directly if you pass down the setter */}
      </div>
    );
  }
  
  // Mock cart data
  const mockCartItems = [
    { id: 1, name: 'Spicy Burger Deluxe', price: 12.99, quantity: 1, image: 'https://via.placeholder.com/150/FF8C00/FFFFFF?Text=Burger' },
    { id: 2, name: 'Crispy Fries', price: 4.50, quantity: 2, image: 'https://via.placeholder.com/150/FFD700/000000?Text=Fries' },
  ];
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Example 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Your Shopping Cart</h1>
      {mockCartItems.length === 0 ? (
        <p className="text-center text-muted-foreground text-xl">Your cart is currently empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {mockCartItems.map(item => (
              <div key={item.id} className="flex items-center bg-card p-4 rounded-lg shadow-md border border-border">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4"/>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-foreground">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  <p className="text-md font-semibold text-primary">${item.price.toFixed(2)} each</p>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-red-700">Remove</Button>
              </div>
            ))}
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md border border-border h-fit">
            <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-3">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground font-bold text-lg border-t pt-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-brand-orange-dark text-primary-foreground py-3 text-lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
