import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
  const { login, signup } = useAuth();
  const { toast } = useToast();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleAuthAction = async () => {
    if (!email || !password) {
      toast({ title: "Error", description: "Email and password are required.", variant: "destructive" });
      return;
    }
    if (isSignUpMode && !name) {
      // Name is not required if it's the admin email signing up, we can derive it or set a default
      if (email.toLowerCase() !== 'admin@example.com') {
        toast({ title: "Error", description: "Name is required for sign-up.", variant: "destructive" });
        return;
      }
    }

    let roleToSet = 'customer';
    let adminName = 'Admin User'; // Default name for admin signup
    if (email.toLowerCase() === 'admin@example.com') {
      roleToSet = 'admin';
    }

    try {
      if (isSignUpMode) {
        const userName = roleToSet === 'admin' ? adminName : name;
        await signup(email, password, userName, roleToSet); 
        toast({ title: "Sign Up Successful", description: `Welcome ${userName}! You are now logged in as ${roleToSet}.` });
      } else {
        await login(email, password, roleToSet); // Pass role to login
        // Toast message in login will show based on context's returned user.name
        toast({ title: "Login Successful", description: "Welcome back!" });
      }
      onClose();
      // Clear form fields
      setEmail('');
      setPassword('');
      setName('');
      setIsSignUpMode(false);
    } catch (error) {
      toast({ title: "Authentication Failed", description: error.message || "Invalid credentials or user already exists.", variant: "destructive" });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleOpenChange = (open) => {
    if (!open) {
      // Reset state when modal is closed
      setEmail('');
      setPassword('');
      setName('');
      setShowPassword(false);
      // setIsSignUpMode(false); // Optionally reset mode, or keep it
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden border-none">
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-3xl font-bold text-foreground">
              {isSignUpMode ? 'Sign Up' : 'Sign In'}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              {isSignUpMode 
                ? 'Create an account to order food and make reservations.' 
                : 'Enter your credentials to access your account.'}
              {email.toLowerCase() === 'admin@example.com' && <span className="block text-sm text-primary mt-1">Signing in/up as Admin.</span>}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            {isSignUpMode && (
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-base font-medium">
                  Name
                </Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="h-12 text-base bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg" 
                  disabled={email.toLowerCase() === 'admin@example.com'} // Disable name for admin signup for demo
                />
              </div>
            )}
            
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email
              </Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="h-12 text-base bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg" 
                placeholder={isSignUpMode ? "admin@example.com for Admin" : "Enter your email"}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="h-12 text-base pr-10 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg" 
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 mt-2">
            <Button 
              onClick={handleAuthAction}
              className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-white rounded-lg"
            >
              {isSignUpMode ? 'Sign Up' : 'Sign In'}
            </Button>
            
            <div className="flex items-center justify-between">
              <Button 
                variant="link" 
                onClick={() => setIsSignUpMode(!isSignUpMode)} 
                className="text-primary hover:text-primary/80 px-0"
              >
                {isSignUpMode 
                  ? 'Already have an account? Sign In' 
                  : "Don't have an account? Sign Up"}
              </Button>
              
              <DialogClose asChild>
                <Button variant="outline" className="border-gray-200 dark:border-neutral-700">
                  Cancel
                </Button>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
