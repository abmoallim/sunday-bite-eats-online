
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Mock user roles: 'guest', 'customer', 'staff', 'admin'
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null if guest, object if logged in
  const [role, setRole] = useState('guest'); // Default role

  // Mock login
  const login = (email, password, userRole = 'customer') => {
    // In a real app, you'd verify credentials
    console.log(`Attempting login for ${email} as ${userRole}`);
    setUser({ email, name: 'Mock User' }); // Add more user details if needed
    setRole(userRole);
    // Mock localStorage persistence
    localStorage.setItem('user', JSON.stringify({ email, name: 'Mock User' }));
    localStorage.setItem('role', userRole);
    console.log(`Logged in as ${userRole}`);
  };

  // Mock logout
  const logout = () => {
    setUser(null);
    setRole('guest');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    console.log('Logged out');
  };
  
  // Check for persisted session on load (basic example)
  useState(() => {
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role');
    if (storedUser && storedRole) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ user, role, login, logout, setUser, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
