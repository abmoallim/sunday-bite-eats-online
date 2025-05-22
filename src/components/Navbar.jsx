
import React, { useState } from 'react'; // Added useState
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { LogIn, LogOut, ShoppingCart, UserCircle } from 'lucide-react';
import AuthModal from './AuthModal.jsx'; // Import the modal

const Navbar = () => {
  const { user, logout, role } = useAuth();
  const [isAuthModalOpen, setAuthModalOpen] = useState(false); // State for modal

  return (
    <>
      <nav className="bg-background shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-primary hover:text-brand-orange-dark">
            Sunday Bite
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            {/* <Link to="/menu" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Menu</Link>  Placeholder for full menu page */}
            <Link to="/cart" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <ShoppingCart size={20} className="mr-1" /> Cart
            </Link>
            
            {user ? (
              <>
                {role !== 'guest' && ( // Ensure guests don't see dashboard link, though they shouldn't be 'user' and 'guest' role simultaneously
                  <Link to="/dashboard" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <UserCircle size={20} className="mr-1" /> Dashboard
                  </Link>
                )}
                <button 
                  onClick={logout} 
                  className="bg-destructive hover:bg-red-700 text-destructive-foreground px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <LogOut size={20} className="mr-1" /> Logout
                </button>
              </>
            ) : (
               <button 
                  onClick={() => setAuthModalOpen(true)} // Open modal
                  className="bg-primary hover:bg-brand-orange-dark text-primary-foreground px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                 <LogIn size={20} className="mr-1" /> Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} /> 
    </>
  );
};

export default Navbar;
