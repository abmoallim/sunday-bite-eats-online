
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"; // Corrected path based on project structure

const AuthModal = ({ isOpen, onClose }) => {
  const { login, signup } = useAuth();
  const { toast } = useToast();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only for sign-up

  const handleAuthAction = async () => {
    if (!email || !password) {
      toast({ title: "Error", description: "Email and password are required.", variant: "destructive" });
      return;
    }
    if (isSignUpMode && !name) {
      toast({ title: "Error", description: "Name is required for sign-up.", variant: "destructive" });
      return;
    }

    try {
      if (isSignUpMode) {
        // For prototype, sign up also logs the user in as 'customer'
        await signup(email, password, name, 'customer'); 
        toast({ title: "Sign Up Successful", description: "Welcome! You are now logged in." });
      } else {
        // For prototype, allow login with any email/password, defaulting role to 'customer' if not admin/staff
        // To test admin/staff, you might need to adjust login logic or manually set in console for now.
        // e.g. login('admin@example.com', 'password', 'admin')
        await login(email, password, 'customer'); // Default to customer role on generic login
        toast({ title: "Login Successful", description: "Welcome back!" });
      }
      onClose(); // Close modal on success
    } catch (error) {
      toast({ title: "Authentication Failed", description: error.message || "Invalid credentials or user already exists.", variant: "destructive" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-foreground">{isSignUpMode ? 'Create an Account' : 'Sign In'}</DialogTitle>
          <DialogDescription>
            {isSignUpMode ? 'Enter your details to create a new account.' : 'Enter your credentials to access your account.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {isSignUpMode && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-foreground">
                Name
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3 bg-input text-foreground" />
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-foreground">
              Email
            </Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3 bg-input text-foreground" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right text-foreground">
              Password
            </Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3 bg-input text-foreground" />
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between items-center">
          <Button variant="link" onClick={() => setIsSignUpMode(!isSignUpMode)} className="text-primary mb-2 sm:mb-0">
            {isSignUpMode ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </Button>
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleAuthAction} className="bg-primary hover:bg-brand-orange-dark text-primary-foreground">
              {isSignUpMode ? 'Sign Up' : 'Sign In'}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
