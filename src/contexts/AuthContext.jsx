
import React, { createContext, useState, useContext, useEffect } from 'react'; // Added useEffect

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
    const mockName = email.split('@')[0]; // Simple name from email
    setUser({ email, name: mockName }); 
    setRole(userRole);
    localStorage.setItem('user', JSON.stringify({ email, name: mockName }));
    localStorage.setItem('role', userRole);
    console.log(`Logged in as ${userRole} with name ${mockName}`);
  };

  // Mock signup
  const signup = (email, password, name, userRole = 'customer') => {
    // In a real app, you'd check if user exists and store credentials securely
    console.log(`Attempting signup for ${email} as ${name}, role ${userRole}`);
    // For this prototype, signup immediately logs the user in.
    // A real implementation would store user data.
    setUser({ email, name });
    setRole(userRole);
    localStorage.setItem('user', JSON.stringify({ email, name }));
    localStorage.setItem('role', userRole);
    console.log(`Signed up and logged in as ${name} (${userRole})`);
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
  useEffect(() => { // Changed from useState to useEffect for clarity
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role');
    if (storedUser && storedRole) {
      try {
        setUser(JSON.parse(storedUser));
        setRole(storedRole);
        console.log('Session restored for:', JSON.parse(storedUser).email, 'as', storedRole);
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        // Clear corrupted data
        localStorage.removeItem('user');
        localStorage.removeItem('role');
      }
    }
  }, []);


  return (
    <AuthContext.Provider value={{ user, role, login, signup, logout, setUser, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
