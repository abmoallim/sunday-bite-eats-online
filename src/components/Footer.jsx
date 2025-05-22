
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-lg mb-2">&copy; {new Date().getFullYear()} Sunday Bite Restaurant. All Rights Reserved.</p>
        <div className="space-x-4">
          <Link to="/about" className="hover:text-primary">About Us</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
