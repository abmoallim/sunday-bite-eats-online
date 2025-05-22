
import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed left-4 bottom-4 z-50 p-3 bg-primary hover:bg-brand-orange-dark text-primary-foreground rounded-full shadow-lg transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};

export default ThemeToggle;
